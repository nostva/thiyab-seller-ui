export type FieldInfoTuple = [
  type: string,
  nullable: boolean,
  list: boolean,
  isPaginatedList: boolean,
];

export interface SchemaInfo {
  types: {
    [typename: string]: {
      [fieldname: string]: FieldInfoTuple
    }
  }
  inputs: {
    [typename: string]: {
      [fieldname: string]: FieldInfoTuple
    }
  }
  scalars: string[]
  enums: {
    [typename: string]: string[]
  }
}

export const schemaInfo: SchemaInfo = {
  "types": {
    "Address": {
      "city": [
        "String",
        true,
        false,
        false
      ],
      "company": [
        "String",
        true,
        false,
        false
      ],
      "country": [
        "Country",
        false,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "defaultBillingAddress": [
        "Boolean",
        true,
        false,
        false
      ],
      "defaultShippingAddress": [
        "Boolean",
        true,
        false,
        false
      ],
      "fullName": [
        "String",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "phoneNumber": [
        "String",
        true,
        false,
        false
      ],
      "postalCode": [
        "String",
        true,
        false,
        false
      ],
      "province": [
        "String",
        true,
        false,
        false
      ],
      "streetLine1": [
        "String",
        false,
        false,
        false
      ],
      "streetLine2": [
        "String",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "Adjustment": {
      "adjustmentSource": [
        "String",
        false,
        false,
        false
      ],
      "amount": [
        "Money",
        false,
        false,
        false
      ],
      "data": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "type": [
        "AdjustmentType",
        false,
        false,
        false
      ]
    },
    "Administrator": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "emailAddress": [
        "String",
        false,
        false,
        false
      ],
      "firstName": [
        "String",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "lastName": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "user": [
        "User",
        false,
        false,
        false
      ]
    },
    "AdministratorList": {
      "items": [
        "Administrator",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "Allocation": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "orderLine": [
        "OrderLine",
        false,
        false,
        false
      ],
      "productVariant": [
        "ProductVariant",
        false,
        false,
        false
      ],
      "quantity": [
        "Int",
        false,
        false,
        false
      ],
      "type": [
        "StockMovementType",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "AlreadyRefundedError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ],
      "refundId": [
        "ID",
        false,
        false,
        false
      ]
    },
    "Asset": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "fileSize": [
        "Int",
        false,
        false,
        false
      ],
      "focalPoint": [
        "Coordinate",
        true,
        false,
        false
      ],
      "height": [
        "Int",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "mimeType": [
        "String",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "preview": [
        "String",
        false,
        false,
        false
      ],
      "source": [
        "String",
        false,
        false,
        false
      ],
      "tags": [
        "Tag",
        false,
        true,
        false
      ],
      "type": [
        "AssetType",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "width": [
        "Int",
        false,
        false,
        false
      ]
    },
    "AssetList": {
      "items": [
        "Asset",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "AuthenticationMethod": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "strategy": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "BooleanCustomFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "nullable": [
        "Boolean",
        true,
        false,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "requiresPermission": [
        "Permission",
        true,
        true,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "BooleanStructFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "CancelActiveOrderError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ],
      "orderState": [
        "String",
        false,
        false,
        false
      ]
    },
    "CancelPaymentError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ],
      "paymentErrorMessage": [
        "String",
        false,
        false,
        false
      ]
    },
    "Cancellation": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "orderLine": [
        "OrderLine",
        false,
        false,
        false
      ],
      "productVariant": [
        "ProductVariant",
        false,
        false,
        false
      ],
      "quantity": [
        "Int",
        false,
        false,
        false
      ],
      "type": [
        "StockMovementType",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "Channel": {
      "availableCurrencyCodes": [
        "CurrencyCode",
        false,
        true,
        false
      ],
      "availableLanguageCodes": [
        "LanguageCode",
        true,
        true,
        false
      ],
      "code": [
        "String",
        false,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "currencyCode": [
        "CurrencyCode",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "defaultCurrencyCode": [
        "CurrencyCode",
        false,
        false,
        false
      ],
      "defaultLanguageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "defaultShippingZone": [
        "Zone",
        true,
        false,
        false
      ],
      "defaultTaxZone": [
        "Zone",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "outOfStockThreshold": [
        "Int",
        true,
        false,
        false
      ],
      "pricesIncludeTax": [
        "Boolean",
        false,
        false,
        false
      ],
      "seller": [
        "Seller",
        true,
        false,
        false
      ],
      "token": [
        "String",
        false,
        false,
        false
      ],
      "trackInventory": [
        "Boolean",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "ChannelDefaultLanguageError": {
      "channelCode": [
        "String",
        false,
        false,
        false
      ],
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "language": [
        "String",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "ChannelList": {
      "items": [
        "Channel",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "Collection": {
      "assets": [
        "Asset",
        false,
        true,
        false
      ],
      "breadcrumbs": [
        "CollectionBreadcrumb",
        false,
        true,
        false
      ],
      "children": [
        "Collection",
        true,
        true,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "featuredAsset": [
        "Asset",
        true,
        false,
        false
      ],
      "filters": [
        "ConfigurableOperation",
        false,
        true,
        false
      ],
      "global": [
        "Boolean",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "inheritFilters": [
        "Boolean",
        false,
        false,
        false
      ],
      "isPrivate": [
        "Boolean",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        true,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "parent": [
        "Collection",
        true,
        false,
        false
      ],
      "parentId": [
        "ID",
        false,
        false,
        false
      ],
      "position": [
        "Int",
        false,
        false,
        false
      ],
      "productVariants": [
        "ProductVariantList",
        false,
        false,
        true
      ],
      "slug": [
        "String",
        false,
        false,
        false
      ],
      "translations": [
        "CollectionTranslation",
        false,
        true,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "CollectionBreadcrumb": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "slug": [
        "String",
        false,
        false,
        false
      ]
    },
    "CollectionList": {
      "items": [
        "Collection",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "CollectionResult": {
      "collection": [
        "Collection",
        false,
        false,
        false
      ],
      "count": [
        "Int",
        false,
        false,
        false
      ]
    },
    "CollectionTranslation": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "slug": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "ConfigArg": {
      "name": [
        "String",
        false,
        false,
        false
      ],
      "value": [
        "String",
        false,
        false,
        false
      ]
    },
    "ConfigArgDefinition": {
      "defaultValue": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        true,
        false,
        false
      ],
      "label": [
        "String",
        true,
        false,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "required": [
        "Boolean",
        false,
        false,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "ConfigurableOperation": {
      "args": [
        "ConfigArg",
        false,
        true,
        false
      ],
      "code": [
        "String",
        false,
        false,
        false
      ]
    },
    "ConfigurableOperationDefinition": {
      "args": [
        "ConfigArgDefinition",
        false,
        true,
        false
      ],
      "code": [
        "String",
        false,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ]
    },
    "Coordinate": {
      "x": [
        "Float",
        false,
        false,
        false
      ],
      "y": [
        "Float",
        false,
        false,
        false
      ]
    },
    "Country": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "parent": [
        "Region",
        true,
        false,
        false
      ],
      "parentId": [
        "ID",
        true,
        false,
        false
      ],
      "translations": [
        "RegionTranslation",
        false,
        true,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "CountryList": {
      "items": [
        "Country",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "CouponCodeExpiredError": {
      "couponCode": [
        "String",
        false,
        false,
        false
      ],
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "CouponCodeInvalidError": {
      "couponCode": [
        "String",
        false,
        false,
        false
      ],
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "CouponCodeLimitError": {
      "couponCode": [
        "String",
        false,
        false,
        false
      ],
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "limit": [
        "Int",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "CreateFulfillmentError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "fulfillmentHandlerError": [
        "String",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "CurrentUser": {
      "channels": [
        "CurrentUserChannel",
        false,
        true,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "identifier": [
        "String",
        false,
        false,
        false
      ]
    },
    "CurrentUserChannel": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "permissions": [
        "Permission",
        false,
        true,
        false
      ],
      "token": [
        "String",
        false,
        false,
        false
      ]
    },
    "CustomFields": {
      "Address": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Administrator": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Asset": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Channel": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Collection": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Customer": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "CustomerGroup": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Facet": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "FacetValue": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Fulfillment": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "GlobalSettings": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "HistoryEntry": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Order": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "OrderLine": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Payment": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "PaymentMethod": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Product": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "ProductOption": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "ProductOptionGroup": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "ProductReview": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "ProductVariant": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "ProductVariantPrice": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Promotion": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Refund": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Region": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Seller": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Session": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "ShippingLine": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "ShippingMethod": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "StockLevel": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "StockLocation": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "StockMovement": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "TaxCategory": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "TaxRate": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "User": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "Zone": [
        "CustomFieldConfig",
        false,
        true,
        false
      ]
    },
    "Customer": {
      "addresses": [
        "Address",
        true,
        true,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "emailAddress": [
        "String",
        false,
        false,
        false
      ],
      "firstName": [
        "String",
        false,
        false,
        false
      ],
      "groups": [
        "CustomerGroup",
        false,
        true,
        false
      ],
      "history": [
        "HistoryEntryList",
        false,
        false,
        true
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "lastName": [
        "String",
        false,
        false,
        false
      ],
      "orders": [
        "OrderList",
        false,
        false,
        true
      ],
      "phoneNumber": [
        "String",
        true,
        false,
        false
      ],
      "title": [
        "String",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "user": [
        "User",
        true,
        false,
        false
      ]
    },
    "CustomerGroup": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "customers": [
        "CustomerList",
        false,
        false,
        true
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "CustomerGroupList": {
      "items": [
        "CustomerGroup",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "CustomerList": {
      "items": [
        "Customer",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "DateTimeCustomFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "max": [
        "String",
        true,
        false,
        false
      ],
      "min": [
        "String",
        true,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "nullable": [
        "Boolean",
        true,
        false,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "requiresPermission": [
        "Permission",
        true,
        true,
        false
      ],
      "step": [
        "Int",
        true,
        false,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "DateTimeStructFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "max": [
        "String",
        true,
        false,
        false
      ],
      "min": [
        "String",
        true,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "step": [
        "Int",
        true,
        false,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "DeletionResponse": {
      "message": [
        "String",
        true,
        false,
        false
      ],
      "result": [
        "DeletionResult",
        false,
        false,
        false
      ]
    },
    "Discount": {
      "adjustmentSource": [
        "String",
        false,
        false,
        false
      ],
      "amount": [
        "Money",
        false,
        false,
        false
      ],
      "amountWithTax": [
        "Money",
        false,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "type": [
        "AdjustmentType",
        false,
        false,
        false
      ]
    },
    "DuplicateEntityError": {
      "duplicationError": [
        "String",
        false,
        false,
        false
      ],
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "DuplicateEntitySuccess": {
      "newEntityId": [
        "ID",
        false,
        false,
        false
      ]
    },
    "EmailAddressConflictError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "EmptyOrderLineSelectionError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "EntityCustomFields": {
      "customFields": [
        "CustomFieldConfig",
        false,
        true,
        false
      ],
      "entityName": [
        "String",
        false,
        false,
        false
      ]
    },
    "EntityDuplicatorDefinition": {
      "args": [
        "ConfigArgDefinition",
        false,
        true,
        false
      ],
      "code": [
        "String",
        false,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "forEntities": [
        "String",
        false,
        true,
        false
      ],
      "requiresPermission": [
        "Permission",
        false,
        true,
        false
      ]
    },
    "Facet": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "FacetCustomFields",
        true,
        false,
        false
      ],
      "global": [
        "Boolean",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "isPrivate": [
        "Boolean",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "translations": [
        "FacetTranslation",
        false,
        true,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "valueList": [
        "FacetValueList",
        false,
        false,
        true
      ],
      "values": [
        "FacetValue",
        false,
        true,
        false
      ]
    },
    "FacetCustomFields": {
      "showOnProductDetail": [
        "Boolean",
        true,
        false,
        false
      ],
      "showOnProductDetailIf": [
        "FacetValue",
        true,
        true,
        false
      ]
    },
    "FacetInUseError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "facetCode": [
        "String",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ],
      "productCount": [
        "Int",
        false,
        false,
        false
      ],
      "variantCount": [
        "Int",
        false,
        false,
        false
      ]
    },
    "FacetList": {
      "items": [
        "Facet",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "FacetTranslation": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "FacetValue": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "facet": [
        "Facet",
        false,
        false,
        false
      ],
      "facetId": [
        "ID",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "translations": [
        "FacetValueTranslation",
        false,
        true,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "FacetValueList": {
      "items": [
        "FacetValue",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "FacetValueResult": {
      "count": [
        "Int",
        false,
        false,
        false
      ],
      "facetValue": [
        "FacetValue",
        false,
        false,
        false
      ]
    },
    "FacetValueTranslation": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "FloatCustomFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "max": [
        "Float",
        true,
        false,
        false
      ],
      "min": [
        "Float",
        true,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "nullable": [
        "Boolean",
        true,
        false,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "requiresPermission": [
        "Permission",
        true,
        true,
        false
      ],
      "step": [
        "Float",
        true,
        false,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "FloatStructFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "max": [
        "Float",
        true,
        false,
        false
      ],
      "min": [
        "Float",
        true,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "step": [
        "Float",
        true,
        false,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "Fulfillment": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "lines": [
        "FulfillmentLine",
        false,
        true,
        false
      ],
      "method": [
        "String",
        false,
        false,
        false
      ],
      "nextStates": [
        "String",
        false,
        true,
        false
      ],
      "state": [
        "String",
        false,
        false,
        false
      ],
      "summary": [
        "FulfillmentLine",
        false,
        true,
        false
      ],
      "trackingCode": [
        "String",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "FulfillmentLine": {
      "fulfillment": [
        "Fulfillment",
        false,
        false,
        false
      ],
      "fulfillmentId": [
        "ID",
        false,
        false,
        false
      ],
      "orderLine": [
        "OrderLine",
        false,
        false,
        false
      ],
      "orderLineId": [
        "ID",
        false,
        false,
        false
      ],
      "quantity": [
        "Int",
        false,
        false,
        false
      ]
    },
    "FulfillmentStateTransitionError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "fromState": [
        "String",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ],
      "toState": [
        "String",
        false,
        false,
        false
      ],
      "transitionError": [
        "String",
        false,
        false,
        false
      ]
    },
    "GlobalSettings": {
      "availableLanguages": [
        "LanguageCode",
        false,
        true,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "outOfStockThreshold": [
        "Int",
        false,
        false,
        false
      ],
      "serverConfig": [
        "ServerConfig",
        false,
        false,
        false
      ],
      "trackInventory": [
        "Boolean",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "GuestCheckoutError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "errorDetail": [
        "String",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "HistoryEntry": {
      "administrator": [
        "Administrator",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "data": [
        "JSON",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "isPublic": [
        "Boolean",
        false,
        false,
        false
      ],
      "type": [
        "HistoryEntryType",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "HistoryEntryList": {
      "items": [
        "HistoryEntry",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "ImportInfo": {
      "errors": [
        "String",
        true,
        true,
        false
      ],
      "imported": [
        "Int",
        false,
        false,
        false
      ],
      "processed": [
        "Int",
        false,
        false,
        false
      ]
    },
    "IneligibleShippingMethodError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "InsufficientStockError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ],
      "order": [
        "Order",
        false,
        false,
        false
      ],
      "quantityAvailable": [
        "Int",
        false,
        false,
        false
      ]
    },
    "InsufficientStockOnHandError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ],
      "productVariantId": [
        "ID",
        false,
        false,
        false
      ],
      "productVariantName": [
        "String",
        false,
        false,
        false
      ],
      "stockOnHand": [
        "Int",
        false,
        false,
        false
      ]
    },
    "IntCustomFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "max": [
        "Int",
        true,
        false,
        false
      ],
      "min": [
        "Int",
        true,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "nullable": [
        "Boolean",
        true,
        false,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "requiresPermission": [
        "Permission",
        true,
        true,
        false
      ],
      "step": [
        "Int",
        true,
        false,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "IntStructFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "max": [
        "Int",
        true,
        false,
        false
      ],
      "min": [
        "Int",
        true,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "step": [
        "Int",
        true,
        false,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "InvalidCredentialsError": {
      "authenticationError": [
        "String",
        false,
        false,
        false
      ],
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "InvalidFulfillmentHandlerError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "ItemsAlreadyFulfilledError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "Job": {
      "attempts": [
        "Int",
        false,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "data": [
        "JSON",
        true,
        false,
        false
      ],
      "duration": [
        "Int",
        false,
        false,
        false
      ],
      "error": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "isSettled": [
        "Boolean",
        false,
        false,
        false
      ],
      "progress": [
        "Float",
        false,
        false,
        false
      ],
      "queueName": [
        "String",
        false,
        false,
        false
      ],
      "result": [
        "JSON",
        true,
        false,
        false
      ],
      "retries": [
        "Int",
        false,
        false,
        false
      ],
      "settledAt": [
        "DateTime",
        true,
        false,
        false
      ],
      "startedAt": [
        "DateTime",
        true,
        false,
        false
      ],
      "state": [
        "JobState",
        false,
        false,
        false
      ]
    },
    "JobBufferSize": {
      "bufferId": [
        "String",
        false,
        false,
        false
      ],
      "size": [
        "Int",
        false,
        false,
        false
      ]
    },
    "JobList": {
      "items": [
        "Job",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "JobQueue": {
      "name": [
        "String",
        false,
        false,
        false
      ],
      "running": [
        "Boolean",
        false,
        false,
        false
      ]
    },
    "LanguageNotAvailableError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "languageCode": [
        "String",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "LocaleStringCustomFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "length": [
        "Int",
        true,
        false,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "nullable": [
        "Boolean",
        true,
        false,
        false
      ],
      "pattern": [
        "String",
        true,
        false,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "requiresPermission": [
        "Permission",
        true,
        true,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "LocaleTextCustomFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "nullable": [
        "Boolean",
        true,
        false,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "requiresPermission": [
        "Permission",
        true,
        true,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "LocalizedString": {
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "value": [
        "String",
        false,
        false,
        false
      ]
    },
    "ManualPaymentStateError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "MetricSummary": {
      "entries": [
        "MetricSummaryEntry",
        false,
        true,
        false
      ],
      "interval": [
        "MetricInterval",
        false,
        false,
        false
      ],
      "title": [
        "String",
        false,
        false,
        false
      ],
      "type": [
        "MetricType",
        false,
        false,
        false
      ]
    },
    "MetricSummaryEntry": {
      "label": [
        "String",
        false,
        false,
        false
      ],
      "value": [
        "Float",
        false,
        false,
        false
      ]
    },
    "MimeTypeError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "fileName": [
        "String",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ],
      "mimeType": [
        "String",
        false,
        false,
        false
      ]
    },
    "MissingConditionsError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "MultipleOrderError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "Mutation": {
      "addCustomersToGroup": [
        "CustomerGroup",
        false,
        false,
        false
      ],
      "addFulfillmentToOrder": [
        "AddFulfillmentToOrderResult",
        false,
        false,
        false
      ],
      "addItemToDraftOrder": [
        "UpdateOrderItemsResult",
        false,
        false,
        false
      ],
      "addManualPaymentToOrder": [
        "AddManualPaymentToOrderResult",
        false,
        false,
        false
      ],
      "addMembersToZone": [
        "Zone",
        false,
        false,
        false
      ],
      "addNoteToCustomer": [
        "Customer",
        false,
        false,
        false
      ],
      "addNoteToOrder": [
        "Order",
        false,
        false,
        false
      ],
      "addOptionGroupToProduct": [
        "Product",
        false,
        false,
        false
      ],
      "adjustDraftOrderLine": [
        "UpdateOrderItemsResult",
        false,
        false,
        false
      ],
      "applyCouponCodeToDraftOrder": [
        "ApplyCouponCodeResult",
        false,
        false,
        false
      ],
      "approveProductReview": [
        "ProductReview",
        true,
        false,
        false
      ],
      "assignAssetsToChannel": [
        "Asset",
        false,
        true,
        false
      ],
      "assignCollectionsToChannel": [
        "Collection",
        false,
        true,
        false
      ],
      "assignFacetsToChannel": [
        "Facet",
        false,
        true,
        false
      ],
      "assignOptionGroupsToChannel": [
        "ProductOptionGroup",
        false,
        true,
        false
      ],
      "assignPaymentMethodsToChannel": [
        "PaymentMethod",
        false,
        true,
        false
      ],
      "assignProductVariantsToChannel": [
        "ProductVariant",
        false,
        true,
        false
      ],
      "assignProductsToChannel": [
        "Product",
        false,
        true,
        false
      ],
      "assignPromotionsToChannel": [
        "Promotion",
        false,
        true,
        false
      ],
      "assignRoleToAdministrator": [
        "Administrator",
        false,
        false,
        false
      ],
      "assignShippingMethodsToChannel": [
        "ShippingMethod",
        false,
        true,
        false
      ],
      "assignStockLocationsToChannel": [
        "StockLocation",
        false,
        true,
        false
      ],
      "authenticate": [
        "AuthenticationResult",
        false,
        false,
        false
      ],
      "cancelJob": [
        "Job",
        false,
        false,
        false
      ],
      "cancelOrder": [
        "CancelOrderResult",
        false,
        false,
        false
      ],
      "cancelPayment": [
        "CancelPaymentResult",
        false,
        false,
        false
      ],
      "createAdministrator": [
        "Administrator",
        false,
        false,
        false
      ],
      "createAssets": [
        "CreateAssetResult",
        false,
        true,
        false
      ],
      "createChannel": [
        "CreateChannelResult",
        false,
        false,
        false
      ],
      "createCollection": [
        "Collection",
        false,
        false,
        false
      ],
      "createCountry": [
        "Country",
        false,
        false,
        false
      ],
      "createCustomer": [
        "CreateCustomerResult",
        false,
        false,
        false
      ],
      "createCustomerAddress": [
        "Address",
        false,
        false,
        false
      ],
      "createCustomerGroup": [
        "CustomerGroup",
        false,
        false,
        false
      ],
      "createDraftOrder": [
        "Order",
        false,
        false,
        false
      ],
      "createFacet": [
        "Facet",
        false,
        false,
        false
      ],
      "createFacetValues": [
        "FacetValue",
        false,
        true,
        false
      ],
      "createPaymentMethod": [
        "PaymentMethod",
        false,
        false,
        false
      ],
      "createProduct": [
        "Product",
        false,
        false,
        false
      ],
      "createProductOption": [
        "ProductOption",
        false,
        false,
        false
      ],
      "createProductOptionGroup": [
        "ProductOptionGroup",
        false,
        false,
        false
      ],
      "createProductVariants": [
        "ProductVariant",
        false,
        true,
        false
      ],
      "createPromotion": [
        "CreatePromotionResult",
        false,
        false,
        false
      ],
      "createProvince": [
        "Province",
        false,
        false,
        false
      ],
      "createRole": [
        "Role",
        false,
        false,
        false
      ],
      "createSeller": [
        "Seller",
        false,
        false,
        false
      ],
      "createShippingMethod": [
        "ShippingMethod",
        false,
        false,
        false
      ],
      "createStockLocation": [
        "StockLocation",
        false,
        false,
        false
      ],
      "createTag": [
        "Tag",
        false,
        false,
        false
      ],
      "createTaxCategory": [
        "TaxCategory",
        false,
        false,
        false
      ],
      "createTaxRate": [
        "TaxRate",
        false,
        false,
        false
      ],
      "createZone": [
        "Zone",
        false,
        false,
        false
      ],
      "deleteAdministrator": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteAdministrators": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteAsset": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteAssets": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteChannel": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteChannels": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteCollection": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteCollections": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteCountries": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteCountry": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteCustomer": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteCustomerAddress": [
        "Success",
        false,
        false,
        false
      ],
      "deleteCustomerGroup": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteCustomerGroups": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteCustomerNote": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteCustomers": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteDraftOrder": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteFacet": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteFacetValues": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteFacets": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteOrderNote": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deletePaymentMethod": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deletePaymentMethods": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteProduct": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteProductOption": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteProductOptionGroup": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteProductVariant": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteProductVariants": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteProducts": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deletePromotion": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deletePromotions": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteProvince": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteRole": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteRoles": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteSeller": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteSellers": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteShippingMethod": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteShippingMethods": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteStockLocation": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteStockLocations": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteTag": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteTaxCategories": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteTaxCategory": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteTaxRate": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteTaxRates": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "deleteZone": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteZones": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "duplicateEntity": [
        "DuplicateEntityResult",
        false,
        false,
        false
      ],
      "flushBufferedJobs": [
        "Success",
        false,
        false,
        false
      ],
      "importProducts": [
        "ImportInfo",
        true,
        false,
        false
      ],
      "login": [
        "NativeAuthenticationResult",
        false,
        false,
        false
      ],
      "logout": [
        "Success",
        false,
        false,
        false
      ],
      "modifyOrder": [
        "ModifyOrderResult",
        false,
        false,
        false
      ],
      "moveCollection": [
        "Collection",
        false,
        false,
        false
      ],
      "refundOrder": [
        "RefundOrderResult",
        false,
        false,
        false
      ],
      "reindex": [
        "Job",
        false,
        false,
        false
      ],
      "rejectProductReview": [
        "ProductReview",
        true,
        false,
        false
      ],
      "removeCollectionsFromChannel": [
        "Collection",
        false,
        true,
        false
      ],
      "removeCouponCodeFromDraftOrder": [
        "Order",
        true,
        false,
        false
      ],
      "removeCustomersFromGroup": [
        "CustomerGroup",
        false,
        false,
        false
      ],
      "removeDraftOrderLine": [
        "RemoveOrderItemsResult",
        false,
        false,
        false
      ],
      "removeFacetsFromChannel": [
        "RemoveFacetFromChannelResult",
        false,
        true,
        false
      ],
      "removeMembersFromZone": [
        "Zone",
        false,
        false,
        false
      ],
      "removeOptionGroupFromProduct": [
        "RemoveOptionGroupFromProductResult",
        false,
        false,
        false
      ],
      "removeOptionGroupsFromChannel": [
        "RemoveOptionGroupFromChannelResult",
        false,
        true,
        false
      ],
      "removePaymentMethodsFromChannel": [
        "PaymentMethod",
        false,
        true,
        false
      ],
      "removeProductVariantsFromChannel": [
        "ProductVariant",
        false,
        true,
        false
      ],
      "removeProductsFromChannel": [
        "Product",
        false,
        true,
        false
      ],
      "removePromotionsFromChannel": [
        "Promotion",
        false,
        true,
        false
      ],
      "removeSettledJobs": [
        "Int",
        false,
        false,
        false
      ],
      "removeShippingMethodsFromChannel": [
        "ShippingMethod",
        false,
        true,
        false
      ],
      "removeStockLocationsFromChannel": [
        "StockLocation",
        false,
        true,
        false
      ],
      "runPendingSearchIndexUpdates": [
        "Success",
        false,
        false,
        false
      ],
      "runScheduledTask": [
        "Success",
        false,
        false,
        false
      ],
      "setCustomerForDraftOrder": [
        "SetCustomerForDraftOrderResult",
        false,
        false,
        false
      ],
      "setDraftOrderBillingAddress": [
        "Order",
        false,
        false,
        false
      ],
      "setDraftOrderCustomFields": [
        "Order",
        false,
        false,
        false
      ],
      "setDraftOrderShippingAddress": [
        "Order",
        false,
        false,
        false
      ],
      "setDraftOrderShippingMethod": [
        "SetOrderShippingMethodResult",
        false,
        false,
        false
      ],
      "setOrderCustomFields": [
        "Order",
        true,
        false,
        false
      ],
      "setOrderCustomer": [
        "Order",
        true,
        false,
        false
      ],
      "settlePayment": [
        "SettlePaymentResult",
        false,
        false,
        false
      ],
      "settleRefund": [
        "SettleRefundResult",
        false,
        false,
        false
      ],
      "transitionFulfillmentToState": [
        "TransitionFulfillmentToStateResult",
        false,
        false,
        false
      ],
      "transitionOrderToState": [
        "TransitionOrderToStateResult",
        true,
        false,
        false
      ],
      "transitionPaymentToState": [
        "TransitionPaymentToStateResult",
        false,
        false,
        false
      ],
      "unsetDraftOrderBillingAddress": [
        "Order",
        false,
        false,
        false
      ],
      "unsetDraftOrderShippingAddress": [
        "Order",
        false,
        false,
        false
      ],
      "updateActiveAdministrator": [
        "Administrator",
        false,
        false,
        false
      ],
      "updateAdministrator": [
        "Administrator",
        false,
        false,
        false
      ],
      "updateAsset": [
        "Asset",
        false,
        false,
        false
      ],
      "updateChannel": [
        "UpdateChannelResult",
        false,
        false,
        false
      ],
      "updateCollection": [
        "Collection",
        false,
        false,
        false
      ],
      "updateCountry": [
        "Country",
        false,
        false,
        false
      ],
      "updateCustomer": [
        "UpdateCustomerResult",
        false,
        false,
        false
      ],
      "updateCustomerAddress": [
        "Address",
        false,
        false,
        false
      ],
      "updateCustomerGroup": [
        "CustomerGroup",
        false,
        false,
        false
      ],
      "updateCustomerNote": [
        "HistoryEntry",
        false,
        false,
        false
      ],
      "updateFacet": [
        "Facet",
        false,
        false,
        false
      ],
      "updateFacetValues": [
        "FacetValue",
        false,
        true,
        false
      ],
      "updateGlobalSettings": [
        "UpdateGlobalSettingsResult",
        false,
        false,
        false
      ],
      "updateOrderNote": [
        "HistoryEntry",
        false,
        false,
        false
      ],
      "updatePaymentMethod": [
        "PaymentMethod",
        false,
        false,
        false
      ],
      "updateProduct": [
        "Product",
        false,
        false,
        false
      ],
      "updateProductOption": [
        "ProductOption",
        false,
        false,
        false
      ],
      "updateProductOptionGroup": [
        "ProductOptionGroup",
        false,
        false,
        false
      ],
      "updateProductReview": [
        "ProductReview",
        false,
        false,
        false
      ],
      "updateProductVariant": [
        "ProductVariant",
        false,
        false,
        false
      ],
      "updateProductVariants": [
        "ProductVariant",
        false,
        true,
        false
      ],
      "updateProducts": [
        "Product",
        false,
        true,
        false
      ],
      "updatePromotion": [
        "UpdatePromotionResult",
        false,
        false,
        false
      ],
      "updateProvince": [
        "Province",
        false,
        false,
        false
      ],
      "updateRole": [
        "Role",
        false,
        false,
        false
      ],
      "updateScheduledTask": [
        "ScheduledTask",
        false,
        false,
        false
      ],
      "updateSeller": [
        "Seller",
        false,
        false,
        false
      ],
      "updateShippingMethod": [
        "ShippingMethod",
        false,
        false,
        false
      ],
      "updateStockLocation": [
        "StockLocation",
        false,
        false,
        false
      ],
      "updateTag": [
        "Tag",
        false,
        false,
        false
      ],
      "updateTaxCategory": [
        "TaxCategory",
        false,
        false,
        false
      ],
      "updateTaxRate": [
        "TaxRate",
        false,
        false,
        false
      ],
      "updateZone": [
        "Zone",
        false,
        false,
        false
      ]
    },
    "NativeAuthStrategyError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "NegativeQuantityError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "NoActiveOrderError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "NoChangesSpecifiedError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "NothingToRefundError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "OptionGroupInUseError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ],
      "optionGroupCode": [
        "String",
        false,
        false,
        false
      ],
      "variantCount": [
        "Int",
        false,
        false,
        false
      ]
    },
    "Order": {
      "active": [
        "Boolean",
        false,
        false,
        false
      ],
      "aggregateOrder": [
        "Order",
        true,
        false,
        false
      ],
      "aggregateOrderId": [
        "ID",
        true,
        false,
        false
      ],
      "billingAddress": [
        "OrderAddress",
        true,
        false,
        false
      ],
      "channels": [
        "Channel",
        false,
        true,
        false
      ],
      "code": [
        "String",
        false,
        false,
        false
      ],
      "couponCodes": [
        "String",
        false,
        true,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "currencyCode": [
        "CurrencyCode",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "customer": [
        "Customer",
        true,
        false,
        false
      ],
      "discounts": [
        "Discount",
        false,
        true,
        false
      ],
      "fulfillments": [
        "Fulfillment",
        true,
        true,
        false
      ],
      "history": [
        "HistoryEntryList",
        false,
        false,
        true
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "lines": [
        "OrderLine",
        false,
        true,
        false
      ],
      "modifications": [
        "OrderModification",
        false,
        true,
        false
      ],
      "nextStates": [
        "String",
        false,
        true,
        false
      ],
      "orderPlacedAt": [
        "DateTime",
        true,
        false,
        false
      ],
      "payments": [
        "Payment",
        true,
        true,
        false
      ],
      "promotions": [
        "Promotion",
        false,
        true,
        false
      ],
      "sellerOrders": [
        "Order",
        true,
        true,
        false
      ],
      "shipping": [
        "Money",
        false,
        false,
        false
      ],
      "shippingAddress": [
        "OrderAddress",
        true,
        false,
        false
      ],
      "shippingLines": [
        "ShippingLine",
        false,
        true,
        false
      ],
      "shippingWithTax": [
        "Money",
        false,
        false,
        false
      ],
      "state": [
        "String",
        false,
        false,
        false
      ],
      "subTotal": [
        "Money",
        false,
        false,
        false
      ],
      "subTotalWithTax": [
        "Money",
        false,
        false,
        false
      ],
      "surcharges": [
        "Surcharge",
        false,
        true,
        false
      ],
      "taxSummary": [
        "OrderTaxSummary",
        false,
        true,
        false
      ],
      "total": [
        "Money",
        false,
        false,
        false
      ],
      "totalQuantity": [
        "Int",
        false,
        false,
        false
      ],
      "totalWithTax": [
        "Money",
        false,
        false,
        false
      ],
      "type": [
        "OrderType",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "OrderAddress": {
      "city": [
        "String",
        true,
        false,
        false
      ],
      "company": [
        "String",
        true,
        false,
        false
      ],
      "country": [
        "String",
        true,
        false,
        false
      ],
      "countryCode": [
        "String",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "fullName": [
        "String",
        true,
        false,
        false
      ],
      "phoneNumber": [
        "String",
        true,
        false,
        false
      ],
      "postalCode": [
        "String",
        true,
        false,
        false
      ],
      "province": [
        "String",
        true,
        false,
        false
      ],
      "streetLine1": [
        "String",
        true,
        false,
        false
      ],
      "streetLine2": [
        "String",
        true,
        false,
        false
      ]
    },
    "OrderInterceptorError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "interceptorError": [
        "String",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "OrderLimitError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "maxItems": [
        "Int",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "OrderLine": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "discountedLinePrice": [
        "Money",
        false,
        false,
        false
      ],
      "discountedLinePriceWithTax": [
        "Money",
        false,
        false,
        false
      ],
      "discountedUnitPrice": [
        "Money",
        false,
        false,
        false
      ],
      "discountedUnitPriceWithTax": [
        "Money",
        false,
        false,
        false
      ],
      "discounts": [
        "Discount",
        false,
        true,
        false
      ],
      "featuredAsset": [
        "Asset",
        true,
        false,
        false
      ],
      "fulfillmentLines": [
        "FulfillmentLine",
        true,
        true,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "linePrice": [
        "Money",
        false,
        false,
        false
      ],
      "linePriceWithTax": [
        "Money",
        false,
        false,
        false
      ],
      "lineTax": [
        "Money",
        false,
        false,
        false
      ],
      "order": [
        "Order",
        false,
        false,
        false
      ],
      "orderPlacedQuantity": [
        "Int",
        false,
        false,
        false
      ],
      "productVariant": [
        "ProductVariant",
        false,
        false,
        false
      ],
      "proratedLinePrice": [
        "Money",
        false,
        false,
        false
      ],
      "proratedLinePriceWithTax": [
        "Money",
        false,
        false,
        false
      ],
      "proratedUnitPrice": [
        "Money",
        false,
        false,
        false
      ],
      "proratedUnitPriceWithTax": [
        "Money",
        false,
        false,
        false
      ],
      "quantity": [
        "Int",
        false,
        false,
        false
      ],
      "taxLines": [
        "TaxLine",
        false,
        true,
        false
      ],
      "taxRate": [
        "Float",
        false,
        false,
        false
      ],
      "unitPrice": [
        "Money",
        false,
        false,
        false
      ],
      "unitPriceChangeSinceAdded": [
        "Money",
        false,
        false,
        false
      ],
      "unitPriceWithTax": [
        "Money",
        false,
        false,
        false
      ],
      "unitPriceWithTaxChangeSinceAdded": [
        "Money",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "OrderList": {
      "items": [
        "Order",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "OrderModification": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "isSettled": [
        "Boolean",
        false,
        false,
        false
      ],
      "lines": [
        "OrderModificationLine",
        false,
        true,
        false
      ],
      "note": [
        "String",
        false,
        false,
        false
      ],
      "payment": [
        "Payment",
        true,
        false,
        false
      ],
      "priceChange": [
        "Money",
        false,
        false,
        false
      ],
      "refund": [
        "Refund",
        true,
        false,
        false
      ],
      "surcharges": [
        "Surcharge",
        true,
        true,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "OrderModificationError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "OrderModificationLine": {
      "modification": [
        "OrderModification",
        false,
        false,
        false
      ],
      "modificationId": [
        "ID",
        false,
        false,
        false
      ],
      "orderLine": [
        "OrderLine",
        false,
        false,
        false
      ],
      "orderLineId": [
        "ID",
        false,
        false,
        false
      ],
      "quantity": [
        "Int",
        false,
        false,
        false
      ]
    },
    "OrderModificationStateError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "OrderProcessState": {
      "name": [
        "String",
        false,
        false,
        false
      ],
      "to": [
        "String",
        false,
        true,
        false
      ]
    },
    "OrderStateTransitionError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "fromState": [
        "String",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ],
      "toState": [
        "String",
        false,
        false,
        false
      ],
      "transitionError": [
        "String",
        false,
        false,
        false
      ]
    },
    "OrderTaxSummary": {
      "description": [
        "String",
        false,
        false,
        false
      ],
      "taxBase": [
        "Money",
        false,
        false,
        false
      ],
      "taxRate": [
        "Float",
        false,
        false,
        false
      ],
      "taxTotal": [
        "Money",
        false,
        false,
        false
      ]
    },
    "Payment": {
      "amount": [
        "Money",
        false,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "errorMessage": [
        "String",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "metadata": [
        "JSON",
        true,
        false,
        false
      ],
      "method": [
        "String",
        false,
        false,
        false
      ],
      "nextStates": [
        "String",
        false,
        true,
        false
      ],
      "refunds": [
        "Refund",
        false,
        true,
        false
      ],
      "state": [
        "String",
        false,
        false,
        false
      ],
      "transactionId": [
        "String",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "PaymentMethod": {
      "checker": [
        "ConfigurableOperation",
        true,
        false,
        false
      ],
      "code": [
        "String",
        false,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "handler": [
        "ConfigurableOperation",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "translations": [
        "PaymentMethodTranslation",
        false,
        true,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "PaymentMethodList": {
      "items": [
        "PaymentMethod",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "PaymentMethodMissingError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "PaymentMethodQuote": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "eligibilityMessage": [
        "String",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "isEligible": [
        "Boolean",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ]
    },
    "PaymentMethodTranslation": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "PaymentOrderMismatchError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "PaymentStateTransitionError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "fromState": [
        "String",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ],
      "toState": [
        "String",
        false,
        false,
        false
      ],
      "transitionError": [
        "String",
        false,
        false,
        false
      ]
    },
    "PermissionDefinition": {
      "assignable": [
        "Boolean",
        false,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ]
    },
    "PriceRange": {
      "max": [
        "Money",
        false,
        false,
        false
      ],
      "min": [
        "Money",
        false,
        false,
        false
      ]
    },
    "PriceRangeBucket": {
      "count": [
        "Int",
        false,
        false,
        false
      ],
      "to": [
        "Int",
        false,
        false,
        false
      ]
    },
    "Product": {
      "assets": [
        "Asset",
        false,
        true,
        false
      ],
      "channels": [
        "Channel",
        false,
        true,
        false
      ],
      "collections": [
        "Collection",
        false,
        true,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "ProductCustomFields",
        true,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "facetValues": [
        "FacetValue",
        false,
        true,
        false
      ],
      "featuredAsset": [
        "Asset",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "optionGroups": [
        "ProductOptionGroup",
        false,
        true,
        false
      ],
      "reviews": [
        "ProductReviewList",
        false,
        false,
        true
      ],
      "reviewsHistogram": [
        "ProductReviewHistogramItem",
        false,
        true,
        false
      ],
      "slug": [
        "String",
        false,
        false,
        false
      ],
      "translations": [
        "ProductTranslation",
        false,
        true,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "variantList": [
        "ProductVariantList",
        false,
        false,
        true
      ],
      "variants": [
        "ProductVariant",
        false,
        true,
        false
      ]
    },
    "ProductCustomFields": {
      "featuredReview": [
        "ProductReview",
        true,
        false,
        false
      ],
      "reviewCount": [
        "Float",
        true,
        false,
        false
      ],
      "reviewRating": [
        "Float",
        true,
        false,
        false
      ]
    },
    "ProductList": {
      "items": [
        "Product",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "ProductOption": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "group": [
        "ProductOptionGroup",
        false,
        false,
        false
      ],
      "groupId": [
        "ID",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "translations": [
        "ProductOptionTranslation",
        false,
        true,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "ProductOptionGroup": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "global": [
        "Boolean",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "optionList": [
        "ProductOptionList",
        false,
        false,
        true
      ],
      "options": [
        "ProductOption",
        false,
        true,
        false
      ],
      "translations": [
        "ProductOptionGroupTranslation",
        false,
        true,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "ProductOptionGroupList": {
      "items": [
        "ProductOptionGroup",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "ProductOptionGroupTranslation": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "ProductOptionInUseError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ],
      "optionGroupCode": [
        "String",
        false,
        false,
        false
      ],
      "productVariantCount": [
        "Int",
        false,
        false,
        false
      ]
    },
    "ProductOptionList": {
      "items": [
        "ProductOption",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "ProductOptionTranslation": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "ProductReview": {
      "author": [
        "Customer",
        true,
        false,
        false
      ],
      "authorLocation": [
        "String",
        true,
        false,
        false
      ],
      "authorName": [
        "String",
        false,
        false,
        false
      ],
      "body": [
        "String",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "downvotes": [
        "Int",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "product": [
        "Product",
        false,
        false,
        false
      ],
      "productVariant": [
        "ProductVariant",
        true,
        false,
        false
      ],
      "rating": [
        "Float",
        false,
        false,
        false
      ],
      "response": [
        "String",
        true,
        false,
        false
      ],
      "responseCreatedAt": [
        "DateTime",
        true,
        false,
        false
      ],
      "state": [
        "String",
        false,
        false,
        false
      ],
      "summary": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "upvotes": [
        "Int",
        false,
        false,
        false
      ]
    },
    "ProductReviewHistogramItem": {
      "bin": [
        "Int",
        false,
        false,
        false
      ],
      "frequency": [
        "Int",
        false,
        false,
        false
      ]
    },
    "ProductReviewList": {
      "items": [
        "ProductReview",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "ProductTranslation": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "slug": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "ProductVariant": {
      "assets": [
        "Asset",
        false,
        true,
        false
      ],
      "channels": [
        "Channel",
        false,
        true,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "currencyCode": [
        "CurrencyCode",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "facetValues": [
        "FacetValue",
        false,
        true,
        false
      ],
      "featuredAsset": [
        "Asset",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "options": [
        "ProductOption",
        false,
        true,
        false
      ],
      "outOfStockThreshold": [
        "Int",
        false,
        false,
        false
      ],
      "price": [
        "Money",
        false,
        false,
        false
      ],
      "priceWithTax": [
        "Money",
        false,
        false,
        false
      ],
      "prices": [
        "ProductVariantPrice",
        false,
        true,
        false
      ],
      "product": [
        "Product",
        false,
        false,
        false
      ],
      "productId": [
        "ID",
        false,
        false,
        false
      ],
      "sku": [
        "String",
        false,
        false,
        false
      ],
      "stockAllocated": [
        "Int",
        false,
        false,
        false
      ],
      "stockLevel": [
        "String",
        false,
        false,
        false
      ],
      "stockLevels": [
        "StockLevel",
        false,
        true,
        false
      ],
      "stockMovements": [
        "StockMovementList",
        false,
        false,
        false
      ],
      "stockOnHand": [
        "Int",
        false,
        false,
        false
      ],
      "taxCategory": [
        "TaxCategory",
        false,
        false,
        false
      ],
      "taxRateApplied": [
        "TaxRate",
        false,
        false,
        false
      ],
      "trackInventory": [
        "GlobalFlag",
        false,
        false,
        false
      ],
      "translations": [
        "ProductVariantTranslation",
        false,
        true,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "useGlobalOutOfStockThreshold": [
        "Boolean",
        false,
        false,
        false
      ]
    },
    "ProductVariantList": {
      "items": [
        "ProductVariant",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "ProductVariantPrice": {
      "currencyCode": [
        "CurrencyCode",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "price": [
        "Money",
        false,
        false,
        false
      ]
    },
    "ProductVariantTranslation": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "Promotion": {
      "actions": [
        "ConfigurableOperation",
        false,
        true,
        false
      ],
      "conditions": [
        "ConfigurableOperation",
        false,
        true,
        false
      ],
      "couponCode": [
        "String",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "endsAt": [
        "DateTime",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "perCustomerUsageLimit": [
        "Int",
        true,
        false,
        false
      ],
      "startsAt": [
        "DateTime",
        true,
        false,
        false
      ],
      "translations": [
        "PromotionTranslation",
        false,
        true,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "usageLimit": [
        "Int",
        true,
        false,
        false
      ]
    },
    "PromotionList": {
      "items": [
        "Promotion",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "PromotionTranslation": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "Province": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "parent": [
        "Region",
        true,
        false,
        false
      ],
      "parentId": [
        "ID",
        true,
        false,
        false
      ],
      "translations": [
        "RegionTranslation",
        false,
        true,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "ProvinceList": {
      "items": [
        "Province",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "QuantityTooGreatError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "Query": {
      "activeAdministrator": [
        "Administrator",
        true,
        false,
        false
      ],
      "activeChannel": [
        "Channel",
        false,
        false,
        false
      ],
      "administrator": [
        "Administrator",
        true,
        false,
        false
      ],
      "administrators": [
        "AdministratorList",
        false,
        false,
        true
      ],
      "asset": [
        "Asset",
        true,
        false,
        false
      ],
      "assets": [
        "AssetList",
        false,
        false,
        true
      ],
      "channel": [
        "Channel",
        true,
        false,
        false
      ],
      "channels": [
        "ChannelList",
        false,
        false,
        true
      ],
      "collection": [
        "Collection",
        true,
        false,
        false
      ],
      "collectionFilters": [
        "ConfigurableOperationDefinition",
        false,
        true,
        false
      ],
      "collections": [
        "CollectionList",
        false,
        false,
        true
      ],
      "countries": [
        "CountryList",
        false,
        false,
        true
      ],
      "country": [
        "Country",
        true,
        false,
        false
      ],
      "customer": [
        "Customer",
        true,
        false,
        false
      ],
      "customerGroup": [
        "CustomerGroup",
        true,
        false,
        false
      ],
      "customerGroups": [
        "CustomerGroupList",
        false,
        false,
        true
      ],
      "customers": [
        "CustomerList",
        false,
        false,
        true
      ],
      "eligibleShippingMethodsForDraftOrder": [
        "ShippingMethodQuote",
        false,
        true,
        false
      ],
      "entityDuplicators": [
        "EntityDuplicatorDefinition",
        false,
        true,
        false
      ],
      "facet": [
        "Facet",
        true,
        false,
        false
      ],
      "facetValues": [
        "FacetValueList",
        false,
        false,
        true
      ],
      "facets": [
        "FacetList",
        false,
        false,
        true
      ],
      "fulfillmentHandlers": [
        "ConfigurableOperationDefinition",
        false,
        true,
        false
      ],
      "globalSettings": [
        "GlobalSettings",
        false,
        false,
        false
      ],
      "job": [
        "Job",
        true,
        false,
        false
      ],
      "jobBufferSize": [
        "JobBufferSize",
        false,
        true,
        false
      ],
      "jobQueues": [
        "JobQueue",
        false,
        true,
        false
      ],
      "jobs": [
        "JobList",
        false,
        false,
        true
      ],
      "jobsById": [
        "Job",
        false,
        true,
        false
      ],
      "me": [
        "CurrentUser",
        true,
        false,
        false
      ],
      "metricSummary": [
        "MetricSummary",
        false,
        true,
        false
      ],
      "order": [
        "Order",
        true,
        false,
        false
      ],
      "orders": [
        "OrderList",
        false,
        false,
        true
      ],
      "paymentMethod": [
        "PaymentMethod",
        true,
        false,
        false
      ],
      "paymentMethodEligibilityCheckers": [
        "ConfigurableOperationDefinition",
        false,
        true,
        false
      ],
      "paymentMethodHandlers": [
        "ConfigurableOperationDefinition",
        false,
        true,
        false
      ],
      "paymentMethods": [
        "PaymentMethodList",
        false,
        false,
        true
      ],
      "pendingSearchIndexUpdates": [
        "Int",
        false,
        false,
        false
      ],
      "previewCollectionVariants": [
        "ProductVariantList",
        false,
        false,
        true
      ],
      "product": [
        "Product",
        true,
        false,
        false
      ],
      "productOptionGroup": [
        "ProductOptionGroup",
        true,
        false,
        false
      ],
      "productOptionGroupList": [
        "ProductOptionGroupList",
        false,
        false,
        true
      ],
      "productOptionGroups": [
        "ProductOptionGroup",
        false,
        true,
        false
      ],
      "productOptions": [
        "ProductOptionList",
        false,
        false,
        true
      ],
      "productReview": [
        "ProductReview",
        true,
        false,
        false
      ],
      "productReviews": [
        "ProductReviewList",
        false,
        false,
        true
      ],
      "productVariant": [
        "ProductVariant",
        true,
        false,
        false
      ],
      "productVariants": [
        "ProductVariantList",
        false,
        false,
        true
      ],
      "products": [
        "ProductList",
        false,
        false,
        true
      ],
      "promotion": [
        "Promotion",
        true,
        false,
        false
      ],
      "promotionActions": [
        "ConfigurableOperationDefinition",
        false,
        true,
        false
      ],
      "promotionConditions": [
        "ConfigurableOperationDefinition",
        false,
        true,
        false
      ],
      "promotions": [
        "PromotionList",
        false,
        false,
        true
      ],
      "province": [
        "Province",
        true,
        false,
        false
      ],
      "provinces": [
        "ProvinceList",
        false,
        false,
        true
      ],
      "requiredFacets": [
        "Facet",
        false,
        true,
        false
      ],
      "role": [
        "Role",
        true,
        false,
        false
      ],
      "roles": [
        "RoleList",
        false,
        false,
        true
      ],
      "scheduledTasks": [
        "ScheduledTask",
        false,
        true,
        false
      ],
      "search": [
        "SearchResponse",
        false,
        false,
        false
      ],
      "seller": [
        "Seller",
        true,
        false,
        false
      ],
      "sellers": [
        "SellerList",
        false,
        false,
        true
      ],
      "shippingCalculators": [
        "ConfigurableOperationDefinition",
        false,
        true,
        false
      ],
      "shippingEligibilityCheckers": [
        "ConfigurableOperationDefinition",
        false,
        true,
        false
      ],
      "shippingMethod": [
        "ShippingMethod",
        true,
        false,
        false
      ],
      "shippingMethods": [
        "ShippingMethodList",
        false,
        false,
        true
      ],
      "stockLocation": [
        "StockLocation",
        true,
        false,
        false
      ],
      "stockLocations": [
        "StockLocationList",
        false,
        false,
        true
      ],
      "tag": [
        "Tag",
        false,
        false,
        false
      ],
      "tags": [
        "TagList",
        false,
        false,
        true
      ],
      "taxCategories": [
        "TaxCategoryList",
        false,
        false,
        true
      ],
      "taxCategory": [
        "TaxCategory",
        true,
        false,
        false
      ],
      "taxRate": [
        "TaxRate",
        true,
        false,
        false
      ],
      "taxRates": [
        "TaxRateList",
        false,
        false,
        true
      ],
      "testEligibleShippingMethods": [
        "ShippingMethodQuote",
        false,
        true,
        false
      ],
      "testShippingMethod": [
        "TestShippingMethodResult",
        false,
        false,
        false
      ],
      "zone": [
        "Zone",
        true,
        false,
        false
      ],
      "zones": [
        "ZoneList",
        false,
        false,
        true
      ]
    },
    "Refund": {
      "adjustment": [
        "Money",
        false,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "items": [
        "Money",
        false,
        false,
        false
      ],
      "lines": [
        "RefundLine",
        false,
        true,
        false
      ],
      "metadata": [
        "JSON",
        true,
        false,
        false
      ],
      "method": [
        "String",
        true,
        false,
        false
      ],
      "paymentId": [
        "ID",
        false,
        false,
        false
      ],
      "reason": [
        "String",
        true,
        false,
        false
      ],
      "shipping": [
        "Money",
        false,
        false,
        false
      ],
      "state": [
        "String",
        false,
        false,
        false
      ],
      "total": [
        "Money",
        false,
        false,
        false
      ],
      "transactionId": [
        "String",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "RefundAmountError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "maximumRefundable": [
        "Int",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "RefundLine": {
      "orderLine": [
        "OrderLine",
        false,
        false,
        false
      ],
      "orderLineId": [
        "ID",
        false,
        false,
        false
      ],
      "quantity": [
        "Int",
        false,
        false,
        false
      ],
      "refund": [
        "Refund",
        false,
        false,
        false
      ],
      "refundId": [
        "ID",
        false,
        false,
        false
      ]
    },
    "RefundOrderStateError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ],
      "orderState": [
        "String",
        false,
        false,
        false
      ]
    },
    "RefundPaymentIdMissingError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ]
    },
    "RefundStateTransitionError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "fromState": [
        "String",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ],
      "toState": [
        "String",
        false,
        false,
        false
      ],
      "transitionError": [
        "String",
        false,
        false,
        false
      ]
    },
    "RegionTranslation": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "RelationCustomFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "entity": [
        "String",
        false,
        false,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "nullable": [
        "Boolean",
        true,
        false,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "requiresPermission": [
        "Permission",
        true,
        true,
        false
      ],
      "scalarFields": [
        "String",
        false,
        true,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "Release": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "productVariant": [
        "ProductVariant",
        false,
        false,
        false
      ],
      "quantity": [
        "Int",
        false,
        false,
        false
      ],
      "type": [
        "StockMovementType",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "Return": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "productVariant": [
        "ProductVariant",
        false,
        false,
        false
      ],
      "quantity": [
        "Int",
        false,
        false,
        false
      ],
      "type": [
        "StockMovementType",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "Role": {
      "channels": [
        "Channel",
        false,
        true,
        false
      ],
      "code": [
        "String",
        false,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "permissions": [
        "Permission",
        false,
        true,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "RoleList": {
      "items": [
        "Role",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "Sale": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "productVariant": [
        "ProductVariant",
        false,
        false,
        false
      ],
      "quantity": [
        "Int",
        false,
        false,
        false
      ],
      "type": [
        "StockMovementType",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "ScheduledTask": {
      "description": [
        "String",
        false,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "id": [
        "String",
        false,
        false,
        false
      ],
      "isRunning": [
        "Boolean",
        false,
        false,
        false
      ],
      "lastExecutedAt": [
        "DateTime",
        true,
        false,
        false
      ],
      "lastResult": [
        "JSON",
        true,
        false,
        false
      ],
      "nextExecutionAt": [
        "DateTime",
        true,
        false,
        false
      ],
      "schedule": [
        "String",
        false,
        false,
        false
      ],
      "scheduleDescription": [
        "String",
        false,
        false,
        false
      ]
    },
    "SearchReindexResponse": {
      "success": [
        "Boolean",
        false,
        false,
        false
      ]
    },
    "SearchResponse": {
      "collections": [
        "CollectionResult",
        false,
        true,
        false
      ],
      "facetValues": [
        "FacetValueResult",
        false,
        true,
        false
      ],
      "items": [
        "SearchResult",
        false,
        true,
        false
      ],
      "prices": [
        "SearchResponsePriceData",
        false,
        false,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "SearchResponsePriceData": {
      "buckets": [
        "PriceRangeBucket",
        false,
        true,
        false
      ],
      "bucketsWithTax": [
        "PriceRangeBucket",
        false,
        true,
        false
      ],
      "range": [
        "PriceRange",
        false,
        false,
        false
      ],
      "rangeWithTax": [
        "PriceRange",
        false,
        false,
        false
      ]
    },
    "SearchResult": {
      "channelIds": [
        "ID",
        false,
        true,
        false
      ],
      "collectionIds": [
        "ID",
        false,
        true,
        false
      ],
      "currencyCode": [
        "CurrencyCode",
        false,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "facetIds": [
        "ID",
        false,
        true,
        false
      ],
      "facetValueIds": [
        "ID",
        false,
        true,
        false
      ],
      "inStock": [
        "Boolean",
        true,
        false,
        false
      ],
      "price": [
        "SearchResultPrice",
        false,
        false,
        false
      ],
      "priceWithTax": [
        "SearchResultPrice",
        false,
        false,
        false
      ],
      "productAsset": [
        "SearchResultAsset",
        true,
        false,
        false
      ],
      "productId": [
        "ID",
        false,
        false,
        false
      ],
      "productName": [
        "String",
        false,
        false,
        false
      ],
      "productVariantAsset": [
        "SearchResultAsset",
        true,
        false,
        false
      ],
      "productVariantId": [
        "ID",
        false,
        false,
        false
      ],
      "productVariantName": [
        "String",
        false,
        false,
        false
      ],
      "score": [
        "Float",
        false,
        false,
        false
      ],
      "sku": [
        "String",
        false,
        false,
        false
      ],
      "slug": [
        "String",
        false,
        false,
        false
      ]
    },
    "SearchResultAsset": {
      "focalPoint": [
        "Coordinate",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "preview": [
        "String",
        false,
        false,
        false
      ]
    },
    "Seller": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "SellerCustomFields",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "SellerCustomFields": {
      "connectedAccountId": [
        "String",
        true,
        false,
        false
      ]
    },
    "SellerList": {
      "items": [
        "Seller",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "ServerConfig": {
      "customFieldConfig": [
        "CustomFields",
        false,
        false,
        false
      ],
      "entityCustomFields": [
        "EntityCustomFields",
        false,
        true,
        false
      ],
      "moneyStrategyPrecision": [
        "Int",
        false,
        false,
        false
      ],
      "orderProcess": [
        "OrderProcessState",
        false,
        true,
        false
      ],
      "permissions": [
        "PermissionDefinition",
        false,
        true,
        false
      ],
      "permittedAssetTypes": [
        "String",
        false,
        true,
        false
      ]
    },
    "SettlePaymentError": {
      "errorCode": [
        "ErrorCode",
        false,
        false,
        false
      ],
      "message": [
        "String",
        false,
        false,
        false
      ],
      "paymentErrorMessage": [
        "String",
        false,
        false,
        false
      ]
    },
    "ShippingLine": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "discountedPrice": [
        "Money",
        false,
        false,
        false
      ],
      "discountedPriceWithTax": [
        "Money",
        false,
        false,
        false
      ],
      "discounts": [
        "Discount",
        false,
        true,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "price": [
        "Money",
        false,
        false,
        false
      ],
      "priceWithTax": [
        "Money",
        false,
        false,
        false
      ],
      "shippingMethod": [
        "ShippingMethod",
        false,
        false,
        false
      ]
    },
    "ShippingMethod": {
      "calculator": [
        "ConfigurableOperation",
        false,
        false,
        false
      ],
      "checker": [
        "ConfigurableOperation",
        false,
        false,
        false
      ],
      "code": [
        "String",
        false,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "fulfillmentHandlerCode": [
        "String",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "translations": [
        "ShippingMethodTranslation",
        false,
        true,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "ShippingMethodList": {
      "items": [
        "ShippingMethod",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "ShippingMethodQuote": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "metadata": [
        "JSON",
        true,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "price": [
        "Money",
        false,
        false,
        false
      ],
      "priceWithTax": [
        "Money",
        false,
        false,
        false
      ]
    },
    "ShippingMethodTranslation": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "SinglePrice": {
      "value": [
        "Money",
        false,
        false,
        false
      ]
    },
    "StockAdjustment": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "productVariant": [
        "ProductVariant",
        false,
        false,
        false
      ],
      "quantity": [
        "Int",
        false,
        false,
        false
      ],
      "type": [
        "StockMovementType",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "StockLevel": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "stockAllocated": [
        "Int",
        false,
        false,
        false
      ],
      "stockLocation": [
        "StockLocation",
        false,
        false,
        false
      ],
      "stockLocationId": [
        "ID",
        false,
        false,
        false
      ],
      "stockOnHand": [
        "Int",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "StockLocation": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "StockLocationList": {
      "items": [
        "StockLocation",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "StockMovementList": {
      "items": [
        "StockMovementItem",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "StringCustomFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "length": [
        "Int",
        true,
        false,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "nullable": [
        "Boolean",
        true,
        false,
        false
      ],
      "options": [
        "StringFieldOption",
        true,
        true,
        false
      ],
      "pattern": [
        "String",
        true,
        false,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "requiresPermission": [
        "Permission",
        true,
        true,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "StringFieldOption": {
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "value": [
        "String",
        false,
        false,
        false
      ]
    },
    "StringStructFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "length": [
        "Int",
        true,
        false,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "options": [
        "StringFieldOption",
        true,
        true,
        false
      ],
      "pattern": [
        "String",
        true,
        false,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "StructCustomFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "fields": [
        "StructFieldConfig",
        false,
        true,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "nullable": [
        "Boolean",
        true,
        false,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "requiresPermission": [
        "Permission",
        true,
        true,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "Success": {
      "success": [
        "Boolean",
        false,
        false,
        false
      ]
    },
    "Surcharge": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "price": [
        "Money",
        false,
        false,
        false
      ],
      "priceWithTax": [
        "Money",
        false,
        false,
        false
      ],
      "sku": [
        "String",
        true,
        false,
        false
      ],
      "taxLines": [
        "TaxLine",
        false,
        true,
        false
      ],
      "taxRate": [
        "Float",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "Tag": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "value": [
        "String",
        false,
        false,
        false
      ]
    },
    "TagList": {
      "items": [
        "Tag",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "TaxCategory": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "isDefault": [
        "Boolean",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "TaxCategoryList": {
      "items": [
        "TaxCategory",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "TaxLine": {
      "description": [
        "String",
        false,
        false,
        false
      ],
      "taxRate": [
        "Float",
        false,
        false,
        false
      ]
    },
    "TaxRate": {
      "category": [
        "TaxCategory",
        false,
        false,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "customerGroup": [
        "CustomerGroup",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "value": [
        "Float",
        false,
        false,
        false
      ],
      "zone": [
        "Zone",
        false,
        false,
        false
      ]
    },
    "TaxRateList": {
      "items": [
        "TaxRate",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "TestShippingMethodQuote": {
      "metadata": [
        "JSON",
        true,
        false,
        false
      ],
      "price": [
        "Money",
        false,
        false,
        false
      ],
      "priceWithTax": [
        "Money",
        false,
        false,
        false
      ]
    },
    "TestShippingMethodResult": {
      "eligible": [
        "Boolean",
        false,
        false,
        false
      ],
      "quote": [
        "TestShippingMethodQuote",
        true,
        false,
        false
      ]
    },
    "TextCustomFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "nullable": [
        "Boolean",
        true,
        false,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "requiresPermission": [
        "Permission",
        true,
        true,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "TextStructFieldConfig": {
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "type": [
        "String",
        false,
        false,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "User": {
      "authenticationMethods": [
        "AuthenticationMethod",
        false,
        true,
        false
      ],
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "identifier": [
        "String",
        false,
        false,
        false
      ],
      "lastLogin": [
        "DateTime",
        true,
        false,
        false
      ],
      "roles": [
        "Role",
        false,
        true,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "verified": [
        "Boolean",
        false,
        false,
        false
      ]
    },
    "Zone": {
      "createdAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "members": [
        "Region",
        false,
        true,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "ZoneList": {
      "items": [
        "Zone",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ]
    },
    "__Schema": {
      "description": [
        "String",
        true,
        false,
        false
      ],
      "types": [
        "__Type",
        false,
        true,
        false
      ],
      "queryType": [
        "__Type",
        false,
        false,
        false
      ],
      "mutationType": [
        "__Type",
        true,
        false,
        false
      ],
      "subscriptionType": [
        "__Type",
        true,
        false,
        false
      ],
      "directives": [
        "__Directive",
        false,
        true,
        false
      ]
    },
    "__Type": {
      "kind": [
        "__TypeKind",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ],
      "description": [
        "String",
        true,
        false,
        false
      ],
      "specifiedByURL": [
        "String",
        true,
        false,
        false
      ],
      "fields": [
        "__Field",
        true,
        true,
        false
      ],
      "interfaces": [
        "__Type",
        true,
        true,
        false
      ],
      "possibleTypes": [
        "__Type",
        true,
        true,
        false
      ],
      "enumValues": [
        "__EnumValue",
        true,
        true,
        false
      ],
      "inputFields": [
        "__InputValue",
        true,
        true,
        false
      ],
      "ofType": [
        "__Type",
        true,
        false,
        false
      ],
      "isOneOf": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "__Field": {
      "name": [
        "String",
        false,
        false,
        false
      ],
      "description": [
        "String",
        true,
        false,
        false
      ],
      "args": [
        "__InputValue",
        false,
        true,
        false
      ],
      "type": [
        "__Type",
        false,
        false,
        false
      ],
      "isDeprecated": [
        "Boolean",
        false,
        false,
        false
      ],
      "deprecationReason": [
        "String",
        true,
        false,
        false
      ]
    },
    "__InputValue": {
      "name": [
        "String",
        false,
        false,
        false
      ],
      "description": [
        "String",
        true,
        false,
        false
      ],
      "type": [
        "__Type",
        false,
        false,
        false
      ],
      "defaultValue": [
        "String",
        true,
        false,
        false
      ],
      "isDeprecated": [
        "Boolean",
        false,
        false,
        false
      ],
      "deprecationReason": [
        "String",
        true,
        false,
        false
      ]
    },
    "__EnumValue": {
      "name": [
        "String",
        false,
        false,
        false
      ],
      "description": [
        "String",
        true,
        false,
        false
      ],
      "isDeprecated": [
        "Boolean",
        false,
        false,
        false
      ],
      "deprecationReason": [
        "String",
        true,
        false,
        false
      ]
    },
    "__Directive": {
      "name": [
        "String",
        false,
        false,
        false
      ],
      "description": [
        "String",
        true,
        false,
        false
      ],
      "isRepeatable": [
        "Boolean",
        false,
        false,
        false
      ],
      "locations": [
        "__DirectiveLocation",
        false,
        true,
        false
      ],
      "args": [
        "__InputValue",
        false,
        true,
        false
      ]
    }
  },
  "inputs": {
    "AddItemInput": {
      "productVariantId": [
        "ID",
        false,
        false,
        false
      ],
      "quantity": [
        "Int",
        false,
        false,
        false
      ]
    },
    "AddItemToDraftOrderInput": {
      "productVariantId": [
        "ID",
        false,
        false,
        false
      ],
      "quantity": [
        "Int",
        false,
        false,
        false
      ]
    },
    "AddNoteToCustomerInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "isPublic": [
        "Boolean",
        false,
        false,
        false
      ],
      "note": [
        "String",
        false,
        false,
        false
      ]
    },
    "AddNoteToOrderInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "isPublic": [
        "Boolean",
        false,
        false,
        false
      ],
      "note": [
        "String",
        false,
        false,
        false
      ]
    },
    "AdjustDraftOrderLineInput": {
      "orderLineId": [
        "ID",
        false,
        false,
        false
      ],
      "quantity": [
        "Int",
        false,
        false,
        false
      ]
    },
    "AdministratorFilterParameter": {
      "_and": [
        "AdministratorFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "AdministratorFilterParameter",
        true,
        true,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "emailAddress": [
        "StringOperators",
        true,
        false,
        false
      ],
      "firstName": [
        "StringOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "lastName": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "AdministratorListOptions": {
      "filter": [
        "AdministratorFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "AdministratorSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "AdministratorPaymentInput": {
      "metadata": [
        "JSON",
        true,
        false,
        false
      ],
      "paymentMethod": [
        "String",
        true,
        false,
        false
      ]
    },
    "AdministratorRefundInput": {
      "amount": [
        "Money",
        true,
        false,
        false
      ],
      "paymentId": [
        "ID",
        false,
        false,
        false
      ],
      "reason": [
        "String",
        true,
        false,
        false
      ]
    },
    "AdministratorSortParameter": {
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "emailAddress": [
        "SortOrder",
        true,
        false,
        false
      ],
      "firstName": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "lastName": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "AssetFilterParameter": {
      "_and": [
        "AssetFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "AssetFilterParameter",
        true,
        true,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "fileSize": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "height": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "mimeType": [
        "StringOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "preview": [
        "StringOperators",
        true,
        false,
        false
      ],
      "source": [
        "StringOperators",
        true,
        false,
        false
      ],
      "type": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "width": [
        "NumberOperators",
        true,
        false,
        false
      ]
    },
    "AssetListOptions": {
      "filter": [
        "AssetFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "AssetSortParameter",
        true,
        false,
        false
      ],
      "tags": [
        "String",
        true,
        true,
        false
      ],
      "tagsOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "AssetSortParameter": {
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "fileSize": [
        "SortOrder",
        true,
        false,
        false
      ],
      "height": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "mimeType": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "preview": [
        "SortOrder",
        true,
        false,
        false
      ],
      "source": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "width": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "AssignAssetsToChannelInput": {
      "assetIds": [
        "ID",
        false,
        true,
        false
      ],
      "channelId": [
        "ID",
        false,
        false,
        false
      ]
    },
    "AssignCollectionsToChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "collectionIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "AssignFacetsToChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "facetIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "AssignOptionGroupsToChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "groupIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "AssignPaymentMethodsToChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "paymentMethodIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "AssignProductVariantsToChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "priceFactor": [
        "Float",
        true,
        false,
        false
      ],
      "productVariantIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "AssignProductsToChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "priceFactor": [
        "Float",
        true,
        false,
        false
      ],
      "productIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "AssignPromotionsToChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "promotionIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "AssignShippingMethodsToChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "shippingMethodIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "AssignStockLocationsToChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "stockLocationIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "AuthenticationInput": {
      "native": [
        "NativeAuthInput",
        true,
        false,
        false
      ]
    },
    "BooleanListOperators": {
      "inList": [
        "Boolean",
        false,
        false,
        false
      ]
    },
    "BooleanOperators": {
      "eq": [
        "Boolean",
        true,
        false,
        false
      ],
      "isNull": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "CancelOrderInput": {
      "cancelShipping": [
        "Boolean",
        true,
        false,
        false
      ],
      "lines": [
        "OrderLineInput",
        true,
        true,
        false
      ],
      "orderId": [
        "ID",
        false,
        false,
        false
      ],
      "reason": [
        "String",
        true,
        false,
        false
      ]
    },
    "ChannelFilterParameter": {
      "_and": [
        "ChannelFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "ChannelFilterParameter",
        true,
        true,
        false
      ],
      "code": [
        "StringOperators",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "currencyCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "defaultCurrencyCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "defaultLanguageCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "outOfStockThreshold": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "pricesIncludeTax": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "token": [
        "StringOperators",
        true,
        false,
        false
      ],
      "trackInventory": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "ChannelListOptions": {
      "filter": [
        "ChannelFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "ChannelSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "ChannelSortParameter": {
      "code": [
        "SortOrder",
        true,
        false,
        false
      ],
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "outOfStockThreshold": [
        "SortOrder",
        true,
        false,
        false
      ],
      "token": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "CollectionFilterParameter": {
      "_and": [
        "CollectionFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "CollectionFilterParameter",
        true,
        true,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "description": [
        "StringOperators",
        true,
        false,
        false
      ],
      "global": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "inheritFilters": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "isPrivate": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "languageCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "parentId": [
        "IDOperators",
        true,
        false,
        false
      ],
      "position": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "slug": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "CollectionListOptions": {
      "filter": [
        "CollectionFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "CollectionSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ],
      "topLevelOnly": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "CollectionSortParameter": {
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "description": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "parentId": [
        "SortOrder",
        true,
        false,
        false
      ],
      "position": [
        "SortOrder",
        true,
        false,
        false
      ],
      "slug": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "ConfigArgInput": {
      "name": [
        "String",
        false,
        false,
        false
      ],
      "value": [
        "String",
        false,
        false,
        false
      ]
    },
    "ConfigurableOperationInput": {
      "arguments": [
        "ConfigArgInput",
        false,
        true,
        false
      ],
      "code": [
        "String",
        false,
        false,
        false
      ]
    },
    "CoordinateInput": {
      "x": [
        "Float",
        false,
        false,
        false
      ],
      "y": [
        "Float",
        false,
        false,
        false
      ]
    },
    "CountryFilterParameter": {
      "_and": [
        "CountryFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "CountryFilterParameter",
        true,
        true,
        false
      ],
      "code": [
        "StringOperators",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "enabled": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "languageCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "parentId": [
        "IDOperators",
        true,
        false,
        false
      ],
      "type": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "CountryListOptions": {
      "filter": [
        "CountryFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "CountrySortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "CountrySortParameter": {
      "code": [
        "SortOrder",
        true,
        false,
        false
      ],
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "parentId": [
        "SortOrder",
        true,
        false,
        false
      ],
      "type": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "CountryTranslationInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        true,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ]
    },
    "CreateAddressInput": {
      "city": [
        "String",
        true,
        false,
        false
      ],
      "company": [
        "String",
        true,
        false,
        false
      ],
      "countryCode": [
        "String",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "defaultBillingAddress": [
        "Boolean",
        true,
        false,
        false
      ],
      "defaultShippingAddress": [
        "Boolean",
        true,
        false,
        false
      ],
      "fullName": [
        "String",
        true,
        false,
        false
      ],
      "phoneNumber": [
        "String",
        true,
        false,
        false
      ],
      "postalCode": [
        "String",
        true,
        false,
        false
      ],
      "province": [
        "String",
        true,
        false,
        false
      ],
      "streetLine1": [
        "String",
        false,
        false,
        false
      ],
      "streetLine2": [
        "String",
        true,
        false,
        false
      ]
    },
    "CreateAdministratorInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "emailAddress": [
        "String",
        false,
        false,
        false
      ],
      "firstName": [
        "String",
        false,
        false,
        false
      ],
      "lastName": [
        "String",
        false,
        false,
        false
      ],
      "password": [
        "String",
        false,
        false,
        false
      ],
      "roleIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "CreateAssetInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "file": [
        "Upload",
        false,
        false,
        false
      ],
      "tags": [
        "String",
        true,
        true,
        false
      ]
    },
    "CreateChannelInput": {
      "availableCurrencyCodes": [
        "CurrencyCode",
        true,
        true,
        false
      ],
      "availableLanguageCodes": [
        "LanguageCode",
        true,
        true,
        false
      ],
      "code": [
        "String",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "defaultCurrencyCode": [
        "CurrencyCode",
        true,
        false,
        false
      ],
      "defaultLanguageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "defaultShippingZoneId": [
        "ID",
        false,
        false,
        false
      ],
      "defaultTaxZoneId": [
        "ID",
        false,
        false,
        false
      ],
      "outOfStockThreshold": [
        "Int",
        true,
        false,
        false
      ],
      "pricesIncludeTax": [
        "Boolean",
        false,
        false,
        false
      ],
      "sellerId": [
        "ID",
        true,
        false,
        false
      ],
      "token": [
        "String",
        false,
        false,
        false
      ],
      "trackInventory": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "CreateCollectionInput": {
      "assetIds": [
        "ID",
        true,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "featuredAssetId": [
        "ID",
        true,
        false,
        false
      ],
      "filters": [
        "ConfigurableOperationInput",
        false,
        true,
        false
      ],
      "global": [
        "Boolean",
        false,
        false,
        false
      ],
      "inheritFilters": [
        "Boolean",
        true,
        false,
        false
      ],
      "isPrivate": [
        "Boolean",
        true,
        false,
        false
      ],
      "parentId": [
        "ID",
        true,
        false,
        false
      ],
      "translations": [
        "CreateCollectionTranslationInput",
        false,
        true,
        false
      ]
    },
    "CreateCollectionTranslationInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "slug": [
        "String",
        false,
        false,
        false
      ]
    },
    "CreateCountryInput": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "translations": [
        "CountryTranslationInput",
        false,
        true,
        false
      ]
    },
    "CreateCustomerGroupInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "customerIds": [
        "ID",
        true,
        true,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ]
    },
    "CreateCustomerInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "emailAddress": [
        "String",
        false,
        false,
        false
      ],
      "firstName": [
        "String",
        false,
        false,
        false
      ],
      "lastName": [
        "String",
        false,
        false,
        false
      ],
      "phoneNumber": [
        "String",
        true,
        false,
        false
      ],
      "title": [
        "String",
        true,
        false,
        false
      ]
    },
    "CreateFacetCustomFieldsInput": {
      "showOnProductDetail": [
        "Boolean",
        true,
        false,
        false
      ],
      "showOnProductDetailIfIds": [
        "ID",
        true,
        true,
        false
      ]
    },
    "CreateFacetInput": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "customFields": [
        "CreateFacetCustomFieldsInput",
        true,
        false,
        false
      ],
      "global": [
        "Boolean",
        false,
        false,
        false
      ],
      "isPrivate": [
        "Boolean",
        false,
        false,
        false
      ],
      "translations": [
        "FacetTranslationInput",
        false,
        true,
        false
      ],
      "values": [
        "CreateFacetValueWithFacetInput",
        true,
        true,
        false
      ]
    },
    "CreateFacetValueInput": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "facetId": [
        "ID",
        false,
        false,
        false
      ],
      "translations": [
        "FacetValueTranslationInput",
        false,
        true,
        false
      ]
    },
    "CreateFacetValueWithFacetInput": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "translations": [
        "FacetValueTranslationInput",
        false,
        true,
        false
      ]
    },
    "CreateGroupOptionInput": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "translations": [
        "ProductOptionGroupTranslationInput",
        false,
        true,
        false
      ]
    },
    "CreatePaymentMethodInput": {
      "checker": [
        "ConfigurableOperationInput",
        true,
        false,
        false
      ],
      "code": [
        "String",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "handler": [
        "ConfigurableOperationInput",
        false,
        false,
        false
      ],
      "translations": [
        "PaymentMethodTranslationInput",
        false,
        true,
        false
      ]
    },
    "CreateProductCustomFieldsInput": {
      "featuredReviewId": [
        "ID",
        true,
        false,
        false
      ],
      "reviewCount": [
        "Float",
        true,
        false,
        false
      ],
      "reviewRating": [
        "Float",
        true,
        false,
        false
      ]
    },
    "CreateProductInput": {
      "assetIds": [
        "ID",
        true,
        true,
        false
      ],
      "customFields": [
        "CreateProductCustomFieldsInput",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        true,
        false,
        false
      ],
      "facetValueIds": [
        "ID",
        true,
        true,
        false
      ],
      "featuredAssetId": [
        "ID",
        true,
        false,
        false
      ],
      "translations": [
        "ProductTranslationInput",
        false,
        true,
        false
      ]
    },
    "CreateProductOptionGroupInput": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "global": [
        "Boolean",
        false,
        false,
        false
      ],
      "options": [
        "CreateGroupOptionInput",
        false,
        true,
        false
      ],
      "translations": [
        "ProductOptionGroupTranslationInput",
        false,
        true,
        false
      ]
    },
    "CreateProductOptionInput": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "productOptionGroupId": [
        "ID",
        false,
        false,
        false
      ],
      "translations": [
        "ProductOptionGroupTranslationInput",
        false,
        true,
        false
      ]
    },
    "CreateProductVariantInput": {
      "assetIds": [
        "ID",
        true,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        true,
        false,
        false
      ],
      "facetValueIds": [
        "ID",
        true,
        true,
        false
      ],
      "featuredAssetId": [
        "ID",
        true,
        false,
        false
      ],
      "optionIds": [
        "ID",
        true,
        true,
        false
      ],
      "outOfStockThreshold": [
        "Int",
        true,
        false,
        false
      ],
      "price": [
        "Money",
        true,
        false,
        false
      ],
      "prices": [
        "CreateProductVariantPriceInput",
        true,
        true,
        false
      ],
      "productId": [
        "ID",
        false,
        false,
        false
      ],
      "sku": [
        "String",
        false,
        false,
        false
      ],
      "stockLevels": [
        "StockLevelInput",
        true,
        true,
        false
      ],
      "stockOnHand": [
        "Int",
        true,
        false,
        false
      ],
      "taxCategoryId": [
        "ID",
        true,
        false,
        false
      ],
      "trackInventory": [
        "GlobalFlag",
        true,
        false,
        false
      ],
      "translations": [
        "ProductVariantTranslationInput",
        false,
        true,
        false
      ],
      "useGlobalOutOfStockThreshold": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "CreateProductVariantOptionInput": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "optionGroupId": [
        "ID",
        false,
        false,
        false
      ],
      "translations": [
        "ProductOptionTranslationInput",
        false,
        true,
        false
      ]
    },
    "CreateProductVariantPriceInput": {
      "currencyCode": [
        "CurrencyCode",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "price": [
        "Money",
        false,
        false,
        false
      ]
    },
    "CreatePromotionInput": {
      "actions": [
        "ConfigurableOperationInput",
        false,
        true,
        false
      ],
      "conditions": [
        "ConfigurableOperationInput",
        false,
        true,
        false
      ],
      "couponCode": [
        "String",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "endsAt": [
        "DateTime",
        true,
        false,
        false
      ],
      "perCustomerUsageLimit": [
        "Int",
        true,
        false,
        false
      ],
      "startsAt": [
        "DateTime",
        true,
        false,
        false
      ],
      "translations": [
        "PromotionTranslationInput",
        false,
        true,
        false
      ],
      "usageLimit": [
        "Int",
        true,
        false,
        false
      ]
    },
    "CreateProvinceInput": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "translations": [
        "ProvinceTranslationInput",
        false,
        true,
        false
      ]
    },
    "CreateRoleInput": {
      "channelIds": [
        "ID",
        true,
        true,
        false
      ],
      "code": [
        "String",
        false,
        false,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ],
      "permissions": [
        "Permission",
        false,
        true,
        false
      ]
    },
    "CreateSellerCustomFieldsInput": {
      "connectedAccountId": [
        "String",
        true,
        false,
        false
      ]
    },
    "CreateSellerInput": {
      "customFields": [
        "CreateSellerCustomFieldsInput",
        true,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ]
    },
    "CreateShippingMethodInput": {
      "calculator": [
        "ConfigurableOperationInput",
        false,
        false,
        false
      ],
      "checker": [
        "ConfigurableOperationInput",
        false,
        false,
        false
      ],
      "code": [
        "String",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "fulfillmentHandler": [
        "String",
        false,
        false,
        false
      ],
      "translations": [
        "ShippingMethodTranslationInput",
        false,
        true,
        false
      ]
    },
    "CreateStockLocationInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        true,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ]
    },
    "CreateTagInput": {
      "value": [
        "String",
        false,
        false,
        false
      ]
    },
    "CreateTaxCategoryInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "isDefault": [
        "Boolean",
        true,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ]
    },
    "CreateTaxRateInput": {
      "categoryId": [
        "ID",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "customerGroupId": [
        "ID",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ],
      "value": [
        "Float",
        false,
        false,
        false
      ],
      "zoneId": [
        "ID",
        false,
        false,
        false
      ]
    },
    "CreateZoneInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "memberIds": [
        "ID",
        true,
        true,
        false
      ],
      "name": [
        "String",
        false,
        false,
        false
      ]
    },
    "CustomerFilterParameter": {
      "_and": [
        "CustomerFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "CustomerFilterParameter",
        true,
        true,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "emailAddress": [
        "StringOperators",
        true,
        false,
        false
      ],
      "firstName": [
        "StringOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "lastName": [
        "StringOperators",
        true,
        false,
        false
      ],
      "phoneNumber": [
        "StringOperators",
        true,
        false,
        false
      ],
      "postalCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "title": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "CustomerGroupFilterParameter": {
      "_and": [
        "CustomerGroupFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "CustomerGroupFilterParameter",
        true,
        true,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "CustomerGroupListOptions": {
      "filter": [
        "CustomerGroupFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "CustomerGroupSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "CustomerGroupSortParameter": {
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "CustomerListOptions": {
      "filter": [
        "CustomerFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "CustomerSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "CustomerSortParameter": {
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "emailAddress": [
        "SortOrder",
        true,
        false,
        false
      ],
      "firstName": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "lastName": [
        "SortOrder",
        true,
        false,
        false
      ],
      "phoneNumber": [
        "SortOrder",
        true,
        false,
        false
      ],
      "title": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "DateListOperators": {
      "inList": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "DateOperators": {
      "after": [
        "DateTime",
        true,
        false,
        false
      ],
      "before": [
        "DateTime",
        true,
        false,
        false
      ],
      "between": [
        "DateRange",
        true,
        false,
        false
      ],
      "eq": [
        "DateTime",
        true,
        false,
        false
      ],
      "isNull": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "DateRange": {
      "end": [
        "DateTime",
        false,
        false,
        false
      ],
      "start": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "DeleteAssetInput": {
      "assetId": [
        "ID",
        false,
        false,
        false
      ],
      "deleteFromAllChannels": [
        "Boolean",
        true,
        false,
        false
      ],
      "force": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "DeleteAssetsInput": {
      "assetIds": [
        "ID",
        false,
        true,
        false
      ],
      "deleteFromAllChannels": [
        "Boolean",
        true,
        false,
        false
      ],
      "force": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "DeleteStockLocationInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "transferToLocationId": [
        "ID",
        true,
        false,
        false
      ]
    },
    "DuplicateEntityInput": {
      "duplicatorInput": [
        "ConfigurableOperationInput",
        false,
        false,
        false
      ],
      "entityId": [
        "ID",
        false,
        false,
        false
      ],
      "entityName": [
        "String",
        false,
        false,
        false
      ]
    },
    "FacetFilterParameter": {
      "_and": [
        "FacetFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "FacetFilterParameter",
        true,
        true,
        false
      ],
      "code": [
        "StringOperators",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "global": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "isPrivate": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "languageCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "showOnProductDetail": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "FacetListOptions": {
      "filter": [
        "FacetFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "FacetSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "FacetSortParameter": {
      "code": [
        "SortOrder",
        true,
        false,
        false
      ],
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "showOnProductDetail": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "FacetTranslationInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        true,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ]
    },
    "FacetValueFilterInput": {
      "and": [
        "ID",
        true,
        false,
        false
      ],
      "or": [
        "ID",
        true,
        true,
        false
      ]
    },
    "FacetValueFilterParameter": {
      "_and": [
        "FacetValueFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "FacetValueFilterParameter",
        true,
        true,
        false
      ],
      "code": [
        "StringOperators",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "facetId": [
        "IDOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "languageCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "FacetValueListOptions": {
      "filter": [
        "FacetValueFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "FacetValueSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "FacetValueSortParameter": {
      "code": [
        "SortOrder",
        true,
        false,
        false
      ],
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "facetId": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "FacetValueTranslationInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        true,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ]
    },
    "FulfillOrderInput": {
      "handler": [
        "ConfigurableOperationInput",
        false,
        false,
        false
      ],
      "lines": [
        "OrderLineInput",
        false,
        true,
        false
      ]
    },
    "HistoryEntryFilterParameter": {
      "_and": [
        "HistoryEntryFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "HistoryEntryFilterParameter",
        true,
        true,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "isPublic": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "type": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "HistoryEntryListOptions": {
      "filter": [
        "HistoryEntryFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "HistoryEntrySortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "HistoryEntrySortParameter": {
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "IDListOperators": {
      "inList": [
        "ID",
        false,
        false,
        false
      ]
    },
    "IDOperators": {
      "eq": [
        "String",
        true,
        false,
        false
      ],
      "in": [
        "String",
        true,
        true,
        false
      ],
      "isNull": [
        "Boolean",
        true,
        false,
        false
      ],
      "notEq": [
        "String",
        true,
        false,
        false
      ],
      "notIn": [
        "String",
        true,
        true,
        false
      ]
    },
    "JobFilterParameter": {
      "_and": [
        "JobFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "JobFilterParameter",
        true,
        true,
        false
      ],
      "attempts": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "duration": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "isSettled": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "progress": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "queueName": [
        "StringOperators",
        true,
        false,
        false
      ],
      "retries": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "settledAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "startedAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "state": [
        "StringOperators",
        true,
        false,
        false
      ]
    },
    "JobListOptions": {
      "filter": [
        "JobFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "JobSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "JobSortParameter": {
      "attempts": [
        "SortOrder",
        true,
        false,
        false
      ],
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "duration": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "progress": [
        "SortOrder",
        true,
        false,
        false
      ],
      "queueName": [
        "SortOrder",
        true,
        false,
        false
      ],
      "retries": [
        "SortOrder",
        true,
        false,
        false
      ],
      "settledAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "startedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "ManualPaymentInput": {
      "metadata": [
        "JSON",
        true,
        false,
        false
      ],
      "method": [
        "String",
        false,
        false,
        false
      ],
      "orderId": [
        "ID",
        false,
        false,
        false
      ],
      "transactionId": [
        "String",
        true,
        false,
        false
      ]
    },
    "MetricSummaryInput": {
      "interval": [
        "MetricInterval",
        false,
        false,
        false
      ],
      "refresh": [
        "Boolean",
        true,
        false,
        false
      ],
      "types": [
        "MetricType",
        false,
        true,
        false
      ]
    },
    "ModifyOrderInput": {
      "addItems": [
        "AddItemInput",
        true,
        true,
        false
      ],
      "adjustOrderLines": [
        "OrderLineInput",
        true,
        true,
        false
      ],
      "couponCodes": [
        "String",
        true,
        true,
        false
      ],
      "dryRun": [
        "Boolean",
        false,
        false,
        false
      ],
      "note": [
        "String",
        true,
        false,
        false
      ],
      "options": [
        "ModifyOrderOptions",
        true,
        false,
        false
      ],
      "orderId": [
        "ID",
        false,
        false,
        false
      ],
      "refund": [
        "AdministratorRefundInput",
        true,
        false,
        false
      ],
      "refunds": [
        "AdministratorRefundInput",
        true,
        true,
        false
      ],
      "shippingMethodIds": [
        "ID",
        true,
        true,
        false
      ],
      "surcharges": [
        "SurchargeInput",
        true,
        true,
        false
      ],
      "updateBillingAddress": [
        "UpdateOrderAddressInput",
        true,
        false,
        false
      ],
      "updateShippingAddress": [
        "UpdateOrderAddressInput",
        true,
        false,
        false
      ]
    },
    "ModifyOrderOptions": {
      "freezePromotions": [
        "Boolean",
        true,
        false,
        false
      ],
      "recalculateShipping": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "MoveCollectionInput": {
      "collectionId": [
        "ID",
        false,
        false,
        false
      ],
      "index": [
        "Int",
        false,
        false,
        false
      ],
      "parentId": [
        "ID",
        false,
        false,
        false
      ]
    },
    "NativeAuthInput": {
      "password": [
        "String",
        false,
        false,
        false
      ],
      "username": [
        "String",
        false,
        false,
        false
      ]
    },
    "NumberListOperators": {
      "inList": [
        "Float",
        false,
        false,
        false
      ]
    },
    "NumberOperators": {
      "between": [
        "NumberRange",
        true,
        false,
        false
      ],
      "eq": [
        "Float",
        true,
        false,
        false
      ],
      "gt": [
        "Float",
        true,
        false,
        false
      ],
      "gte": [
        "Float",
        true,
        false,
        false
      ],
      "isNull": [
        "Boolean",
        true,
        false,
        false
      ],
      "lt": [
        "Float",
        true,
        false,
        false
      ],
      "lte": [
        "Float",
        true,
        false,
        false
      ]
    },
    "NumberRange": {
      "end": [
        "Float",
        false,
        false,
        false
      ],
      "start": [
        "Float",
        false,
        false,
        false
      ]
    },
    "OrderFilterParameter": {
      "_and": [
        "OrderFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "OrderFilterParameter",
        true,
        true,
        false
      ],
      "active": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "aggregateOrderId": [
        "IDOperators",
        true,
        false,
        false
      ],
      "code": [
        "StringOperators",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "currencyCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "customerLastName": [
        "StringOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "orderPlacedAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "shipping": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "shippingWithTax": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "state": [
        "StringOperators",
        true,
        false,
        false
      ],
      "subTotal": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "subTotalWithTax": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "total": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "totalQuantity": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "totalWithTax": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "transactionId": [
        "StringOperators",
        true,
        false,
        false
      ],
      "type": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "OrderLineInput": {
      "orderLineId": [
        "ID",
        false,
        false,
        false
      ],
      "quantity": [
        "Int",
        false,
        false,
        false
      ]
    },
    "OrderListOptions": {
      "filter": [
        "OrderFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "OrderSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "OrderSortParameter": {
      "aggregateOrderId": [
        "SortOrder",
        true,
        false,
        false
      ],
      "code": [
        "SortOrder",
        true,
        false,
        false
      ],
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "customerLastName": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "orderPlacedAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "shipping": [
        "SortOrder",
        true,
        false,
        false
      ],
      "shippingWithTax": [
        "SortOrder",
        true,
        false,
        false
      ],
      "state": [
        "SortOrder",
        true,
        false,
        false
      ],
      "subTotal": [
        "SortOrder",
        true,
        false,
        false
      ],
      "subTotalWithTax": [
        "SortOrder",
        true,
        false,
        false
      ],
      "total": [
        "SortOrder",
        true,
        false,
        false
      ],
      "totalQuantity": [
        "SortOrder",
        true,
        false,
        false
      ],
      "totalWithTax": [
        "SortOrder",
        true,
        false,
        false
      ],
      "transactionId": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "PaymentMethodFilterParameter": {
      "_and": [
        "PaymentMethodFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "PaymentMethodFilterParameter",
        true,
        true,
        false
      ],
      "code": [
        "StringOperators",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "description": [
        "StringOperators",
        true,
        false,
        false
      ],
      "enabled": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "PaymentMethodListOptions": {
      "filter": [
        "PaymentMethodFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "PaymentMethodSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "PaymentMethodSortParameter": {
      "code": [
        "SortOrder",
        true,
        false,
        false
      ],
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "description": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "PaymentMethodTranslationInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        true,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ]
    },
    "PreviewCollectionVariantsInput": {
      "filters": [
        "ConfigurableOperationInput",
        false,
        true,
        false
      ],
      "inheritFilters": [
        "Boolean",
        false,
        false,
        false
      ],
      "parentId": [
        "ID",
        true,
        false,
        false
      ]
    },
    "PriceRangeInput": {
      "max": [
        "Int",
        false,
        false,
        false
      ],
      "min": [
        "Int",
        false,
        false,
        false
      ]
    },
    "ProductFilterParameter": {
      "_and": [
        "ProductFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "ProductFilterParameter",
        true,
        true,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "description": [
        "StringOperators",
        true,
        false,
        false
      ],
      "enabled": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "facetValueId": [
        "IDOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "languageCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "reviewCount": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "reviewRating": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "sku": [
        "StringOperators",
        true,
        false,
        false
      ],
      "slug": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "ProductListOptions": {
      "filter": [
        "ProductFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "ProductSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "ProductOptionFilterParameter": {
      "_and": [
        "ProductOptionFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "ProductOptionFilterParameter",
        true,
        true,
        false
      ],
      "code": [
        "StringOperators",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "groupId": [
        "IDOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "languageCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "ProductOptionGroupFilterParameter": {
      "_and": [
        "ProductOptionGroupFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "ProductOptionGroupFilterParameter",
        true,
        true,
        false
      ],
      "code": [
        "StringOperators",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "global": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "languageCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "ProductOptionGroupListOptions": {
      "filter": [
        "ProductOptionGroupFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "ProductOptionGroupSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "ProductOptionGroupSortParameter": {
      "code": [
        "SortOrder",
        true,
        false,
        false
      ],
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "ProductOptionGroupTranslationInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        true,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ]
    },
    "ProductOptionListOptions": {
      "filter": [
        "ProductOptionFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "ProductOptionSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "ProductOptionSortParameter": {
      "code": [
        "SortOrder",
        true,
        false,
        false
      ],
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "groupId": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "ProductOptionTranslationInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        true,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ]
    },
    "ProductReviewFilterParameter": {
      "_and": [
        "ProductReviewFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "ProductReviewFilterParameter",
        true,
        true,
        false
      ],
      "authorLocation": [
        "StringOperators",
        true,
        false,
        false
      ],
      "authorName": [
        "StringOperators",
        true,
        false,
        false
      ],
      "body": [
        "StringOperators",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "downvotes": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "rating": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "response": [
        "StringOperators",
        true,
        false,
        false
      ],
      "responseCreatedAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "state": [
        "StringOperators",
        true,
        false,
        false
      ],
      "summary": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "upvotes": [
        "NumberOperators",
        true,
        false,
        false
      ]
    },
    "ProductReviewListOptions": {
      "filter": [
        "ProductReviewFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "ProductReviewSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "ProductReviewSortParameter": {
      "authorLocation": [
        "SortOrder",
        true,
        false,
        false
      ],
      "authorName": [
        "SortOrder",
        true,
        false,
        false
      ],
      "body": [
        "SortOrder",
        true,
        false,
        false
      ],
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "downvotes": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "rating": [
        "SortOrder",
        true,
        false,
        false
      ],
      "response": [
        "SortOrder",
        true,
        false,
        false
      ],
      "responseCreatedAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "state": [
        "SortOrder",
        true,
        false,
        false
      ],
      "summary": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "upvotes": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "ProductSortParameter": {
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "description": [
        "SortOrder",
        true,
        false,
        false
      ],
      "featuredReview": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "reviewCount": [
        "SortOrder",
        true,
        false,
        false
      ],
      "reviewRating": [
        "SortOrder",
        true,
        false,
        false
      ],
      "slug": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "ProductTranslationInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        true,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ],
      "slug": [
        "String",
        true,
        false,
        false
      ]
    },
    "ProductVariantFilterParameter": {
      "_and": [
        "ProductVariantFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "ProductVariantFilterParameter",
        true,
        true,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "currencyCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "enabled": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "facetValueId": [
        "IDOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "languageCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "outOfStockThreshold": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "price": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "priceWithTax": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "productId": [
        "IDOperators",
        true,
        false,
        false
      ],
      "sku": [
        "StringOperators",
        true,
        false,
        false
      ],
      "stockAllocated": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "stockLevel": [
        "StringOperators",
        true,
        false,
        false
      ],
      "stockOnHand": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "trackInventory": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "useGlobalOutOfStockThreshold": [
        "BooleanOperators",
        true,
        false,
        false
      ]
    },
    "ProductVariantListOptions": {
      "filter": [
        "ProductVariantFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "ProductVariantSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "ProductVariantSortParameter": {
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "outOfStockThreshold": [
        "SortOrder",
        true,
        false,
        false
      ],
      "price": [
        "SortOrder",
        true,
        false,
        false
      ],
      "priceWithTax": [
        "SortOrder",
        true,
        false,
        false
      ],
      "productId": [
        "SortOrder",
        true,
        false,
        false
      ],
      "sku": [
        "SortOrder",
        true,
        false,
        false
      ],
      "stockAllocated": [
        "SortOrder",
        true,
        false,
        false
      ],
      "stockLevel": [
        "SortOrder",
        true,
        false,
        false
      ],
      "stockOnHand": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "ProductVariantTranslationInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        true,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ]
    },
    "PromotionFilterParameter": {
      "_and": [
        "PromotionFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "PromotionFilterParameter",
        true,
        true,
        false
      ],
      "couponCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "description": [
        "StringOperators",
        true,
        false,
        false
      ],
      "enabled": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "endsAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "perCustomerUsageLimit": [
        "NumberOperators",
        true,
        false,
        false
      ],
      "startsAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "usageLimit": [
        "NumberOperators",
        true,
        false,
        false
      ]
    },
    "PromotionListOptions": {
      "filter": [
        "PromotionFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "PromotionSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "PromotionSortParameter": {
      "couponCode": [
        "SortOrder",
        true,
        false,
        false
      ],
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "description": [
        "SortOrder",
        true,
        false,
        false
      ],
      "endsAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "perCustomerUsageLimit": [
        "SortOrder",
        true,
        false,
        false
      ],
      "startsAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "usageLimit": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "PromotionTranslationInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        true,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ]
    },
    "ProvinceFilterParameter": {
      "_and": [
        "ProvinceFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "ProvinceFilterParameter",
        true,
        true,
        false
      ],
      "code": [
        "StringOperators",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "enabled": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "languageCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "parentId": [
        "IDOperators",
        true,
        false,
        false
      ],
      "type": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "ProvinceListOptions": {
      "filter": [
        "ProvinceFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "ProvinceSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "ProvinceSortParameter": {
      "code": [
        "SortOrder",
        true,
        false,
        false
      ],
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "parentId": [
        "SortOrder",
        true,
        false,
        false
      ],
      "type": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "ProvinceTranslationInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        true,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ]
    },
    "RefundOrderInput": {
      "amount": [
        "Money",
        true,
        false,
        false
      ],
      "paymentId": [
        "ID",
        false,
        false,
        false
      ],
      "reason": [
        "String",
        true,
        false,
        false
      ]
    },
    "RemoveCollectionsFromChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "collectionIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "RemoveFacetsFromChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "facetIds": [
        "ID",
        false,
        true,
        false
      ],
      "force": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "RemoveOptionGroupsFromChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "force": [
        "Boolean",
        true,
        false,
        false
      ],
      "groupIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "RemovePaymentMethodsFromChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "paymentMethodIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "RemoveProductVariantsFromChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "productVariantIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "RemoveProductsFromChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "productIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "RemovePromotionsFromChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "promotionIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "RemoveShippingMethodsFromChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "shippingMethodIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "RemoveStockLocationsFromChannelInput": {
      "channelId": [
        "ID",
        false,
        false,
        false
      ],
      "stockLocationIds": [
        "ID",
        false,
        true,
        false
      ]
    },
    "RoleFilterParameter": {
      "_and": [
        "RoleFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "RoleFilterParameter",
        true,
        true,
        false
      ],
      "code": [
        "StringOperators",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "description": [
        "StringOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "RoleListOptions": {
      "filter": [
        "RoleFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "RoleSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "RoleSortParameter": {
      "code": [
        "SortOrder",
        true,
        false,
        false
      ],
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "description": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "SearchInput": {
      "collectionId": [
        "ID",
        true,
        false,
        false
      ],
      "collectionSlug": [
        "String",
        true,
        false,
        false
      ],
      "facetValueFilters": [
        "FacetValueFilterInput",
        true,
        true,
        false
      ],
      "groupByProduct": [
        "Boolean",
        true,
        false,
        false
      ],
      "inStock": [
        "Boolean",
        true,
        false,
        false
      ],
      "priceRange": [
        "PriceRangeInput",
        true,
        false,
        false
      ],
      "priceRangeWithTax": [
        "PriceRangeInput",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "SearchResultSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ],
      "term": [
        "String",
        true,
        false,
        false
      ]
    },
    "SearchResultSortParameter": {
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "price": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "SellerFilterParameter": {
      "_and": [
        "SellerFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "SellerFilterParameter",
        true,
        true,
        false
      ],
      "connectedAccountId": [
        "StringOperators",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "SellerListOptions": {
      "filter": [
        "SellerFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "SellerSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "SellerSortParameter": {
      "connectedAccountId": [
        "SortOrder",
        true,
        false,
        false
      ],
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "SetOrderCustomerInput": {
      "customerId": [
        "ID",
        false,
        false,
        false
      ],
      "note": [
        "String",
        true,
        false,
        false
      ],
      "orderId": [
        "ID",
        false,
        false,
        false
      ]
    },
    "SettleRefundInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "transactionId": [
        "String",
        false,
        false,
        false
      ]
    },
    "ShippingMethodFilterParameter": {
      "_and": [
        "ShippingMethodFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "ShippingMethodFilterParameter",
        true,
        true,
        false
      ],
      "code": [
        "StringOperators",
        true,
        false,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "description": [
        "StringOperators",
        true,
        false,
        false
      ],
      "fulfillmentHandlerCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "languageCode": [
        "StringOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "ShippingMethodListOptions": {
      "filter": [
        "ShippingMethodFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "ShippingMethodSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "ShippingMethodSortParameter": {
      "code": [
        "SortOrder",
        true,
        false,
        false
      ],
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "description": [
        "SortOrder",
        true,
        false,
        false
      ],
      "fulfillmentHandlerCode": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "ShippingMethodTranslationInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        true,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ]
    },
    "StockLevelInput": {
      "stockLocationId": [
        "ID",
        false,
        false,
        false
      ],
      "stockOnHand": [
        "Int",
        false,
        false,
        false
      ]
    },
    "StockLocationFilterParameter": {
      "_and": [
        "StockLocationFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "StockLocationFilterParameter",
        true,
        true,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "description": [
        "StringOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "StockLocationListOptions": {
      "filter": [
        "StockLocationFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "StockLocationSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "StockLocationSortParameter": {
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "description": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "StockMovementListOptions": {
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ],
      "type": [
        "StockMovementType",
        true,
        false,
        false
      ]
    },
    "StringListOperators": {
      "inList": [
        "String",
        false,
        false,
        false
      ]
    },
    "StringOperators": {
      "contains": [
        "String",
        true,
        false,
        false
      ],
      "eq": [
        "String",
        true,
        false,
        false
      ],
      "in": [
        "String",
        true,
        true,
        false
      ],
      "isNull": [
        "Boolean",
        true,
        false,
        false
      ],
      "notContains": [
        "String",
        true,
        false,
        false
      ],
      "notEq": [
        "String",
        true,
        false,
        false
      ],
      "notIn": [
        "String",
        true,
        true,
        false
      ],
      "regex": [
        "String",
        true,
        false,
        false
      ]
    },
    "SurchargeInput": {
      "description": [
        "String",
        false,
        false,
        false
      ],
      "price": [
        "Money",
        false,
        false,
        false
      ],
      "priceIncludesTax": [
        "Boolean",
        false,
        false,
        false
      ],
      "sku": [
        "String",
        true,
        false,
        false
      ],
      "taxDescription": [
        "String",
        true,
        false,
        false
      ],
      "taxRate": [
        "Float",
        true,
        false,
        false
      ]
    },
    "TagFilterParameter": {
      "_and": [
        "TagFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "TagFilterParameter",
        true,
        true,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "value": [
        "StringOperators",
        true,
        false,
        false
      ]
    },
    "TagListOptions": {
      "filter": [
        "TagFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "TagSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "TagSortParameter": {
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "value": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "TaxCategoryFilterParameter": {
      "_and": [
        "TaxCategoryFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "TaxCategoryFilterParameter",
        true,
        true,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "isDefault": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "TaxCategoryListOptions": {
      "filter": [
        "TaxCategoryFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "TaxCategorySortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "TaxCategorySortParameter": {
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "TaxRateFilterParameter": {
      "_and": [
        "TaxRateFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "TaxRateFilterParameter",
        true,
        true,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "enabled": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "value": [
        "NumberOperators",
        true,
        false,
        false
      ]
    },
    "TaxRateListOptions": {
      "filter": [
        "TaxRateFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "TaxRateSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "TaxRateSortParameter": {
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "value": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "TestEligibleShippingMethodsInput": {
      "lines": [
        "TestShippingMethodOrderLineInput",
        false,
        true,
        false
      ],
      "shippingAddress": [
        "CreateAddressInput",
        false,
        false,
        false
      ]
    },
    "TestShippingMethodInput": {
      "calculator": [
        "ConfigurableOperationInput",
        false,
        false,
        false
      ],
      "checker": [
        "ConfigurableOperationInput",
        false,
        false,
        false
      ],
      "lines": [
        "TestShippingMethodOrderLineInput",
        false,
        true,
        false
      ],
      "shippingAddress": [
        "CreateAddressInput",
        false,
        false,
        false
      ]
    },
    "TestShippingMethodOrderLineInput": {
      "productVariantId": [
        "ID",
        false,
        false,
        false
      ],
      "quantity": [
        "Int",
        false,
        false,
        false
      ]
    },
    "UpdateActiveAdministratorInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "emailAddress": [
        "String",
        true,
        false,
        false
      ],
      "firstName": [
        "String",
        true,
        false,
        false
      ],
      "lastName": [
        "String",
        true,
        false,
        false
      ],
      "password": [
        "String",
        true,
        false,
        false
      ]
    },
    "UpdateAddressInput": {
      "city": [
        "String",
        true,
        false,
        false
      ],
      "company": [
        "String",
        true,
        false,
        false
      ],
      "countryCode": [
        "String",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "defaultBillingAddress": [
        "Boolean",
        true,
        false,
        false
      ],
      "defaultShippingAddress": [
        "Boolean",
        true,
        false,
        false
      ],
      "fullName": [
        "String",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "phoneNumber": [
        "String",
        true,
        false,
        false
      ],
      "postalCode": [
        "String",
        true,
        false,
        false
      ],
      "province": [
        "String",
        true,
        false,
        false
      ],
      "streetLine1": [
        "String",
        true,
        false,
        false
      ],
      "streetLine2": [
        "String",
        true,
        false,
        false
      ]
    },
    "UpdateAdministratorInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "emailAddress": [
        "String",
        true,
        false,
        false
      ],
      "firstName": [
        "String",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "lastName": [
        "String",
        true,
        false,
        false
      ],
      "password": [
        "String",
        true,
        false,
        false
      ],
      "roleIds": [
        "ID",
        true,
        true,
        false
      ]
    },
    "UpdateAssetInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "focalPoint": [
        "CoordinateInput",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ],
      "tags": [
        "String",
        true,
        true,
        false
      ]
    },
    "UpdateChannelInput": {
      "availableCurrencyCodes": [
        "CurrencyCode",
        true,
        true,
        false
      ],
      "availableLanguageCodes": [
        "LanguageCode",
        true,
        true,
        false
      ],
      "code": [
        "String",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "defaultCurrencyCode": [
        "CurrencyCode",
        true,
        false,
        false
      ],
      "defaultLanguageCode": [
        "LanguageCode",
        true,
        false,
        false
      ],
      "defaultShippingZoneId": [
        "ID",
        true,
        false,
        false
      ],
      "defaultTaxZoneId": [
        "ID",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "outOfStockThreshold": [
        "Int",
        true,
        false,
        false
      ],
      "pricesIncludeTax": [
        "Boolean",
        true,
        false,
        false
      ],
      "sellerId": [
        "ID",
        true,
        false,
        false
      ],
      "token": [
        "String",
        true,
        false,
        false
      ],
      "trackInventory": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "UpdateCollectionInput": {
      "assetIds": [
        "ID",
        true,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "featuredAssetId": [
        "ID",
        true,
        false,
        false
      ],
      "filters": [
        "ConfigurableOperationInput",
        true,
        true,
        false
      ],
      "global": [
        "Boolean",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "inheritFilters": [
        "Boolean",
        true,
        false,
        false
      ],
      "isPrivate": [
        "Boolean",
        true,
        false,
        false
      ],
      "parentId": [
        "ID",
        true,
        false,
        false
      ],
      "translations": [
        "UpdateCollectionTranslationInput",
        true,
        true,
        false
      ]
    },
    "UpdateCollectionTranslationInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        true,
        false,
        false
      ],
      "languageCode": [
        "LanguageCode",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ],
      "slug": [
        "String",
        true,
        false,
        false
      ]
    },
    "UpdateCountryInput": {
      "code": [
        "String",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "translations": [
        "CountryTranslationInput",
        true,
        true,
        false
      ]
    },
    "UpdateCustomerGroupInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ]
    },
    "UpdateCustomerInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "emailAddress": [
        "String",
        true,
        false,
        false
      ],
      "firstName": [
        "String",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "lastName": [
        "String",
        true,
        false,
        false
      ],
      "phoneNumber": [
        "String",
        true,
        false,
        false
      ],
      "title": [
        "String",
        true,
        false,
        false
      ]
    },
    "UpdateCustomerNoteInput": {
      "note": [
        "String",
        false,
        false,
        false
      ],
      "noteId": [
        "ID",
        false,
        false,
        false
      ]
    },
    "UpdateFacetCustomFieldsInput": {
      "showOnProductDetail": [
        "Boolean",
        true,
        false,
        false
      ],
      "showOnProductDetailIfIds": [
        "ID",
        true,
        true,
        false
      ]
    },
    "UpdateFacetInput": {
      "code": [
        "String",
        true,
        false,
        false
      ],
      "customFields": [
        "UpdateFacetCustomFieldsInput",
        true,
        false,
        false
      ],
      "global": [
        "Boolean",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "isPrivate": [
        "Boolean",
        true,
        false,
        false
      ],
      "translations": [
        "FacetTranslationInput",
        true,
        true,
        false
      ]
    },
    "UpdateFacetValueInput": {
      "code": [
        "String",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "translations": [
        "FacetValueTranslationInput",
        true,
        true,
        false
      ]
    },
    "UpdateGlobalSettingsInput": {
      "availableLanguages": [
        "LanguageCode",
        true,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "outOfStockThreshold": [
        "Int",
        true,
        false,
        false
      ],
      "trackInventory": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "UpdateOrderAddressInput": {
      "city": [
        "String",
        true,
        false,
        false
      ],
      "company": [
        "String",
        true,
        false,
        false
      ],
      "countryCode": [
        "String",
        true,
        false,
        false
      ],
      "fullName": [
        "String",
        true,
        false,
        false
      ],
      "phoneNumber": [
        "String",
        true,
        false,
        false
      ],
      "postalCode": [
        "String",
        true,
        false,
        false
      ],
      "province": [
        "String",
        true,
        false,
        false
      ],
      "streetLine1": [
        "String",
        true,
        false,
        false
      ],
      "streetLine2": [
        "String",
        true,
        false,
        false
      ]
    },
    "UpdateOrderInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ]
    },
    "UpdateOrderNoteInput": {
      "isPublic": [
        "Boolean",
        true,
        false,
        false
      ],
      "note": [
        "String",
        true,
        false,
        false
      ],
      "noteId": [
        "ID",
        false,
        false,
        false
      ]
    },
    "UpdatePaymentMethodInput": {
      "checker": [
        "ConfigurableOperationInput",
        true,
        false,
        false
      ],
      "code": [
        "String",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        true,
        false,
        false
      ],
      "handler": [
        "ConfigurableOperationInput",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "translations": [
        "PaymentMethodTranslationInput",
        true,
        true,
        false
      ]
    },
    "UpdateProductCustomFieldsInput": {
      "featuredReviewId": [
        "ID",
        true,
        false,
        false
      ],
      "reviewCount": [
        "Float",
        true,
        false,
        false
      ],
      "reviewRating": [
        "Float",
        true,
        false,
        false
      ]
    },
    "UpdateProductInput": {
      "assetIds": [
        "ID",
        true,
        true,
        false
      ],
      "customFields": [
        "UpdateProductCustomFieldsInput",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        true,
        false,
        false
      ],
      "facetValueIds": [
        "ID",
        true,
        true,
        false
      ],
      "featuredAssetId": [
        "ID",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "translations": [
        "ProductTranslationInput",
        true,
        true,
        false
      ]
    },
    "UpdateProductOptionGroupInput": {
      "code": [
        "String",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "global": [
        "Boolean",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "translations": [
        "ProductOptionGroupTranslationInput",
        true,
        true,
        false
      ]
    },
    "UpdateProductOptionInput": {
      "code": [
        "String",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "translations": [
        "ProductOptionGroupTranslationInput",
        true,
        true,
        false
      ]
    },
    "UpdateProductReviewInput": {
      "body": [
        "String",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "response": [
        "String",
        true,
        false,
        false
      ],
      "summary": [
        "String",
        true,
        false,
        false
      ]
    },
    "UpdateProductVariantInput": {
      "assetIds": [
        "ID",
        true,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        true,
        false,
        false
      ],
      "facetValueIds": [
        "ID",
        true,
        true,
        false
      ],
      "featuredAssetId": [
        "ID",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "optionIds": [
        "ID",
        true,
        true,
        false
      ],
      "outOfStockThreshold": [
        "Int",
        true,
        false,
        false
      ],
      "price": [
        "Money",
        true,
        false,
        false
      ],
      "prices": [
        "UpdateProductVariantPriceInput",
        true,
        true,
        false
      ],
      "sku": [
        "String",
        true,
        false,
        false
      ],
      "stockLevels": [
        "StockLevelInput",
        true,
        true,
        false
      ],
      "stockOnHand": [
        "Int",
        true,
        false,
        false
      ],
      "taxCategoryId": [
        "ID",
        true,
        false,
        false
      ],
      "trackInventory": [
        "GlobalFlag",
        true,
        false,
        false
      ],
      "translations": [
        "ProductVariantTranslationInput",
        true,
        true,
        false
      ],
      "useGlobalOutOfStockThreshold": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "UpdateProductVariantPriceInput": {
      "currencyCode": [
        "CurrencyCode",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "delete": [
        "Boolean",
        true,
        false,
        false
      ],
      "price": [
        "Money",
        false,
        false,
        false
      ]
    },
    "UpdatePromotionInput": {
      "actions": [
        "ConfigurableOperationInput",
        true,
        true,
        false
      ],
      "conditions": [
        "ConfigurableOperationInput",
        true,
        true,
        false
      ],
      "couponCode": [
        "String",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        true,
        false,
        false
      ],
      "endsAt": [
        "DateTime",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "perCustomerUsageLimit": [
        "Int",
        true,
        false,
        false
      ],
      "startsAt": [
        "DateTime",
        true,
        false,
        false
      ],
      "translations": [
        "PromotionTranslationInput",
        true,
        true,
        false
      ],
      "usageLimit": [
        "Int",
        true,
        false,
        false
      ]
    },
    "UpdateProvinceInput": {
      "code": [
        "String",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "translations": [
        "ProvinceTranslationInput",
        true,
        true,
        false
      ]
    },
    "UpdateRoleInput": {
      "channelIds": [
        "ID",
        true,
        true,
        false
      ],
      "code": [
        "String",
        true,
        false,
        false
      ],
      "description": [
        "String",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "permissions": [
        "Permission",
        true,
        true,
        false
      ]
    },
    "UpdateScheduledTaskInput": {
      "enabled": [
        "Boolean",
        true,
        false,
        false
      ],
      "id": [
        "String",
        false,
        false,
        false
      ]
    },
    "UpdateSellerCustomFieldsInput": {
      "connectedAccountId": [
        "String",
        true,
        false,
        false
      ]
    },
    "UpdateSellerInput": {
      "customFields": [
        "UpdateSellerCustomFieldsInput",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ]
    },
    "UpdateShippingMethodInput": {
      "calculator": [
        "ConfigurableOperationInput",
        true,
        false,
        false
      ],
      "checker": [
        "ConfigurableOperationInput",
        true,
        false,
        false
      ],
      "code": [
        "String",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "fulfillmentHandler": [
        "String",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "translations": [
        "ShippingMethodTranslationInput",
        false,
        true,
        false
      ]
    },
    "UpdateStockLocationInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "description": [
        "String",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ]
    },
    "UpdateTagInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "value": [
        "String",
        true,
        false,
        false
      ]
    },
    "UpdateTaxCategoryInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "isDefault": [
        "Boolean",
        true,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ]
    },
    "UpdateTaxRateInput": {
      "categoryId": [
        "ID",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "customerGroupId": [
        "ID",
        true,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ],
      "value": [
        "Float",
        true,
        false,
        false
      ],
      "zoneId": [
        "ID",
        true,
        false,
        false
      ]
    },
    "UpdateZoneInput": {
      "customFields": [
        "JSON",
        true,
        false,
        false
      ],
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "name": [
        "String",
        true,
        false,
        false
      ]
    },
    "ZoneFilterParameter": {
      "_and": [
        "ZoneFilterParameter",
        true,
        true,
        false
      ],
      "_or": [
        "ZoneFilterParameter",
        true,
        true,
        false
      ],
      "createdAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "id": [
        "IDOperators",
        true,
        false,
        false
      ],
      "name": [
        "StringOperators",
        true,
        false,
        false
      ],
      "updatedAt": [
        "DateOperators",
        true,
        false,
        false
      ]
    },
    "ZoneListOptions": {
      "filter": [
        "ZoneFilterParameter",
        true,
        false,
        false
      ],
      "filterOperator": [
        "LogicalOperator",
        true,
        false,
        false
      ],
      "skip": [
        "Int",
        true,
        false,
        false
      ],
      "sort": [
        "ZoneSortParameter",
        true,
        false,
        false
      ],
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "ZoneSortParameter": {
      "createdAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "id": [
        "SortOrder",
        true,
        false,
        false
      ],
      "name": [
        "SortOrder",
        true,
        false,
        false
      ],
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    }
  },
  "scalars": [
    "ID",
    "Int",
    "Boolean",
    "String",
    "Float",
    "DateTime",
    "JSON",
    "Money",
    "Upload"
  ],
  "enums": {
    "AdjustmentType": [
      "DISTRIBUTED_ORDER_PROMOTION",
      "OTHER",
      "PROMOTION"
    ],
    "AssetType": [
      "BINARY",
      "IMAGE",
      "VIDEO"
    ],
    "CurrencyCode": [
      "AED",
      "AFN",
      "ALL",
      "AMD",
      "ANG",
      "AOA",
      "ARS",
      "AUD",
      "AWG",
      "AZN",
      "BAM",
      "BBD",
      "BDT",
      "BGN",
      "BHD",
      "BIF",
      "BMD",
      "BND",
      "BOB",
      "BRL",
      "BSD",
      "BTN",
      "BWP",
      "BYN",
      "BZD",
      "CAD",
      "CDF",
      "CHF",
      "CLP",
      "CNY",
      "COP",
      "CRC",
      "CUC",
      "CUP",
      "CVE",
      "CZK",
      "DJF",
      "DKK",
      "DOP",
      "DZD",
      "EGP",
      "ERN",
      "ETB",
      "EUR",
      "FJD",
      "FKP",
      "GBP",
      "GEL",
      "GHS",
      "GIP",
      "GMD",
      "GNF",
      "GTQ",
      "GYD",
      "HKD",
      "HNL",
      "HRK",
      "HTG",
      "HUF",
      "IDR",
      "ILS",
      "INR",
      "IQD",
      "IRR",
      "ISK",
      "JMD",
      "JOD",
      "JPY",
      "KES",
      "KGS",
      "KHR",
      "KMF",
      "KPW",
      "KRW",
      "KWD",
      "KYD",
      "KZT",
      "LAK",
      "LBP",
      "LKR",
      "LRD",
      "LSL",
      "LYD",
      "MAD",
      "MDL",
      "MGA",
      "MKD",
      "MMK",
      "MNT",
      "MOP",
      "MRU",
      "MUR",
      "MVR",
      "MWK",
      "MXN",
      "MYR",
      "MZN",
      "NAD",
      "NGN",
      "NIO",
      "NOK",
      "NPR",
      "NZD",
      "OMR",
      "PAB",
      "PEN",
      "PGK",
      "PHP",
      "PKR",
      "PLN",
      "PYG",
      "QAR",
      "RON",
      "RSD",
      "RUB",
      "RWF",
      "SAR",
      "SBD",
      "SCR",
      "SDG",
      "SEK",
      "SGD",
      "SHP",
      "SLL",
      "SOS",
      "SRD",
      "SSP",
      "STN",
      "SVC",
      "SYP",
      "SZL",
      "THB",
      "TJS",
      "TMT",
      "TND",
      "TOP",
      "TRY",
      "TTD",
      "TWD",
      "TZS",
      "UAH",
      "UGX",
      "USD",
      "UYU",
      "UZS",
      "VES",
      "VND",
      "VUV",
      "WST",
      "XAF",
      "XCD",
      "XOF",
      "XPF",
      "YER",
      "ZAR",
      "ZMW",
      "ZWL"
    ],
    "DeletionResult": [
      "DELETED",
      "NOT_DELETED"
    ],
    "ErrorCode": [
      "ALREADY_REFUNDED_ERROR",
      "CANCEL_ACTIVE_ORDER_ERROR",
      "CANCEL_PAYMENT_ERROR",
      "CHANNEL_DEFAULT_LANGUAGE_ERROR",
      "COUPON_CODE_EXPIRED_ERROR",
      "COUPON_CODE_INVALID_ERROR",
      "COUPON_CODE_LIMIT_ERROR",
      "CREATE_FULFILLMENT_ERROR",
      "DUPLICATE_ENTITY_ERROR",
      "EMAIL_ADDRESS_CONFLICT_ERROR",
      "EMPTY_ORDER_LINE_SELECTION_ERROR",
      "FACET_IN_USE_ERROR",
      "FULFILLMENT_STATE_TRANSITION_ERROR",
      "GUEST_CHECKOUT_ERROR",
      "INELIGIBLE_SHIPPING_METHOD_ERROR",
      "INSUFFICIENT_STOCK_ERROR",
      "INSUFFICIENT_STOCK_ON_HAND_ERROR",
      "INVALID_CREDENTIALS_ERROR",
      "INVALID_FULFILLMENT_HANDLER_ERROR",
      "ITEMS_ALREADY_FULFILLED_ERROR",
      "LANGUAGE_NOT_AVAILABLE_ERROR",
      "MANUAL_PAYMENT_STATE_ERROR",
      "MIME_TYPE_ERROR",
      "MISSING_CONDITIONS_ERROR",
      "MULTIPLE_ORDER_ERROR",
      "NATIVE_AUTH_STRATEGY_ERROR",
      "NEGATIVE_QUANTITY_ERROR",
      "NOTHING_TO_REFUND_ERROR",
      "NO_ACTIVE_ORDER_ERROR",
      "NO_CHANGES_SPECIFIED_ERROR",
      "OPTION_GROUP_IN_USE_ERROR",
      "ORDER_INTERCEPTOR_ERROR",
      "ORDER_LIMIT_ERROR",
      "ORDER_MODIFICATION_ERROR",
      "ORDER_MODIFICATION_STATE_ERROR",
      "ORDER_STATE_TRANSITION_ERROR",
      "PAYMENT_METHOD_MISSING_ERROR",
      "PAYMENT_ORDER_MISMATCH_ERROR",
      "PAYMENT_STATE_TRANSITION_ERROR",
      "PRODUCT_OPTION_IN_USE_ERROR",
      "QUANTITY_TOO_GREAT_ERROR",
      "REFUND_AMOUNT_ERROR",
      "REFUND_ORDER_STATE_ERROR",
      "REFUND_PAYMENT_ID_MISSING_ERROR",
      "REFUND_STATE_TRANSITION_ERROR",
      "SETTLE_PAYMENT_ERROR",
      "UNKNOWN_ERROR"
    ],
    "GlobalFlag": [
      "FALSE",
      "INHERIT",
      "TRUE"
    ],
    "HistoryEntryType": [
      "CUSTOMER_ADDED_TO_GROUP",
      "CUSTOMER_ADDRESS_CREATED",
      "CUSTOMER_ADDRESS_DELETED",
      "CUSTOMER_ADDRESS_UPDATED",
      "CUSTOMER_DETAIL_UPDATED",
      "CUSTOMER_EMAIL_UPDATE_REQUESTED",
      "CUSTOMER_EMAIL_UPDATE_VERIFIED",
      "CUSTOMER_NOTE",
      "CUSTOMER_PASSWORD_RESET_REQUESTED",
      "CUSTOMER_PASSWORD_RESET_VERIFIED",
      "CUSTOMER_PASSWORD_UPDATED",
      "CUSTOMER_REGISTERED",
      "CUSTOMER_REMOVED_FROM_GROUP",
      "CUSTOMER_VERIFIED",
      "ORDER_CANCELLATION",
      "ORDER_COUPON_APPLIED",
      "ORDER_COUPON_REMOVED",
      "ORDER_CUSTOMER_UPDATED",
      "ORDER_FULFILLMENT",
      "ORDER_FULFILLMENT_TRANSITION",
      "ORDER_MODIFIED",
      "ORDER_NOTE",
      "ORDER_PAYMENT_TRANSITION",
      "ORDER_REFUND_TRANSITION",
      "ORDER_STATE_TRANSITION"
    ],
    "JobState": [
      "CANCELLED",
      "COMPLETED",
      "FAILED",
      "PENDING",
      "RETRYING",
      "RUNNING"
    ],
    "LanguageCode": [
      "af",
      "ak",
      "am",
      "ar",
      "as",
      "az",
      "be",
      "bg",
      "bm",
      "bn",
      "bo",
      "br",
      "bs",
      "ca",
      "ce",
      "co",
      "cs",
      "cu",
      "cy",
      "da",
      "de",
      "de_AT",
      "de_CH",
      "dz",
      "ee",
      "el",
      "en",
      "en_AU",
      "en_CA",
      "en_GB",
      "en_US",
      "eo",
      "es",
      "es_ES",
      "es_MX",
      "et",
      "eu",
      "fa",
      "fa_AF",
      "ff",
      "fi",
      "fo",
      "fr",
      "fr_CA",
      "fr_CH",
      "fy",
      "ga",
      "gd",
      "gl",
      "gu",
      "gv",
      "ha",
      "he",
      "hi",
      "hr",
      "ht",
      "hu",
      "hy",
      "ia",
      "id",
      "ig",
      "ii",
      "is",
      "it",
      "ja",
      "jv",
      "ka",
      "ki",
      "kk",
      "kl",
      "km",
      "kn",
      "ko",
      "ks",
      "ku",
      "kw",
      "ky",
      "la",
      "lb",
      "lg",
      "ln",
      "lo",
      "lt",
      "lu",
      "lv",
      "mg",
      "mi",
      "mk",
      "ml",
      "mn",
      "mr",
      "ms",
      "mt",
      "my",
      "nb",
      "nd",
      "ne",
      "nl",
      "nl_BE",
      "nn",
      "ny",
      "om",
      "or",
      "os",
      "pa",
      "pl",
      "ps",
      "pt",
      "pt_BR",
      "pt_PT",
      "qu",
      "rm",
      "rn",
      "ro",
      "ro_MD",
      "ru",
      "rw",
      "sa",
      "sd",
      "se",
      "sg",
      "si",
      "sk",
      "sl",
      "sm",
      "sn",
      "so",
      "sq",
      "sr",
      "st",
      "su",
      "sv",
      "sw",
      "sw_CD",
      "ta",
      "te",
      "tg",
      "th",
      "ti",
      "tk",
      "to",
      "tr",
      "tt",
      "ug",
      "uk",
      "ur",
      "uz",
      "vi",
      "vo",
      "wo",
      "xh",
      "yi",
      "yo",
      "zh",
      "zh_Hans",
      "zh_Hant",
      "zu"
    ],
    "LogicalOperator": [
      "AND",
      "OR"
    ],
    "MetricInterval": [
      "Daily"
    ],
    "MetricType": [
      "AverageOrderValue",
      "OrderCount",
      "OrderTotal"
    ],
    "OrderType": [
      "Aggregate",
      "Regular",
      "Seller"
    ],
    "Permission": [
      "Authenticated",
      "CreateAdministrator",
      "CreateAsset",
      "CreateCatalog",
      "CreateChannel",
      "CreateCollection",
      "CreateCountry",
      "CreateCustomer",
      "CreateCustomerGroup",
      "CreateFacet",
      "CreateOrder",
      "CreatePaymentMethod",
      "CreateProduct",
      "CreatePromotion",
      "CreateSeller",
      "CreateSettings",
      "CreateShippingMethod",
      "CreateStockLocation",
      "CreateSystem",
      "CreateTag",
      "CreateTaxCategory",
      "CreateTaxRate",
      "CreateZone",
      "DeleteAdministrator",
      "DeleteAsset",
      "DeleteCatalog",
      "DeleteChannel",
      "DeleteCollection",
      "DeleteCountry",
      "DeleteCustomer",
      "DeleteCustomerGroup",
      "DeleteFacet",
      "DeleteOrder",
      "DeletePaymentMethod",
      "DeleteProduct",
      "DeletePromotion",
      "DeleteSeller",
      "DeleteSettings",
      "DeleteShippingMethod",
      "DeleteStockLocation",
      "DeleteSystem",
      "DeleteTag",
      "DeleteTaxCategory",
      "DeleteTaxRate",
      "DeleteZone",
      "Owner",
      "Public",
      "ReadAdministrator",
      "ReadAsset",
      "ReadCatalog",
      "ReadChannel",
      "ReadCollection",
      "ReadCountry",
      "ReadCustomer",
      "ReadCustomerGroup",
      "ReadFacet",
      "ReadOrder",
      "ReadPaymentMethod",
      "ReadProduct",
      "ReadPromotion",
      "ReadSeller",
      "ReadSettings",
      "ReadShippingMethod",
      "ReadStockLocation",
      "ReadSystem",
      "ReadTag",
      "ReadTaxCategory",
      "ReadTaxRate",
      "ReadZone",
      "SuperAdmin",
      "UpdateAdministrator",
      "UpdateAsset",
      "UpdateCatalog",
      "UpdateChannel",
      "UpdateCollection",
      "UpdateCountry",
      "UpdateCustomer",
      "UpdateCustomerGroup",
      "UpdateFacet",
      "UpdateGlobalSettings",
      "UpdateOrder",
      "UpdatePaymentMethod",
      "UpdateProduct",
      "UpdatePromotion",
      "UpdateSeller",
      "UpdateSettings",
      "UpdateShippingMethod",
      "UpdateStockLocation",
      "UpdateSystem",
      "UpdateTag",
      "UpdateTaxCategory",
      "UpdateTaxRate",
      "UpdateZone"
    ],
    "SortOrder": [
      "ASC",
      "DESC"
    ],
    "StockMovementType": [
      "ADJUSTMENT",
      "ALLOCATION",
      "CANCELLATION",
      "RELEASE",
      "RETURN",
      "SALE"
    ],
    "__TypeKind": [
      "SCALAR",
      "OBJECT",
      "INTERFACE",
      "UNION",
      "ENUM",
      "INPUT_OBJECT",
      "LIST",
      "NON_NULL"
    ],
    "__DirectiveLocation": [
      "QUERY",
      "MUTATION",
      "SUBSCRIPTION",
      "FIELD",
      "FRAGMENT_DEFINITION",
      "FRAGMENT_SPREAD",
      "INLINE_FRAGMENT",
      "VARIABLE_DEFINITION",
      "SCHEMA",
      "SCALAR",
      "OBJECT",
      "FIELD_DEFINITION",
      "ARGUMENT_DEFINITION",
      "INTERFACE",
      "UNION",
      "ENUM",
      "ENUM_VALUE",
      "INPUT_OBJECT",
      "INPUT_FIELD_DEFINITION"
    ]
  }
};
