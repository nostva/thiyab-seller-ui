import { useMediaQuery } from '@uidotdev/usehooks'
import React, { type ComponentProps } from 'react'
import type { UseFormReturn } from 'react-hook-form'

import { NavigationConfirmation } from '@/components/shared/navigation-confirmation'
import { PermissionGuard } from '@/components/shared/permission-guard'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import {
  PageContext,
  type PageContextValue,
} from '@/framework/layout-engine/page-provider'
import { usePage } from '@/hooks/use-page'
import { cn } from '@/lib/utils'

import type { DashboardActionBarItem } from '../extension-api/extension-api-types'
import {
  getDashboardActionBarItems,
  getDashboardPageBlocks,
} from './layout-extensions'

export interface PageProps extends ComponentProps<'div'> {
  pageId?: string
  entity?: any
  form?: UseFormReturn<any>
  submitHandler?: any
}

export function Page({
  children,
  pageId,
  entity,
  form,
  submitHandler,
  ...props
}: PageProps) {
  const childArray = React.Children.toArray(children)

  const pageTitle = childArray.find(
    (child) => React.isValidElement(child) && child.type === PageTitle,
  )
  const pageActionBar = childArray.find((child) =>
    isOfType(child, PageActionBar),
  )

  const pageContent = childArray.filter(
    (child) => !isOfType(child, PageTitle) && !isOfType(child, PageActionBar),
  )

  const pageHeader = (
    <div className="flex items-center justify-between">
      {pageTitle}
      {pageActionBar}
    </div>
  )

  return (
    <PageContext.Provider value={{ pageId, form, entity }}>
      <PageContent
        pageHeader={pageHeader}
        pageContent={pageContent}
        form={form}
        submitHandler={submitHandler}
        {...props}
      />
    </PageContext.Provider>
  )
}

function PageContent({
  pageHeader,
  pageContent,
  form,
  submitHandler,
  ...props
}: {
  pageHeader: React.ReactNode
  pageContent: React.ReactNode
  form?: UseFormReturn<any>
  submitHandler?: any
  className?: string
}) {
  return (
    <div className={cn('m-4', props.className)} {...props}>
      <PageContentWithOptionalForm
        pageHeader={pageHeader}
        pageContent={pageContent}
        form={form}
        submitHandler={submitHandler}
      />
    </div>
  )
}

export function PageContentWithOptionalForm({
  form,
  pageHeader,
  pageContent,
  submitHandler,
}: {
  form?: UseFormReturn<any>
  pageHeader: React.ReactNode
  pageContent: React.ReactNode
  submitHandler?: any
}) {
  return form ? (
    <Form {...form}>
      <NavigationConfirmation form={form} />
      <form onSubmit={submitHandler} className="space-y-4">
        {pageHeader}
        {pageContent}
      </form>
    </Form>
  ) : (
    <div className="space-y-4">
      {pageHeader}
      {pageContent}
    </div>
  )
}

/**
 * @description
 * **Status: Developer Preview**
 *
 * @docsCategory components
 * @docsPage PageLayout
 * @since 3.3.0
 */
export type PageLayoutProps = {
  children: React.ReactNode
  className?: string
}

function isPageBlock(
  child: unknown,
): child is React.ReactElement<PageBlockProps> {
  if (!child) {
    return false
  }
  if (!React.isValidElement(child)) {
    return false
  }
  const props = (child as React.ReactElement<PageBlockProps>).props
  const hasColumn = 'column' in props
  const hasBlockId = 'blockId' in props
  return hasColumn || hasBlockId
}

/**
 * @description
 * **Status: Developer Preview**
 *
 * This component governs the layout of the contents of a {@link Page} component.
 * It should contain all the {@link PageBlock} components that are to be displayed on the page.
 *
 * @docsCategory components
 * @docsPage PageLayout
 * @docsWeight 0
 * @since 3.3.0
 */
export function PageLayout({ children, className }: PageLayoutProps) {
  const page = usePage()
  const isDesktop = useMediaQuery('only screen and (min-width : 769px)')
  // Separate blocks into categories
  const childArray: React.ReactElement<PageBlockProps>[] = []
  const extensionBlocks = getDashboardPageBlocks(page.pageId ?? '')
  React.Children.forEach(children, (child) => {
    if (isPageBlock(child)) {
      childArray.push(child)
    }
    // check for a React Fragment
    if (React.isValidElement(child) && child.type === React.Fragment) {
      React.Children.forEach(
        (child as React.ReactElement<PageBlockProps>).props.children,
        (child) => {
          if (isPageBlock(child)) {
            childArray.push(child)
          }
        },
      )
    }
  })

  const finalChildArray: React.ReactElement<PageBlockProps>[] = []
  for (const childBlock of childArray) {
    if (childBlock) {
      const blockId = childBlock.props.blockId
      const extensionBlock = extensionBlocks.find(
        (block) => block.location.position.blockId === blockId,
      )
      if (extensionBlock) {
        const ExtensionBlock = (
          <PageBlock
            column={extensionBlock.location.column}
            blockId={extensionBlock.id}
            title={extensionBlock.title}
          >
            {<extensionBlock.component context={page} />}
          </PageBlock>
        )
        if (extensionBlock.location.position.order === 'before') {
          finalChildArray.push(ExtensionBlock, childBlock)
        } else if (extensionBlock.location.position.order === 'after') {
          finalChildArray.push(childBlock, ExtensionBlock)
        } else if (extensionBlock.location.position.order === 'replace') {
          finalChildArray.push(ExtensionBlock)
        }
      } else {
        finalChildArray.push(childBlock)
      }
    }
  }

  const fullWidthBlocks = finalChildArray.filter(
    (child) => isPageBlock(child) && isOfType(child, FullWidthPageBlock),
  )
  const mainBlocks = finalChildArray.filter(
    (child) => isPageBlock(child) && child.props.column === 'main',
  )
  const sideBlocks = finalChildArray.filter(
    (child) => isPageBlock(child) && child.props.column === 'side',
  )

  return (
    <div className={cn('w-full space-y-4', className)}>
      {isDesktop ? (
        <div className="hidden md:grid md:grid-cols-5 lg:grid-cols-4 md:gap-4">
          {fullWidthBlocks.length > 0 && (
            <div className="md:col-span-5 space-y-4">{fullWidthBlocks}</div>
          )}
          <div className="md:col-span-3 space-y-4">{mainBlocks}</div>
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
            {sideBlocks}
          </div>
        </div>
      ) : (
        <div className="md:hidden space-y-4">{children}</div>
      )}
    </div>
  )
}

export function DetailFormGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:grid md:grid-cols-2 gap-4 items-start mb-4">
      {children}
    </div>
  )
}

/**
 * @description
 * **Status: Developer Preview**
 *
 * A component for displaying the title of a page. This should be used inside the {@link Page} component.
 *
 * @docsCategory components
 * @docsPage PageTitle
 * @since 3.3.0
 */
export function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-2xl font-semibold">{children}</h1>
}

/**
 * @description
 * **Status: Developer Preview**
 *
 * A component for displaying the main actions for a page. This should be used inside the {@link Page} component.
 * It should be used in conjunction with the {@link PageActionBarLeft} and {@link PageActionBarRight} components
 * as direct children.
 *
 * @docsCategory components
 * @docsPage PageActionBar
 * @docsWeight 0
 * @since 3.3.0
 */
export function PageActionBar({ children }: { children: React.ReactNode }) {
  let childArray = React.Children.toArray(children)

  const leftContent = childArray.filter((child) =>
    isOfType(child, PageActionBarLeft),
  )
  const rightContent = childArray.filter((child) =>
    isOfType(child, PageActionBarRight),
  )

  return (
    <div
      className={cn(
        'flex gap-2',
        leftContent.length > 0 ? 'justify-between' : 'justify-end',
      )}
    >
      {leftContent.length > 0 && (
        <div className="flex justify-start gap-2">{leftContent}</div>
      )}
      {rightContent.length > 0 && (
        <div className="flex justify-end gap-2">{rightContent}</div>
      )}
    </div>
  )
}

export function PageActionBarLeft({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-start gap-2">{children}</div>
}

export function PageActionBarRight({
  children,
}: {
  children: React.ReactNode
}) {
  const page = usePage()
  const actionBarItems = page.pageId
    ? getDashboardActionBarItems(page.pageId)
    : []
  return (
    <div className="flex justify-end gap-2">
      {actionBarItems.map((item, index) => (
        <PageActionBarItem key={index} item={item} page={page} />
      ))}
      {children}
    </div>
  )
}

function PageActionBarItem({
  item,
  page,
}: {
  item: DashboardActionBarItem
  page: PageContextValue
}) {
  return (
    <PermissionGuard requires={item.requiresPermission ?? []}>
      <item.component context={page} />
    </PermissionGuard>
  )
}

export type PageBlockProps = {
  children?: React.ReactNode
  /** Which column this block should appear in */
  column: 'main' | 'side'
  blockId?: string
  title?: React.ReactNode | string
  description?: React.ReactNode | string
  className?: string
}

export function PageBlock({
  children,
  title,
  description,
  className,
}: PageBlockProps) {
  return (
    <Card className={cn('w-full', className)}>
      {title || description ? (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      ) : null}
      <CardContent className={cn(!title ? 'pt-6' : '')}>{children}</CardContent>
    </Card>
  )
}

export function FullWidthPageBlock({
  children,
  className,
}: Pick<PageBlockProps, 'children' | 'className' | 'blockId'>) {
  return <div className={cn('w-full', className)}>{children}</div>
}

/**
 * @description
 * This compares the type of a React component to a given type.
 * It is safer than a simple `el === Component` check, as it also works in the context of
 * the Vite build where the component is not the same reference.
 */
export function isOfType(
  el: unknown,
  type: React.FunctionComponent<any>,
): boolean {
  if (React.isValidElement(el)) {
    const elTypeName =
      typeof el.type === 'string'
        ? el.type
        : (el.type as React.FunctionComponent).name
    return elTypeName === type.name
  }
  return false
}
