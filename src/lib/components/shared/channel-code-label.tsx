import { Trans } from '@lingui/react/macro'

import { DEFAULT_CHANNEL_CODE } from '@/constants'

export function ChannelCodeLabel({
  code,
}: { code: string } | { code: undefined }) {
  return code === DEFAULT_CHANNEL_CODE ? <Trans>Default channel</Trans> : code
}
