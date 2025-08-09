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
    "Query": {
      "administrators": [
        "AdministratorList",
        false,
        false,
        true
      ],
      "administrator": [
        "Administrator",
        true,
        false,
        false
      ],
      "activeAdministrator": [
        "Administrator",
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
      "asset": [
        "Asset",
        true,
        false,
        false
      ],
      "me": [
        "CurrentUser",
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
      "channel": [
        "Channel",
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
      "collections": [
        "CollectionList",
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
      "previewCollectionVariants": [
        "ProductVariantList",
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
      "customerGroups": [
        "CustomerGroupList",
        false,
        false,
        true
      ],
      "customerGroup": [
        "CustomerGroup",
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
      "customer": [
        "Customer",
        true,
        false,
        false
      ],
      "entityDuplicators": [
        "EntityDuplicatorDefinition",
        false,
        true,
        false
      ],
      "facets": [
        "FacetList",
        false,
        false,
        true
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
      "facetValue": [
        "FacetValue",
        true,
        false,
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
      "jobQueues": [
        "JobQueue",
        false,
        true,
        false
      ],
      "jobBufferSize": [
        "JobBufferSize",
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
      "eligibleShippingMethodsForDraftOrder": [
        "ShippingMethodQuote",
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
      "productOptionGroups": [
        "ProductOptionGroup",
        false,
        true,
        false
      ],
      "productOptionGroup": [
        "ProductOptionGroup",
        true,
        false,
        false
      ],
      "search": [
        "SearchResponse",
        false,
        false,
        false
      ],
      "pendingSearchIndexUpdates": [
        "Int",
        false,
        false,
        false
      ],
      "products": [
        "ProductList",
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
      "productVariants": [
        "ProductVariantList",
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
      "promotion": [
        "Promotion",
        true,
        false,
        false
      ],
      "promotions": [
        "PromotionList",
        false,
        false,
        true
      ],
      "promotionConditions": [
        "ConfigurableOperationDefinition",
        false,
        true,
        false
      ],
      "promotionActions": [
        "ConfigurableOperationDefinition",
        false,
        true,
        false
      ],
      "provinces": [
        "ProvinceList",
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
      "roles": [
        "RoleList",
        false,
        false,
        true
      ],
      "role": [
        "Role",
        true,
        false,
        false
      ],
      "scheduledTasks": [
        "ScheduledTask",
        false,
        true,
        false
      ],
      "sellers": [
        "SellerList",
        false,
        false,
        true
      ],
      "seller": [
        "Seller",
        true,
        false,
        false
      ],
      "getSettingsStoreValue": [
        "JSON",
        true,
        false,
        false
      ],
      "getSettingsStoreValues": [
        "JSON",
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
      "shippingMethod": [
        "ShippingMethod",
        true,
        false,
        false
      ],
      "shippingEligibilityCheckers": [
        "ConfigurableOperationDefinition",
        false,
        true,
        false
      ],
      "shippingCalculators": [
        "ConfigurableOperationDefinition",
        false,
        true,
        false
      ],
      "fulfillmentHandlers": [
        "ConfigurableOperationDefinition",
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
      "testEligibleShippingMethods": [
        "ShippingMethodQuote",
        false,
        true,
        false
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
      "taxRates": [
        "TaxRateList",
        false,
        false,
        true
      ],
      "taxRate": [
        "TaxRate",
        true,
        false,
        false
      ],
      "zones": [
        "ZoneList",
        false,
        false,
        true
      ],
      "zone": [
        "Zone",
        true,
        false,
        false
      ],
      "metricSummary": [
        "MetricSummary",
        false,
        true,
        false
      ]
    },
    "Mutation": {
      "createAdministrator": [
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
      "updateActiveAdministrator": [
        "Administrator",
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
      "assignRoleToAdministrator": [
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
      "updateAsset": [
        "Asset",
        false,
        false,
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
      "assignAssetsToChannel": [
        "Asset",
        false,
        true,
        false
      ],
      "login": [
        "NativeAuthenticationResult",
        false,
        false,
        false
      ],
      "authenticate": [
        "AuthenticationResult",
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
      "createChannel": [
        "CreateChannelResult",
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
      "createCollection": [
        "Collection",
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
      "moveCollection": [
        "Collection",
        false,
        false,
        false
      ],
      "assignCollectionsToChannel": [
        "Collection",
        false,
        true,
        false
      ],
      "removeCollectionsFromChannel": [
        "Collection",
        false,
        true,
        false
      ],
      "createCountry": [
        "Country",
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
      "deleteCountry": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "deleteCountries": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "createCustomerGroup": [
        "CustomerGroup",
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
      "addCustomersToGroup": [
        "CustomerGroup",
        false,
        false,
        false
      ],
      "removeCustomersFromGroup": [
        "CustomerGroup",
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
      "updateCustomer": [
        "UpdateCustomerResult",
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
      "deleteCustomers": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "createCustomerAddress": [
        "Address",
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
      "deleteCustomerAddress": [
        "Success",
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
      "updateCustomerNote": [
        "HistoryEntry",
        false,
        false,
        false
      ],
      "deleteCustomerNote": [
        "DeletionResponse",
        false,
        false,
        false
      ],
      "duplicateEntity": [
        "DuplicateEntityResult",
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
      "updateFacet": [
        "Facet",
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
      "deleteFacets": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "createFacetValues": [
        "FacetValue",
        false,
        true,
        false
      ],
      "createFacetValue": [
        "FacetValue",
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
      "updateFacetValue": [
        "FacetValue",
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
      "assignFacetsToChannel": [
        "Facet",
        false,
        true,
        false
      ],
      "removeFacetsFromChannel": [
        "RemoveFacetFromChannelResult",
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
      "importProducts": [
        "ImportInfo",
        true,
        false,
        false
      ],
      "removeSettledJobs": [
        "Int",
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
      "flushBufferedJobs": [
        "Success",
        false,
        false,
        false
      ],
      "settlePayment": [
        "SettlePaymentResult",
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
      "addFulfillmentToOrder": [
        "AddFulfillmentToOrderResult",
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
      "refundOrder": [
        "RefundOrderResult",
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
      "addNoteToOrder": [
        "Order",
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
      "deleteOrderNote": [
        "DeletionResponse",
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
      "transitionFulfillmentToState": [
        "TransitionFulfillmentToStateResult",
        false,
        false,
        false
      ],
      "transitionPaymentToState": [
        "TransitionPaymentToStateResult",
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
      "modifyOrder": [
        "ModifyOrderResult",
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
      "createDraftOrder": [
        "Order",
        false,
        false,
        false
      ],
      "deleteDraftOrder": [
        "DeletionResponse",
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
      "adjustDraftOrderLine": [
        "UpdateOrderItemsResult",
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
      "setCustomerForDraftOrder": [
        "SetCustomerForDraftOrderResult",
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
      "setDraftOrderBillingAddress": [
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
      "unsetDraftOrderBillingAddress": [
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
      "applyCouponCodeToDraftOrder": [
        "ApplyCouponCodeResult",
        false,
        false,
        false
      ],
      "removeCouponCodeFromDraftOrder": [
        "Order",
        true,
        false,
        false
      ],
      "setDraftOrderShippingMethod": [
        "SetOrderShippingMethodResult",
        false,
        false,
        false
      ],
      "createPaymentMethod": [
        "PaymentMethod",
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
      "assignPaymentMethodsToChannel": [
        "PaymentMethod",
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
      "createProductOptionGroup": [
        "ProductOptionGroup",
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
      "createProductOption": [
        "ProductOption",
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
      "deleteProductOption": [
        "DeletionResponse",
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
      "runPendingSearchIndexUpdates": [
        "Success",
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
      "updateProduct": [
        "Product",
        false,
        false,
        false
      ],
      "updateProducts": [
        "Product",
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
      "deleteProducts": [
        "DeletionResponse",
        false,
        true,
        false
      ],
      "addOptionGroupToProduct": [
        "Product",
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
      "createProductVariants": [
        "ProductVariant",
        false,
        true,
        false
      ],
      "updateProductVariants": [
        "ProductVariant",
        false,
        true,
        false
      ],
      "updateProductVariant": [
        "ProductVariant",
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
      "assignProductsToChannel": [
        "Product",
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
      "assignProductVariantsToChannel": [
        "ProductVariant",
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
      "createPromotion": [
        "CreatePromotionResult",
        false,
        false,
        false
      ],
      "updatePromotion": [
        "UpdatePromotionResult",
        false,
        false,
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
      "assignPromotionsToChannel": [
        "Promotion",
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
      "createProvince": [
        "Province",
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
      "deleteProvince": [
        "DeletionResponse",
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
      "updateRole": [
        "Role",
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
      "updateScheduledTask": [
        "ScheduledTask",
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
      "createSeller": [
        "Seller",
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
      "setSettingsStoreValue": [
        "SetSettingsStoreValueResult",
        false,
        false,
        false
      ],
      "setSettingsStoreValues": [
        "SetSettingsStoreValueResult",
        false,
        true,
        false
      ],
      "createShippingMethod": [
        "ShippingMethod",
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
      "assignShippingMethodsToChannel": [
        "ShippingMethod",
        false,
        true,
        false
      ],
      "removeShippingMethodsFromChannel": [
        "ShippingMethod",
        false,
        true,
        false
      ],
      "createStockLocation": [
        "StockLocation",
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
      "assignStockLocationsToChannel": [
        "StockLocation",
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
      "createTag": [
        "Tag",
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
      "deleteTag": [
        "DeletionResponse",
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
      "updateTaxCategory": [
        "TaxCategory",
        false,
        false,
        false
      ],
      "deleteTaxCategory": [
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
      "createTaxRate": [
        "TaxRate",
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
      "createZone": [
        "Zone",
        false,
        false,
        false
      ],
      "updateZone": [
        "Zone",
        false,
        false,
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
      "addMembersToZone": [
        "Zone",
        false,
        false,
        false
      ],
      "removeMembersFromZone": [
        "Zone",
        false,
        false,
        false
      ]
    },
    "Administrator": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "emailAddress": [
        "String",
        false,
        false,
        false
      ],
      "user": [
        "User",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
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
    "MimeTypeError": {
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
      "fileName": [
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
    "LanguageNotAvailableError": {
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
      "languageCode": [
        "String",
        false,
        false,
        false
      ]
    },
    "Collection": {
      "isPrivate": [
        "Boolean",
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
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "slug": [
        "String",
        false,
        false,
        false
      ],
      "breadcrumbs": [
        "CollectionBreadcrumb",
        false,
        true,
        false
      ],
      "position": [
        "Int",
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
      "featuredAsset": [
        "Asset",
        true,
        false,
        false
      ],
      "assets": [
        "Asset",
        false,
        true,
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
      "children": [
        "Collection",
        true,
        true,
        false
      ],
      "filters": [
        "ConfigurableOperation",
        false,
        true,
        false
      ],
      "translations": [
        "CollectionTranslation",
        false,
        true,
        false
      ],
      "productVariants": [
        "ProductVariantList",
        false,
        false,
        true
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "Customer": {
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
      "createdAt": [
        "DateTime",
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
      "title": [
        "String",
        true,
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
      "emailAddress": [
        "String",
        false,
        false,
        false
      ],
      "addresses": [
        "Address",
        true,
        true,
        false
      ],
      "orders": [
        "OrderList",
        false,
        false,
        true
      ],
      "user": [
        "User",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
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
    "EntityDuplicatorDefinition": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "args": [
        "ConfigArgDefinition",
        false,
        true,
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
    "DuplicateEntitySuccess": {
      "newEntityId": [
        "ID",
        false,
        false,
        false
      ]
    },
    "DuplicateEntityError": {
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
      "duplicationError": [
        "String",
        false,
        false,
        false
      ]
    },
    "Facet": {
      "isPrivate": [
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
      "createdAt": [
        "DateTime",
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
      "code": [
        "String",
        false,
        false,
        false
      ],
      "values": [
        "FacetValue",
        false,
        true,
        false
      ],
      "valueList": [
        "FacetValueList",
        false,
        false,
        true
      ],
      "translations": [
        "FacetTranslation",
        false,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
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
      "message": [
        "String",
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
    "ChannelDefaultLanguageError": {
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
      "language": [
        "String",
        false,
        false,
        false
      ],
      "channelCode": [
        "String",
        false,
        false,
        false
      ]
    },
    "GlobalSettings": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "availableLanguages": [
        "LanguageCode",
        false,
        true,
        false
      ],
      "trackInventory": [
        "Boolean",
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
      "customFields": [
        "JSON",
        true,
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
    "PermissionDefinition": {
      "name": [
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
      "assignable": [
        "Boolean",
        false,
        false,
        false
      ]
    },
    "ServerConfig": {
      "orderProcess": [
        "OrderProcessState",
        false,
        true,
        false
      ],
      "permittedAssetTypes": [
        "String",
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
      "moneyStrategyPrecision": [
        "Int",
        false,
        false,
        false
      ],
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
      ]
    },
    "HistoryEntry": {
      "isPublic": [
        "Boolean",
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
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "data": [
        "JSON",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
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
      "processed": [
        "Int",
        false,
        false,
        false
      ],
      "imported": [
        "Int",
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
    "Job": {
      "id": [
        "ID",
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
      "startedAt": [
        "DateTime",
        true,
        false,
        false
      ],
      "settledAt": [
        "DateTime",
        true,
        false,
        false
      ],
      "queueName": [
        "String",
        false,
        false,
        false
      ],
      "state": [
        "JobState",
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
      "data": [
        "JSON",
        true,
        false,
        false
      ],
      "result": [
        "JSON",
        true,
        false,
        false
      ],
      "error": [
        "JSON",
        true,
        false,
        false
      ],
      "isSettled": [
        "Boolean",
        false,
        false,
        false
      ],
      "duration": [
        "Int",
        false,
        false,
        false
      ],
      "retries": [
        "Int",
        false,
        false,
        false
      ],
      "attempts": [
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
    "Order": {
      "nextStates": [
        "String",
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
      "sellerOrders": [
        "Order",
        true,
        true,
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
      "channels": [
        "Channel",
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
      "createdAt": [
        "DateTime",
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
      "type": [
        "OrderType",
        false,
        false,
        false
      ],
      "orderPlacedAt": [
        "DateTime",
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
      "state": [
        "String",
        false,
        false,
        false
      ],
      "active": [
        "Boolean",
        false,
        false,
        false
      ],
      "customer": [
        "Customer",
        true,
        false,
        false
      ],
      "shippingAddress": [
        "OrderAddress",
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
      "lines": [
        "OrderLine",
        false,
        true,
        false
      ],
      "surcharges": [
        "Surcharge",
        false,
        true,
        false
      ],
      "discounts": [
        "Discount",
        false,
        true,
        false
      ],
      "couponCodes": [
        "String",
        false,
        true,
        false
      ],
      "promotions": [
        "Promotion",
        false,
        true,
        false
      ],
      "payments": [
        "Payment",
        true,
        true,
        false
      ],
      "fulfillments": [
        "Fulfillment",
        true,
        true,
        false
      ],
      "totalQuantity": [
        "Int",
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
      "currencyCode": [
        "CurrencyCode",
        false,
        false,
        false
      ],
      "shippingLines": [
        "ShippingLine",
        false,
        true,
        false
      ],
      "shipping": [
        "Money",
        false,
        false,
        false
      ],
      "shippingWithTax": [
        "Money",
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
      "totalWithTax": [
        "Money",
        false,
        false,
        false
      ],
      "taxSummary": [
        "OrderTaxSummary",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "Fulfillment": {
      "nextStates": [
        "String",
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
      "createdAt": [
        "DateTime",
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
      "lines": [
        "FulfillmentLine",
        false,
        true,
        false
      ],
      "summary": [
        "FulfillmentLine",
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
      "method": [
        "String",
        false,
        false,
        false
      ],
      "trackingCode": [
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
      ]
    },
    "Payment": {
      "nextStates": [
        "String",
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
      "createdAt": [
        "DateTime",
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
      "method": [
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
      "errorMessage": [
        "String",
        true,
        false,
        false
      ],
      "refunds": [
        "Refund",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "OrderModificationLine": {
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
      ]
    },
    "OrderModification": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "priceChange": [
        "Money",
        false,
        false,
        false
      ],
      "note": [
        "String",
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
      "surcharges": [
        "Surcharge",
        true,
        true,
        false
      ],
      "payment": [
        "Payment",
        true,
        false,
        false
      ],
      "refund": [
        "Refund",
        true,
        false,
        false
      ],
      "isSettled": [
        "Boolean",
        false,
        false,
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
    "CreateFulfillmentError": {
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
      "fulfillmentHandlerError": [
        "String",
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
    "RefundAmountError": {
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
      "maximumRefundable": [
        "Int",
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
      "message": [
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
      ],
      "fromState": [
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
      ]
    },
    "PaymentStateTransitionError": {
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
      "transitionError": [
        "String",
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
      "toState": [
        "String",
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
      "message": [
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
      ],
      "fromState": [
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
    "Product": {
      "channels": [
        "Channel",
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
      "createdAt": [
        "DateTime",
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
      "featuredAsset": [
        "Asset",
        true,
        false,
        false
      ],
      "assets": [
        "Asset",
        false,
        true,
        false
      ],
      "variants": [
        "ProductVariant",
        false,
        true,
        false
      ],
      "variantList": [
        "ProductVariantList",
        false,
        false,
        true
      ],
      "optionGroups": [
        "ProductOptionGroup",
        false,
        true,
        false
      ],
      "facetValues": [
        "FacetValue",
        false,
        true,
        false
      ],
      "translations": [
        "ProductTranslation",
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
      "customFields": [
        "JSON",
        true,
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
      "price": [
        "Money",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "ProductVariant": {
      "enabled": [
        "Boolean",
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
      "stockOnHand": [
        "Int",
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
      "outOfStockThreshold": [
        "Int",
        false,
        false,
        false
      ],
      "useGlobalOutOfStockThreshold": [
        "Boolean",
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
      "channels": [
        "Channel",
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
      "createdAt": [
        "DateTime",
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
      "languageCode": [
        "LanguageCode",
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
      "name": [
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
      "assets": [
        "Asset",
        false,
        true,
        false
      ],
      "price": [
        "Money",
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
      "priceWithTax": [
        "Money",
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
      "taxRateApplied": [
        "TaxRate",
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
      "options": [
        "ProductOption",
        false,
        true,
        false
      ],
      "facetValues": [
        "FacetValue",
        false,
        true,
        false
      ],
      "translations": [
        "ProductVariantTranslation",
        false,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "SearchResult": {
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "channelIds": [
        "ID",
        false,
        true,
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
      "productAsset": [
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
      "productVariantAsset": [
        "SearchResultAsset",
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
      "collectionIds": [
        "ID",
        false,
        true,
        false
      ],
      "score": [
        "Float",
        false,
        false,
        false
      ],
      "inStock": [
        "Boolean",
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
    "ScheduledTask": {
      "id": [
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
      ],
      "lastExecutedAt": [
        "DateTime",
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
      "isRunning": [
        "Boolean",
        false,
        false,
        false
      ],
      "lastResult": [
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
    "SetSettingsStoreValueResult": {
      "key": [
        "String",
        false,
        false,
        false
      ],
      "result": [
        "Boolean",
        false,
        false,
        false
      ],
      "error": [
        "String",
        true,
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
    "TestShippingMethodQuote": {
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
      "metadata": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "StockLevel": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "customFields": [
        "JSON",
        true,
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
    "StockLocation": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "description": [
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
      ]
    },
    "StockAdjustment": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "type": [
        "StockMovementType",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "Allocation": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "type": [
        "StockMovementType",
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
      "orderLine": [
        "OrderLine",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "Sale": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "type": [
        "StockMovementType",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "Cancellation": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "type": [
        "StockMovementType",
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
      "orderLine": [
        "OrderLine",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "Return": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "type": [
        "StockMovementType",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "Release": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "type": [
        "StockMovementType",
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
      "customFields": [
        "JSON",
        true,
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
    "Address": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "fullName": [
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
      "city": [
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
      "postalCode": [
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
      "phoneNumber": [
        "String",
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
      "defaultBillingAddress": [
        "Boolean",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "Asset": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
        "AssetType",
        false,
        false,
        false
      ],
      "fileSize": [
        "Int",
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
      "width": [
        "Int",
        false,
        false,
        false
      ],
      "height": [
        "Int",
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
      "preview": [
        "String",
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
      "tags": [
        "Tag",
        false,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
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
    "CurrentUser": {
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
      "channels": [
        "CurrentUserChannel",
        false,
        true,
        false
      ]
    },
    "CurrentUserChannel": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "token": [
        "String",
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
      "permissions": [
        "Permission",
        false,
        true,
        false
      ]
    },
    "Channel": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "token": [
        "String",
        false,
        false,
        false
      ],
      "defaultTaxZone": [
        "Zone",
        true,
        false,
        false
      ],
      "defaultShippingZone": [
        "Zone",
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
      "availableLanguageCodes": [
        "LanguageCode",
        true,
        true,
        false
      ],
      "currencyCode": [
        "CurrencyCode",
        false,
        false,
        false
      ],
      "defaultCurrencyCode": [
        "CurrencyCode",
        false,
        false,
        false
      ],
      "availableCurrencyCodes": [
        "CurrencyCode",
        false,
        true,
        false
      ],
      "trackInventory": [
        "Boolean",
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
      "customFields": [
        "JSON",
        true,
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
    "CollectionTranslation": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "description": [
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
    "InvalidCredentialsError": {
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
      "authenticationError": [
        "String",
        false,
        false,
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
      "message": [
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
      ],
      "fromState": [
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
    "GuestCheckoutError": {
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
      "errorDetail": [
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
      "message": [
        "String",
        false,
        false,
        false
      ],
      "maxItems": [
        "Int",
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
      "quantityAvailable": [
        "Int",
        false,
        false,
        false
      ],
      "order": [
        "Order",
        false,
        false,
        false
      ]
    },
    "CouponCodeInvalidError": {
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
      "couponCode": [
        "String",
        false,
        false,
        false
      ]
    },
    "CouponCodeExpiredError": {
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
      "couponCode": [
        "String",
        false,
        false,
        false
      ]
    },
    "CouponCodeLimitError": {
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
      "couponCode": [
        "String",
        false,
        false,
        false
      ],
      "limit": [
        "Int",
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
    "OrderInterceptorError": {
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
      "interceptorError": [
        "String",
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
      "type": [
        "AdjustmentType",
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
      "list": [
        "Boolean",
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
      "defaultValue": [
        "JSON",
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
      "description": [
        "String",
        true,
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
      "code": [
        "String",
        false,
        false,
        false
      ],
      "args": [
        "ConfigArg",
        false,
        true,
        false
      ]
    },
    "ConfigurableOperationDefinition": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "args": [
        "ConfigArgDefinition",
        false,
        true,
        false
      ],
      "description": [
        "String",
        false,
        false,
        false
      ]
    },
    "DeletionResponse": {
      "result": [
        "DeletionResult",
        false,
        false,
        false
      ],
      "message": [
        "String",
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
    "ShippingMethodQuote": {
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
      "code": [
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
      "description": [
        "String",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "PaymentMethodQuote": {
      "id": [
        "ID",
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
      "name": [
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
      "isEligible": [
        "Boolean",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "StringCustomFieldConfig": {
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "length": [
        "Int",
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
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "nullable": [
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
      "deprecated": [
        "Boolean",
        true,
        false,
        false
      ],
      "deprecationReason": [
        "String",
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
      "options": [
        "StringFieldOption",
        true,
        true,
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
      "value": [
        "String",
        false,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ]
    },
    "LocaleStringCustomFieldConfig": {
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "length": [
        "Int",
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
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "nullable": [
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
      "deprecated": [
        "Boolean",
        true,
        false,
        false
      ],
      "deprecationReason": [
        "String",
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
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "IntCustomFieldConfig": {
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "nullable": [
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
      "deprecated": [
        "Boolean",
        true,
        false,
        false
      ],
      "deprecationReason": [
        "String",
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
      "max": [
        "Int",
        true,
        false,
        false
      ],
      "step": [
        "Int",
        true,
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
    "FloatCustomFieldConfig": {
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "nullable": [
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
      "deprecated": [
        "Boolean",
        true,
        false,
        false
      ],
      "deprecationReason": [
        "String",
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
      "max": [
        "Float",
        true,
        false,
        false
      ],
      "step": [
        "Float",
        true,
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
    "BooleanCustomFieldConfig": {
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "nullable": [
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
      "deprecated": [
        "Boolean",
        true,
        false,
        false
      ],
      "deprecationReason": [
        "String",
        true,
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
    "DateTimeCustomFieldConfig": {
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "nullable": [
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
      "deprecated": [
        "Boolean",
        true,
        false,
        false
      ],
      "deprecationReason": [
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
      "max": [
        "String",
        true,
        false,
        false
      ],
      "step": [
        "Int",
        true,
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
    "RelationCustomFieldConfig": {
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "nullable": [
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
      "deprecated": [
        "Boolean",
        true,
        false,
        false
      ],
      "deprecationReason": [
        "String",
        true,
        false,
        false
      ],
      "entity": [
        "String",
        false,
        false,
        false
      ],
      "scalarFields": [
        "String",
        false,
        true,
        false
      ],
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "TextCustomFieldConfig": {
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "nullable": [
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
      "deprecated": [
        "Boolean",
        true,
        false,
        false
      ],
      "deprecationReason": [
        "String",
        true,
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "nullable": [
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
      "deprecated": [
        "Boolean",
        true,
        false,
        false
      ],
      "deprecationReason": [
        "String",
        true,
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
    "StringStructFieldConfig": {
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "description": [
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
      "pattern": [
        "String",
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
      "ui": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "IntStructFieldConfig": {
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "min": [
        "Int",
        true,
        false,
        false
      ],
      "max": [
        "Int",
        true,
        false,
        false
      ],
      "step": [
        "Int",
        true,
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "min": [
        "Float",
        true,
        false,
        false
      ],
      "max": [
        "Float",
        true,
        false,
        false
      ],
      "step": [
        "Float",
        true,
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "description": [
        "LocalizedString",
        true,
        true,
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "min": [
        "String",
        true,
        false,
        false
      ],
      "max": [
        "String",
        true,
        false,
        false
      ],
      "step": [
        "Int",
        true,
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "description": [
        "LocalizedString",
        true,
        true,
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
      "list": [
        "Boolean",
        false,
        false,
        false
      ],
      "fields": [
        "StructFieldConfig",
        false,
        true,
        false
      ],
      "label": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "description": [
        "LocalizedString",
        true,
        true,
        false
      ],
      "readonly": [
        "Boolean",
        true,
        false,
        false
      ],
      "internal": [
        "Boolean",
        true,
        false,
        false
      ],
      "nullable": [
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
      "deprecated": [
        "Boolean",
        true,
        false,
        false
      ],
      "deprecationReason": [
        "String",
        true,
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
    "CustomerGroup": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "customers": [
        "CustomerList",
        false,
        false,
        true
      ],
      "customFields": [
        "JSON",
        true,
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
    "FacetValue": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "name": [
        "String",
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
      "translations": [
        "FacetValueTranslation",
        false,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "FacetValueTranslation": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      ]
    },
    "FacetTranslation": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
    "OrderTaxSummary": {
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
      ],
      "taxBase": [
        "Money",
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
    "OrderAddress": {
      "fullName": [
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
      ],
      "city": [
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
      "postalCode": [
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
      "phoneNumber": [
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
    "ShippingLine": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "shippingMethod": [
        "ShippingMethod",
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
      "customFields": [
        "JSON",
        true,
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
      "type": [
        "AdjustmentType",
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
      ]
    },
    "OrderLine": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "featuredAsset": [
        "Asset",
        true,
        false,
        false
      ],
      "unitPrice": [
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
      "unitPriceChangeSinceAdded": [
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
      "orderPlacedQuantity": [
        "Int",
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
      "lineTax": [
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
      "taxLines": [
        "TaxLine",
        false,
        true,
        false
      ],
      "order": [
        "Order",
        false,
        false,
        false
      ],
      "fulfillmentLines": [
        "FulfillmentLine",
        true,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
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
    "Refund": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "shipping": [
        "Money",
        false,
        false,
        false
      ],
      "adjustment": [
        "Money",
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
      "method": [
        "String",
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
      "transactionId": [
        "String",
        true,
        false,
        false
      ],
      "reason": [
        "String",
        true,
        false,
        false
      ],
      "lines": [
        "RefundLine",
        false,
        true,
        false
      ],
      "paymentId": [
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "FulfillmentLine": {
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
      ]
    },
    "Surcharge": {
      "id": [
        "ID",
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
      "updatedAt": [
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
      "taxRate": [
        "Float",
        false,
        false,
        false
      ]
    },
    "PaymentMethod": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "checker": [
        "ConfigurableOperation",
        true,
        false,
        false
      ],
      "handler": [
        "ConfigurableOperation",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "PaymentMethodTranslation": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "description": [
        "String",
        false,
        false,
        false
      ]
    },
    "ProductOptionGroup": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "code": [
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "ProductOptionGroupTranslation": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      ]
    },
    "ProductOption": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "code": [
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
      "groupId": [
        "ID",
        false,
        false,
        false
      ],
      "group": [
        "ProductOptionGroup",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "ProductOptionTranslation": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "items": [
        "SearchResult",
        false,
        true,
        false
      ],
      "totalItems": [
        "Int",
        false,
        false,
        false
      ],
      "facetValues": [
        "FacetValueResult",
        false,
        true,
        false
      ],
      "collections": [
        "CollectionResult",
        false,
        true,
        false
      ]
    },
    "FacetValueResult": {
      "facetValue": [
        "FacetValue",
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
    "SearchResultAsset": {
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
      ],
      "focalPoint": [
        "Coordinate",
        true,
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
    "PriceRange": {
      "min": [
        "Money",
        false,
        false,
        false
      ],
      "max": [
        "Money",
        false,
        false,
        false
      ]
    },
    "ProductTranslation": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "description": [
        "String",
        false,
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
    "ProductVariantTranslation": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      ]
    },
    "Promotion": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "startsAt": [
        "DateTime",
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
      "couponCode": [
        "String",
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
      "usageLimit": [
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
      "conditions": [
        "ConfigurableOperation",
        false,
        true,
        false
      ],
      "actions": [
        "ConfigurableOperation",
        false,
        true,
        false
      ],
      "translations": [
        "PromotionTranslation",
        false,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "PromotionTranslation": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "description": [
        "String",
        false,
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
    "RegionTranslation": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      ]
    },
    "Country": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "code": [
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
      "name": [
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
      "customFields": [
        "JSON",
        true,
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
    "Province": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "code": [
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
      "name": [
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
      "customFields": [
        "JSON",
        true,
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
    "Role": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      ],
      "channels": [
        "Channel",
        false,
        true,
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
    "Seller": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "ShippingMethod": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "code": [
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
      "checker": [
        "ConfigurableOperation",
        false,
        false,
        false
      ],
      "calculator": [
        "ConfigurableOperation",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "ShippingMethodTranslation": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "description": [
        "String",
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
    "Tag": {
      "id": [
        "ID",
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
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "isDefault": [
        "Boolean",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "TaxRate": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "enabled": [
        "Boolean",
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
      "category": [
        "TaxCategory",
        false,
        false,
        false
      ],
      "zone": [
        "Zone",
        false,
        false,
        false
      ],
      "customerGroup": [
        "CustomerGroup",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
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
    "User": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "verified": [
        "Boolean",
        false,
        false,
        false
      ],
      "roles": [
        "Role",
        false,
        true,
        false
      ],
      "lastLogin": [
        "DateTime",
        true,
        false,
        false
      ],
      "authenticationMethods": [
        "AuthenticationMethod",
        false,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "AuthenticationMethod": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
        false,
        false,
        false
      ],
      "strategy": [
        "String",
        false,
        false,
        false
      ]
    },
    "Zone": {
      "id": [
        "ID",
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
      "updatedAt": [
        "DateTime",
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
      "members": [
        "Region",
        false,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "MetricSummary": {
      "interval": [
        "MetricInterval",
        false,
        false,
        false
      ],
      "type": [
        "MetricType",
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
      "entries": [
        "MetricSummaryEntry",
        false,
        true,
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
    "EntityCustomFields": {
      "entityName": [
        "String",
        false,
        false,
        false
      ],
      "customFields": [
        "CustomFieldConfig",
        false,
        true,
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
    "AdministratorListOptions": {
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
      "sort": [
        "AdministratorSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "CreateAdministratorInput": {
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
      "emailAddress": [
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
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdateAdministratorInput": {
      "id": [
        "ID",
        false,
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
      "emailAddress": [
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
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdateActiveAdministratorInput": {
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
      "emailAddress": [
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "AssetListOptions": {
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
      "sort": [
        "AssetSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "CreateAssetInput": {
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
      ],
      "customFields": [
        "JSON",
        true,
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
    "DeleteAssetInput": {
      "assetId": [
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
      "deleteFromAllChannels": [
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
      "force": [
        "Boolean",
        true,
        false,
        false
      ],
      "deleteFromAllChannels": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "UpdateAssetInput": {
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
      "focalPoint": [
        "CoordinateInput",
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
      "customFields": [
        "JSON",
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
    "AuthenticationInput": {
      "native": [
        "NativeAuthInput",
        true,
        false,
        false
      ]
    },
    "ChannelListOptions": {
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
      "sort": [
        "ChannelSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "CreateChannelInput": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "token": [
        "String",
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
      "availableLanguageCodes": [
        "LanguageCode",
        true,
        true,
        false
      ],
      "pricesIncludeTax": [
        "Boolean",
        false,
        false,
        false
      ],
      "defaultCurrencyCode": [
        "CurrencyCode",
        true,
        false,
        false
      ],
      "availableCurrencyCodes": [
        "CurrencyCode",
        true,
        true,
        false
      ],
      "trackInventory": [
        "Boolean",
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
      "defaultTaxZoneId": [
        "ID",
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
      "sellerId": [
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
      ]
    },
    "UpdateChannelInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "code": [
        "String",
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
      "defaultLanguageCode": [
        "LanguageCode",
        true,
        false,
        false
      ],
      "availableLanguageCodes": [
        "LanguageCode",
        true,
        true,
        false
      ],
      "pricesIncludeTax": [
        "Boolean",
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
      "availableCurrencyCodes": [
        "CurrencyCode",
        true,
        true,
        false
      ],
      "trackInventory": [
        "Boolean",
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
      "defaultTaxZoneId": [
        "ID",
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
      "sellerId": [
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
      ]
    },
    "CollectionListOptions": {
      "topLevelOnly": [
        "Boolean",
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
      "take": [
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
      ]
    },
    "MoveCollectionInput": {
      "collectionId": [
        "ID",
        false,
        false,
        false
      ],
      "parentId": [
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
      ]
    },
    "CreateCollectionTranslationInput": {
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
      "description": [
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
      ]
    },
    "UpdateCollectionTranslationInput": {
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
      ],
      "description": [
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
      ]
    },
    "CreateCollectionInput": {
      "isPrivate": [
        "Boolean",
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
      "assetIds": [
        "ID",
        true,
        true,
        false
      ],
      "parentId": [
        "ID",
        true,
        false,
        false
      ],
      "inheritFilters": [
        "Boolean",
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
      "translations": [
        "CreateCollectionTranslationInput",
        false,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "PreviewCollectionVariantsInput": {
      "parentId": [
        "ID",
        true,
        false,
        false
      ],
      "inheritFilters": [
        "Boolean",
        false,
        false,
        false
      ],
      "filters": [
        "ConfigurableOperationInput",
        false,
        true,
        false
      ]
    },
    "UpdateCollectionInput": {
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
      "featuredAssetId": [
        "ID",
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
      "assetIds": [
        "ID",
        true,
        true,
        false
      ],
      "inheritFilters": [
        "Boolean",
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
      "translations": [
        "UpdateCollectionTranslationInput",
        true,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "AssignCollectionsToChannelInput": {
      "collectionIds": [
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
    "RemoveCollectionsFromChannelInput": {
      "collectionIds": [
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
    "CountryTranslationInput": {
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
      "customFields": [
        "JSON",
        true,
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
      "translations": [
        "CountryTranslationInput",
        false,
        true,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdateCountryInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "code": [
        "String",
        true,
        false,
        false
      ],
      "translations": [
        "CountryTranslationInput",
        true,
        true,
        false
      ],
      "enabled": [
        "Boolean",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "CountryListOptions": {
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
      "sort": [
        "CountrySortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "CustomerGroupListOptions": {
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
      "sort": [
        "CustomerGroupSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "CreateCustomerGroupInput": {
      "name": [
        "String",
        false,
        false,
        false
      ],
      "customerIds": [
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
      ]
    },
    "UpdateCustomerGroupInput": {
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdateCustomerInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "title": [
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
      "phoneNumber": [
        "String",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "CustomerFilterParameter": {
      "postalCode": [
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
      "createdAt": [
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
      "title": [
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
      "emailAddress": [
        "StringOperators",
        true,
        false,
        false
      ],
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
      ]
    },
    "CustomerListOptions": {
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
      "sort": [
        "CustomerSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "AddNoteToCustomerInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "note": [
        "String",
        false,
        false,
        false
      ],
      "isPublic": [
        "Boolean",
        false,
        false,
        false
      ]
    },
    "UpdateCustomerNoteInput": {
      "noteId": [
        "ID",
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
    "DuplicateEntityInput": {
      "entityName": [
        "String",
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
      "duplicatorInput": [
        "ConfigurableOperationInput",
        false,
        false,
        false
      ]
    },
    "FacetListOptions": {
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
      "sort": [
        "FacetSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "FacetTranslationInput": {
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
      "customFields": [
        "JSON",
        true,
        false,
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
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdateFacetInput": {
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
      "code": [
        "String",
        true,
        false,
        false
      ],
      "translations": [
        "FacetTranslationInput",
        true,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "FacetValueTranslationInput": {
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
      "customFields": [
        "JSON",
        true,
        false,
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
    "CreateFacetValueInput": {
      "facetId": [
        "ID",
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
      "translations": [
        "FacetValueTranslationInput",
        false,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdateFacetValueInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "code": [
        "String",
        true,
        false,
        false
      ],
      "translations": [
        "FacetValueTranslationInput",
        true,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "AssignFacetsToChannelInput": {
      "facetIds": [
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
    "RemoveFacetsFromChannelInput": {
      "facetIds": [
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
      ],
      "force": [
        "Boolean",
        true,
        false,
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
      "trackInventory": [
        "Boolean",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "JobListOptions": {
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
      "sort": [
        "JobSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "OrderFilterParameter": {
      "customerLastName": [
        "StringOperators",
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
      "aggregateOrderId": [
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
      "createdAt": [
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
      "type": [
        "StringOperators",
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
      "code": [
        "StringOperators",
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
      "active": [
        "BooleanOperators",
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
      "currencyCode": [
        "StringOperators",
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
      "total": [
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
      ]
    },
    "OrderSortParameter": {
      "customerLastName": [
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
      "aggregateOrderId": [
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
      "createdAt": [
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
      "orderPlacedAt": [
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
      "state": [
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
      "total": [
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
      ]
    },
    "OrderListOptions": {
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
      "sort": [
        "OrderSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "SetOrderCustomerInput": {
      "orderId": [
        "ID",
        false,
        false,
        false
      ],
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
      ]
    },
    "UpdateOrderInput": {
      "id": [
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
      ]
    },
    "FulfillOrderInput": {
      "lines": [
        "OrderLineInput",
        false,
        true,
        false
      ],
      "handler": [
        "ConfigurableOperationInput",
        false,
        false,
        false
      ]
    },
    "CancelOrderInput": {
      "orderId": [
        "ID",
        false,
        false,
        false
      ],
      "lines": [
        "OrderLineInput",
        true,
        true,
        false
      ],
      "cancelShipping": [
        "Boolean",
        true,
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
    "AddNoteToOrderInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "note": [
        "String",
        false,
        false,
        false
      ],
      "isPublic": [
        "Boolean",
        false,
        false,
        false
      ]
    },
    "UpdateOrderNoteInput": {
      "noteId": [
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
      "isPublic": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "AdministratorPaymentInput": {
      "paymentMethod": [
        "String",
        true,
        false,
        false
      ],
      "metadata": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "AdministratorRefundInput": {
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
      "amount": [
        "Money",
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
    "UpdateOrderAddressInput": {
      "fullName": [
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
      ],
      "city": [
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
      "postalCode": [
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
      "phoneNumber": [
        "String",
        true,
        false,
        false
      ]
    },
    "ModifyOrderInput": {
      "dryRun": [
        "Boolean",
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
      "surcharges": [
        "SurchargeInput",
        true,
        true,
        false
      ],
      "updateShippingAddress": [
        "UpdateOrderAddressInput",
        true,
        false,
        false
      ],
      "updateBillingAddress": [
        "UpdateOrderAddressInput",
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
      "options": [
        "ModifyOrderOptions",
        true,
        false,
        false
      ],
      "couponCodes": [
        "String",
        true,
        true,
        false
      ],
      "shippingMethodIds": [
        "ID",
        true,
        true,
        false
      ]
    },
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
    "SurchargeInput": {
      "description": [
        "String",
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
      "taxRate": [
        "Float",
        true,
        false,
        false
      ],
      "taxDescription": [
        "String",
        true,
        false,
        false
      ]
    },
    "ManualPaymentInput": {
      "orderId": [
        "ID",
        false,
        false,
        false
      ],
      "method": [
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
      "metadata": [
        "JSON",
        true,
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
    "PaymentMethodListOptions": {
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
      "sort": [
        "PaymentMethodSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "PaymentMethodTranslationInput": {
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
      "description": [
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
      ]
    },
    "CreatePaymentMethodInput": {
      "code": [
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
      "checker": [
        "ConfigurableOperationInput",
        true,
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
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdatePaymentMethodInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "code": [
        "String",
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
      "checker": [
        "ConfigurableOperationInput",
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
      "translations": [
        "PaymentMethodTranslationInput",
        true,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "AssignPaymentMethodsToChannelInput": {
      "paymentMethodIds": [
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
    "RemovePaymentMethodsFromChannelInput": {
      "paymentMethodIds": [
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
    "ProductOptionGroupTranslationInput": {
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
      "customFields": [
        "JSON",
        true,
        false,
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
      "translations": [
        "ProductOptionGroupTranslationInput",
        false,
        true,
        false
      ],
      "options": [
        "CreateGroupOptionInput",
        false,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdateProductOptionGroupInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "code": [
        "String",
        true,
        false,
        false
      ],
      "translations": [
        "ProductOptionGroupTranslationInput",
        true,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "ProductOptionTranslationInput": {
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
      "customFields": [
        "JSON",
        true,
        false,
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
    "CreateProductOptionInput": {
      "productOptionGroupId": [
        "ID",
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
      "translations": [
        "ProductOptionGroupTranslationInput",
        false,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdateProductOptionInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "code": [
        "String",
        true,
        false,
        false
      ],
      "translations": [
        "ProductOptionGroupTranslationInput",
        true,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "StockMovementListOptions": {
      "type": [
        "StockMovementType",
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
      "take": [
        "Int",
        true,
        false,
        false
      ]
    },
    "ProductListOptions": {
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
      "sort": [
        "ProductSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "ProductFilterParameter": {
      "facetValueId": [
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
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "slug": [
        "StringOperators",
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
      ]
    },
    "ProductVariantListOptions": {
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
      "sort": [
        "ProductVariantSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "ProductVariantFilterParameter": {
      "facetValueId": [
        "IDOperators",
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
      "trackInventory": [
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
      "stockAllocated": [
        "NumberOperators",
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
      "useGlobalOutOfStockThreshold": [
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
      "productId": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "sku": [
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
      "price": [
        "NumberOperators",
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
      "priceWithTax": [
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
      ]
    },
    "ProductTranslationInput": {
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
      ],
      "description": [
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
      ]
    },
    "CreateProductInput": {
      "featuredAssetId": [
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
      "assetIds": [
        "ID",
        true,
        true,
        false
      ],
      "facetValueIds": [
        "ID",
        true,
        true,
        false
      ],
      "translations": [
        "ProductTranslationInput",
        false,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdateProductInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "enabled": [
        "Boolean",
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
      "assetIds": [
        "ID",
        true,
        true,
        false
      ],
      "facetValueIds": [
        "ID",
        true,
        true,
        false
      ],
      "translations": [
        "ProductTranslationInput",
        true,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "ProductVariantTranslationInput": {
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "CreateProductVariantOptionInput": {
      "optionGroupId": [
        "ID",
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
      "translations": [
        "ProductOptionTranslationInput",
        false,
        true,
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
    "CreateProductVariantPriceInput": {
      "currencyCode": [
        "CurrencyCode",
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
      "customFields": [
        "JSON",
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
      "price": [
        "Money",
        false,
        false,
        false
      ],
      "delete": [
        "Boolean",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "CreateProductVariantInput": {
      "productId": [
        "ID",
        false,
        false,
        false
      ],
      "enabled": [
        "Boolean",
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
      "facetValueIds": [
        "ID",
        true,
        true,
        false
      ],
      "sku": [
        "String",
        false,
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
      "taxCategoryId": [
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
      "featuredAssetId": [
        "ID",
        true,
        false,
        false
      ],
      "assetIds": [
        "ID",
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
      "stockLevels": [
        "StockLevelInput",
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
      "useGlobalOutOfStockThreshold": [
        "Boolean",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdateProductVariantInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "enabled": [
        "Boolean",
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
      "facetValueIds": [
        "ID",
        true,
        true,
        false
      ],
      "optionIds": [
        "ID",
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
      "taxCategoryId": [
        "ID",
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
      "featuredAssetId": [
        "ID",
        true,
        false,
        false
      ],
      "assetIds": [
        "ID",
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
      "stockLevels": [
        "StockLevelInput",
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
      "useGlobalOutOfStockThreshold": [
        "Boolean",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "AssignProductsToChannelInput": {
      "productIds": [
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
      ],
      "priceFactor": [
        "Float",
        true,
        false,
        false
      ]
    },
    "RemoveProductsFromChannelInput": {
      "productIds": [
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
    "AssignProductVariantsToChannelInput": {
      "productVariantIds": [
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
      ],
      "priceFactor": [
        "Float",
        true,
        false,
        false
      ]
    },
    "RemoveProductVariantsFromChannelInput": {
      "productVariantIds": [
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
    "PromotionListOptions": {
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
      "sort": [
        "PromotionSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "PromotionTranslationInput": {
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
      "description": [
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
      ]
    },
    "CreatePromotionInput": {
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "startsAt": [
        "DateTime",
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
      "couponCode": [
        "String",
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
      "usageLimit": [
        "Int",
        true,
        false,
        false
      ],
      "conditions": [
        "ConfigurableOperationInput",
        false,
        true,
        false
      ],
      "actions": [
        "ConfigurableOperationInput",
        false,
        true,
        false
      ],
      "translations": [
        "PromotionTranslationInput",
        false,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdatePromotionInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "enabled": [
        "Boolean",
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
      "endsAt": [
        "DateTime",
        true,
        false,
        false
      ],
      "couponCode": [
        "String",
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
      "usageLimit": [
        "Int",
        true,
        false,
        false
      ],
      "conditions": [
        "ConfigurableOperationInput",
        true,
        true,
        false
      ],
      "actions": [
        "ConfigurableOperationInput",
        true,
        true,
        false
      ],
      "translations": [
        "PromotionTranslationInput",
        true,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "AssignPromotionsToChannelInput": {
      "promotionIds": [
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
    "RemovePromotionsFromChannelInput": {
      "promotionIds": [
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
    "ProvinceTranslationInput": {
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
      "customFields": [
        "JSON",
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
      "translations": [
        "ProvinceTranslationInput",
        false,
        true,
        false
      ],
      "enabled": [
        "Boolean",
        false,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdateProvinceInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "code": [
        "String",
        true,
        false,
        false
      ],
      "translations": [
        "ProvinceTranslationInput",
        true,
        true,
        false
      ],
      "enabled": [
        "Boolean",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "ProvinceListOptions": {
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
      "sort": [
        "ProvinceSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "RoleListOptions": {
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
      "sort": [
        "RoleSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "CreateRoleInput": {
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
      ],
      "channelIds": [
        "ID",
        true,
        true,
        false
      ]
    },
    "UpdateRoleInput": {
      "id": [
        "ID",
        false,
        false,
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
      "permissions": [
        "Permission",
        true,
        true,
        false
      ],
      "channelIds": [
        "ID",
        true,
        true,
        false
      ]
    },
    "UpdateScheduledTaskInput": {
      "id": [
        "String",
        false,
        false,
        false
      ],
      "enabled": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "SellerListOptions": {
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
      "sort": [
        "SellerSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "CreateSellerInput": {
      "name": [
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
      ]
    },
    "UpdateSellerInput": {
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "SettingsStoreInput": {
      "key": [
        "String",
        false,
        false,
        false
      ],
      "value": [
        "JSON",
        false,
        false,
        false
      ]
    },
    "ShippingMethodListOptions": {
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
      "sort": [
        "ShippingMethodSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "ShippingMethodTranslationInput": {
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
      "description": [
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
      ]
    },
    "CreateShippingMethodInput": {
      "code": [
        "String",
        false,
        false,
        false
      ],
      "fulfillmentHandler": [
        "String",
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
      "calculator": [
        "ConfigurableOperationInput",
        false,
        false,
        false
      ],
      "translations": [
        "ShippingMethodTranslationInput",
        false,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdateShippingMethodInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "code": [
        "String",
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
      "checker": [
        "ConfigurableOperationInput",
        true,
        false,
        false
      ],
      "calculator": [
        "ConfigurableOperationInput",
        true,
        false,
        false
      ],
      "translations": [
        "ShippingMethodTranslationInput",
        false,
        true,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "TestShippingMethodInput": {
      "checker": [
        "ConfigurableOperationInput",
        false,
        false,
        false
      ],
      "calculator": [
        "ConfigurableOperationInput",
        false,
        false,
        false
      ],
      "shippingAddress": [
        "CreateAddressInput",
        false,
        false,
        false
      ],
      "lines": [
        "TestShippingMethodOrderLineInput",
        false,
        true,
        false
      ]
    },
    "TestEligibleShippingMethodsInput": {
      "shippingAddress": [
        "CreateAddressInput",
        false,
        false,
        false
      ],
      "lines": [
        "TestShippingMethodOrderLineInput",
        false,
        true,
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
    "AssignShippingMethodsToChannelInput": {
      "shippingMethodIds": [
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
    "RemoveShippingMethodsFromChannelInput": {
      "shippingMethodIds": [
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
    "StockLocationListOptions": {
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
      "sort": [
        "StockLocationSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "CreateStockLocationInput": {
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdateStockLocationInput": {
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
      "description": [
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
    "AssignStockLocationsToChannelInput": {
      "stockLocationIds": [
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
    "RemoveStockLocationsFromChannelInput": {
      "stockLocationIds": [
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
    "TagListOptions": {
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
      "sort": [
        "TagSortParameter",
        true,
        false,
        false
      ],
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
    "TaxCategoryListOptions": {
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
      "sort": [
        "TaxCategorySortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "CreateTaxCategoryInput": {
      "name": [
        "String",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdateTaxCategoryInput": {
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
      "isDefault": [
        "Boolean",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "TaxRateListOptions": {
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
      "sort": [
        "TaxRateSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "CreateTaxRateInput": {
      "name": [
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
      "value": [
        "Float",
        false,
        false,
        false
      ],
      "categoryId": [
        "ID",
        false,
        false,
        false
      ],
      "zoneId": [
        "ID",
        false,
        false,
        false
      ],
      "customerGroupId": [
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
      ]
    },
    "UpdateTaxRateInput": {
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
      "enabled": [
        "Boolean",
        true,
        false,
        false
      ],
      "categoryId": [
        "ID",
        true,
        false,
        false
      ],
      "zoneId": [
        "ID",
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
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "ZoneListOptions": {
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
      "sort": [
        "ZoneSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "CreateZoneInput": {
      "name": [
        "String",
        false,
        false,
        false
      ],
      "memberIds": [
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
      ]
    },
    "UpdateZoneInput": {
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
      "customFields": [
        "JSON",
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
      "code": [
        "String",
        false,
        false,
        false
      ],
      "arguments": [
        "ConfigArgInput",
        false,
        true,
        false
      ]
    },
    "StringOperators": {
      "eq": [
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
      "contains": [
        "String",
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
      "in": [
        "String",
        true,
        true,
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
      ],
      "isNull": [
        "Boolean",
        true,
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
      "notEq": [
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
      "notIn": [
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
    "NumberRange": {
      "start": [
        "Float",
        false,
        false,
        false
      ],
      "end": [
        "Float",
        false,
        false,
        false
      ]
    },
    "NumberOperators": {
      "eq": [
        "Float",
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
      "between": [
        "NumberRange",
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
      "start": [
        "DateTime",
        false,
        false,
        false
      ],
      "end": [
        "DateTime",
        false,
        false,
        false
      ]
    },
    "DateOperators": {
      "eq": [
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
      "after": [
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
      "isNull": [
        "Boolean",
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
    "NumberListOperators": {
      "inList": [
        "Float",
        false,
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
    "IDListOperators": {
      "inList": [
        "ID",
        false,
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
    "SearchInput": {
      "term": [
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
      "groupByProduct": [
        "Boolean",
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
      "inStock": [
        "Boolean",
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
    "CreateCustomerInput": {
      "title": [
        "String",
        true,
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
      "emailAddress": [
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
      ]
    },
    "CreateAddressInput": {
      "fullName": [
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
      "city": [
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
      "postalCode": [
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
      "phoneNumber": [
        "String",
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
      "defaultBillingAddress": [
        "Boolean",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "UpdateAddressInput": {
      "id": [
        "ID",
        false,
        false,
        false
      ],
      "fullName": [
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
      ],
      "city": [
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
      "postalCode": [
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
      "phoneNumber": [
        "String",
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
      "defaultBillingAddress": [
        "Boolean",
        true,
        false,
        false
      ],
      "customFields": [
        "JSON",
        true,
        false,
        false
      ]
    },
    "FacetValueListOptions": {
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
      "sort": [
        "FacetValueSortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "HistoryEntryListOptions": {
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
      "sort": [
        "HistoryEntrySortParameter",
        true,
        false,
        false
      ],
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
      ]
    },
    "MetricSummaryInput": {
      "interval": [
        "MetricInterval",
        false,
        false,
        false
      ],
      "types": [
        "MetricType",
        false,
        true,
        false
      ],
      "refresh": [
        "Boolean",
        true,
        false,
        false
      ]
    },
    "AdministratorFilterParameter": {
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "lastName": [
        "StringOperators",
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
      ]
    },
    "AdministratorSortParameter": {
      "id": [
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
      "updatedAt": [
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
      "lastName": [
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
      ]
    },
    "AssetFilterParameter": {
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "type": [
        "StringOperators",
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
      "mimeType": [
        "StringOperators",
        true,
        false,
        false
      ],
      "width": [
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
      "source": [
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
      ]
    },
    "AssetSortParameter": {
      "id": [
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
      "updatedAt": [
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
      "fileSize": [
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
      "width": [
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
      "source": [
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
      ]
    },
    "ChannelFilterParameter": {
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "token": [
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
      "trackInventory": [
        "BooleanOperators",
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
      ]
    },
    "ChannelSortParameter": {
      "id": [
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
      "updatedAt": [
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
      "token": [
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
      ]
    },
    "CollectionFilterParameter": {
      "isPrivate": [
        "BooleanOperators",
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
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "slug": [
        "StringOperators",
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
      "description": [
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
      ]
    },
    "CollectionSortParameter": {
      "id": [
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
      "updatedAt": [
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
      "slug": [
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
      "description": [
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
      ]
    },
    "ProductVariantSortParameter": {
      "stockOnHand": [
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
      "outOfStockThreshold": [
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
      "productId": [
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
      "updatedAt": [
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
      ],
      "priceWithTax": [
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
      ]
    },
    "CountryFilterParameter": {
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "code": [
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
      "name": [
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
      "parentId": [
        "IDOperators",
        true,
        false,
        false
      ],
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
      ]
    },
    "CountrySortParameter": {
      "id": [
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
      "updatedAt": [
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
      "type": [
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
      ]
    },
    "CustomerGroupFilterParameter": {
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      ]
    },
    "CustomerGroupSortParameter": {
      "id": [
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
      "updatedAt": [
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
      ]
    },
    "CustomerSortParameter": {
      "id": [
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
      "updatedAt": [
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
      "firstName": [
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
      "emailAddress": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "FacetFilterParameter": {
      "isPrivate": [
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
      "createdAt": [
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
      "code": [
        "StringOperators",
        true,
        false,
        false
      ],
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
      ]
    },
    "FacetSortParameter": {
      "id": [
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
      "updatedAt": [
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
      "code": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "FacetValueFilterParameter": {
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "facetId": [
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
      "code": [
        "StringOperators",
        true,
        false,
        false
      ],
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
      ]
    },
    "FacetValueSortParameter": {
      "id": [
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
      "updatedAt": [
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
      "name": [
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
      ]
    },
    "JobFilterParameter": {
      "id": [
        "IDOperators",
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
      "startedAt": [
        "DateOperators",
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
      "queueName": [
        "StringOperators",
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
      "progress": [
        "NumberOperators",
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
      "duration": [
        "NumberOperators",
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
      "attempts": [
        "NumberOperators",
        true,
        false,
        false
      ],
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
      ]
    },
    "JobSortParameter": {
      "id": [
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
      "startedAt": [
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
      "queueName": [
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
      "duration": [
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
      "attempts": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "PaymentMethodFilterParameter": {
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "code": [
        "StringOperators",
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
      ]
    },
    "PaymentMethodSortParameter": {
      "id": [
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
      "updatedAt": [
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
      "code": [
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
      ]
    },
    "ProductSortParameter": {
      "id": [
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
      "updatedAt": [
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
      "slug": [
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
      ]
    },
    "PromotionFilterParameter": {
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "endsAt": [
        "DateOperators",
        true,
        false,
        false
      ],
      "couponCode": [
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
      "usageLimit": [
        "NumberOperators",
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
      ]
    },
    "PromotionSortParameter": {
      "id": [
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
      "updatedAt": [
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
      "endsAt": [
        "SortOrder",
        true,
        false,
        false
      ],
      "couponCode": [
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
      "usageLimit": [
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
      "description": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "ProvinceFilterParameter": {
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "code": [
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
      "name": [
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
      "parentId": [
        "IDOperators",
        true,
        false,
        false
      ],
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
      ]
    },
    "ProvinceSortParameter": {
      "id": [
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
      "updatedAt": [
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
      "type": [
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
      ]
    },
    "RoleFilterParameter": {
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "description": [
        "StringOperators",
        true,
        false,
        false
      ],
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
      ]
    },
    "RoleSortParameter": {
      "id": [
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
      "updatedAt": [
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
      "description": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "SellerFilterParameter": {
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      ]
    },
    "SellerSortParameter": {
      "id": [
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
      "updatedAt": [
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
      ]
    },
    "ShippingMethodFilterParameter": {
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "code": [
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
      ]
    },
    "ShippingMethodSortParameter": {
      "id": [
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
      "updatedAt": [
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
      "name": [
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
      ]
    },
    "StockLocationFilterParameter": {
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "description": [
        "StringOperators",
        true,
        false,
        false
      ],
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
      ]
    },
    "StockLocationSortParameter": {
      "id": [
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
      "updatedAt": [
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
      "description": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "TagFilterParameter": {
      "id": [
        "IDOperators",
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
      ],
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
      ]
    },
    "TagSortParameter": {
      "id": [
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
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "isDefault": [
        "BooleanOperators",
        true,
        false,
        false
      ],
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
      ]
    },
    "TaxCategorySortParameter": {
      "id": [
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
      "updatedAt": [
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
      ]
    },
    "TaxRateFilterParameter": {
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      "enabled": [
        "BooleanOperators",
        true,
        false,
        false
      ],
      "value": [
        "NumberOperators",
        true,
        false,
        false
      ],
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
      ]
    },
    "TaxRateSortParameter": {
      "id": [
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
      "updatedAt": [
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
      "value": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "ZoneFilterParameter": {
      "id": [
        "IDOperators",
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
      "updatedAt": [
        "DateOperators",
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
      ]
    },
    "ZoneSortParameter": {
      "id": [
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
      "updatedAt": [
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
      ]
    },
    "HistoryEntryFilterParameter": {
      "isPublic": [
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
      "createdAt": [
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
      "type": [
        "StringOperators",
        true,
        false,
        false
      ],
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
      ]
    },
    "HistoryEntrySortParameter": {
      "id": [
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
      "updatedAt": [
        "SortOrder",
        true,
        false,
        false
      ]
    },
    "NativeAuthInput": {
      "username": [
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
      ]
    }
  },
  "scalars": [
    "ID",
    "String",
    "Int",
    "Boolean",
    "Float",
    "JSON",
    "DateTime",
    "Upload",
    "Money"
  ],
  "enums": {
    "JobState": [
      "PENDING",
      "RUNNING",
      "COMPLETED",
      "RETRYING",
      "FAILED",
      "CANCELLED"
    ],
    "StockMovementType": [
      "ADJUSTMENT",
      "ALLOCATION",
      "RELEASE",
      "SALE",
      "CANCELLATION",
      "RETURN"
    ],
    "AssetType": [
      "IMAGE",
      "VIDEO",
      "BINARY"
    ],
    "GlobalFlag": [
      "TRUE",
      "FALSE",
      "INHERIT"
    ],
    "AdjustmentType": [
      "PROMOTION",
      "DISTRIBUTED_ORDER_PROMOTION",
      "OTHER"
    ],
    "DeletionResult": [
      "DELETED",
      "NOT_DELETED"
    ],
    "Permission": [
      "Authenticated",
      "SuperAdmin",
      "Owner",
      "Public",
      "UpdateGlobalSettings",
      "CreateCatalog",
      "ReadCatalog",
      "UpdateCatalog",
      "DeleteCatalog",
      "CreateSettings",
      "ReadSettings",
      "UpdateSettings",
      "DeleteSettings",
      "CreateAdministrator",
      "ReadAdministrator",
      "UpdateAdministrator",
      "DeleteAdministrator",
      "CreateAsset",
      "ReadAsset",
      "UpdateAsset",
      "DeleteAsset",
      "CreateChannel",
      "ReadChannel",
      "UpdateChannel",
      "DeleteChannel",
      "CreateCollection",
      "ReadCollection",
      "UpdateCollection",
      "DeleteCollection",
      "CreateCountry",
      "ReadCountry",
      "UpdateCountry",
      "DeleteCountry",
      "CreateCustomer",
      "ReadCustomer",
      "UpdateCustomer",
      "DeleteCustomer",
      "CreateCustomerGroup",
      "ReadCustomerGroup",
      "UpdateCustomerGroup",
      "DeleteCustomerGroup",
      "CreateFacet",
      "ReadFacet",
      "UpdateFacet",
      "DeleteFacet",
      "CreateOrder",
      "ReadOrder",
      "UpdateOrder",
      "DeleteOrder",
      "CreatePaymentMethod",
      "ReadPaymentMethod",
      "UpdatePaymentMethod",
      "DeletePaymentMethod",
      "CreateProduct",
      "ReadProduct",
      "UpdateProduct",
      "DeleteProduct",
      "CreatePromotion",
      "ReadPromotion",
      "UpdatePromotion",
      "DeletePromotion",
      "CreateShippingMethod",
      "ReadShippingMethod",
      "UpdateShippingMethod",
      "DeleteShippingMethod",
      "CreateTag",
      "ReadTag",
      "UpdateTag",
      "DeleteTag",
      "CreateTaxCategory",
      "ReadTaxCategory",
      "UpdateTaxCategory",
      "DeleteTaxCategory",
      "CreateTaxRate",
      "ReadTaxRate",
      "UpdateTaxRate",
      "DeleteTaxRate",
      "CreateSeller",
      "ReadSeller",
      "UpdateSeller",
      "DeleteSeller",
      "CreateStockLocation",
      "ReadStockLocation",
      "UpdateStockLocation",
      "DeleteStockLocation",
      "CreateSystem",
      "ReadSystem",
      "UpdateSystem",
      "DeleteSystem",
      "CreateZone",
      "ReadZone",
      "UpdateZone",
      "DeleteZone"
    ],
    "SortOrder": [
      "ASC",
      "DESC"
    ],
    "ErrorCode": [
      "UNKNOWN_ERROR",
      "MIME_TYPE_ERROR",
      "LANGUAGE_NOT_AVAILABLE_ERROR",
      "DUPLICATE_ENTITY_ERROR",
      "FACET_IN_USE_ERROR",
      "CHANNEL_DEFAULT_LANGUAGE_ERROR",
      "SETTLE_PAYMENT_ERROR",
      "CANCEL_PAYMENT_ERROR",
      "EMPTY_ORDER_LINE_SELECTION_ERROR",
      "ITEMS_ALREADY_FULFILLED_ERROR",
      "INVALID_FULFILLMENT_HANDLER_ERROR",
      "CREATE_FULFILLMENT_ERROR",
      "INSUFFICIENT_STOCK_ON_HAND_ERROR",
      "MULTIPLE_ORDER_ERROR",
      "CANCEL_ACTIVE_ORDER_ERROR",
      "PAYMENT_ORDER_MISMATCH_ERROR",
      "REFUND_ORDER_STATE_ERROR",
      "NOTHING_TO_REFUND_ERROR",
      "ALREADY_REFUNDED_ERROR",
      "QUANTITY_TOO_GREAT_ERROR",
      "REFUND_AMOUNT_ERROR",
      "REFUND_STATE_TRANSITION_ERROR",
      "PAYMENT_STATE_TRANSITION_ERROR",
      "FULFILLMENT_STATE_TRANSITION_ERROR",
      "ORDER_MODIFICATION_STATE_ERROR",
      "NO_CHANGES_SPECIFIED_ERROR",
      "PAYMENT_METHOD_MISSING_ERROR",
      "REFUND_PAYMENT_ID_MISSING_ERROR",
      "MANUAL_PAYMENT_STATE_ERROR",
      "PRODUCT_OPTION_IN_USE_ERROR",
      "MISSING_CONDITIONS_ERROR",
      "NATIVE_AUTH_STRATEGY_ERROR",
      "INVALID_CREDENTIALS_ERROR",
      "ORDER_STATE_TRANSITION_ERROR",
      "EMAIL_ADDRESS_CONFLICT_ERROR",
      "GUEST_CHECKOUT_ERROR",
      "ORDER_LIMIT_ERROR",
      "NEGATIVE_QUANTITY_ERROR",
      "INSUFFICIENT_STOCK_ERROR",
      "COUPON_CODE_INVALID_ERROR",
      "COUPON_CODE_EXPIRED_ERROR",
      "COUPON_CODE_LIMIT_ERROR",
      "ORDER_MODIFICATION_ERROR",
      "INELIGIBLE_SHIPPING_METHOD_ERROR",
      "NO_ACTIVE_ORDER_ERROR",
      "ORDER_INTERCEPTOR_ERROR"
    ],
    "LogicalOperator": [
      "AND",
      "OR"
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
    "HistoryEntryType": [
      "CUSTOMER_REGISTERED",
      "CUSTOMER_VERIFIED",
      "CUSTOMER_DETAIL_UPDATED",
      "CUSTOMER_ADDED_TO_GROUP",
      "CUSTOMER_REMOVED_FROM_GROUP",
      "CUSTOMER_ADDRESS_CREATED",
      "CUSTOMER_ADDRESS_UPDATED",
      "CUSTOMER_ADDRESS_DELETED",
      "CUSTOMER_PASSWORD_UPDATED",
      "CUSTOMER_PASSWORD_RESET_REQUESTED",
      "CUSTOMER_PASSWORD_RESET_VERIFIED",
      "CUSTOMER_EMAIL_UPDATE_REQUESTED",
      "CUSTOMER_EMAIL_UPDATE_VERIFIED",
      "CUSTOMER_NOTE",
      "ORDER_STATE_TRANSITION",
      "ORDER_PAYMENT_TRANSITION",
      "ORDER_FULFILLMENT",
      "ORDER_CANCELLATION",
      "ORDER_REFUND_TRANSITION",
      "ORDER_FULFILLMENT_TRANSITION",
      "ORDER_NOTE",
      "ORDER_COUPON_APPLIED",
      "ORDER_COUPON_REMOVED",
      "ORDER_MODIFIED",
      "ORDER_CUSTOMER_UPDATED"
    ],
    "LanguageCode": [
      "af",
      "ak",
      "sq",
      "am",
      "ar",
      "hy",
      "as",
      "az",
      "bm",
      "bn",
      "eu",
      "be",
      "bs",
      "br",
      "bg",
      "my",
      "ca",
      "ce",
      "zh",
      "zh_Hans",
      "zh_Hant",
      "cu",
      "kw",
      "co",
      "hr",
      "cs",
      "da",
      "nl",
      "nl_BE",
      "dz",
      "en",
      "en_AU",
      "en_CA",
      "en_GB",
      "en_US",
      "eo",
      "et",
      "ee",
      "fo",
      "fi",
      "fr",
      "fr_CA",
      "fr_CH",
      "ff",
      "gl",
      "lg",
      "ka",
      "de",
      "de_AT",
      "de_CH",
      "el",
      "gu",
      "ht",
      "ha",
      "he",
      "hi",
      "hu",
      "is",
      "ig",
      "id",
      "ia",
      "ga",
      "it",
      "ja",
      "jv",
      "kl",
      "kn",
      "ks",
      "kk",
      "km",
      "ki",
      "rw",
      "ko",
      "ku",
      "ky",
      "lo",
      "la",
      "lv",
      "ln",
      "lt",
      "lu",
      "lb",
      "mk",
      "mg",
      "ms",
      "ml",
      "mt",
      "gv",
      "mi",
      "mr",
      "mn",
      "ne",
      "nd",
      "se",
      "nb",
      "nn",
      "ny",
      "or",
      "om",
      "os",
      "ps",
      "fa",
      "fa_AF",
      "pl",
      "pt",
      "pt_BR",
      "pt_PT",
      "pa",
      "qu",
      "ro",
      "ro_MD",
      "rm",
      "rn",
      "ru",
      "sm",
      "sg",
      "sa",
      "gd",
      "sr",
      "sn",
      "ii",
      "sd",
      "si",
      "sk",
      "sl",
      "so",
      "st",
      "es",
      "es_ES",
      "es_MX",
      "su",
      "sw",
      "sw_CD",
      "sv",
      "tg",
      "ta",
      "tt",
      "te",
      "th",
      "bo",
      "ti",
      "to",
      "tr",
      "tk",
      "uk",
      "ur",
      "ug",
      "uz",
      "vi",
      "vo",
      "cy",
      "fy",
      "wo",
      "xh",
      "yi",
      "yo",
      "zu"
    ],
    "OrderType": [
      "Regular",
      "Seller",
      "Aggregate"
    ],
    "MetricInterval": [
      "Daily"
    ],
    "MetricType": [
      "OrderCount",
      "OrderTotal",
      "AverageOrderValue"
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
