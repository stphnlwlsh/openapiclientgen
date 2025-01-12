import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface GoogleApiHttpBody {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType?: string | null;

		/** The HTTP request/response body as raw binary. */
		data?: string | null;

		/** Application specific response metadata. Must be set in the first response for streaming APIs. */
		extensions?: Array<string>;
	}

	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface GoogleApiHttpBodyFormProperties {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType: FormControl<string | null | undefined>,

		/** The HTTP request/response body as raw binary. */
		data: FormControl<string | null | undefined>,
	}
	export function CreateGoogleApiHttpBodyFormGroup() {
		return new FormGroup<GoogleApiHttpBodyFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for TriggerCatalogRejoin method. */
	export interface GoogleCloudRecommendationengineV1alphaRejoinCatalogMetadata {
	}

	/** Metadata for TriggerCatalogRejoin method. */
	export interface GoogleCloudRecommendationengineV1alphaRejoinCatalogMetadataFormProperties {
	}
	export function CreateGoogleCloudRecommendationengineV1alphaRejoinCatalogMetadataFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1alphaRejoinCatalogMetadataFormProperties>({
		});

	}


	/** Response message for TriggerCatalogRejoin method. */
	export interface GoogleCloudRecommendationengineV1alphaRejoinCatalogResponse {

		/** Number of user events that were joined with latest catalog items. */
		rejoinedUserEventsCount?: string | null;
	}

	/** Response message for TriggerCatalogRejoin method. */
	export interface GoogleCloudRecommendationengineV1alphaRejoinCatalogResponseFormProperties {

		/** Number of user events that were joined with latest catalog items. */
		rejoinedUserEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1alphaRejoinCatalogResponseFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1alphaRejoinCatalogResponseFormProperties>({
			rejoinedUserEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata associated with a tune operation. */
	export interface GoogleCloudRecommendationengineV1alphaTuningMetadata {

		/** The resource name of the recommendation model that this tune applies to. Format: projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/eventStores/{event_store_id}/recommendationModels/{recommendation_model_id} */
		recommendationModel?: string | null;
	}

	/** Metadata associated with a tune operation. */
	export interface GoogleCloudRecommendationengineV1alphaTuningMetadataFormProperties {

		/** The resource name of the recommendation model that this tune applies to. Format: projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/eventStores/{event_store_id}/recommendationModels/{recommendation_model_id} */
		recommendationModel: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1alphaTuningMetadataFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1alphaTuningMetadataFormProperties>({
			recommendationModel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response associated with a tune operation. */
	export interface GoogleCloudRecommendationengineV1alphaTuningResponse {
	}

	/** Response associated with a tune operation. */
	export interface GoogleCloudRecommendationengineV1alphaTuningResponseFormProperties {
	}
	export function CreateGoogleCloudRecommendationengineV1alphaTuningResponseFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1alphaTuningResponseFormProperties>({
		});

	}


	/** BigQuery source import data from. */
	export interface GoogleCloudRecommendationengineV1beta1BigQuerySource {

		/** Optional. The schema to use when parsing the data from the source. Supported values for catalog imports: 1: "catalog_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#json (Default for catalogItems.import) 2: "catalog_merchant_center" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#mc Supported values for user event imports: 1: "user_events_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/manage-user-events#import (Default for userEvents.import) 2. "user_events_ga360" using https://support.google.com/analytics/answer/3437719?hl=en */
		dataSchema?: string | null;

		/** Required. The BigQuery data set to copy the data from. */
		datasetId?: string | null;

		/** Optional. Intermediate Cloud Storage directory used for the import. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory. */
		gcsStagingDir?: string | null;

		/** Optional. The project id (can be project # or id) that the BigQuery source is in. If not specified, inherits the project id from the parent request. */
		projectId?: string | null;

		/** Required. The BigQuery table to copy the data from. */
		tableId?: string | null;
	}

	/** BigQuery source import data from. */
	export interface GoogleCloudRecommendationengineV1beta1BigQuerySourceFormProperties {

		/** Optional. The schema to use when parsing the data from the source. Supported values for catalog imports: 1: "catalog_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#json (Default for catalogItems.import) 2: "catalog_merchant_center" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#mc Supported values for user event imports: 1: "user_events_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/manage-user-events#import (Default for userEvents.import) 2. "user_events_ga360" using https://support.google.com/analytics/answer/3437719?hl=en */
		dataSchema: FormControl<string | null | undefined>,

		/** Required. The BigQuery data set to copy the data from. */
		datasetId: FormControl<string | null | undefined>,

		/** Optional. Intermediate Cloud Storage directory used for the import. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory. */
		gcsStagingDir: FormControl<string | null | undefined>,

		/** Optional. The project id (can be project # or id) that the BigQuery source is in. If not specified, inherits the project id from the parent request. */
		projectId: FormControl<string | null | undefined>,

		/** Required. The BigQuery table to copy the data from. */
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1BigQuerySourceFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1BigQuerySourceFormProperties>({
			dataSchema: new FormControl<string | null | undefined>(undefined),
			datasetId: new FormControl<string | null | undefined>(undefined),
			gcsStagingDir: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The catalog configuration. Next ID: 5. */
	export interface GoogleCloudRecommendationengineV1beta1Catalog {

		/** Configures the catalog level that users send events to, and the level at which predictions are made. */
		catalogItemLevelConfig?: GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig;

		/** Required. The ID of the default event store. */
		defaultEventStoreId?: string | null;

		/** Required. The catalog display name. */
		displayName?: string | null;

		/** The fully qualified resource name of the catalog. */
		name?: string | null;
	}

	/** The catalog configuration. Next ID: 5. */
	export interface GoogleCloudRecommendationengineV1beta1CatalogFormProperties {

		/** Required. The ID of the default event store. */
		defaultEventStoreId: FormControl<string | null | undefined>,

		/** Required. The catalog display name. */
		displayName: FormControl<string | null | undefined>,

		/** The fully qualified resource name of the catalog. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1CatalogFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1CatalogFormProperties>({
			defaultEventStoreId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures the catalog level that users send events to, and the level at which predictions are made. */
	export interface GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig {

		/** Optional. Level of the catalog at which events are uploaded. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details. */
		eventItemLevel?: GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevel | null;

		/** Optional. Level of the catalog at which predictions are made. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details. */
		predictItemLevel?: GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevel | null;
	}

	/** Configures the catalog level that users send events to, and the level at which predictions are made. */
	export interface GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigFormProperties {

		/** Optional. Level of the catalog at which events are uploaded. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details. */
		eventItemLevel: FormControl<GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevel | null | undefined>,

		/** Optional. Level of the catalog at which predictions are made. See https://cloud.google.com/recommendations-ai/docs/catalog#catalog-levels for more details. */
		predictItemLevel: FormControl<GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevel | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigFormProperties>({
			eventItemLevel: new FormControl<GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevel | null | undefined>(undefined),
			predictItemLevel: new FormControl<GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevel | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevel { CATALOG_ITEM_LEVEL_UNSPECIFIED = 0, VARIANT = 1, MASTER = 2 }


	/** The inline source for the input config for ImportCatalogItems method. */
	export interface GoogleCloudRecommendationengineV1beta1CatalogInlineSource {

		/** Optional. A list of catalog items to update/create. Recommended max of 10k items. */
		catalogItems?: Array<GoogleCloudRecommendationengineV1beta1CatalogItem>;
	}

	/** The inline source for the input config for ImportCatalogItems method. */
	export interface GoogleCloudRecommendationengineV1beta1CatalogInlineSourceFormProperties {
	}
	export function CreateGoogleCloudRecommendationengineV1beta1CatalogInlineSourceFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1CatalogInlineSourceFormProperties>({
		});

	}


	/** CatalogItem captures all metadata information of items to be recommended. */
	export interface GoogleCloudRecommendationengineV1beta1CatalogItem {

		/** Required. Catalog item categories. This field is repeated for supporting one catalog item belonging to several parallel category hierarchies. For example, if a shoes product belongs to both ["Shoes & Accessories" -> "Shoes"] and ["Sports & Fitness" -> "Athletic Clothing" -> "Shoes"], it could be represented as: "categoryHierarchies": [ { "categories": ["Shoes & Accessories", "Shoes"]}, { "categories": ["Sports & Fitness", "Athletic Clothing", "Shoes"] } ] */
		categoryHierarchies?: Array<GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy>;

		/** Optional. Catalog item description. UTF-8 encoded string with a length limit of 5 KiB. */
		description?: string | null;

		/** Required. Catalog item identifier. UTF-8 encoded string with a length limit of 128 bytes. This id must be unique among all catalog items within the same catalog. It should also be used when logging user events in order for the user events to be joined with the Catalog. */
		id?: string | null;

		/** FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features. */
		itemAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap;

		/** Optional. Variant group identifier for prediction results. UTF-8 encoded string with a length limit of 128 bytes. This field must be enabled before it can be used. [Learn more](/recommendations-ai/docs/catalog#item-group-id). */
		itemGroupId?: string | null;

		/** Optional. Deprecated. The model automatically detects the text language. Your catalog can include text in different languages, but duplicating catalog items to provide text in multiple languages can result in degraded model performance. */
		languageCode?: string | null;

		/** ProductCatalogItem captures item metadata specific to retail products. */
		productMetadata?: GoogleCloudRecommendationengineV1beta1ProductCatalogItem;

		/** Optional. Filtering tags associated with the catalog item. Each tag should be a UTF-8 encoded string with a length limit of 1 KiB. This tag can be used for filtering recommendation results by passing the tag as part of the predict request filter. */
		tags?: Array<string>;

		/** Required. Catalog item title. UTF-8 encoded string with a length limit of 1 KiB. */
		title?: string | null;
	}

	/** CatalogItem captures all metadata information of items to be recommended. */
	export interface GoogleCloudRecommendationengineV1beta1CatalogItemFormProperties {

		/** Optional. Catalog item description. UTF-8 encoded string with a length limit of 5 KiB. */
		description: FormControl<string | null | undefined>,

		/** Required. Catalog item identifier. UTF-8 encoded string with a length limit of 128 bytes. This id must be unique among all catalog items within the same catalog. It should also be used when logging user events in order for the user events to be joined with the Catalog. */
		id: FormControl<string | null | undefined>,

		/** Optional. Variant group identifier for prediction results. UTF-8 encoded string with a length limit of 128 bytes. This field must be enabled before it can be used. [Learn more](/recommendations-ai/docs/catalog#item-group-id). */
		itemGroupId: FormControl<string | null | undefined>,

		/** Optional. Deprecated. The model automatically detects the text language. Your catalog can include text in different languages, but duplicating catalog items to provide text in multiple languages can result in degraded model performance. */
		languageCode: FormControl<string | null | undefined>,

		/** Required. Catalog item title. UTF-8 encoded string with a length limit of 1 KiB. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1CatalogItemFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1CatalogItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			itemGroupId: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Category represents catalog item category hierarchy. */
	export interface GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy {

		/** Required. Catalog item categories. Each category should be a UTF-8 encoded string with a length limit of 2 KiB. Note that the order in the list denotes the specificity (from least to most specific). */
		categories?: Array<string>;
	}

	/** Category represents catalog item category hierarchy. */
	export interface GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchyFormProperties {
	}
	export function CreateGoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchyFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchyFormProperties>({
		});

	}


	/** FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features. */
	export interface GoogleCloudRecommendationengineV1beta1FeatureMap {

		/** Categorical features that can take on one of a limited number of possible values. Some examples would be the brand/maker of a product, or country of a customer. Feature names and values must be UTF-8 encoded strings. For example: `{ "colors": {"value": ["yellow", "green"]}, "sizes": {"value":["S", "M"]}` */
		categoricalFeatures?: {[id: string]: GoogleCloudRecommendationengineV1beta1FeatureMapStringList };

		/** Numerical features. Some examples would be the height/weight of a product, or age of a customer. Feature names must be UTF-8 encoded strings. For example: `{ "lengths_cm": {"value":[2.3, 15.4]}, "heights_cm": {"value":[8.1, 6.4]} }` */
		numericalFeatures?: {[id: string]: GoogleCloudRecommendationengineV1beta1FeatureMapFloatList };
	}

	/** FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features. */
	export interface GoogleCloudRecommendationengineV1beta1FeatureMapFormProperties {

		/** Categorical features that can take on one of a limited number of possible values. Some examples would be the brand/maker of a product, or country of a customer. Feature names and values must be UTF-8 encoded strings. For example: `{ "colors": {"value": ["yellow", "green"]}, "sizes": {"value":["S", "M"]}` */
		categoricalFeatures: FormControl<{[id: string]: GoogleCloudRecommendationengineV1beta1FeatureMapStringList } | null | undefined>,

		/** Numerical features. Some examples would be the height/weight of a product, or age of a customer. Feature names must be UTF-8 encoded strings. For example: `{ "lengths_cm": {"value":[2.3, 15.4]}, "heights_cm": {"value":[8.1, 6.4]} }` */
		numericalFeatures: FormControl<{[id: string]: GoogleCloudRecommendationengineV1beta1FeatureMapFloatList } | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1FeatureMapFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1FeatureMapFormProperties>({
			categoricalFeatures: new FormControl<{[id: string]: GoogleCloudRecommendationengineV1beta1FeatureMapStringList } | null | undefined>(undefined),
			numericalFeatures: new FormControl<{[id: string]: GoogleCloudRecommendationengineV1beta1FeatureMapFloatList } | null | undefined>(undefined),
		});

	}


	/** A list of string features. */
	export interface GoogleCloudRecommendationengineV1beta1FeatureMapStringList {

		/** String feature value with a length limit of 128 bytes. */
		value?: Array<string>;
	}

	/** A list of string features. */
	export interface GoogleCloudRecommendationengineV1beta1FeatureMapStringListFormProperties {
	}
	export function CreateGoogleCloudRecommendationengineV1beta1FeatureMapStringListFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1FeatureMapStringListFormProperties>({
		});

	}


	/** A list of float features. */
	export interface GoogleCloudRecommendationengineV1beta1FeatureMapFloatList {

		/** Float feature value. */
		value?: Array<number>;
	}

	/** A list of float features. */
	export interface GoogleCloudRecommendationengineV1beta1FeatureMapFloatListFormProperties {
	}
	export function CreateGoogleCloudRecommendationengineV1beta1FeatureMapFloatListFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1FeatureMapFloatListFormProperties>({
		});

	}


	/** ProductCatalogItem captures item metadata specific to retail products. */
	export interface GoogleCloudRecommendationengineV1beta1ProductCatalogItem {

		/** Optional. The available quantity of the item. */
		availableQuantity?: string | null;

		/** Optional. Canonical URL directly linking to the item detail page with a length limit of 5 KiB.. */
		canonicalProductUri?: string | null;

		/** Optional. A map to pass the costs associated with the product. For example: {"manufacturing": 45.5} The profit of selling this item is computed like so: * If 'exactPrice' is provided, profit = displayPrice - sum(costs) * If 'priceRange' is provided, profit = minPrice - sum(costs) */
		costs?: {[id: string]: number };

		/** Optional. Only required if the price is set. Currency code for price/costs. Use three-character ISO-4217 code. */
		currencyCode?: string | null;

		/** Exact product price. */
		exactPrice?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice;

		/** Optional. Product images for the catalog item. */
		images?: Array<GoogleCloudRecommendationengineV1beta1Image>;

		/** Product price range when there are a range of prices for different variations of the same product. */
		priceRange?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange;

		/** Optional. Online stock state of the catalog item. Default is `IN_STOCK`. */
		stockState?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockState | null;
	}

	/** ProductCatalogItem captures item metadata specific to retail products. */
	export interface GoogleCloudRecommendationengineV1beta1ProductCatalogItemFormProperties {

		/** Optional. The available quantity of the item. */
		availableQuantity: FormControl<string | null | undefined>,

		/** Optional. Canonical URL directly linking to the item detail page with a length limit of 5 KiB.. */
		canonicalProductUri: FormControl<string | null | undefined>,

		/** Optional. A map to pass the costs associated with the product. For example: {"manufacturing": 45.5} The profit of selling this item is computed like so: * If 'exactPrice' is provided, profit = displayPrice - sum(costs) * If 'priceRange' is provided, profit = minPrice - sum(costs) */
		costs: FormControl<{[id: string]: number } | null | undefined>,

		/** Optional. Only required if the price is set. Currency code for price/costs. Use three-character ISO-4217 code. */
		currencyCode: FormControl<string | null | undefined>,

		/** Optional. Online stock state of the catalog item. Default is `IN_STOCK`. */
		stockState: FormControl<GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockState | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ProductCatalogItemFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ProductCatalogItemFormProperties>({
			availableQuantity: new FormControl<string | null | undefined>(undefined),
			canonicalProductUri: new FormControl<string | null | undefined>(undefined),
			costs: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			stockState: new FormControl<GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockState | null | undefined>(undefined),
		});

	}


	/** Exact product price. */
	export interface GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice {

		/** Optional. Display price of the product. */
		displayPrice?: number | null;

		/** Optional. Price of the product without any discount. If zero, by default set to be the 'displayPrice'. */
		originalPrice?: number | null;
	}

	/** Exact product price. */
	export interface GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPriceFormProperties {

		/** Optional. Display price of the product. */
		displayPrice: FormControl<number | null | undefined>,

		/** Optional. Price of the product without any discount. If zero, by default set to be the 'displayPrice'. */
		originalPrice: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPriceFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPriceFormProperties>({
			displayPrice: new FormControl<number | null | undefined>(undefined),
			originalPrice: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Catalog item thumbnail/detail image. */
	export interface GoogleCloudRecommendationengineV1beta1Image {

		/** Optional. Height of the image in number of pixels. */
		height?: number | null;

		/** Required. URL of the image with a length limit of 5 KiB. */
		uri?: string | null;

		/** Optional. Width of the image in number of pixels. */
		width?: number | null;
	}

	/** Catalog item thumbnail/detail image. */
	export interface GoogleCloudRecommendationengineV1beta1ImageFormProperties {

		/** Optional. Height of the image in number of pixels. */
		height: FormControl<number | null | undefined>,

		/** Required. URL of the image with a length limit of 5 KiB. */
		uri: FormControl<string | null | undefined>,

		/** Optional. Width of the image in number of pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ImageFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ImageFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Product price range when there are a range of prices for different variations of the same product. */
	export interface GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange {

		/** Required. The maximum product price. */
		max?: number | null;

		/** Required. The minimum product price. */
		min?: number | null;
	}

	/** Product price range when there are a range of prices for different variations of the same product. */
	export interface GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRangeFormProperties {

		/** Required. The maximum product price. */
		max: FormControl<number | null | undefined>,

		/** Required. The minimum product price. */
		min: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRangeFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRangeFormProperties>({
			max: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockState { STOCK_STATE_UNSPECIFIED = 0, IN_STOCK = 1, OUT_OF_STOCK = 2, PREORDER = 3, BACKORDER = 4 }


	/** Request message for the `CreatePredictionApiKeyRegistration` method. */
	export interface GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest {

		/** Registered Api Key. */
		predictionApiKeyRegistration?: GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration;
	}

	/** Request message for the `CreatePredictionApiKeyRegistration` method. */
	export interface GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequestFormProperties {
	}
	export function CreateGoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequestFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequestFormProperties>({
		});

	}


	/** Registered Api Key. */
	export interface GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration {

		/** The API key. */
		apiKey?: string | null;
	}

	/** Registered Api Key. */
	export interface GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistrationFormProperties {

		/** The API key. */
		apiKey: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistrationFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistrationFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User event details shared by all recommendation types. */
	export interface GoogleCloudRecommendationengineV1beta1EventDetail {

		/** FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features. */
		eventAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap;

		/** Optional. A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Recommendation Engine system, using different recommendation models). */
		experimentIds?: Array<string>;

		/** Optional. A unique id of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. This `pageViewId` will be automatically generated if using the JavaScript pixel. */
		pageViewId?: string | null;

		/** Optional. Recommendation token included in the recommendation prediction response. This field enables accurate attribution of recommendation model performance. This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased item. If user clicks on product K in the recommendation results, pass the `PredictResponse.recommendationToken` property as a url parameter to product K's page. When recording events on product K's page, log the PredictResponse.recommendation_token to this field. Optional, but highly encouraged for user events that are the result of a recommendation prediction query. */
		recommendationToken?: string | null;

		/** Optional. The referrer url of the current page. When using the JavaScript pixel, this value is filled in automatically. */
		referrerUri?: string | null;

		/** Optional. Complete url (window.location.href) of the user's current page. When using the JavaScript pixel, this value is filled in automatically. Maximum length 5KB. */
		uri?: string | null;
	}

	/** User event details shared by all recommendation types. */
	export interface GoogleCloudRecommendationengineV1beta1EventDetailFormProperties {

		/** Optional. A unique id of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. This `pageViewId` will be automatically generated if using the JavaScript pixel. */
		pageViewId: FormControl<string | null | undefined>,

		/** Optional. Recommendation token included in the recommendation prediction response. This field enables accurate attribution of recommendation model performance. This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased item. If user clicks on product K in the recommendation results, pass the `PredictResponse.recommendationToken` property as a url parameter to product K's page. When recording events on product K's page, log the PredictResponse.recommendation_token to this field. Optional, but highly encouraged for user events that are the result of a recommendation prediction query. */
		recommendationToken: FormControl<string | null | undefined>,

		/** Optional. The referrer url of the current page. When using the JavaScript pixel, this value is filled in automatically. */
		referrerUri: FormControl<string | null | undefined>,

		/** Optional. Complete url (window.location.href) of the user's current page. When using the JavaScript pixel, this value is filled in automatically. Maximum length 5KB. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1EventDetailFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1EventDetailFormProperties>({
			pageViewId: new FormControl<string | null | undefined>(undefined),
			recommendationToken: new FormControl<string | null | undefined>(undefined),
			referrerUri: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Google Cloud Storage location for input content. format. */
	export interface GoogleCloudRecommendationengineV1beta1GcsSource {

		/** Required. Google Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, `gs://bucket/directory/object.json`) or a pattern matching one or more files, such as `gs://bucket/directory/*.json`. A request can contain at most 100 files, and each file can be up to 2 GB. See [Importing catalog information](/recommendations-ai/docs/upload-catalog) for the expected file format and setup instructions. */
		inputUris?: Array<string>;

		/** Optional. The schema to use when parsing the data from the source. Supported values for catalog imports: 1: "catalog_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#json (Default for catalogItems.import) 2: "catalog_merchant_center" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#mc Supported values for user events imports: 1: "user_events_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/manage-user-events#import (Default for userEvents.import) 2. "user_events_ga360" using https://support.google.com/analytics/answer/3437719?hl=en */
		jsonSchema?: string | null;
	}

	/** Google Cloud Storage location for input content. format. */
	export interface GoogleCloudRecommendationengineV1beta1GcsSourceFormProperties {

		/** Optional. The schema to use when parsing the data from the source. Supported values for catalog imports: 1: "catalog_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#json (Default for catalogItems.import) 2: "catalog_merchant_center" using https://cloud.google.com/recommendations-ai/docs/upload-catalog#mc Supported values for user events imports: 1: "user_events_recommendations_ai" using https://cloud.google.com/recommendations-ai/docs/manage-user-events#import (Default for userEvents.import) 2. "user_events_ga360" using https://support.google.com/analytics/answer/3437719?hl=en */
		jsonSchema: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1GcsSourceFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1GcsSourceFormProperties>({
			jsonSchema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for Import methods. */
	export interface GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest {

		/** Configuration of destination for Import related errors. */
		errorsConfig?: GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;

		/** The input config source. */
		inputConfig?: GoogleCloudRecommendationengineV1beta1InputConfig;

		/** Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency and used for request deduplication. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response. */
		requestId?: string | null;

		/** Optional. Indicates which fields in the provided imported 'items' to update. If not set, will by default update all fields. */
		updateMask?: string | null;
	}

	/** Request message for Import methods. */
	export interface GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequestFormProperties {

		/** Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency and used for request deduplication. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response. */
		requestId: FormControl<string | null | undefined>,

		/** Optional. Indicates which fields in the provided imported 'items' to update. If not set, will by default update all fields. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequestFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration of destination for Import related errors. */
	export interface GoogleCloudRecommendationengineV1beta1ImportErrorsConfig {

		/** Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Import errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix?: string | null;
	}

	/** Configuration of destination for Import related errors. */
	export interface GoogleCloudRecommendationengineV1beta1ImportErrorsConfigFormProperties {

		/** Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Import errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ImportErrorsConfigFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ImportErrorsConfigFormProperties>({
			gcsPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input config source. */
	export interface GoogleCloudRecommendationengineV1beta1InputConfig {

		/** BigQuery source import data from. */
		bigQuerySource?: GoogleCloudRecommendationengineV1beta1BigQuerySource;

		/** The inline source for the input config for ImportCatalogItems method. */
		catalogInlineSource?: GoogleCloudRecommendationengineV1beta1CatalogInlineSource;

		/** Google Cloud Storage location for input content. format. */
		gcsSource?: GoogleCloudRecommendationengineV1beta1GcsSource;

		/** The inline source for the input config for ImportUserEvents method. */
		userEventInlineSource?: GoogleCloudRecommendationengineV1beta1UserEventInlineSource;
	}

	/** The input config source. */
	export interface GoogleCloudRecommendationengineV1beta1InputConfigFormProperties {
	}
	export function CreateGoogleCloudRecommendationengineV1beta1InputConfigFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1InputConfigFormProperties>({
		});

	}


	/** The inline source for the input config for ImportUserEvents method. */
	export interface GoogleCloudRecommendationengineV1beta1UserEventInlineSource {

		/** Optional. A list of user events to import. Recommended max of 10k items. */
		userEvents?: Array<GoogleCloudRecommendationengineV1beta1UserEvent>;
	}

	/** The inline source for the input config for ImportUserEvents method. */
	export interface GoogleCloudRecommendationengineV1beta1UserEventInlineSourceFormProperties {
	}
	export function CreateGoogleCloudRecommendationengineV1beta1UserEventInlineSourceFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1UserEventInlineSourceFormProperties>({
		});

	}


	/** UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website. */
	export interface GoogleCloudRecommendationengineV1beta1UserEvent {

		/** User event details shared by all recommendation types. */
		eventDetail?: GoogleCloudRecommendationengineV1beta1EventDetail;

		/** Optional. This field should *not* be set when using JavaScript pixel or the Recommendations AI Tag. Defaults to `EVENT_SOURCE_UNSPECIFIED`. */
		eventSource?: GoogleCloudRecommendationengineV1beta1UserEventEventSource | null;

		/** Optional. Only required for ImportUserEvents method. Timestamp of user event created. */
		eventTime?: string | null;

		/** Required. User event type. Allowed values are: * `add-to-cart` Products being added to cart. * `add-to-list` Items being added to a list (shopping list, favorites etc). * `category-page-view` Special pages such as sale or promotion pages viewed. * `checkout-start` User starting a checkout process. * `detail-page-view` Products detail page viewed. * `home-page-view` Homepage viewed. * `page-visit` Generic page visits not included in the event types above. * `purchase-complete` User finishing a purchase. * `refund` Purchased items being refunded or returned. * `remove-from-cart` Products being removed from cart. * `remove-from-list` Items being removed from a list. * `search` Product search. * `shopping-cart-page-view` User viewing a shopping cart. * `impression` List of items displayed. Used by Google Tag Manager. */
		eventType?: string | null;

		/** ProductEventDetail captures user event information specific to retail products. */
		productEventDetail?: GoogleCloudRecommendationengineV1beta1ProductEventDetail;

		/** Information of end users. */
		userInfo?: GoogleCloudRecommendationengineV1beta1UserInfo;
	}

	/** UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website. */
	export interface GoogleCloudRecommendationengineV1beta1UserEventFormProperties {

		/** Optional. This field should *not* be set when using JavaScript pixel or the Recommendations AI Tag. Defaults to `EVENT_SOURCE_UNSPECIFIED`. */
		eventSource: FormControl<GoogleCloudRecommendationengineV1beta1UserEventEventSource | null | undefined>,

		/** Optional. Only required for ImportUserEvents method. Timestamp of user event created. */
		eventTime: FormControl<string | null | undefined>,

		/** Required. User event type. Allowed values are: * `add-to-cart` Products being added to cart. * `add-to-list` Items being added to a list (shopping list, favorites etc). * `category-page-view` Special pages such as sale or promotion pages viewed. * `checkout-start` User starting a checkout process. * `detail-page-view` Products detail page viewed. * `home-page-view` Homepage viewed. * `page-visit` Generic page visits not included in the event types above. * `purchase-complete` User finishing a purchase. * `refund` Purchased items being refunded or returned. * `remove-from-cart` Products being removed from cart. * `remove-from-list` Items being removed from a list. * `search` Product search. * `shopping-cart-page-view` User viewing a shopping cart. * `impression` List of items displayed. Used by Google Tag Manager. */
		eventType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1UserEventFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1UserEventFormProperties>({
			eventSource: new FormControl<GoogleCloudRecommendationengineV1beta1UserEventEventSource | null | undefined>(undefined),
			eventTime: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecommendationengineV1beta1UserEventEventSource { EVENT_SOURCE_UNSPECIFIED = 0, AUTOML = 1, ECOMMERCE = 2, BATCH_UPLOAD = 3 }


	/** ProductEventDetail captures user event information specific to retail products. */
	export interface GoogleCloudRecommendationengineV1beta1ProductEventDetail {

		/** Optional. The id or name of the associated shopping cart. This id is used to associate multiple items added or present in the cart before purchase. This can only be set for `add-to-cart`, `remove-from-cart`, `checkout-start`, `purchase-complete`, or `shopping-cart-page-view` events. */
		cartId?: string | null;

		/** Required for `add-to-list` and `remove-from-list` events. The id or name of the list that the item is being added to or removed from. Other event types should not set this field. */
		listId?: string | null;

		/** Required for `category-page-view` events. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. The categories associated with a category page. Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: categories : ["Sales", "2017 Black Friday Deals"]. */
		pageCategories?: Array<GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy>;

		/** The main product details related to the event. This field is required for the following event types: * `add-to-cart` * `add-to-list` * `checkout-start` * `detail-page-view` * `purchase-complete` * `refund` * `remove-from-cart` * `remove-from-list` This field is optional for the following event types: * `page-visit` * `shopping-cart-page-view` - note that 'product_details' should be set for this unless the shopping cart is empty. * `search` (highly encouraged) In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished broswing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new SEARCH event with different product_details is desired. The end user may have not finished broswing the whole page yet. This field is not allowed for the following event types: * `category-page-view` * `home-page-view` */
		productDetails?: Array<GoogleCloudRecommendationengineV1beta1ProductDetail>;

		/** A transaction represents the entire purchase transaction. */
		purchaseTransaction?: GoogleCloudRecommendationengineV1beta1PurchaseTransaction;

		/** At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. The user's search query as UTF-8 encoded text with a length limit of 5 KiB. */
		searchQuery?: string | null;
	}

	/** ProductEventDetail captures user event information specific to retail products. */
	export interface GoogleCloudRecommendationengineV1beta1ProductEventDetailFormProperties {

		/** Optional. The id or name of the associated shopping cart. This id is used to associate multiple items added or present in the cart before purchase. This can only be set for `add-to-cart`, `remove-from-cart`, `checkout-start`, `purchase-complete`, or `shopping-cart-page-view` events. */
		cartId: FormControl<string | null | undefined>,

		/** Required for `add-to-list` and `remove-from-list` events. The id or name of the list that the item is being added to or removed from. Other event types should not set this field. */
		listId: FormControl<string | null | undefined>,

		/** At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. The user's search query as UTF-8 encoded text with a length limit of 5 KiB. */
		searchQuery: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ProductEventDetailFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ProductEventDetailFormProperties>({
			cartId: new FormControl<string | null | undefined>(undefined),
			listId: new FormControl<string | null | undefined>(undefined),
			searchQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed product information associated with a user event. */
	export interface GoogleCloudRecommendationengineV1beta1ProductDetail {

		/** Optional. Quantity of the products in stock when a user event happens. Optional. If provided, this overrides the available quantity in Catalog for this event. and can only be set if `stock_status` is set to `IN_STOCK`. Note that if an item is out of stock, you must set the `stock_state` field to be `OUT_OF_STOCK`. Leaving this field unspecified / as zero is not sufficient to mark the item out of stock. */
		availableQuantity?: number | null;

		/** Optional. Currency code for price/costs. Use three-character ISO-4217 code. Required only if originalPrice or displayPrice is set. */
		currencyCode?: string | null;

		/** Optional. Display price of the product (e.g. discounted price). If provided, this will override the display price in Catalog for this product. */
		displayPrice?: number | null;

		/** Required. Catalog item ID. UTF-8 encoded string with a length limit of 128 characters. */
		id?: string | null;

		/** FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features. */
		itemAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap;

		/** Optional. Original price of the product. If provided, this will override the original price in Catalog for this product. */
		originalPrice?: number | null;

		/** Optional. Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `add-to-cart` event. Required for `add-to-cart`, `add-to-list`, `remove-from-cart`, `checkout-start`, `purchase-complete`, `refund` event types. */
		quantity?: number | null;

		/** Optional. Item stock state. If provided, this overrides the stock state in Catalog for items in this event. */
		stockState?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockState | null;
	}

	/** Detailed product information associated with a user event. */
	export interface GoogleCloudRecommendationengineV1beta1ProductDetailFormProperties {

		/** Optional. Quantity of the products in stock when a user event happens. Optional. If provided, this overrides the available quantity in Catalog for this event. and can only be set if `stock_status` is set to `IN_STOCK`. Note that if an item is out of stock, you must set the `stock_state` field to be `OUT_OF_STOCK`. Leaving this field unspecified / as zero is not sufficient to mark the item out of stock. */
		availableQuantity: FormControl<number | null | undefined>,

		/** Optional. Currency code for price/costs. Use three-character ISO-4217 code. Required only if originalPrice or displayPrice is set. */
		currencyCode: FormControl<string | null | undefined>,

		/** Optional. Display price of the product (e.g. discounted price). If provided, this will override the display price in Catalog for this product. */
		displayPrice: FormControl<number | null | undefined>,

		/** Required. Catalog item ID. UTF-8 encoded string with a length limit of 128 characters. */
		id: FormControl<string | null | undefined>,

		/** Optional. Original price of the product. If provided, this will override the original price in Catalog for this product. */
		originalPrice: FormControl<number | null | undefined>,

		/** Optional. Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `add-to-cart` event. Required for `add-to-cart`, `add-to-list`, `remove-from-cart`, `checkout-start`, `purchase-complete`, `refund` event types. */
		quantity: FormControl<number | null | undefined>,

		/** Optional. Item stock state. If provided, this overrides the stock state in Catalog for items in this event. */
		stockState: FormControl<GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockState | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ProductDetailFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ProductDetailFormProperties>({
			availableQuantity: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			displayPrice: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			originalPrice: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			stockState: new FormControl<GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockState | null | undefined>(undefined),
		});

	}


	/** A transaction represents the entire purchase transaction. */
	export interface GoogleCloudRecommendationengineV1beta1PurchaseTransaction {

		/** Optional. All the costs associated with the product. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs. Total product cost such that profit = revenue - (sum(taxes) + sum(costs)) If product_cost is not set, then profit = revenue - tax - shipping - sum(CatalogItem.costs). If CatalogItem.cost is not specified for one of the items, CatalogItem.cost based profit *cannot* be calculated for this Transaction. */
		costs?: {[id: string]: number };

		/** Required. Currency code. Use three-character ISO-4217 code. This field is not required if the event type is `refund`. */
		currencyCode?: string | null;

		/** Optional. The transaction ID with a length limit of 128 bytes. */
		id?: string | null;

		/** Required. Total revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations. This field is not required if the event type is `refund`. */
		revenue?: number | null;

		/** Optional. All the taxes associated with the transaction. */
		taxes?: {[id: string]: number };
	}

	/** A transaction represents the entire purchase transaction. */
	export interface GoogleCloudRecommendationengineV1beta1PurchaseTransactionFormProperties {

		/** Optional. All the costs associated with the product. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs. Total product cost such that profit = revenue - (sum(taxes) + sum(costs)) If product_cost is not set, then profit = revenue - tax - shipping - sum(CatalogItem.costs). If CatalogItem.cost is not specified for one of the items, CatalogItem.cost based profit *cannot* be calculated for this Transaction. */
		costs: FormControl<{[id: string]: number } | null | undefined>,

		/** Required. Currency code. Use three-character ISO-4217 code. This field is not required if the event type is `refund`. */
		currencyCode: FormControl<string | null | undefined>,

		/** Optional. The transaction ID with a length limit of 128 bytes. */
		id: FormControl<string | null | undefined>,

		/** Required. Total revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations. This field is not required if the event type is `refund`. */
		revenue: FormControl<number | null | undefined>,

		/** Optional. All the taxes associated with the transaction. */
		taxes: FormControl<{[id: string]: number } | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1PurchaseTransactionFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1PurchaseTransactionFormProperties>({
			costs: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			revenue: new FormControl<number | null | undefined>(undefined),
			taxes: new FormControl<{[id: string]: number } | null | undefined>(undefined),
		});

	}


	/** Information of end users. */
	export interface GoogleCloudRecommendationengineV1beta1UserInfo {

		/** Optional. Indicates if the request is made directly from the end user in which case the user_agent and ip_address fields can be populated from the HTTP request. This should *not* be set when using the javascript pixel. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). */
		directUserRequest?: boolean | null;

		/** Optional. IP address of the user. This could be either IPv4 (e.g. 104.133.9.80) or IPv6 (e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). This should *not* be set when using the javascript pixel or if `direct_user_request` is set. Used to extract location information for personalization. */
		ipAddress?: string | null;

		/** Optional. User agent as included in the HTTP header. UTF-8 encoded string with a length limit of 1 KiB. This should *not* be set when using the JavaScript pixel or if `directUserRequest` is set. */
		userAgent?: string | null;

		/** Optional. Unique identifier for logged-in user with a length limit of 128 bytes. Required only for logged-in users. Don't set for anonymous users. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. */
		userId?: string | null;

		/** Required. A unique identifier for tracking visitors with a length limit of 128 bytes. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. Maximum length 128 bytes. Cannot be empty. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. */
		visitorId?: string | null;
	}

	/** Information of end users. */
	export interface GoogleCloudRecommendationengineV1beta1UserInfoFormProperties {

		/** Optional. Indicates if the request is made directly from the end user in which case the user_agent and ip_address fields can be populated from the HTTP request. This should *not* be set when using the javascript pixel. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). */
		directUserRequest: FormControl<boolean | null | undefined>,

		/** Optional. IP address of the user. This could be either IPv4 (e.g. 104.133.9.80) or IPv6 (e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). This should *not* be set when using the javascript pixel or if `direct_user_request` is set. Used to extract location information for personalization. */
		ipAddress: FormControl<string | null | undefined>,

		/** Optional. User agent as included in the HTTP header. UTF-8 encoded string with a length limit of 1 KiB. This should *not* be set when using the JavaScript pixel or if `directUserRequest` is set. */
		userAgent: FormControl<string | null | undefined>,

		/** Optional. Unique identifier for logged-in user with a length limit of 128 bytes. Required only for logged-in users. Don't set for anonymous users. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. */
		userId: FormControl<string | null | undefined>,

		/** Required. A unique identifier for tracking visitors with a length limit of 128 bytes. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. Maximum length 128 bytes. Cannot be empty. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1UserInfoFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1UserInfoFormProperties>({
			directUserRequest: new FormControl<boolean | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ImportCatalogItemsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRecommendationengineV1beta1ImportCatalogItemsResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Configuration of destination for Import related errors. */
		errorsConfig?: GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;
	}

	/** Response of the ImportCatalogItemsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRecommendationengineV1beta1ImportCatalogItemsResponseFormProperties {
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ImportCatalogItemsResponseFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ImportCatalogItemsResponseFormProperties>({
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the Import operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRecommendationengineV1beta1ImportMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Name of the operation. */
		operationName?: string | null;

		/** Id of the request / operation. This is parroting back the requestId that was passed in the request. */
		requestId?: string | null;

		/** Count of entries that were processed successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the Import operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRecommendationengineV1beta1ImportMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Name of the operation. */
		operationName: FormControl<string | null | undefined>,

		/** Id of the request / operation. This is parroting back the requestId that was passed in the request. */
		requestId: FormControl<string | null | undefined>,

		/** Count of entries that were processed successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ImportMetadataFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ImportMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the ImportUserEvents request. */
	export interface GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest {

		/** Configuration of destination for Import related errors. */
		errorsConfig?: GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;

		/** The input config source. */
		inputConfig?: GoogleCloudRecommendationengineV1beta1InputConfig;

		/** Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency for expensive long running operations. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response. Note that this field must not be set if the desired input config is catalog_inline_source. */
		requestId?: string | null;
	}

	/** Request message for the ImportUserEvents request. */
	export interface GoogleCloudRecommendationengineV1beta1ImportUserEventsRequestFormProperties {

		/** Optional. Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency for expensive long running operations. Server-generated if unspecified. Up to 128 characters long. This is returned as google.longrunning.Operation.name in the response. Note that this field must not be set if the desired input config is catalog_inline_source. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ImportUserEventsRequestFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ImportUserEventsRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRecommendationengineV1beta1ImportUserEventsResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Configuration of destination for Import related errors. */
		errorsConfig?: GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;

		/** A summary of import result. The UserEventImportSummary summarizes the import status for user events. */
		importSummary?: GoogleCloudRecommendationengineV1beta1UserEventImportSummary;
	}

	/** Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRecommendationengineV1beta1ImportUserEventsResponseFormProperties {
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ImportUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ImportUserEventsResponseFormProperties>({
		});

	}


	/** A summary of import result. The UserEventImportSummary summarizes the import status for user events. */
	export interface GoogleCloudRecommendationengineV1beta1UserEventImportSummary {

		/** Count of user events imported with complete existing catalog information. */
		joinedEventsCount?: string | null;

		/** Count of user events imported, but with catalog information not found in the imported catalog. */
		unjoinedEventsCount?: string | null;
	}

	/** A summary of import result. The UserEventImportSummary summarizes the import status for user events. */
	export interface GoogleCloudRecommendationengineV1beta1UserEventImportSummaryFormProperties {

		/** Count of user events imported with complete existing catalog information. */
		joinedEventsCount: FormControl<string | null | undefined>,

		/** Count of user events imported, but with catalog information not found in the imported catalog. */
		unjoinedEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1UserEventImportSummaryFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1UserEventImportSummaryFormProperties>({
			joinedEventsCount: new FormControl<string | null | undefined>(undefined),
			unjoinedEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListCatalogItems method. */
	export interface GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse {

		/** The catalog items. */
		catalogItems?: Array<GoogleCloudRecommendationengineV1beta1CatalogItem>;

		/** If empty, the list is complete. If nonempty, the token to pass to the next request's ListCatalogItemRequest.page_token. */
		nextPageToken?: string | null;
	}

	/** Response message for ListCatalogItems method. */
	export interface GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponseFormProperties {

		/** If empty, the list is complete. If nonempty, the token to pass to the next request's ListCatalogItemRequest.page_token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ListCatalogItemsResponseFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListCatalogs method. */
	export interface GoogleCloudRecommendationengineV1beta1ListCatalogsResponse {

		/** Output only. All the customer's catalogs. */
		catalogs?: Array<GoogleCloudRecommendationengineV1beta1Catalog>;

		/** Pagination token, if not returned indicates the last page. */
		nextPageToken?: string | null;
	}

	/** Response for ListCatalogs method. */
	export interface GoogleCloudRecommendationengineV1beta1ListCatalogsResponseFormProperties {

		/** Pagination token, if not returned indicates the last page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ListCatalogsResponseFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ListCatalogsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the `ListPredictionApiKeyRegistrations`. */
	export interface GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse {

		/** If empty, the list is complete. If nonempty, pass the token to the next request's `ListPredictionApiKeysRegistrationsRequest.pageToken`. */
		nextPageToken?: string | null;

		/** The list of registered API keys. */
		predictionApiKeyRegistrations?: Array<GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration>;
	}

	/** Response message for the `ListPredictionApiKeyRegistrations`. */
	export interface GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponseFormProperties {

		/** If empty, the list is complete. If nonempty, pass the token to the next request's `ListPredictionApiKeysRegistrationsRequest.pageToken`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponseFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListUserEvents method. */
	export interface GoogleCloudRecommendationengineV1beta1ListUserEventsResponse {

		/** If empty, the list is complete. If nonempty, the token to pass to the next request's ListUserEvents.page_token. */
		nextPageToken?: string | null;

		/** The user events. */
		userEvents?: Array<GoogleCloudRecommendationengineV1beta1UserEvent>;
	}

	/** Response message for ListUserEvents method. */
	export interface GoogleCloudRecommendationengineV1beta1ListUserEventsResponseFormProperties {

		/** If empty, the list is complete. If nonempty, the token to pass to the next request's ListUserEvents.page_token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1ListUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1ListUserEventsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for Predict method. Full resource name of the format: `{name=projects/locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction. We currently support three placements with the following IDs by default: // * `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` event, on product detail pages, or on the shopping cart page. * `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you. * `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this. * `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed. The full list of available placements can be seen at https://console.cloud.google.com/recommendation/catalogs/default_catalog/placements */
	export interface GoogleCloudRecommendationengineV1beta1PredictRequest {

		/** Optional. Use dryRun mode for this prediction query. If set to true, a fake model will be used that returns arbitrary catalog items. Note that the dryRun mode should only be used for testing the API, or if the model is not ready. */
		dryRun?: boolean | null;

		/** Optional. Filter for restricting prediction results. Accepts values for tags and the `filterOutOfStockItems` flag. * Tag expressions. Restricts predictions to items that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1 KiB. * filterOutOfStockItems. Restricts predictions to items that do not have a stockState value of OUT_OF_STOCK. Examples: * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional") * filterOutOfStockItems tag=(-"promotional") * filterOutOfStockItems If your filter blocks all prediction results, nothing will be returned. If you want generic (unfiltered) popular items to be returned instead, set `strictFiltering` to false in `PredictRequest.params`. */
		filter?: string | null;

		/** Optional. The labels for the predict request. * Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * No more than 64 labels can be associated with a given request. See https://goo.gl/xmQnxf for more information on and examples of labels. */
		labels?: {[id: string]: string };

		/** Optional. Maximum number of results to return per page. Set this property to the number of prediction results required. If zero, the service will choose a reasonable default. */
		pageSize?: number | null;

		/** Optional. The previous PredictResponse.next_page_token. */
		pageToken?: string | null;

		/** Optional. Additional domain specific parameters for the predictions. Allowed values: * `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response. * `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular items instead of empty if your filter blocks all prediction results. * `priceRerankLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-price-reranking', 'low-price-reranking', 'medium-price-reranking', 'high-price-reranking'}. This gives request level control and adjust prediction results based on product price. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-diversity', 'low-diversity', 'medium-diversity', 'high-diversity', 'auto-diversity'}. This gives request level control and adjust prediction results based on product category. */
		params?: {[id: string]: any };

		/** UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website. */
		userEvent?: GoogleCloudRecommendationengineV1beta1UserEvent;
	}

	/** Request message for Predict method. Full resource name of the format: `{name=projects/locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction. We currently support three placements with the following IDs by default: // * `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` event, on product detail pages, or on the shopping cart page. * `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you. * `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this. * `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed. The full list of available placements can be seen at https://console.cloud.google.com/recommendation/catalogs/default_catalog/placements */
	export interface GoogleCloudRecommendationengineV1beta1PredictRequestFormProperties {

		/** Optional. Use dryRun mode for this prediction query. If set to true, a fake model will be used that returns arbitrary catalog items. Note that the dryRun mode should only be used for testing the API, or if the model is not ready. */
		dryRun: FormControl<boolean | null | undefined>,

		/** Optional. Filter for restricting prediction results. Accepts values for tags and the `filterOutOfStockItems` flag. * Tag expressions. Restricts predictions to items that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1 KiB. * filterOutOfStockItems. Restricts predictions to items that do not have a stockState value of OUT_OF_STOCK. Examples: * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional") * filterOutOfStockItems tag=(-"promotional") * filterOutOfStockItems If your filter blocks all prediction results, nothing will be returned. If you want generic (unfiltered) popular items to be returned instead, set `strictFiltering` to false in `PredictRequest.params`. */
		filter: FormControl<string | null | undefined>,

		/** Optional. The labels for the predict request. * Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit. * No more than 64 labels can be associated with a given request. See https://goo.gl/xmQnxf for more information on and examples of labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Maximum number of results to return per page. Set this property to the number of prediction results required. If zero, the service will choose a reasonable default. */
		pageSize: FormControl<number | null | undefined>,

		/** Optional. The previous PredictResponse.next_page_token. */
		pageToken: FormControl<string | null | undefined>,

		/** Optional. Additional domain specific parameters for the predictions. Allowed values: * `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response. * `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular items instead of empty if your filter blocks all prediction results. * `priceRerankLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-price-reranking', 'low-price-reranking', 'medium-price-reranking', 'high-price-reranking'}. This gives request level control and adjust prediction results based on product price. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-diversity', 'low-diversity', 'medium-diversity', 'high-diversity', 'auto-diversity'}. This gives request level control and adjust prediction results based on product category. */
		params: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1PredictRequestFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1PredictRequestFormProperties>({
			dryRun: new FormControl<boolean | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Response message for predict method. */
	export interface GoogleCloudRecommendationengineV1beta1PredictResponse {

		/** True if the dryRun property was set in the request. */
		dryRun?: boolean | null;

		/** IDs of items in the request that were missing from the catalog. */
		itemsMissingInCatalog?: Array<string>;

		/** Additional domain specific prediction response metadata. */
		metadata?: {[id: string]: any };

		/** If empty, the list is complete. If nonempty, the token to pass to the next request's PredictRequest.page_token. */
		nextPageToken?: string | null;

		/** A unique recommendation token. This should be included in the user event logs resulting from this recommendation, which enables accurate attribution of recommendation model performance. */
		recommendationToken?: string | null;

		/** A list of recommended items. The order represents the ranking (from the most relevant item to the least). */
		results?: Array<GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult>;
	}

	/** Response message for predict method. */
	export interface GoogleCloudRecommendationengineV1beta1PredictResponseFormProperties {

		/** True if the dryRun property was set in the request. */
		dryRun: FormControl<boolean | null | undefined>,

		/** Additional domain specific prediction response metadata. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** If empty, the list is complete. If nonempty, the token to pass to the next request's PredictRequest.page_token. */
		nextPageToken: FormControl<string | null | undefined>,

		/** A unique recommendation token. This should be included in the user event logs resulting from this recommendation, which enables accurate attribution of recommendation model performance. */
		recommendationToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1PredictResponseFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1PredictResponseFormProperties>({
			dryRun: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			recommendationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PredictionResult represents the recommendation prediction results. */
	export interface GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult {

		/** ID of the recommended catalog item */
		id?: string | null;

		/** Additional item metadata / annotations. Possible values: * `catalogItem`: JSON representation of the catalogItem. Will be set if `returnCatalogItem` is set to true in `PredictRequest.params`. * `score`: Prediction score in double value. Will be set if `returnItemScore` is set to true in `PredictRequest.params`. */
		itemMetadata?: {[id: string]: any };
	}

	/** PredictionResult represents the recommendation prediction results. */
	export interface GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResultFormProperties {

		/** ID of the recommended catalog item */
		id: FormControl<string | null | undefined>,

		/** Additional item metadata / annotations. Possible values: * `catalogItem`: JSON representation of the catalogItem. Will be set if `returnCatalogItem` is set to true in `PredictRequest.params`. * `score`: Prediction score in double value. Will be set if `returnItemScore` is set to true in `PredictRequest.params`. */
		itemMetadata: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1PredictResponsePredictionResultFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			itemMetadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the PurgeUserEvents operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** The ID of the request / operation. */
		operationName?: string | null;
	}

	/** Metadata related to the progress of the PurgeUserEvents operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** The ID of the request / operation. */
		operationName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadataFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1PurgeUserEventsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for PurgeUserEvents method. */
	export interface GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest {

		/** Required. The filter string to specify the events to be deleted. Empty string filter is not allowed. The eligible fields for filtering are: * `eventType`: UserEvent.eventType field of type string. * `eventTime`: in ISO 8601 "zulu" format. * `visitorId`: field of type string. Specifying this will delete all events associated with a visitor. * `userId`: field of type string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: `eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z"` * Deleting specific eventType in time range: `eventTime > "2012-04-23T18:25:43.511Z" eventType = "detail-page-view"` * Deleting all events for a specific visitor: `visitorId = "visitor1024"` The filtering fields are assumed to have an implicit AND. */
		filter?: string | null;

		/** Optional. The default value is false. Override this flag to true to actually perform the purge. If the field is not set to true, a sampling of events to be deleted will be returned. */
		force?: boolean | null;
	}

	/** Request message for PurgeUserEvents method. */
	export interface GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequestFormProperties {

		/** Required. The filter string to specify the events to be deleted. Empty string filter is not allowed. The eligible fields for filtering are: * `eventType`: UserEvent.eventType field of type string. * `eventTime`: in ISO 8601 "zulu" format. * `visitorId`: field of type string. Specifying this will delete all events associated with a visitor. * `userId`: field of type string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: `eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z"` * Deleting specific eventType in time range: `eventTime > "2012-04-23T18:25:43.511Z" eventType = "detail-page-view"` * Deleting all events for a specific visitor: `visitorId = "visitor1024"` The filtering fields are assumed to have an implicit AND. */
		filter: FormControl<string | null | undefined>,

		/** Optional. The default value is false. Override this flag to true to actually perform the purge. If the field is not set to true, a sampling of events to be deleted will be returned. */
		force: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1PurgeUserEventsRequestFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponse {

		/** The total count of events purged as a result of the operation. */
		purgedEventsCount?: string | null;

		/** A sampling of events deleted (or will be deleted) depending on the `force` property in the request. Max of 500 items will be returned. */
		userEventsSample?: Array<GoogleCloudRecommendationengineV1beta1UserEvent>;
	}

	/** Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponseFormProperties {

		/** The total count of events purged as a result of the operation. */
		purgedEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1PurgeUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1PurgeUserEventsResponseFormProperties>({
			purgedEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for RejoinUserEvents method. */
	export interface GoogleCloudRecommendationengineV1beta1RejoinUserEventsMetadata {
	}

	/** Metadata for RejoinUserEvents method. */
	export interface GoogleCloudRecommendationengineV1beta1RejoinUserEventsMetadataFormProperties {
	}
	export function CreateGoogleCloudRecommendationengineV1beta1RejoinUserEventsMetadataFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1RejoinUserEventsMetadataFormProperties>({
		});

	}


	/** Request message for CatalogRejoin method. */
	export interface GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest {

		/** Required. The type of the catalog rejoin to define the scope and range of the user events to be rejoined with catalog items. */
		userEventRejoinScope?: GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScope | null;
	}

	/** Request message for CatalogRejoin method. */
	export interface GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestFormProperties {

		/** Required. The type of the catalog rejoin to define the scope and range of the user events to be rejoined with catalog items. */
		userEventRejoinScope: FormControl<GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScope | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestFormProperties>({
			userEventRejoinScope: new FormControl<GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScope | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScope { USER_EVENT_REJOIN_SCOPE_UNSPECIFIED = 0, JOINED_EVENTS = 1, UNJOINED_EVENTS = 2 }


	/** Response message for RejoinUserEvents method. */
	export interface GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponse {

		/** Number of user events that were joined with latest catalog items. */
		rejoinedUserEventsCount?: string | null;
	}

	/** Response message for RejoinUserEvents method. */
	export interface GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponseFormProperties {

		/** Number of user events that were joined with latest catalog items. */
		rejoinedUserEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRecommendationengineV1beta1RejoinUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudRecommendationengineV1beta1RejoinUserEventsResponseFormProperties>({
			rejoinedUserEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunningOperationFormGroup() {
		return new FormGroup<GoogleLongrunningOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Unregister an apiKey from using for predict method.
		 * Delete v1beta1/{name}
		 * @param {string} name Required. The API key to unregister including full resource path. `projects/locations/global/catalogs/default_catalog/eventStores/default_event_store/predictionApiKeyRegistrations/`
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_eventStores_predictionApiKeyRegistrations_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1beta1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_operations_get(name: string): Observable<GoogleLongrunningOperation> {
			return this.http.get<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a catalog item. Partial updating is supported. Non-existing items will be created.
		 * Patch v1beta1/{name}
		 * @param {string} name Required. Full resource name of catalog item, such as `projects/locations/global/catalogs/default_catalog/catalogItems/some_catalog_item_id`.
		 * @param {string} updateMask Optional. Indicates which fields in the provided 'item' to update. If not set, will by default update all fields.
		 * @return {GoogleCloudRecommendationengineV1beta1CatalogItem} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_catalogItems_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudRecommendationengineV1beta1CatalogItem): Observable<GoogleCloudRecommendationengineV1beta1CatalogItem> {
			return this.http.patch<GoogleCloudRecommendationengineV1beta1CatalogItem>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1beta1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
		 * Post v1beta1/{name}:predict
		 * @return {GoogleCloudRecommendationengineV1beta1PredictResponse} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_eventStores_placements_predict(name: string, requestBody: GoogleCloudRecommendationengineV1beta1PredictRequest): Observable<GoogleCloudRecommendationengineV1beta1PredictResponse> {
			return this.http.post<GoogleCloudRecommendationengineV1beta1PredictResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':predict', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of catalog items.
		 * Get v1beta1/{parent}/catalogItems
		 * @param {string} parent Required. The parent catalog resource name, such as `projects/locations/global/catalogs/default_catalog`.
		 * @param {string} filter Optional. Use of this field is not supported by version v1beta1.
		 * @param {number} pageSize Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default.
		 * @param {string} pageToken Optional. The previous ListCatalogItemsResponse.next_page_token.
		 * @return {GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_catalogItems_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse> {
			return this.http.get<GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/catalogItems&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a catalog item.
		 * Post v1beta1/{parent}/catalogItems
		 * @param {string} parent Required. The parent catalog resource name, such as `projects/locations/global/catalogs/default_catalog`.
		 * @return {GoogleCloudRecommendationengineV1beta1CatalogItem} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_catalogItems_create(parent: string, requestBody: GoogleCloudRecommendationengineV1beta1CatalogItem): Observable<GoogleCloudRecommendationengineV1beta1CatalogItem> {
			return this.http.post<GoogleCloudRecommendationengineV1beta1CatalogItem>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/catalogItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
		 * Post v1beta1/{parent}/catalogItems:import
		 * @param {string} parent Required. `projects/1234/locations/global/catalogs/default_catalog` If no updateMask is specified, requires catalogItems.create permission. If updateMask is specified, requires catalogItems.update permission.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_catalogItems_import(parent: string, requestBody: GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/catalogItems:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the catalog configurations associated with the project.
		 * Get v1beta1/{parent}/catalogs
		 * @param {string} parent Required. The account resource name with an associated location.
		 * @param {number} pageSize Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListCatalogs` call. Provide this to retrieve the subsequent page.
		 * @return {GoogleCloudRecommendationengineV1beta1ListCatalogsResponse} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudRecommendationengineV1beta1ListCatalogsResponse> {
			return this.http.get<GoogleCloudRecommendationengineV1beta1ListCatalogsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/catalogs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List the registered apiKeys for use with predict method.
		 * Get v1beta1/{parent}/predictionApiKeyRegistrations
		 * @param {string} parent Required. The parent placement resource name such as `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`
		 * @param {number} pageSize Optional. Maximum number of results to return per page. If unset, the service will choose a reasonable default.
		 * @param {string} pageToken Optional. The previous `ListPredictionApiKeyRegistration.nextPageToken`.
		 * @return {GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_eventStores_predictionApiKeyRegistrations_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse> {
			return this.http.get<GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/predictionApiKeyRegistrations&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Register an API key for use with predict method.
		 * Post v1beta1/{parent}/predictionApiKeyRegistrations
		 * @param {string} parent Required. The parent resource path. `projects/locations/global/catalogs/default_catalog/eventStores/default_event_store`.
		 * @return {GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_eventStores_predictionApiKeyRegistrations_create(parent: string, requestBody: GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest): Observable<GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration> {
			return this.http.post<GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/predictionApiKeyRegistrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
		 * Get v1beta1/{parent}/userEvents
		 * @param {string} parent Required. The parent eventStore resource name, such as `projects/locations/catalogs/default_catalog/eventStores/default_event_store`.
		 * @param {string} filter Optional. Filtering expression to specify restrictions over returned events. This is a sequence of terms, where each term applies some kind of a restriction to the returned user events. Use this expression to restrict results to a specific time range, or filter events by eventType. eg: eventTime > "2012-04-23T18:25:43.511Z" eventsMissingCatalogItems eventTime<"2012-04-23T18:25:43.511Z" eventType=search We expect only 3 types of fields: * eventTime: this can be specified a maximum of 2 times, once with a less than operator and once with a greater than operator. The eventTime restrict should result in one contiguous valid eventTime range. * eventType: only 1 eventType restriction can be specified. * eventsMissingCatalogItems: specififying this will restrict results to events for which catalog items were not found in the catalog. The default behavior is to return only those events for which catalog items were found. Some examples of valid filters expressions: * Example 1: eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z" * Example 2: eventTime > "2012-04-23T18:25:43.511Z" eventType = detail-page-view * Example 3: eventsMissingCatalogItems eventType = search eventTime < "2018-04-23T18:30:43.511Z" * Example 4: eventTime > "2012-04-23T18:25:43.511Z" * Example 5: eventType = search * Example 6: eventsMissingCatalogItems
		 * @param {number} pageSize Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default.
		 * @param {string} pageToken Optional. The previous ListUserEventsResponse.next_page_token.
		 * @return {GoogleCloudRecommendationengineV1beta1ListUserEventsResponse} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_eventStores_userEvents_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudRecommendationengineV1beta1ListUserEventsResponse> {
			return this.http.get<GoogleCloudRecommendationengineV1beta1ListUserEventsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userEvents&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
		 * Get v1beta1/{parent}/userEvents:collect
		 * @param {string} parent Required. The parent eventStore name, such as `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`.
		 * @param {string} ets Optional. The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
		 * @param {string} uri Optional. The url including cgi-parameters but excluding the hash fragment. The URL must be truncated to 1.5K bytes to conservatively be under the 2K bytes. This is often more useful than the referer url, because many browsers only send the domain for 3rd party requests.
		 * @param {string} userEvent Required. URL encoded UserEvent proto.
		 * @return {GoogleApiHttpBody} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_eventStores_userEvents_collect(parent: string, ets: string | null | undefined, uri: string | null | undefined, userEvent: string | null | undefined): Observable<GoogleApiHttpBody> {
			return this.http.get<GoogleApiHttpBody>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userEvents:collect&ets=' + (ets == null ? '' : encodeURIComponent(ets)) + '&uri=' + (uri == null ? '' : encodeURIComponent(uri)) + '&userEvent=' + (userEvent == null ? '' : encodeURIComponent(userEvent)), {});
		}

		/**
		 * Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
		 * Post v1beta1/{parent}/userEvents:import
		 * @param {string} parent Required. `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_eventStores_userEvents_import(parent: string, requestBody: GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userEvents:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
		 * Post v1beta1/{parent}/userEvents:purge
		 * @param {string} parent Required. The resource name of the event_store under which the events are created. The format is `projects/${projectId}/locations/global/catalogs/${catalogId}/eventStores/${eventStoreId}`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_eventStores_userEvents_purge(parent: string, requestBody: GoogleCloudRecommendationengineV1beta1PurgeUserEventsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userEvents:purge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
		 * Post v1beta1/{parent}/userEvents:rejoin
		 * @param {string} parent Required. Full resource name of user event, such as `projects/locations/catalogs/default_catalog/eventStores/default_event_store`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_eventStores_userEvents_rejoin(parent: string, requestBody: GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userEvents:rejoin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Writes a single user event.
		 * Post v1beta1/{parent}/userEvents:write
		 * @param {string} parent Required. The parent eventStore resource name, such as "projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store".
		 * @return {GoogleCloudRecommendationengineV1beta1UserEvent} Successful response
		 */
		Recommendationengine_projects_locations_catalogs_eventStores_userEvents_write(parent: string, requestBody: GoogleCloudRecommendationengineV1beta1UserEvent): Observable<GoogleCloudRecommendationengineV1beta1UserEvent> {
			return this.http.post<GoogleCloudRecommendationengineV1beta1UserEvent>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userEvents:write', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

