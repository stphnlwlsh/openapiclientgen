import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Annotation {

		/** Anchor text after excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty. */
		afterSelectedText?: string | null;

		/** Anchor text before excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty. */
		beforeSelectedText?: string | null;

		/** Selection ranges sent from the client. */
		clientVersionRanges?: AnnotationClientVersionRanges;

		/** Timestamp for the created time of this annotation. */
		created?: string | null;

		/** Selection ranges for the most recent content version. */
		currentVersionRanges?: AnnotationCurrentVersionRanges;

		/** User-created data for this annotation. */
		data?: string | null;

		/** Indicates that this annotation is deleted. */
		deleted?: boolean | null;

		/** The highlight style for this annotation. */
		highlightStyle?: string | null;

		/** Id of this annotation, in the form of a GUID. */
		id?: string | null;

		/** Resource type. */
		kind?: string | null;

		/** The layer this annotation is for. */
		layerId?: string | null;
		layerSummary?: AnnotationLayerSummary;

		/** Pages that this annotation spans. */
		pageIds?: Array<string>;

		/** Excerpt from the volume. */
		selectedText?: string | null;

		/** URL to this resource. */
		selfLink?: string | null;

		/** Timestamp for the last time this annotation was modified. */
		updated?: string | null;

		/** The volume that this annotation belongs to. */
		volumeId?: string | null;
	}
	export interface AnnotationFormProperties {

		/** Anchor text after excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty. */
		afterSelectedText: FormControl<string | null | undefined>,

		/** Anchor text before excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty. */
		beforeSelectedText: FormControl<string | null | undefined>,

		/** Timestamp for the created time of this annotation. */
		created: FormControl<string | null | undefined>,

		/** User-created data for this annotation. */
		data: FormControl<string | null | undefined>,

		/** Indicates that this annotation is deleted. */
		deleted: FormControl<boolean | null | undefined>,

		/** The highlight style for this annotation. */
		highlightStyle: FormControl<string | null | undefined>,

		/** Id of this annotation, in the form of a GUID. */
		id: FormControl<string | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** The layer this annotation is for. */
		layerId: FormControl<string | null | undefined>,

		/** Excerpt from the volume. */
		selectedText: FormControl<string | null | undefined>,

		/** URL to this resource. */
		selfLink: FormControl<string | null | undefined>,

		/** Timestamp for the last time this annotation was modified. */
		updated: FormControl<string | null | undefined>,

		/** The volume that this annotation belongs to. */
		volumeId: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationFormGroup() {
		return new FormGroup<AnnotationFormProperties>({
			afterSelectedText: new FormControl<string | null | undefined>(undefined),
			beforeSelectedText: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			highlightStyle: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			layerId: new FormControl<string | null | undefined>(undefined),
			selectedText: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
			volumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnnotationClientVersionRanges {
		cfiRange?: BooksAnnotationsRange;

		/** Content version the client sent in. */
		contentVersion?: string | null;
		gbImageRange?: BooksAnnotationsRange;
		gbTextRange?: BooksAnnotationsRange;
		imageCfiRange?: BooksAnnotationsRange;
	}
	export interface AnnotationClientVersionRangesFormProperties {

		/** Content version the client sent in. */
		contentVersion: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationClientVersionRangesFormGroup() {
		return new FormGroup<AnnotationClientVersionRangesFormProperties>({
			contentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BooksAnnotationsRange {

		/** The offset from the ending position. */
		endOffset?: string | null;

		/** The ending position for the range. */
		endPosition?: string | null;

		/** The offset from the starting position. */
		startOffset?: string | null;

		/** The starting position for the range. */
		startPosition?: string | null;
	}
	export interface BooksAnnotationsRangeFormProperties {

		/** The offset from the ending position. */
		endOffset: FormControl<string | null | undefined>,

		/** The ending position for the range. */
		endPosition: FormControl<string | null | undefined>,

		/** The offset from the starting position. */
		startOffset: FormControl<string | null | undefined>,

		/** The starting position for the range. */
		startPosition: FormControl<string | null | undefined>,
	}
	export function CreateBooksAnnotationsRangeFormGroup() {
		return new FormGroup<BooksAnnotationsRangeFormProperties>({
			endOffset: new FormControl<string | null | undefined>(undefined),
			endPosition: new FormControl<string | null | undefined>(undefined),
			startOffset: new FormControl<string | null | undefined>(undefined),
			startPosition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnnotationCurrentVersionRanges {
		cfiRange?: BooksAnnotationsRange;

		/** Content version applicable to ranges below. */
		contentVersion?: string | null;
		gbImageRange?: BooksAnnotationsRange;
		gbTextRange?: BooksAnnotationsRange;
		imageCfiRange?: BooksAnnotationsRange;
	}
	export interface AnnotationCurrentVersionRangesFormProperties {

		/** Content version applicable to ranges below. */
		contentVersion: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationCurrentVersionRangesFormGroup() {
		return new FormGroup<AnnotationCurrentVersionRangesFormProperties>({
			contentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnnotationLayerSummary {

		/** Maximum allowed characters on this layer, especially for the "copy" layer. */
		allowedCharacterCount?: number | null;

		/** Type of limitation on this layer. "limited" or "unlimited" for the "copy" layer. */
		limitType?: string | null;

		/** Remaining allowed characters on this layer, especially for the "copy" layer. */
		remainingCharacterCount?: number | null;
	}
	export interface AnnotationLayerSummaryFormProperties {

		/** Maximum allowed characters on this layer, especially for the "copy" layer. */
		allowedCharacterCount: FormControl<number | null | undefined>,

		/** Type of limitation on this layer. "limited" or "unlimited" for the "copy" layer. */
		limitType: FormControl<string | null | undefined>,

		/** Remaining allowed characters on this layer, especially for the "copy" layer. */
		remainingCharacterCount: FormControl<number | null | undefined>,
	}
	export function CreateAnnotationLayerSummaryFormGroup() {
		return new FormGroup<AnnotationLayerSummaryFormProperties>({
			allowedCharacterCount: new FormControl<number | null | undefined>(undefined),
			limitType: new FormControl<string | null | undefined>(undefined),
			remainingCharacterCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Annotations {

		/** A list of annotations. */
		items?: Array<Annotation>;

		/** Resource type. */
		kind?: string | null;

		/** Token to pass in for pagination for the next page. This will not be present if this request does not have more results. */
		nextPageToken?: string | null;

		/** Total number of annotations found. This may be greater than the number of notes returned in this response if results have been paginated. */
		totalItems?: number | null;
	}
	export interface AnnotationsFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** Token to pass in for pagination for the next page. This will not be present if this request does not have more results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Total number of annotations found. This may be greater than the number of notes returned in this response if results have been paginated. */
		totalItems: FormControl<number | null | undefined>,
	}
	export function CreateAnnotationsFormGroup() {
		return new FormGroup<AnnotationsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AnnotationsSummary {
		kind?: string | null;
		AnnotationsSummaryLayers?: Array<AnnotationsSummaryLayers>;
	}
	export interface AnnotationsSummaryFormProperties {
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationsSummaryFormGroup() {
		return new FormGroup<AnnotationsSummaryFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnnotationsSummaryLayers {
		allowedCharacterCount?: number | null;
		layerId?: string | null;
		limitType?: string | null;
		remainingCharacterCount?: number | null;
		updated?: string | null;
	}
	export interface AnnotationsSummaryLayersFormProperties {
		allowedCharacterCount: FormControl<number | null | undefined>,
		layerId: FormControl<string | null | undefined>,
		limitType: FormControl<string | null | undefined>,
		remainingCharacterCount: FormControl<number | null | undefined>,
		updated: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationsSummaryLayersFormGroup() {
		return new FormGroup<AnnotationsSummaryLayersFormProperties>({
			allowedCharacterCount: new FormControl<number | null | undefined>(undefined),
			layerId: new FormControl<string | null | undefined>(undefined),
			limitType: new FormControl<string | null | undefined>(undefined),
			remainingCharacterCount: new FormControl<number | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Annotationsdata {

		/** A list of Annotation Data. */
		items?: Array<GeoAnnotationdata>;

		/** Resource type */
		kind?: string | null;

		/** Token to pass in for pagination for the next page. This will not be present if this request does not have more results. */
		nextPageToken?: string | null;

		/** The total number of volume annotations found. */
		totalItems?: number | null;
	}
	export interface AnnotationsdataFormProperties {

		/** Resource type */
		kind: FormControl<string | null | undefined>,

		/** Token to pass in for pagination for the next page. This will not be present if this request does not have more results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of volume annotations found. */
		totalItems: FormControl<number | null | undefined>,
	}
	export function CreateAnnotationsdataFormGroup() {
		return new FormGroup<AnnotationsdataFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GeoAnnotationdata {

		/** The type of annotation this data is for. */
		annotationType?: string | null;
		data?: Geolayerdata;

		/** Base64 encoded data for this annotation data. */
		encodedData?: string | null;

		/** Unique id for this annotation data. */
		id?: string | null;

		/** Resource Type */
		kind?: string | null;

		/** The Layer id for this data. * */
		layerId?: string | null;

		/** URL for this resource. * */
		selfLink?: string | null;

		/** Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format). */
		updated?: string | null;

		/** The volume id for this data. * */
		volumeId?: string | null;
	}
	export interface GeoAnnotationdataFormProperties {

		/** The type of annotation this data is for. */
		annotationType: FormControl<string | null | undefined>,

		/** Base64 encoded data for this annotation data. */
		encodedData: FormControl<string | null | undefined>,

		/** Unique id for this annotation data. */
		id: FormControl<string | null | undefined>,

		/** Resource Type */
		kind: FormControl<string | null | undefined>,

		/** The Layer id for this data. * */
		layerId: FormControl<string | null | undefined>,

		/** URL for this resource. * */
		selfLink: FormControl<string | null | undefined>,

		/** Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format). */
		updated: FormControl<string | null | undefined>,

		/** The volume id for this data. * */
		volumeId: FormControl<string | null | undefined>,
	}
	export function CreateGeoAnnotationdataFormGroup() {
		return new FormGroup<GeoAnnotationdataFormProperties>({
			annotationType: new FormControl<string | null | undefined>(undefined),
			encodedData: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			layerId: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
			volumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Geolayerdata {
		common?: GeolayerdataCommon;
		geo?: GeolayerdataGeo;
		kind?: string | null;
	}
	export interface GeolayerdataFormProperties {
		kind: FormControl<string | null | undefined>,
	}
	export function CreateGeolayerdataFormGroup() {
		return new FormGroup<GeolayerdataFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeolayerdataCommon {

		/** The language of the information url and description. */
		lang?: string | null;

		/** The URL for the preview image information. */
		previewImageUrl?: string | null;

		/** The description for this location. */
		snippet?: string | null;

		/** The URL for information for this location. Ex: wikipedia link. */
		snippetUrl?: string | null;

		/** The display title and localized canonical name to use when searching for this entity on Google search. */
		title?: string | null;
	}
	export interface GeolayerdataCommonFormProperties {

		/** The language of the information url and description. */
		lang: FormControl<string | null | undefined>,

		/** The URL for the preview image information. */
		previewImageUrl: FormControl<string | null | undefined>,

		/** The description for this location. */
		snippet: FormControl<string | null | undefined>,

		/** The URL for information for this location. Ex: wikipedia link. */
		snippetUrl: FormControl<string | null | undefined>,

		/** The display title and localized canonical name to use when searching for this entity on Google search. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGeolayerdataCommonFormGroup() {
		return new FormGroup<GeolayerdataCommonFormProperties>({
			lang: new FormControl<string | null | undefined>(undefined),
			previewImageUrl: new FormControl<string | null | undefined>(undefined),
			snippet: new FormControl<string | null | undefined>(undefined),
			snippetUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeolayerdataGeo {

		/** The boundary of the location as a set of loops containing pairs of latitude, longitude coordinates. */
		boundary?: Array<string>;

		/** The cache policy active for this data. EX: UNRESTRICTED, RESTRICTED, NEVER */
		cachePolicy?: string | null;

		/** The country code of the location. */
		countryCode?: string | null;

		/** The latitude of the location. */
		latitude?: number | null;

		/** The longitude of the location. */
		longitude?: number | null;

		/** The type of map that should be used for this location. EX: HYBRID, ROADMAP, SATELLITE, TERRAIN */
		mapType?: string | null;

		/** The viewport for showing this location. This is a latitude, longitude rectangle. */
		viewport?: GeolayerdataGeoViewport;

		/** The Zoom level to use for the map. Zoom levels between 0 (the lowest zoom level, in which the entire world can be seen on one map) to 21+ (down to individual buildings). See: https: //developers.google.com/maps/documentation/staticmaps/#Zoomlevels */
		zoom?: number | null;
	}
	export interface GeolayerdataGeoFormProperties {

		/** The cache policy active for this data. EX: UNRESTRICTED, RESTRICTED, NEVER */
		cachePolicy: FormControl<string | null | undefined>,

		/** The country code of the location. */
		countryCode: FormControl<string | null | undefined>,

		/** The latitude of the location. */
		latitude: FormControl<number | null | undefined>,

		/** The longitude of the location. */
		longitude: FormControl<number | null | undefined>,

		/** The type of map that should be used for this location. EX: HYBRID, ROADMAP, SATELLITE, TERRAIN */
		mapType: FormControl<string | null | undefined>,

		/** The Zoom level to use for the map. Zoom levels between 0 (the lowest zoom level, in which the entire world can be seen on one map) to 21+ (down to individual buildings). See: https: //developers.google.com/maps/documentation/staticmaps/#Zoomlevels */
		zoom: FormControl<number | null | undefined>,
	}
	export function CreateGeolayerdataGeoFormGroup() {
		return new FormGroup<GeolayerdataGeoFormProperties>({
			cachePolicy: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			mapType: new FormControl<string | null | undefined>(undefined),
			zoom: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GeolayerdataGeoViewport {
		hi?: GeolayerdataGeoViewportHi;
		lo?: GeolayerdataGeoViewportLo;
	}
	export interface GeolayerdataGeoViewportFormProperties {
	}
	export function CreateGeolayerdataGeoViewportFormGroup() {
		return new FormGroup<GeolayerdataGeoViewportFormProperties>({
		});

	}

	export interface GeolayerdataGeoViewportHi {
		latitude?: number | null;
		longitude?: number | null;
	}
	export interface GeolayerdataGeoViewportHiFormProperties {
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateGeolayerdataGeoViewportHiFormGroup() {
		return new FormGroup<GeolayerdataGeoViewportHiFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GeolayerdataGeoViewportLo {
		latitude?: number | null;
		longitude?: number | null;
	}
	export interface GeolayerdataGeoViewportLoFormProperties {
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateGeolayerdataGeoViewportLoFormGroup() {
		return new FormGroup<GeolayerdataGeoViewportLoFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BooksCloudloadingResource {
		author?: string | null;
		processingState?: string | null;
		title?: string | null;
		volumeId?: string | null;
	}
	export interface BooksCloudloadingResourceFormProperties {
		author: FormControl<string | null | undefined>,
		processingState: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		volumeId: FormControl<string | null | undefined>,
	}
	export function CreateBooksCloudloadingResourceFormGroup() {
		return new FormGroup<BooksCloudloadingResourceFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			processingState: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			volumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BooksVolumesRecommendedRateResponse {
		consistency_token?: string | null;
	}
	export interface BooksVolumesRecommendedRateResponseFormProperties {
		consistency_token: FormControl<string | null | undefined>,
	}
	export function CreateBooksVolumesRecommendedRateResponseFormGroup() {
		return new FormGroup<BooksVolumesRecommendedRateResponseFormProperties>({
			consistency_token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Bookshelf {

		/** Whether this bookshelf is PUBLIC or PRIVATE. */
		access?: string | null;

		/** Created time for this bookshelf (formatted UTC timestamp with millisecond resolution). */
		created?: string | null;

		/** Description of this bookshelf. */
		description?: string | null;

		/** Id of this bookshelf, only unique by user. */
		id?: number | null;

		/** Resource type for bookshelf metadata. */
		kind?: string | null;

		/** URL to this resource. */
		selfLink?: string | null;

		/** Title of this bookshelf. */
		title?: string | null;

		/** Last modified time of this bookshelf (formatted UTC timestamp with millisecond resolution). */
		updated?: string | null;

		/** Number of volumes in this bookshelf. */
		volumeCount?: number | null;

		/** Last time a volume was added or removed from this bookshelf (formatted UTC timestamp with millisecond resolution). */
		volumesLastUpdated?: string | null;
	}
	export interface BookshelfFormProperties {

		/** Whether this bookshelf is PUBLIC or PRIVATE. */
		access: FormControl<string | null | undefined>,

		/** Created time for this bookshelf (formatted UTC timestamp with millisecond resolution). */
		created: FormControl<string | null | undefined>,

		/** Description of this bookshelf. */
		description: FormControl<string | null | undefined>,

		/** Id of this bookshelf, only unique by user. */
		id: FormControl<number | null | undefined>,

		/** Resource type for bookshelf metadata. */
		kind: FormControl<string | null | undefined>,

		/** URL to this resource. */
		selfLink: FormControl<string | null | undefined>,

		/** Title of this bookshelf. */
		title: FormControl<string | null | undefined>,

		/** Last modified time of this bookshelf (formatted UTC timestamp with millisecond resolution). */
		updated: FormControl<string | null | undefined>,

		/** Number of volumes in this bookshelf. */
		volumeCount: FormControl<number | null | undefined>,

		/** Last time a volume was added or removed from this bookshelf (formatted UTC timestamp with millisecond resolution). */
		volumesLastUpdated: FormControl<string | null | undefined>,
	}
	export function CreateBookshelfFormGroup() {
		return new FormGroup<BookshelfFormProperties>({
			access: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
			volumeCount: new FormControl<number | null | undefined>(undefined),
			volumesLastUpdated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Bookshelves {

		/** A list of bookshelves. */
		items?: Array<Bookshelf>;

		/** Resource type. */
		kind?: string | null;
	}
	export interface BookshelvesFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBookshelvesFormGroup() {
		return new FormGroup<BookshelvesFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Category {

		/** A list of onboarding categories. */
		CategoryItems?: Array<CategoryItems>;

		/** Resource type. */
		kind?: string | null;
	}
	export interface CategoryFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CategoryItems {
		badgeUrl?: string | null;
		categoryId?: string | null;
		name?: string | null;
	}
	export interface CategoryItemsFormProperties {
		badgeUrl: FormControl<string | null | undefined>,
		categoryId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoryItemsFormGroup() {
		return new FormGroup<CategoryItemsFormProperties>({
			badgeUrl: new FormControl<string | null | undefined>(undefined),
			categoryId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConcurrentAccessRestriction {

		/** Whether access is granted for this (user, device, volume). */
		deviceAllowed?: boolean | null;

		/** Resource type. */
		kind?: string | null;

		/** The maximum number of concurrent access licenses for this volume. */
		maxConcurrentDevices?: number | null;

		/** Error/warning message. */
		message?: string | null;

		/** Client nonce for verification. Download access and client-validation only. */
		nonce?: string | null;

		/** Error/warning reason code. */
		reasonCode?: string | null;

		/** Whether this volume has any concurrent access restrictions. */
		restricted?: boolean | null;

		/** Response signature. */
		signature?: string | null;

		/** Client app identifier for verification. Download access and client-validation only. */
		source?: string | null;

		/** Time in seconds for license auto-expiration. */
		timeWindowSeconds?: number | null;

		/** Identifies the volume for which this entry applies. */
		volumeId?: string | null;
	}
	export interface ConcurrentAccessRestrictionFormProperties {

		/** Whether access is granted for this (user, device, volume). */
		deviceAllowed: FormControl<boolean | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** The maximum number of concurrent access licenses for this volume. */
		maxConcurrentDevices: FormControl<number | null | undefined>,

		/** Error/warning message. */
		message: FormControl<string | null | undefined>,

		/** Client nonce for verification. Download access and client-validation only. */
		nonce: FormControl<string | null | undefined>,

		/** Error/warning reason code. */
		reasonCode: FormControl<string | null | undefined>,

		/** Whether this volume has any concurrent access restrictions. */
		restricted: FormControl<boolean | null | undefined>,

		/** Response signature. */
		signature: FormControl<string | null | undefined>,

		/** Client app identifier for verification. Download access and client-validation only. */
		source: FormControl<string | null | undefined>,

		/** Time in seconds for license auto-expiration. */
		timeWindowSeconds: FormControl<number | null | undefined>,

		/** Identifies the volume for which this entry applies. */
		volumeId: FormControl<string | null | undefined>,
	}
	export function CreateConcurrentAccessRestrictionFormGroup() {
		return new FormGroup<ConcurrentAccessRestrictionFormProperties>({
			deviceAllowed: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			maxConcurrentDevices: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			nonce: new FormControl<string | null | undefined>(undefined),
			reasonCode: new FormControl<string | null | undefined>(undefined),
			restricted: new FormControl<boolean | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			timeWindowSeconds: new FormControl<number | null | undefined>(undefined),
			volumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictionaryAnnotationdata {

		/** The type of annotation this data is for. */
		annotationType?: string | null;
		data?: Dictlayerdata;

		/** Base64 encoded data for this annotation data. */
		encodedData?: string | null;

		/** Unique id for this annotation data. */
		id?: string | null;

		/** Resource Type */
		kind?: string | null;

		/** The Layer id for this data. * */
		layerId?: string | null;

		/** URL for this resource. * */
		selfLink?: string | null;

		/** Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format). */
		updated?: string | null;

		/** The volume id for this data. * */
		volumeId?: string | null;
	}
	export interface DictionaryAnnotationdataFormProperties {

		/** The type of annotation this data is for. */
		annotationType: FormControl<string | null | undefined>,

		/** Base64 encoded data for this annotation data. */
		encodedData: FormControl<string | null | undefined>,

		/** Unique id for this annotation data. */
		id: FormControl<string | null | undefined>,

		/** Resource Type */
		kind: FormControl<string | null | undefined>,

		/** The Layer id for this data. * */
		layerId: FormControl<string | null | undefined>,

		/** URL for this resource. * */
		selfLink: FormControl<string | null | undefined>,

		/** Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format). */
		updated: FormControl<string | null | undefined>,

		/** The volume id for this data. * */
		volumeId: FormControl<string | null | undefined>,
	}
	export function CreateDictionaryAnnotationdataFormGroup() {
		return new FormGroup<DictionaryAnnotationdataFormProperties>({
			annotationType: new FormControl<string | null | undefined>(undefined),
			encodedData: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			layerId: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
			volumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Dictlayerdata {
		common?: DictlayerdataCommon;
		dict?: DictlayerdataDict;
		kind?: string | null;
	}
	export interface DictlayerdataFormProperties {
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataFormGroup() {
		return new FormGroup<DictlayerdataFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictlayerdataCommon {

		/** The display title and localized canonical name to use when searching for this entity on Google search. */
		title?: string | null;
	}
	export interface DictlayerdataCommonFormProperties {

		/** The display title and localized canonical name to use when searching for this entity on Google search. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataCommonFormGroup() {
		return new FormGroup<DictlayerdataCommonFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictlayerdataDict {

		/** The source, url and attribution for this dictionary data. */
		source?: DictlayerdataDictSource;
		DictlayerdataDictWords?: Array<DictlayerdataDictWords>;
	}
	export interface DictlayerdataDictFormProperties {
	}
	export function CreateDictlayerdataDictFormGroup() {
		return new FormGroup<DictlayerdataDictFormProperties>({
		});

	}

	export interface DictlayerdataDictSource {
		attribution?: string | null;
		url?: string | null;
	}
	export interface DictlayerdataDictSourceFormProperties {
		attribution: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataDictSourceFormGroup() {
		return new FormGroup<DictlayerdataDictSourceFormProperties>({
			attribution: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictlayerdataDictWords {
		DictlayerdataDictWordsDerivatives?: Array<DictlayerdataDictWordsDerivatives>;
		DictlayerdataDictWordsExamples?: Array<DictlayerdataDictWordsExamples>;
		DictlayerdataDictWordsSenses?: Array<DictlayerdataDictWordsSenses>;

		/** The words with different meanings but not related words, e.g. "go" (game) and "go" (verb). */
		source?: DictlayerdataDictWordsSource;
	}
	export interface DictlayerdataDictWordsFormProperties {
	}
	export function CreateDictlayerdataDictWordsFormGroup() {
		return new FormGroup<DictlayerdataDictWordsFormProperties>({
		});

	}

	export interface DictlayerdataDictWordsDerivatives {
		source?: DictlayerdataDictWordsDerivativesSource;
		text?: string | null;
	}
	export interface DictlayerdataDictWordsDerivativesFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataDictWordsDerivativesFormGroup() {
		return new FormGroup<DictlayerdataDictWordsDerivativesFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictlayerdataDictWordsDerivativesSource {
		attribution?: string | null;
		url?: string | null;
	}
	export interface DictlayerdataDictWordsDerivativesSourceFormProperties {
		attribution: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataDictWordsDerivativesSourceFormGroup() {
		return new FormGroup<DictlayerdataDictWordsDerivativesSourceFormProperties>({
			attribution: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictlayerdataDictWordsExamples {
		source?: DictlayerdataDictWordsExamplesSource;
		text?: string | null;
	}
	export interface DictlayerdataDictWordsExamplesFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataDictWordsExamplesFormGroup() {
		return new FormGroup<DictlayerdataDictWordsExamplesFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictlayerdataDictWordsExamplesSource {
		attribution?: string | null;
		url?: string | null;
	}
	export interface DictlayerdataDictWordsExamplesSourceFormProperties {
		attribution: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataDictWordsExamplesSourceFormGroup() {
		return new FormGroup<DictlayerdataDictWordsExamplesSourceFormProperties>({
			attribution: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictlayerdataDictWordsSenses {
		DictlayerdataDictWordsSensesConjugations?: Array<DictlayerdataDictWordsSensesConjugations>;
		DictlayerdataDictWordsSensesDefinitions?: Array<DictlayerdataDictWordsSensesDefinitions>;
		partOfSpeech?: string | null;
		pronunciation?: string | null;
		pronunciationUrl?: string | null;
		source?: DictlayerdataDictWordsSensesSource;
		syllabification?: string | null;
		DictlayerdataDictWordsSensesSynonyms?: Array<DictlayerdataDictWordsSensesSynonyms>;
	}
	export interface DictlayerdataDictWordsSensesFormProperties {
		partOfSpeech: FormControl<string | null | undefined>,
		pronunciation: FormControl<string | null | undefined>,
		pronunciationUrl: FormControl<string | null | undefined>,
		syllabification: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataDictWordsSensesFormGroup() {
		return new FormGroup<DictlayerdataDictWordsSensesFormProperties>({
			partOfSpeech: new FormControl<string | null | undefined>(undefined),
			pronunciation: new FormControl<string | null | undefined>(undefined),
			pronunciationUrl: new FormControl<string | null | undefined>(undefined),
			syllabification: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictlayerdataDictWordsSensesConjugations {
		type?: string | null;
		value?: string | null;
	}
	export interface DictlayerdataDictWordsSensesConjugationsFormProperties {
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataDictWordsSensesConjugationsFormGroup() {
		return new FormGroup<DictlayerdataDictWordsSensesConjugationsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictlayerdataDictWordsSensesDefinitions {
		definition?: string | null;
		DictlayerdataDictWordsSensesDefinitionsExamples?: Array<DictlayerdataDictWordsSensesDefinitionsExamples>;
	}
	export interface DictlayerdataDictWordsSensesDefinitionsFormProperties {
		definition: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataDictWordsSensesDefinitionsFormGroup() {
		return new FormGroup<DictlayerdataDictWordsSensesDefinitionsFormProperties>({
			definition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictlayerdataDictWordsSensesDefinitionsExamples {
		source?: DictlayerdataDictWordsSensesDefinitionsExamplesSource;
		text?: string | null;
	}
	export interface DictlayerdataDictWordsSensesDefinitionsExamplesFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataDictWordsSensesDefinitionsExamplesFormGroup() {
		return new FormGroup<DictlayerdataDictWordsSensesDefinitionsExamplesFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictlayerdataDictWordsSensesDefinitionsExamplesSource {
		attribution?: string | null;
		url?: string | null;
	}
	export interface DictlayerdataDictWordsSensesDefinitionsExamplesSourceFormProperties {
		attribution: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataDictWordsSensesDefinitionsExamplesSourceFormGroup() {
		return new FormGroup<DictlayerdataDictWordsSensesDefinitionsExamplesSourceFormProperties>({
			attribution: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictlayerdataDictWordsSensesSource {
		attribution?: string | null;
		url?: string | null;
	}
	export interface DictlayerdataDictWordsSensesSourceFormProperties {
		attribution: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataDictWordsSensesSourceFormGroup() {
		return new FormGroup<DictlayerdataDictWordsSensesSourceFormProperties>({
			attribution: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictlayerdataDictWordsSensesSynonyms {
		source?: DictlayerdataDictWordsSensesSynonymsSource;
		text?: string | null;
	}
	export interface DictlayerdataDictWordsSensesSynonymsFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataDictWordsSensesSynonymsFormGroup() {
		return new FormGroup<DictlayerdataDictWordsSensesSynonymsFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictlayerdataDictWordsSensesSynonymsSource {
		attribution?: string | null;
		url?: string | null;
	}
	export interface DictlayerdataDictWordsSensesSynonymsSourceFormProperties {
		attribution: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataDictWordsSensesSynonymsSourceFormGroup() {
		return new FormGroup<DictlayerdataDictWordsSensesSynonymsSourceFormProperties>({
			attribution: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DictlayerdataDictWordsSource {
		attribution?: string | null;
		url?: string | null;
	}
	export interface DictlayerdataDictWordsSourceFormProperties {
		attribution: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateDictlayerdataDictWordsSourceFormGroup() {
		return new FormGroup<DictlayerdataDictWordsSourceFormProperties>({
			attribution: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Discoveryclusters {
		DiscoveryclustersClusters?: Array<DiscoveryclustersClusters>;

		/** Resorce type. */
		kind?: string | null;
		totalClusters?: number | null;
	}
	export interface DiscoveryclustersFormProperties {

		/** Resorce type. */
		kind: FormControl<string | null | undefined>,
		totalClusters: FormControl<number | null | undefined>,
	}
	export function CreateDiscoveryclustersFormGroup() {
		return new FormGroup<DiscoveryclustersFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			totalClusters: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DiscoveryclustersClusters {
		banner_with_content_container?: DiscoveryclustersClustersBanner_with_content_container;
		subTitle?: string | null;
		title?: string | null;
		totalVolumes?: number | null;
		uid?: string | null;
		volumes?: Array<Volume>;
	}
	export interface DiscoveryclustersClustersFormProperties {
		subTitle: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		totalVolumes: FormControl<number | null | undefined>,
		uid: FormControl<string | null | undefined>,
	}
	export function CreateDiscoveryclustersClustersFormGroup() {
		return new FormGroup<DiscoveryclustersClustersFormProperties>({
			subTitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			totalVolumes: new FormControl<number | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiscoveryclustersClustersBanner_with_content_container {
		fillColorArgb?: string | null;
		imageUrl?: string | null;
		maskColorArgb?: string | null;
		moreButtonText?: string | null;
		moreButtonUrl?: string | null;
		textColorArgb?: string | null;
	}
	export interface DiscoveryclustersClustersBanner_with_content_containerFormProperties {
		fillColorArgb: FormControl<string | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
		maskColorArgb: FormControl<string | null | undefined>,
		moreButtonText: FormControl<string | null | undefined>,
		moreButtonUrl: FormControl<string | null | undefined>,
		textColorArgb: FormControl<string | null | undefined>,
	}
	export function CreateDiscoveryclustersClustersBanner_with_content_containerFormGroup() {
		return new FormGroup<DiscoveryclustersClustersBanner_with_content_containerFormProperties>({
			fillColorArgb: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			maskColorArgb: new FormControl<string | null | undefined>(undefined),
			moreButtonText: new FormControl<string | null | undefined>(undefined),
			moreButtonUrl: new FormControl<string | null | undefined>(undefined),
			textColorArgb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Volume {

		/** Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.). */
		accessInfo?: VolumeAccessInfo;

		/** Opaque identifier for a specific version of a volume resource. (In LITE projection) */
		etag?: string | null;

		/** Unique identifier for a volume. (In LITE projection.) */
		id?: string | null;

		/** Resource type for a volume. (In LITE projection.) */
		kind?: string | null;

		/** What layers exist in this volume and high level information about them. */
		layerInfo?: VolumeLayerInfo;

		/** Recommendation related information for this volume. */
		recommendedInfo?: VolumeRecommendedInfo;

		/** Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries). */
		saleInfo?: VolumeSaleInfo;

		/** Search result information related to this volume. */
		searchInfo?: VolumeSearchInfo;

		/** URL to this resource. (In LITE projection.) */
		selfLink?: string | null;

		/** User specific information related to this volume. (e.g. page this user last read or whether they purchased this book) */
		userInfo?: VolumeUserInfo;

		/** General volume information. */
		volumeInfo?: VolumeVolumeInfo;
	}
	export interface VolumeFormProperties {

		/** Opaque identifier for a specific version of a volume resource. (In LITE projection) */
		etag: FormControl<string | null | undefined>,

		/** Unique identifier for a volume. (In LITE projection.) */
		id: FormControl<string | null | undefined>,

		/** Resource type for a volume. (In LITE projection.) */
		kind: FormControl<string | null | undefined>,

		/** URL to this resource. (In LITE projection.) */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeAccessInfo {

		/** Combines the access and viewability of this volume into a single status field for this user. Values can be FULL_PURCHASED, FULL_PUBLIC_DOMAIN, SAMPLE or NONE. (In LITE projection.) */
		accessViewStatus?: string | null;

		/** The two-letter ISO_3166-1 country code for which this access information is valid. (In LITE projection.) */
		country?: string | null;
		downloadAccess?: DownloadAccessRestriction;

		/** URL to the Google Drive viewer if this volume is uploaded by the user by selecting the file from Google Drive. */
		driveImportedContentLink?: string | null;

		/** Whether this volume can be embedded in a viewport using the Embedded Viewer API. */
		embeddable?: boolean | null;

		/** Information about epub content. (In LITE projection.) */
		epub?: VolumeAccessInfoEpub;

		/** Whether this volume requires that the client explicitly request offline download license rather than have it done automatically when loading the content, if the client supports it. */
		explicitOfflineLicenseManagement?: boolean | null;

		/** Information about pdf content. (In LITE projection.) */
		pdf?: VolumeAccessInfoPdf;

		/** Whether or not this book is public domain in the country listed above. */
		publicDomain?: boolean | null;

		/** Whether quote sharing is allowed for this volume. */
		quoteSharingAllowed?: boolean | null;

		/** Whether text-to-speech is permitted for this volume. Values can be ALLOWED, ALLOWED_FOR_ACCESSIBILITY, or NOT_ALLOWED. */
		textToSpeechPermission?: string | null;

		/** For ordered but not yet processed orders, we give a URL that can be used to go to the appropriate Google Wallet page. */
		viewOrderUrl?: string | null;

		/** The read access of a volume. Possible values are PARTIAL, ALL_PAGES, NO_PAGES or UNKNOWN. This value depends on the country listed above. A value of PARTIAL means that the publisher has allowed some portion of the volume to be viewed publicly, without purchase. This can apply to eBooks as well as non-eBooks. Public domain books will always have a value of ALL_PAGES. */
		viewability?: string | null;

		/** URL to read this volume on the Google Books site. Link will not allow users to read non-viewable volumes. */
		webReaderLink?: string | null;
	}
	export interface VolumeAccessInfoFormProperties {

		/** Combines the access and viewability of this volume into a single status field for this user. Values can be FULL_PURCHASED, FULL_PUBLIC_DOMAIN, SAMPLE or NONE. (In LITE projection.) */
		accessViewStatus: FormControl<string | null | undefined>,

		/** The two-letter ISO_3166-1 country code for which this access information is valid. (In LITE projection.) */
		country: FormControl<string | null | undefined>,

		/** URL to the Google Drive viewer if this volume is uploaded by the user by selecting the file from Google Drive. */
		driveImportedContentLink: FormControl<string | null | undefined>,

		/** Whether this volume can be embedded in a viewport using the Embedded Viewer API. */
		embeddable: FormControl<boolean | null | undefined>,

		/** Whether this volume requires that the client explicitly request offline download license rather than have it done automatically when loading the content, if the client supports it. */
		explicitOfflineLicenseManagement: FormControl<boolean | null | undefined>,

		/** Whether or not this book is public domain in the country listed above. */
		publicDomain: FormControl<boolean | null | undefined>,

		/** Whether quote sharing is allowed for this volume. */
		quoteSharingAllowed: FormControl<boolean | null | undefined>,

		/** Whether text-to-speech is permitted for this volume. Values can be ALLOWED, ALLOWED_FOR_ACCESSIBILITY, or NOT_ALLOWED. */
		textToSpeechPermission: FormControl<string | null | undefined>,

		/** For ordered but not yet processed orders, we give a URL that can be used to go to the appropriate Google Wallet page. */
		viewOrderUrl: FormControl<string | null | undefined>,

		/** The read access of a volume. Possible values are PARTIAL, ALL_PAGES, NO_PAGES or UNKNOWN. This value depends on the country listed above. A value of PARTIAL means that the publisher has allowed some portion of the volume to be viewed publicly, without purchase. This can apply to eBooks as well as non-eBooks. Public domain books will always have a value of ALL_PAGES. */
		viewability: FormControl<string | null | undefined>,

		/** URL to read this volume on the Google Books site. Link will not allow users to read non-viewable volumes. */
		webReaderLink: FormControl<string | null | undefined>,
	}
	export function CreateVolumeAccessInfoFormGroup() {
		return new FormGroup<VolumeAccessInfoFormProperties>({
			accessViewStatus: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			driveImportedContentLink: new FormControl<string | null | undefined>(undefined),
			embeddable: new FormControl<boolean | null | undefined>(undefined),
			explicitOfflineLicenseManagement: new FormControl<boolean | null | undefined>(undefined),
			publicDomain: new FormControl<boolean | null | undefined>(undefined),
			quoteSharingAllowed: new FormControl<boolean | null | undefined>(undefined),
			textToSpeechPermission: new FormControl<string | null | undefined>(undefined),
			viewOrderUrl: new FormControl<string | null | undefined>(undefined),
			viewability: new FormControl<string | null | undefined>(undefined),
			webReaderLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DownloadAccessRestriction {

		/** If restricted, whether access is granted for this (user, device, volume). */
		deviceAllowed?: boolean | null;

		/** If restricted, the number of content download licenses already acquired (including the requesting client, if licensed). */
		downloadsAcquired?: number | null;

		/** If deviceAllowed, whether access was just acquired with this request. */
		justAcquired?: boolean | null;

		/** Resource type. */
		kind?: string | null;

		/** If restricted, the maximum number of content download licenses for this volume. */
		maxDownloadDevices?: number | null;

		/** Error/warning message. */
		message?: string | null;

		/** Client nonce for verification. Download access and client-validation only. */
		nonce?: string | null;

		/** Error/warning reason code. Additional codes may be added in the future. 0 OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200 WARNING_USED_LAST_ACCESS */
		reasonCode?: string | null;

		/** Whether this volume has any download access restrictions. */
		restricted?: boolean | null;

		/** Response signature. */
		signature?: string | null;

		/** Client app identifier for verification. Download access and client-validation only. */
		source?: string | null;

		/** Identifies the volume for which this entry applies. */
		volumeId?: string | null;
	}
	export interface DownloadAccessRestrictionFormProperties {

		/** If restricted, whether access is granted for this (user, device, volume). */
		deviceAllowed: FormControl<boolean | null | undefined>,

		/** If restricted, the number of content download licenses already acquired (including the requesting client, if licensed). */
		downloadsAcquired: FormControl<number | null | undefined>,

		/** If deviceAllowed, whether access was just acquired with this request. */
		justAcquired: FormControl<boolean | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** If restricted, the maximum number of content download licenses for this volume. */
		maxDownloadDevices: FormControl<number | null | undefined>,

		/** Error/warning message. */
		message: FormControl<string | null | undefined>,

		/** Client nonce for verification. Download access and client-validation only. */
		nonce: FormControl<string | null | undefined>,

		/** Error/warning reason code. Additional codes may be added in the future. 0 OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200 WARNING_USED_LAST_ACCESS */
		reasonCode: FormControl<string | null | undefined>,

		/** Whether this volume has any download access restrictions. */
		restricted: FormControl<boolean | null | undefined>,

		/** Response signature. */
		signature: FormControl<string | null | undefined>,

		/** Client app identifier for verification. Download access and client-validation only. */
		source: FormControl<string | null | undefined>,

		/** Identifies the volume for which this entry applies. */
		volumeId: FormControl<string | null | undefined>,
	}
	export function CreateDownloadAccessRestrictionFormGroup() {
		return new FormGroup<DownloadAccessRestrictionFormProperties>({
			deviceAllowed: new FormControl<boolean | null | undefined>(undefined),
			downloadsAcquired: new FormControl<number | null | undefined>(undefined),
			justAcquired: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			maxDownloadDevices: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			nonce: new FormControl<string | null | undefined>(undefined),
			reasonCode: new FormControl<string | null | undefined>(undefined),
			restricted: new FormControl<boolean | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			volumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeAccessInfoEpub {

		/** URL to retrieve ACS token for epub download. (In LITE projection.) */
		acsTokenLink?: string | null;

		/** URL to download epub. (In LITE projection.) */
		downloadLink?: string | null;

		/** Is a flowing text epub available either as public domain or for purchase. (In LITE projection.) */
		isAvailable?: boolean | null;
	}
	export interface VolumeAccessInfoEpubFormProperties {

		/** URL to retrieve ACS token for epub download. (In LITE projection.) */
		acsTokenLink: FormControl<string | null | undefined>,

		/** URL to download epub. (In LITE projection.) */
		downloadLink: FormControl<string | null | undefined>,

		/** Is a flowing text epub available either as public domain or for purchase. (In LITE projection.) */
		isAvailable: FormControl<boolean | null | undefined>,
	}
	export function CreateVolumeAccessInfoEpubFormGroup() {
		return new FormGroup<VolumeAccessInfoEpubFormProperties>({
			acsTokenLink: new FormControl<string | null | undefined>(undefined),
			downloadLink: new FormControl<string | null | undefined>(undefined),
			isAvailable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface VolumeAccessInfoPdf {

		/** URL to retrieve ACS token for pdf download. (In LITE projection.) */
		acsTokenLink?: string | null;

		/** URL to download pdf. (In LITE projection.) */
		downloadLink?: string | null;

		/** Is a scanned image pdf available either as public domain or for purchase. (In LITE projection.) */
		isAvailable?: boolean | null;
	}
	export interface VolumeAccessInfoPdfFormProperties {

		/** URL to retrieve ACS token for pdf download. (In LITE projection.) */
		acsTokenLink: FormControl<string | null | undefined>,

		/** URL to download pdf. (In LITE projection.) */
		downloadLink: FormControl<string | null | undefined>,

		/** Is a scanned image pdf available either as public domain or for purchase. (In LITE projection.) */
		isAvailable: FormControl<boolean | null | undefined>,
	}
	export function CreateVolumeAccessInfoPdfFormGroup() {
		return new FormGroup<VolumeAccessInfoPdfFormProperties>({
			acsTokenLink: new FormControl<string | null | undefined>(undefined),
			downloadLink: new FormControl<string | null | undefined>(undefined),
			isAvailable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface VolumeLayerInfo {

		/** A layer should appear here if and only if the layer exists for this book. */
		VolumeLayerInfoLayers?: Array<VolumeLayerInfoLayers>;
	}
	export interface VolumeLayerInfoFormProperties {
	}
	export function CreateVolumeLayerInfoFormGroup() {
		return new FormGroup<VolumeLayerInfoFormProperties>({
		});

	}

	export interface VolumeLayerInfoLayers {

		/** The layer id of this layer (e.g. "geo"). */
		layerId?: string | null;

		/** The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately. */
		volumeAnnotationsVersion?: string | null;
	}
	export interface VolumeLayerInfoLayersFormProperties {

		/** The layer id of this layer (e.g. "geo"). */
		layerId: FormControl<string | null | undefined>,

		/** The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately. */
		volumeAnnotationsVersion: FormControl<string | null | undefined>,
	}
	export function CreateVolumeLayerInfoLayersFormGroup() {
		return new FormGroup<VolumeLayerInfoLayersFormProperties>({
			layerId: new FormControl<string | null | undefined>(undefined),
			volumeAnnotationsVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeRecommendedInfo {

		/** A text explaining why this volume is recommended. */
		explanation?: string | null;
	}
	export interface VolumeRecommendedInfoFormProperties {

		/** A text explaining why this volume is recommended. */
		explanation: FormControl<string | null | undefined>,
	}
	export function CreateVolumeRecommendedInfoFormGroup() {
		return new FormGroup<VolumeRecommendedInfoFormProperties>({
			explanation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeSaleInfo {

		/** URL to purchase this volume on the Google Books site. (In LITE projection) */
		buyLink?: string | null;

		/** The two-letter ISO_3166-1 country code for which this sale information is valid. (In LITE projection.) */
		country?: string | null;

		/** Whether or not this volume is an eBook (can be added to the My eBooks shelf). */
		isEbook?: boolean | null;

		/** Suggested retail price. (In LITE projection.) */
		listPrice?: VolumeSaleInfoListPrice;

		/** Offers available for this volume (sales and rentals). */
		VolumeSaleInfoOffers?: Array<VolumeSaleInfoOffers>;

		/** The date on which this book is available for sale. */
		onSaleDate?: string | null;

		/** The actual selling price of the book. This is the same as the suggested retail or list price unless there are offers or discounts on this volume. (In LITE projection.) */
		retailPrice?: VolumeSaleInfoRetailPrice;

		/** Whether or not this book is available for sale or offered for free in the Google eBookstore for the country listed above. Possible values are FOR_SALE, FOR_RENTAL_ONLY, FOR_SALE_AND_RENTAL, FREE, NOT_FOR_SALE, or FOR_PREORDER. */
		saleability?: string | null;
	}
	export interface VolumeSaleInfoFormProperties {

		/** URL to purchase this volume on the Google Books site. (In LITE projection) */
		buyLink: FormControl<string | null | undefined>,

		/** The two-letter ISO_3166-1 country code for which this sale information is valid. (In LITE projection.) */
		country: FormControl<string | null | undefined>,

		/** Whether or not this volume is an eBook (can be added to the My eBooks shelf). */
		isEbook: FormControl<boolean | null | undefined>,

		/** The date on which this book is available for sale. */
		onSaleDate: FormControl<string | null | undefined>,

		/** Whether or not this book is available for sale or offered for free in the Google eBookstore for the country listed above. Possible values are FOR_SALE, FOR_RENTAL_ONLY, FOR_SALE_AND_RENTAL, FREE, NOT_FOR_SALE, or FOR_PREORDER. */
		saleability: FormControl<string | null | undefined>,
	}
	export function CreateVolumeSaleInfoFormGroup() {
		return new FormGroup<VolumeSaleInfoFormProperties>({
			buyLink: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isEbook: new FormControl<boolean | null | undefined>(undefined),
			onSaleDate: new FormControl<string | null | undefined>(undefined),
			saleability: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeSaleInfoListPrice {

		/** Amount in the currency listed below. (In LITE projection.) */
		amount?: number | null;

		/** An ISO 4217, three-letter currency code. (In LITE projection.) */
		currencyCode?: string | null;
	}
	export interface VolumeSaleInfoListPriceFormProperties {

		/** Amount in the currency listed below. (In LITE projection.) */
		amount: FormControl<number | null | undefined>,

		/** An ISO 4217, three-letter currency code. (In LITE projection.) */
		currencyCode: FormControl<string | null | undefined>,
	}
	export function CreateVolumeSaleInfoListPriceFormGroup() {
		return new FormGroup<VolumeSaleInfoListPriceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeSaleInfoOffers {

		/** The finsky offer type (e.g., PURCHASE=0 RENTAL=3) */
		finskyOfferType?: number | null;

		/** Indicates whether the offer is giftable. */
		giftable?: boolean | null;

		/** Offer list (=undiscounted) price in Micros. */
		listPrice?: VolumeSaleInfoOffersListPrice;

		/** The rental duration (for rental offers only). */
		rentalDuration?: VolumeSaleInfoOffersRentalDuration;

		/** Offer retail (=discounted) price in Micros */
		retailPrice?: VolumeSaleInfoOffersRetailPrice;
	}
	export interface VolumeSaleInfoOffersFormProperties {

		/** The finsky offer type (e.g., PURCHASE=0 RENTAL=3) */
		finskyOfferType: FormControl<number | null | undefined>,

		/** Indicates whether the offer is giftable. */
		giftable: FormControl<boolean | null | undefined>,
	}
	export function CreateVolumeSaleInfoOffersFormGroup() {
		return new FormGroup<VolumeSaleInfoOffersFormProperties>({
			finskyOfferType: new FormControl<number | null | undefined>(undefined),
			giftable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface VolumeSaleInfoOffersListPrice {
		amountInMicros?: number | null;
		currencyCode?: string | null;
	}
	export interface VolumeSaleInfoOffersListPriceFormProperties {
		amountInMicros: FormControl<number | null | undefined>,
		currencyCode: FormControl<string | null | undefined>,
	}
	export function CreateVolumeSaleInfoOffersListPriceFormGroup() {
		return new FormGroup<VolumeSaleInfoOffersListPriceFormProperties>({
			amountInMicros: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeSaleInfoOffersRentalDuration {
		count?: number | null;
		unit?: string | null;
	}
	export interface VolumeSaleInfoOffersRentalDurationFormProperties {
		count: FormControl<number | null | undefined>,
		unit: FormControl<string | null | undefined>,
	}
	export function CreateVolumeSaleInfoOffersRentalDurationFormGroup() {
		return new FormGroup<VolumeSaleInfoOffersRentalDurationFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeSaleInfoOffersRetailPrice {
		amountInMicros?: number | null;
		currencyCode?: string | null;
	}
	export interface VolumeSaleInfoOffersRetailPriceFormProperties {
		amountInMicros: FormControl<number | null | undefined>,
		currencyCode: FormControl<string | null | undefined>,
	}
	export function CreateVolumeSaleInfoOffersRetailPriceFormGroup() {
		return new FormGroup<VolumeSaleInfoOffersRetailPriceFormProperties>({
			amountInMicros: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeSaleInfoRetailPrice {

		/** Amount in the currency listed below. (In LITE projection.) */
		amount?: number | null;

		/** An ISO 4217, three-letter currency code. (In LITE projection.) */
		currencyCode?: string | null;
	}
	export interface VolumeSaleInfoRetailPriceFormProperties {

		/** Amount in the currency listed below. (In LITE projection.) */
		amount: FormControl<number | null | undefined>,

		/** An ISO 4217, three-letter currency code. (In LITE projection.) */
		currencyCode: FormControl<string | null | undefined>,
	}
	export function CreateVolumeSaleInfoRetailPriceFormGroup() {
		return new FormGroup<VolumeSaleInfoRetailPriceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeSearchInfo {

		/** A text snippet containing the search query. */
		textSnippet?: string | null;
	}
	export interface VolumeSearchInfoFormProperties {

		/** A text snippet containing the search query. */
		textSnippet: FormControl<string | null | undefined>,
	}
	export function CreateVolumeSearchInfoFormGroup() {
		return new FormGroup<VolumeSearchInfoFormProperties>({
			textSnippet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeUserInfo {

		/** Timestamp when this volume was acquired by the user. (RFC 3339 UTC date-time format) Acquiring includes purchase, user upload, receiving family sharing, etc. */
		acquiredTime?: string | null;

		/** How this volume was acquired. */
		acquisitionType?: number | null;

		/** Copy/Paste accounting information. */
		copy?: VolumeUserInfoCopy;

		/** Whether this volume is purchased, sample, pd download etc. */
		entitlementType?: number | null;

		/** Information on the ability to share with the family. */
		familySharing?: VolumeUserInfoFamilySharing;

		/** Whether or not the user shared this volume with the family. */
		isFamilySharedFromUser?: boolean | null;

		/** Whether or not the user received this volume through family sharing. */
		isFamilySharedToUser?: boolean | null;

		/** Deprecated: Replaced by familySharing. */
		isFamilySharingAllowed?: boolean | null;

		/** Deprecated: Replaced by familySharing. */
		isFamilySharingDisabledByFop?: boolean | null;

		/** Whether or not this volume is currently in "my books." */
		isInMyBooks?: boolean | null;

		/** Whether or not this volume was pre-ordered by the authenticated user making the request. (In LITE projection.) */
		isPreordered?: boolean | null;

		/** Whether or not this volume was purchased by the authenticated user making the request. (In LITE projection.) */
		isPurchased?: boolean | null;

		/** Whether or not this volume was user uploaded. */
		isUploaded?: boolean | null;
		readingPosition?: ReadingPosition;

		/** Period during this book is/was a valid rental. */
		rentalPeriod?: VolumeUserInfoRentalPeriod;

		/** Whether this book is an active or an expired rental. */
		rentalState?: string | null;
		review?: Review;

		/** Timestamp when this volume was last modified by a user action, such as a reading position update, volume purchase or writing a review. (RFC 3339 UTC date-time format). */
		updated?: string | null;
		userUploadedVolumeInfo?: VolumeUserInfoUserUploadedVolumeInfo;
	}
	export interface VolumeUserInfoFormProperties {

		/** Timestamp when this volume was acquired by the user. (RFC 3339 UTC date-time format) Acquiring includes purchase, user upload, receiving family sharing, etc. */
		acquiredTime: FormControl<string | null | undefined>,

		/** How this volume was acquired. */
		acquisitionType: FormControl<number | null | undefined>,

		/** Whether this volume is purchased, sample, pd download etc. */
		entitlementType: FormControl<number | null | undefined>,

		/** Whether or not the user shared this volume with the family. */
		isFamilySharedFromUser: FormControl<boolean | null | undefined>,

		/** Whether or not the user received this volume through family sharing. */
		isFamilySharedToUser: FormControl<boolean | null | undefined>,

		/** Deprecated: Replaced by familySharing. */
		isFamilySharingAllowed: FormControl<boolean | null | undefined>,

		/** Deprecated: Replaced by familySharing. */
		isFamilySharingDisabledByFop: FormControl<boolean | null | undefined>,

		/** Whether or not this volume is currently in "my books." */
		isInMyBooks: FormControl<boolean | null | undefined>,

		/** Whether or not this volume was pre-ordered by the authenticated user making the request. (In LITE projection.) */
		isPreordered: FormControl<boolean | null | undefined>,

		/** Whether or not this volume was purchased by the authenticated user making the request. (In LITE projection.) */
		isPurchased: FormControl<boolean | null | undefined>,

		/** Whether or not this volume was user uploaded. */
		isUploaded: FormControl<boolean | null | undefined>,

		/** Whether this book is an active or an expired rental. */
		rentalState: FormControl<string | null | undefined>,

		/** Timestamp when this volume was last modified by a user action, such as a reading position update, volume purchase or writing a review. (RFC 3339 UTC date-time format). */
		updated: FormControl<string | null | undefined>,
	}
	export function CreateVolumeUserInfoFormGroup() {
		return new FormGroup<VolumeUserInfoFormProperties>({
			acquiredTime: new FormControl<string | null | undefined>(undefined),
			acquisitionType: new FormControl<number | null | undefined>(undefined),
			entitlementType: new FormControl<number | null | undefined>(undefined),
			isFamilySharedFromUser: new FormControl<boolean | null | undefined>(undefined),
			isFamilySharedToUser: new FormControl<boolean | null | undefined>(undefined),
			isFamilySharingAllowed: new FormControl<boolean | null | undefined>(undefined),
			isFamilySharingDisabledByFop: new FormControl<boolean | null | undefined>(undefined),
			isInMyBooks: new FormControl<boolean | null | undefined>(undefined),
			isPreordered: new FormControl<boolean | null | undefined>(undefined),
			isPurchased: new FormControl<boolean | null | undefined>(undefined),
			isUploaded: new FormControl<boolean | null | undefined>(undefined),
			rentalState: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeUserInfoCopy {
		allowedCharacterCount?: number | null;
		limitType?: string | null;
		remainingCharacterCount?: number | null;
		updated?: string | null;
	}
	export interface VolumeUserInfoCopyFormProperties {
		allowedCharacterCount: FormControl<number | null | undefined>,
		limitType: FormControl<string | null | undefined>,
		remainingCharacterCount: FormControl<number | null | undefined>,
		updated: FormControl<string | null | undefined>,
	}
	export function CreateVolumeUserInfoCopyFormGroup() {
		return new FormGroup<VolumeUserInfoCopyFormProperties>({
			allowedCharacterCount: new FormControl<number | null | undefined>(undefined),
			limitType: new FormControl<string | null | undefined>(undefined),
			remainingCharacterCount: new FormControl<number | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeUserInfoFamilySharing {

		/** The role of the user in the family. */
		familyRole?: string | null;

		/** Whether or not this volume can be shared with the family by the user. This includes sharing eligibility of both the volume and the user. If the value is true, the user can initiate a family sharing action. */
		isSharingAllowed?: boolean | null;

		/** Whether or not sharing this volume is temporarily disabled due to issues with the Family Wallet. */
		isSharingDisabledByFop?: boolean | null;
	}
	export interface VolumeUserInfoFamilySharingFormProperties {

		/** The role of the user in the family. */
		familyRole: FormControl<string | null | undefined>,

		/** Whether or not this volume can be shared with the family by the user. This includes sharing eligibility of both the volume and the user. If the value is true, the user can initiate a family sharing action. */
		isSharingAllowed: FormControl<boolean | null | undefined>,

		/** Whether or not sharing this volume is temporarily disabled due to issues with the Family Wallet. */
		isSharingDisabledByFop: FormControl<boolean | null | undefined>,
	}
	export function CreateVolumeUserInfoFamilySharingFormGroup() {
		return new FormGroup<VolumeUserInfoFamilySharingFormProperties>({
			familyRole: new FormControl<string | null | undefined>(undefined),
			isSharingAllowed: new FormControl<boolean | null | undefined>(undefined),
			isSharingDisabledByFop: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ReadingPosition {

		/** Position in an EPUB as a CFI. */
		epubCfiPosition?: string | null;

		/** Position in a volume for image-based content. */
		gbImagePosition?: string | null;

		/** Position in a volume for text-based content. */
		gbTextPosition?: string | null;

		/** Resource type for a reading position. */
		kind?: string | null;

		/** Position in a PDF file. */
		pdfPosition?: string | null;

		/** Timestamp when this reading position was last updated (formatted UTC timestamp with millisecond resolution). */
		updated?: string | null;

		/** Volume id associated with this reading position. */
		volumeId?: string | null;
	}
	export interface ReadingPositionFormProperties {

		/** Position in an EPUB as a CFI. */
		epubCfiPosition: FormControl<string | null | undefined>,

		/** Position in a volume for image-based content. */
		gbImagePosition: FormControl<string | null | undefined>,

		/** Position in a volume for text-based content. */
		gbTextPosition: FormControl<string | null | undefined>,

		/** Resource type for a reading position. */
		kind: FormControl<string | null | undefined>,

		/** Position in a PDF file. */
		pdfPosition: FormControl<string | null | undefined>,

		/** Timestamp when this reading position was last updated (formatted UTC timestamp with millisecond resolution). */
		updated: FormControl<string | null | undefined>,

		/** Volume id associated with this reading position. */
		volumeId: FormControl<string | null | undefined>,
	}
	export function CreateReadingPositionFormGroup() {
		return new FormGroup<ReadingPositionFormProperties>({
			epubCfiPosition: new FormControl<string | null | undefined>(undefined),
			gbImagePosition: new FormControl<string | null | undefined>(undefined),
			gbTextPosition: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			pdfPosition: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
			volumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeUserInfoRentalPeriod {
		endUtcSec?: string | null;
		startUtcSec?: string | null;
	}
	export interface VolumeUserInfoRentalPeriodFormProperties {
		endUtcSec: FormControl<string | null | undefined>,
		startUtcSec: FormControl<string | null | undefined>,
	}
	export function CreateVolumeUserInfoRentalPeriodFormGroup() {
		return new FormGroup<VolumeUserInfoRentalPeriodFormProperties>({
			endUtcSec: new FormControl<string | null | undefined>(undefined),
			startUtcSec: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Review {

		/** Author of this review. */
		author?: ReviewAuthor;

		/** Review text. */
		content?: string | null;

		/** Date of this review. */
		date?: string | null;

		/** URL for the full review text, for reviews gathered from the web. */
		fullTextUrl?: string | null;

		/** Resource type for a review. */
		kind?: string | null;

		/** Star rating for this review. Possible values are ONE, TWO, THREE, FOUR, FIVE or NOT_RATED. */
		rating?: string | null;

		/** Information regarding the source of this review, when the review is not from a Google Books user. */
		source?: ReviewSource;

		/** Title for this review. */
		title?: string | null;

		/** Source type for this review. Possible values are EDITORIAL, WEB_USER or GOOGLE_USER. */
		type?: string | null;

		/** Volume that this review is for. */
		volumeId?: string | null;
	}
	export interface ReviewFormProperties {

		/** Review text. */
		content: FormControl<string | null | undefined>,

		/** Date of this review. */
		date: FormControl<string | null | undefined>,

		/** URL for the full review text, for reviews gathered from the web. */
		fullTextUrl: FormControl<string | null | undefined>,

		/** Resource type for a review. */
		kind: FormControl<string | null | undefined>,

		/** Star rating for this review. Possible values are ONE, TWO, THREE, FOUR, FIVE or NOT_RATED. */
		rating: FormControl<string | null | undefined>,

		/** Title for this review. */
		title: FormControl<string | null | undefined>,

		/** Source type for this review. Possible values are EDITORIAL, WEB_USER or GOOGLE_USER. */
		type: FormControl<string | null | undefined>,

		/** Volume that this review is for. */
		volumeId: FormControl<string | null | undefined>,
	}
	export function CreateReviewFormGroup() {
		return new FormGroup<ReviewFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			fullTextUrl: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			volumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReviewAuthor {

		/** Name of this person. */
		displayName?: string | null;
	}
	export interface ReviewAuthorFormProperties {

		/** Name of this person. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateReviewAuthorFormGroup() {
		return new FormGroup<ReviewAuthorFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReviewSource {

		/** Name of the source. */
		description?: string | null;

		/** Extra text about the source of the review. */
		extraDescription?: string | null;

		/** URL of the source of the review. */
		url?: string | null;
	}
	export interface ReviewSourceFormProperties {

		/** Name of the source. */
		description: FormControl<string | null | undefined>,

		/** Extra text about the source of the review. */
		extraDescription: FormControl<string | null | undefined>,

		/** URL of the source of the review. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateReviewSourceFormGroup() {
		return new FormGroup<ReviewSourceFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			extraDescription: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeUserInfoUserUploadedVolumeInfo {
		processingState?: string | null;
	}
	export interface VolumeUserInfoUserUploadedVolumeInfoFormProperties {
		processingState: FormControl<string | null | undefined>,
	}
	export function CreateVolumeUserInfoUserUploadedVolumeInfoFormGroup() {
		return new FormGroup<VolumeUserInfoUserUploadedVolumeInfoFormProperties>({
			processingState: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeVolumeInfo {

		/** Whether anonymous logging should be allowed. */
		allowAnonLogging?: boolean | null;

		/** The names of the authors and/or editors for this volume. (In LITE projection) */
		authors?: Array<string>;

		/** The mean review rating for this volume. (min = 1.0, max = 5.0) */
		averageRating?: number | null;

		/** Canonical URL for a volume. (In LITE projection.) */
		canonicalVolumeLink?: string | null;

		/** A list of subject categories, such as "Fiction", "Suspense", etc. */
		categories?: Array<string>;

		/** Whether the volume has comics content. */
		comicsContent?: boolean | null;

		/** An identifier for the version of the volume content (text & images). (In LITE projection) */
		contentVersion?: string | null;

		/** A synopsis of the volume. The text of the description is formatted in HTML and includes simple formatting elements, such as b, i, and br tags. (In LITE projection.) */
		description?: string | null;

		/** Physical dimensions of this volume. */
		dimensions?: VolumeVolumeInfoDimensions;

		/** A list of image links for all the sizes that are available. (In LITE projection.) */
		imageLinks?: VolumeVolumeInfoImageLinks;

		/** Industry standard identifiers for this volume. */
		VolumeVolumeInfoIndustryIdentifiers?: Array<VolumeVolumeInfoIndustryIdentifiers>;

		/** URL to view information about this volume on the Google Books site. (In LITE projection) */
		infoLink?: string | null;

		/** Best language for this volume (based on content). It is the two-letter ISO 639-1 code such as 'fr', 'en', etc. */
		language?: string | null;

		/** The main category to which this volume belongs. It will be the category from the categories list returned below that has the highest weight. */
		mainCategory?: string | null;
		maturityRating?: string | null;

		/** Total number of pages as per publisher metadata. */
		pageCount?: number | null;

		/** A top-level summary of the panelization info in this volume. */
		panelizationSummary?: VolumeVolumeInfoPanelizationSummary;

		/** URL to preview this volume on the Google Books site. */
		previewLink?: string | null;

		/** Type of publication of this volume. Possible values are BOOK or MAGAZINE. */
		printType?: string | null;

		/** Total number of printed pages in generated pdf representation. */
		printedPageCount?: number | null;

		/** Date of publication. (In LITE projection.) */
		publishedDate?: string | null;

		/** Publisher of this volume. (In LITE projection.) */
		publisher?: string | null;

		/** The number of review ratings for this volume. */
		ratingsCount?: number | null;

		/** The reading modes available for this volume. */
		readingModes?: VolumeVolumeInfoReadingModes;

		/** Total number of sample pages as per publisher metadata. */
		samplePageCount?: number | null;
		seriesInfo?: Volumeseriesinfo;

		/** Volume subtitle. (In LITE projection.) */
		subtitle?: string | null;

		/** Volume title. (In LITE projection.) */
		title?: string | null;
	}
	export interface VolumeVolumeInfoFormProperties {

		/** Whether anonymous logging should be allowed. */
		allowAnonLogging: FormControl<boolean | null | undefined>,

		/** The mean review rating for this volume. (min = 1.0, max = 5.0) */
		averageRating: FormControl<number | null | undefined>,

		/** Canonical URL for a volume. (In LITE projection.) */
		canonicalVolumeLink: FormControl<string | null | undefined>,

		/** Whether the volume has comics content. */
		comicsContent: FormControl<boolean | null | undefined>,

		/** An identifier for the version of the volume content (text & images). (In LITE projection) */
		contentVersion: FormControl<string | null | undefined>,

		/** A synopsis of the volume. The text of the description is formatted in HTML and includes simple formatting elements, such as b, i, and br tags. (In LITE projection.) */
		description: FormControl<string | null | undefined>,

		/** URL to view information about this volume on the Google Books site. (In LITE projection) */
		infoLink: FormControl<string | null | undefined>,

		/** Best language for this volume (based on content). It is the two-letter ISO 639-1 code such as 'fr', 'en', etc. */
		language: FormControl<string | null | undefined>,

		/** The main category to which this volume belongs. It will be the category from the categories list returned below that has the highest weight. */
		mainCategory: FormControl<string | null | undefined>,
		maturityRating: FormControl<string | null | undefined>,

		/** Total number of pages as per publisher metadata. */
		pageCount: FormControl<number | null | undefined>,

		/** URL to preview this volume on the Google Books site. */
		previewLink: FormControl<string | null | undefined>,

		/** Type of publication of this volume. Possible values are BOOK or MAGAZINE. */
		printType: FormControl<string | null | undefined>,

		/** Total number of printed pages in generated pdf representation. */
		printedPageCount: FormControl<number | null | undefined>,

		/** Date of publication. (In LITE projection.) */
		publishedDate: FormControl<string | null | undefined>,

		/** Publisher of this volume. (In LITE projection.) */
		publisher: FormControl<string | null | undefined>,

		/** The number of review ratings for this volume. */
		ratingsCount: FormControl<number | null | undefined>,

		/** Total number of sample pages as per publisher metadata. */
		samplePageCount: FormControl<number | null | undefined>,

		/** Volume subtitle. (In LITE projection.) */
		subtitle: FormControl<string | null | undefined>,

		/** Volume title. (In LITE projection.) */
		title: FormControl<string | null | undefined>,
	}
	export function CreateVolumeVolumeInfoFormGroup() {
		return new FormGroup<VolumeVolumeInfoFormProperties>({
			allowAnonLogging: new FormControl<boolean | null | undefined>(undefined),
			averageRating: new FormControl<number | null | undefined>(undefined),
			canonicalVolumeLink: new FormControl<string | null | undefined>(undefined),
			comicsContent: new FormControl<boolean | null | undefined>(undefined),
			contentVersion: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			infoLink: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			mainCategory: new FormControl<string | null | undefined>(undefined),
			maturityRating: new FormControl<string | null | undefined>(undefined),
			pageCount: new FormControl<number | null | undefined>(undefined),
			previewLink: new FormControl<string | null | undefined>(undefined),
			printType: new FormControl<string | null | undefined>(undefined),
			printedPageCount: new FormControl<number | null | undefined>(undefined),
			publishedDate: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			ratingsCount: new FormControl<number | null | undefined>(undefined),
			samplePageCount: new FormControl<number | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeVolumeInfoDimensions {

		/** Height or length of this volume (in cm). */
		height?: string | null;

		/** Thickness of this volume (in cm). */
		thickness?: string | null;

		/** Width of this volume (in cm). */
		width?: string | null;
	}
	export interface VolumeVolumeInfoDimensionsFormProperties {

		/** Height or length of this volume (in cm). */
		height: FormControl<string | null | undefined>,

		/** Thickness of this volume (in cm). */
		thickness: FormControl<string | null | undefined>,

		/** Width of this volume (in cm). */
		width: FormControl<string | null | undefined>,
	}
	export function CreateVolumeVolumeInfoDimensionsFormGroup() {
		return new FormGroup<VolumeVolumeInfoDimensionsFormProperties>({
			height: new FormControl<string | null | undefined>(undefined),
			thickness: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeVolumeInfoImageLinks {

		/** Image link for extra large size (width of ~1280 pixels). (In LITE projection) */
		extraLarge?: string | null;

		/** Image link for large size (width of ~800 pixels). (In LITE projection) */
		large?: string | null;

		/** Image link for medium size (width of ~575 pixels). (In LITE projection) */
		medium?: string | null;

		/** Image link for small size (width of ~300 pixels). (In LITE projection) */
		small?: string | null;

		/** Image link for small thumbnail size (width of ~80 pixels). (In LITE projection) */
		smallThumbnail?: string | null;

		/** Image link for thumbnail size (width of ~128 pixels). (In LITE projection) */
		thumbnail?: string | null;
	}
	export interface VolumeVolumeInfoImageLinksFormProperties {

		/** Image link for extra large size (width of ~1280 pixels). (In LITE projection) */
		extraLarge: FormControl<string | null | undefined>,

		/** Image link for large size (width of ~800 pixels). (In LITE projection) */
		large: FormControl<string | null | undefined>,

		/** Image link for medium size (width of ~575 pixels). (In LITE projection) */
		medium: FormControl<string | null | undefined>,

		/** Image link for small size (width of ~300 pixels). (In LITE projection) */
		small: FormControl<string | null | undefined>,

		/** Image link for small thumbnail size (width of ~80 pixels). (In LITE projection) */
		smallThumbnail: FormControl<string | null | undefined>,

		/** Image link for thumbnail size (width of ~128 pixels). (In LITE projection) */
		thumbnail: FormControl<string | null | undefined>,
	}
	export function CreateVolumeVolumeInfoImageLinksFormGroup() {
		return new FormGroup<VolumeVolumeInfoImageLinksFormProperties>({
			extraLarge: new FormControl<string | null | undefined>(undefined),
			large: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<string | null | undefined>(undefined),
			small: new FormControl<string | null | undefined>(undefined),
			smallThumbnail: new FormControl<string | null | undefined>(undefined),
			thumbnail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeVolumeInfoIndustryIdentifiers {

		/** Industry specific volume identifier. */
		identifier?: string | null;

		/** Identifier type. Possible values are ISBN_10, ISBN_13, ISSN and OTHER. */
		type?: string | null;
	}
	export interface VolumeVolumeInfoIndustryIdentifiersFormProperties {

		/** Industry specific volume identifier. */
		identifier: FormControl<string | null | undefined>,

		/** Identifier type. Possible values are ISBN_10, ISBN_13, ISSN and OTHER. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVolumeVolumeInfoIndustryIdentifiersFormGroup() {
		return new FormGroup<VolumeVolumeInfoIndustryIdentifiersFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeVolumeInfoPanelizationSummary {
		containsEpubBubbles?: boolean | null;
		containsImageBubbles?: boolean | null;
		epubBubbleVersion?: string | null;
		imageBubbleVersion?: string | null;
	}
	export interface VolumeVolumeInfoPanelizationSummaryFormProperties {
		containsEpubBubbles: FormControl<boolean | null | undefined>,
		containsImageBubbles: FormControl<boolean | null | undefined>,
		epubBubbleVersion: FormControl<string | null | undefined>,
		imageBubbleVersion: FormControl<string | null | undefined>,
	}
	export function CreateVolumeVolumeInfoPanelizationSummaryFormGroup() {
		return new FormGroup<VolumeVolumeInfoPanelizationSummaryFormProperties>({
			containsEpubBubbles: new FormControl<boolean | null | undefined>(undefined),
			containsImageBubbles: new FormControl<boolean | null | undefined>(undefined),
			epubBubbleVersion: new FormControl<string | null | undefined>(undefined),
			imageBubbleVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeVolumeInfoReadingModes {
		image?: boolean | null;
		text?: boolean | null;
	}
	export interface VolumeVolumeInfoReadingModesFormProperties {
		image: FormControl<boolean | null | undefined>,
		text: FormControl<boolean | null | undefined>,
	}
	export function CreateVolumeVolumeInfoReadingModesFormGroup() {
		return new FormGroup<VolumeVolumeInfoReadingModesFormProperties>({
			image: new FormControl<boolean | null | undefined>(undefined),
			text: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Volumeseriesinfo {

		/** The display number string. This should be used only for display purposes and the actual sequence should be inferred from the below orderNumber. */
		bookDisplayNumber?: string | null;

		/** Resource type. */
		kind?: string | null;

		/** Short book title in the context of the series. */
		shortSeriesBookTitle?: string | null;
		VolumeseriesinfoVolumeSeries?: Array<VolumeseriesinfoVolumeSeries>;
	}
	export interface VolumeseriesinfoFormProperties {

		/** The display number string. This should be used only for display purposes and the actual sequence should be inferred from the below orderNumber. */
		bookDisplayNumber: FormControl<string | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** Short book title in the context of the series. */
		shortSeriesBookTitle: FormControl<string | null | undefined>,
	}
	export function CreateVolumeseriesinfoFormGroup() {
		return new FormGroup<VolumeseriesinfoFormProperties>({
			bookDisplayNumber: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			shortSeriesBookTitle: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeseriesinfoVolumeSeries {

		/** List of issues. Applicable only for Collection Edition and Omnibus. */
		VolumeseriesinfoVolumeSeriesIssue?: Array<VolumeseriesinfoVolumeSeriesIssue>;

		/** The book order number in the series. */
		orderNumber?: number | null;

		/** The book type in the context of series. Examples - Single Issue, Collection Edition, etc. */
		seriesBookType?: string | null;

		/** The series id. */
		seriesId?: string | null;
	}
	export interface VolumeseriesinfoVolumeSeriesFormProperties {

		/** The book order number in the series. */
		orderNumber: FormControl<number | null | undefined>,

		/** The book type in the context of series. Examples - Single Issue, Collection Edition, etc. */
		seriesBookType: FormControl<string | null | undefined>,

		/** The series id. */
		seriesId: FormControl<string | null | undefined>,
	}
	export function CreateVolumeseriesinfoVolumeSeriesFormGroup() {
		return new FormGroup<VolumeseriesinfoVolumeSeriesFormProperties>({
			orderNumber: new FormControl<number | null | undefined>(undefined),
			seriesBookType: new FormControl<string | null | undefined>(undefined),
			seriesId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeseriesinfoVolumeSeriesIssue {
		issueDisplayNumber?: string | null;
		issueOrderNumber?: number | null;
	}
	export interface VolumeseriesinfoVolumeSeriesIssueFormProperties {
		issueDisplayNumber: FormControl<string | null | undefined>,
		issueOrderNumber: FormControl<number | null | undefined>,
	}
	export function CreateVolumeseriesinfoVolumeSeriesIssueFormGroup() {
		return new FormGroup<VolumeseriesinfoVolumeSeriesIssueFormProperties>({
			issueDisplayNumber: new FormControl<string | null | undefined>(undefined),
			issueOrderNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DownloadAccesses {

		/** A list of download access responses. */
		downloadAccessList?: Array<DownloadAccessRestriction>;

		/** Resource type. */
		kind?: string | null;
	}
	export interface DownloadAccessesFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDownloadAccessesFormGroup() {
		return new FormGroup<DownloadAccessesFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}

	export interface FamilyInfo {

		/** Resource type. */
		kind?: string | null;

		/** Family membership info of the user that made the request. */
		membership?: FamilyInfoMembership;
	}
	export interface FamilyInfoFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateFamilyInfoFormGroup() {
		return new FormGroup<FamilyInfoFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FamilyInfoMembership {

		/** Restrictions on user buying and acquiring content. */
		acquirePermission?: string | null;

		/** The age group of the user. */
		ageGroup?: string | null;

		/** The maximum allowed maturity rating for the user. */
		allowedMaturityRating?: string | null;
		isInFamily?: boolean | null;

		/** The role of the user in the family. */
		role?: string | null;
	}
	export interface FamilyInfoMembershipFormProperties {

		/** Restrictions on user buying and acquiring content. */
		acquirePermission: FormControl<string | null | undefined>,

		/** The age group of the user. */
		ageGroup: FormControl<string | null | undefined>,

		/** The maximum allowed maturity rating for the user. */
		allowedMaturityRating: FormControl<string | null | undefined>,
		isInFamily: FormControl<boolean | null | undefined>,

		/** The role of the user in the family. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateFamilyInfoMembershipFormGroup() {
		return new FormGroup<FamilyInfoMembershipFormProperties>({
			acquirePermission: new FormControl<string | null | undefined>(undefined),
			ageGroup: new FormControl<string | null | undefined>(undefined),
			allowedMaturityRating: new FormControl<string | null | undefined>(undefined),
			isInFamily: new FormControl<boolean | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Layersummaries {

		/** A list of layer summary items. */
		items?: Array<Layersummary>;

		/** Resource type. */
		kind?: string | null;

		/** The total number of layer summaries found. */
		totalItems?: number | null;
	}
	export interface LayersummariesFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** The total number of layer summaries found. */
		totalItems: FormControl<number | null | undefined>,
	}
	export function CreateLayersummariesFormGroup() {
		return new FormGroup<LayersummariesFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Layersummary {

		/** The number of annotations for this layer. */
		annotationCount?: number | null;

		/** The list of annotation types contained for this layer. */
		annotationTypes?: Array<string>;

		/** Link to get data for this annotation. */
		annotationsDataLink?: string | null;

		/** The link to get the annotations for this layer. */
		annotationsLink?: string | null;

		/** The content version this resource is for. */
		contentVersion?: string | null;

		/** The number of data items for this layer. */
		dataCount?: number | null;

		/** Unique id of this layer summary. */
		id?: string | null;

		/** Resource Type */
		kind?: string | null;

		/** The layer id for this summary. */
		layerId?: string | null;

		/** URL to this resource. */
		selfLink?: string | null;

		/** Timestamp for the last time an item in this layer was updated. (RFC 3339 UTC date-time format). */
		updated?: string | null;

		/** The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately. */
		volumeAnnotationsVersion?: string | null;

		/** The volume id this resource is for. */
		volumeId?: string | null;
	}
	export interface LayersummaryFormProperties {

		/** The number of annotations for this layer. */
		annotationCount: FormControl<number | null | undefined>,

		/** Link to get data for this annotation. */
		annotationsDataLink: FormControl<string | null | undefined>,

		/** The link to get the annotations for this layer. */
		annotationsLink: FormControl<string | null | undefined>,

		/** The content version this resource is for. */
		contentVersion: FormControl<string | null | undefined>,

		/** The number of data items for this layer. */
		dataCount: FormControl<number | null | undefined>,

		/** Unique id of this layer summary. */
		id: FormControl<string | null | undefined>,

		/** Resource Type */
		kind: FormControl<string | null | undefined>,

		/** The layer id for this summary. */
		layerId: FormControl<string | null | undefined>,

		/** URL to this resource. */
		selfLink: FormControl<string | null | undefined>,

		/** Timestamp for the last time an item in this layer was updated. (RFC 3339 UTC date-time format). */
		updated: FormControl<string | null | undefined>,

		/** The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately. */
		volumeAnnotationsVersion: FormControl<string | null | undefined>,

		/** The volume id this resource is for. */
		volumeId: FormControl<string | null | undefined>,
	}
	export function CreateLayersummaryFormGroup() {
		return new FormGroup<LayersummaryFormProperties>({
			annotationCount: new FormControl<number | null | undefined>(undefined),
			annotationsDataLink: new FormControl<string | null | undefined>(undefined),
			annotationsLink: new FormControl<string | null | undefined>(undefined),
			contentVersion: new FormControl<string | null | undefined>(undefined),
			dataCount: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			layerId: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
			volumeAnnotationsVersion: new FormControl<string | null | undefined>(undefined),
			volumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Metadata {

		/** A list of offline dictionary metadata. */
		MetadataItems?: Array<MetadataItems>;

		/** Resource type. */
		kind?: string | null;
	}
	export interface MetadataFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MetadataItems {
		download_url?: string | null;
		encrypted_key?: string | null;
		language?: string | null;
		size?: string | null;
		version?: string | null;
	}
	export interface MetadataItemsFormProperties {
		download_url: FormControl<string | null | undefined>,
		encrypted_key: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		size: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateMetadataItemsFormGroup() {
		return new FormGroup<MetadataItemsFormProperties>({
			download_url: new FormControl<string | null | undefined>(undefined),
			encrypted_key: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Notification {
		body?: string | null;

		/** The list of crm experiment ids. */
		crmExperimentIds?: Array<string>;
		doc_id?: string | null;
		doc_type?: string | null;
		dont_show_notification?: boolean | null;
		iconUrl?: string | null;
		is_document_mature?: boolean | null;

		/** Resource type. */
		kind?: string | null;
		notificationGroup?: string | null;
		notification_type?: string | null;
		pcampaign_id?: string | null;
		reason?: string | null;
		show_notification_settings_action?: boolean | null;
		targetUrl?: string | null;
		timeToExpireMs?: string | null;
		title?: string | null;
	}
	export interface NotificationFormProperties {
		body: FormControl<string | null | undefined>,
		doc_id: FormControl<string | null | undefined>,
		doc_type: FormControl<string | null | undefined>,
		dont_show_notification: FormControl<boolean | null | undefined>,
		iconUrl: FormControl<string | null | undefined>,
		is_document_mature: FormControl<boolean | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
		notificationGroup: FormControl<string | null | undefined>,
		notification_type: FormControl<string | null | undefined>,
		pcampaign_id: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		show_notification_settings_action: FormControl<boolean | null | undefined>,
		targetUrl: FormControl<string | null | undefined>,
		timeToExpireMs: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			doc_id: new FormControl<string | null | undefined>(undefined),
			doc_type: new FormControl<string | null | undefined>(undefined),
			dont_show_notification: new FormControl<boolean | null | undefined>(undefined),
			iconUrl: new FormControl<string | null | undefined>(undefined),
			is_document_mature: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			notificationGroup: new FormControl<string | null | undefined>(undefined),
			notification_type: new FormControl<string | null | undefined>(undefined),
			pcampaign_id: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			show_notification_settings_action: new FormControl<boolean | null | undefined>(undefined),
			targetUrl: new FormControl<string | null | undefined>(undefined),
			timeToExpireMs: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Offers {

		/** A list of offers. */
		OffersItems?: Array<OffersItems>;

		/** Resource type. */
		kind?: string | null;
	}
	export interface OffersFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOffersFormGroup() {
		return new FormGroup<OffersFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OffersItems {
		artUrl?: string | null;
		gservicesKey?: string | null;
		id?: string | null;
		OffersItemsItems?: Array<OffersItemsItems>;
	}
	export interface OffersItemsFormProperties {
		artUrl: FormControl<string | null | undefined>,
		gservicesKey: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateOffersItemsFormGroup() {
		return new FormGroup<OffersItemsFormProperties>({
			artUrl: new FormControl<string | null | undefined>(undefined),
			gservicesKey: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OffersItemsItems {
		author?: string | null;
		canonicalVolumeLink?: string | null;
		coverUrl?: string | null;
		description?: string | null;
		title?: string | null;
		volumeId?: string | null;
	}
	export interface OffersItemsItemsFormProperties {
		author: FormControl<string | null | undefined>,
		canonicalVolumeLink: FormControl<string | null | undefined>,
		coverUrl: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		volumeId: FormControl<string | null | undefined>,
	}
	export function CreateOffersItemsItemsFormGroup() {
		return new FormGroup<OffersItemsItemsFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			canonicalVolumeLink: new FormControl<string | null | undefined>(undefined),
			coverUrl: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			volumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RequestAccessData {
		concurrentAccess?: ConcurrentAccessRestriction;
		downloadAccess?: DownloadAccessRestriction;

		/** Resource type. */
		kind?: string | null;
	}
	export interface RequestAccessDataFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateRequestAccessDataFormGroup() {
		return new FormGroup<RequestAccessDataFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Series {

		/** Resource type. */
		kind?: string | null;
		SeriesSeries?: Array<SeriesSeries>;
	}
	export interface SeriesFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSeriesFormGroup() {
		return new FormGroup<SeriesFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SeriesSeries {
		bannerImageUrl?: string | null;
		eligibleForSubscription?: boolean | null;
		imageUrl?: string | null;
		isComplete?: boolean | null;
		seriesFormatType?: string | null;
		seriesId?: string | null;
		seriesSubscriptionReleaseInfo?: SeriesSeriesSeriesSubscriptionReleaseInfo;
		seriesType?: string | null;
		subscriptionId?: string | null;
		title?: string | null;
	}
	export interface SeriesSeriesFormProperties {
		bannerImageUrl: FormControl<string | null | undefined>,
		eligibleForSubscription: FormControl<boolean | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
		isComplete: FormControl<boolean | null | undefined>,
		seriesFormatType: FormControl<string | null | undefined>,
		seriesId: FormControl<string | null | undefined>,
		seriesType: FormControl<string | null | undefined>,
		subscriptionId: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateSeriesSeriesFormGroup() {
		return new FormGroup<SeriesSeriesFormProperties>({
			bannerImageUrl: new FormControl<string | null | undefined>(undefined),
			eligibleForSubscription: new FormControl<boolean | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			isComplete: new FormControl<boolean | null | undefined>(undefined),
			seriesFormatType: new FormControl<string | null | undefined>(undefined),
			seriesId: new FormControl<string | null | undefined>(undefined),
			seriesType: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SeriesSeriesSeriesSubscriptionReleaseInfo {
		cancelTime?: string | null;
		currentReleaseInfo?: SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo;
		nextReleaseInfo?: SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo;
		seriesSubscriptionType?: string | null;
	}
	export interface SeriesSeriesSeriesSubscriptionReleaseInfoFormProperties {
		cancelTime: FormControl<string | null | undefined>,
		seriesSubscriptionType: FormControl<string | null | undefined>,
	}
	export function CreateSeriesSeriesSeriesSubscriptionReleaseInfoFormGroup() {
		return new FormGroup<SeriesSeriesSeriesSubscriptionReleaseInfoFormProperties>({
			cancelTime: new FormControl<string | null | undefined>(undefined),
			seriesSubscriptionType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo {
		amountInMicros?: number | null;
		currencyCode?: string | null;
		releaseNumber?: string | null;
		releaseTime?: string | null;
	}
	export interface SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfoFormProperties {
		amountInMicros: FormControl<number | null | undefined>,
		currencyCode: FormControl<string | null | undefined>,
		releaseNumber: FormControl<string | null | undefined>,
		releaseTime: FormControl<string | null | undefined>,
	}
	export function CreateSeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfoFormGroup() {
		return new FormGroup<SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfoFormProperties>({
			amountInMicros: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			releaseNumber: new FormControl<string | null | undefined>(undefined),
			releaseTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo {
		amountInMicros?: number | null;
		currencyCode?: string | null;
		releaseNumber?: string | null;
		releaseTime?: string | null;
	}
	export interface SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfoFormProperties {
		amountInMicros: FormControl<number | null | undefined>,
		currencyCode: FormControl<string | null | undefined>,
		releaseNumber: FormControl<string | null | undefined>,
		releaseTime: FormControl<string | null | undefined>,
	}
	export function CreateSeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfoFormGroup() {
		return new FormGroup<SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfoFormProperties>({
			amountInMicros: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			releaseNumber: new FormControl<string | null | undefined>(undefined),
			releaseTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Seriesmembership {

		/** Resorce type. */
		kind?: string | null;
		member?: Array<Volume>;
		nextPageToken?: string | null;
	}
	export interface SeriesmembershipFormProperties {

		/** Resorce type. */
		kind: FormControl<string | null | undefined>,
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSeriesmembershipFormGroup() {
		return new FormGroup<SeriesmembershipFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Usersettings {

		/** Resource type. */
		kind?: string | null;

		/** User settings in sub-objects, each for different purposes. */
		notesExport?: UsersettingsNotesExport;
		notification?: UsersettingsNotification;
	}
	export interface UsersettingsFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateUsersettingsFormGroup() {
		return new FormGroup<UsersettingsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsersettingsNotesExport {
		folderName?: string | null;
		isEnabled?: boolean | null;
	}
	export interface UsersettingsNotesExportFormProperties {
		folderName: FormControl<string | null | undefined>,
		isEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUsersettingsNotesExportFormGroup() {
		return new FormGroup<UsersettingsNotesExportFormProperties>({
			folderName: new FormControl<string | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UsersettingsNotification {
		matchMyInterests?: UsersettingsNotificationMatchMyInterests;
		moreFromAuthors?: UsersettingsNotificationMoreFromAuthors;
		moreFromSeries?: UsersettingsNotificationMoreFromSeries;
		priceDrop?: UsersettingsNotificationPriceDrop;
		rewardExpirations?: UsersettingsNotificationRewardExpirations;
	}
	export interface UsersettingsNotificationFormProperties {
	}
	export function CreateUsersettingsNotificationFormGroup() {
		return new FormGroup<UsersettingsNotificationFormProperties>({
		});

	}

	export interface UsersettingsNotificationMatchMyInterests {
		opted_state?: string | null;
	}
	export interface UsersettingsNotificationMatchMyInterestsFormProperties {
		opted_state: FormControl<string | null | undefined>,
	}
	export function CreateUsersettingsNotificationMatchMyInterestsFormGroup() {
		return new FormGroup<UsersettingsNotificationMatchMyInterestsFormProperties>({
			opted_state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsersettingsNotificationMoreFromAuthors {
		opted_state?: string | null;
	}
	export interface UsersettingsNotificationMoreFromAuthorsFormProperties {
		opted_state: FormControl<string | null | undefined>,
	}
	export function CreateUsersettingsNotificationMoreFromAuthorsFormGroup() {
		return new FormGroup<UsersettingsNotificationMoreFromAuthorsFormProperties>({
			opted_state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsersettingsNotificationMoreFromSeries {
		opted_state?: string | null;
	}
	export interface UsersettingsNotificationMoreFromSeriesFormProperties {
		opted_state: FormControl<string | null | undefined>,
	}
	export function CreateUsersettingsNotificationMoreFromSeriesFormGroup() {
		return new FormGroup<UsersettingsNotificationMoreFromSeriesFormProperties>({
			opted_state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsersettingsNotificationPriceDrop {
		opted_state?: string | null;
	}
	export interface UsersettingsNotificationPriceDropFormProperties {
		opted_state: FormControl<string | null | undefined>,
	}
	export function CreateUsersettingsNotificationPriceDropFormGroup() {
		return new FormGroup<UsersettingsNotificationPriceDropFormProperties>({
			opted_state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsersettingsNotificationRewardExpirations {
		opted_state?: string | null;
	}
	export interface UsersettingsNotificationRewardExpirationsFormProperties {
		opted_state: FormControl<string | null | undefined>,
	}
	export function CreateUsersettingsNotificationRewardExpirationsFormGroup() {
		return new FormGroup<UsersettingsNotificationRewardExpirationsFormProperties>({
			opted_state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Volume2 {

		/** A list of volumes. */
		items?: Array<Volume>;

		/** Resource type. */
		kind?: string | null;
		nextPageToken?: string | null;
	}
	export interface Volume2FormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateVolume2FormGroup() {
		return new FormGroup<Volume2FormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Volumeannotation {

		/** The annotation data id for this volume annotation. */
		annotationDataId?: string | null;

		/** Link to get data for this annotation. */
		annotationDataLink?: string | null;

		/** The type of annotation this is. */
		annotationType?: string | null;

		/** The content ranges to identify the selected text. */
		contentRanges?: VolumeannotationContentRanges;

		/** Data for this annotation. */
		data?: string | null;

		/** Indicates that this annotation is deleted. */
		deleted?: boolean | null;

		/** Unique id of this volume annotation. */
		id?: string | null;

		/** Resource Type */
		kind?: string | null;

		/** The Layer this annotation is for. */
		layerId?: string | null;

		/** Pages the annotation spans. */
		pageIds?: Array<string>;

		/** Excerpt from the volume. */
		selectedText?: string | null;

		/** URL to this resource. */
		selfLink?: string | null;

		/** Timestamp for the last time this anntoation was updated. (RFC 3339 UTC date-time format). */
		updated?: string | null;

		/** The Volume this annotation is for. */
		volumeId?: string | null;
	}
	export interface VolumeannotationFormProperties {

		/** The annotation data id for this volume annotation. */
		annotationDataId: FormControl<string | null | undefined>,

		/** Link to get data for this annotation. */
		annotationDataLink: FormControl<string | null | undefined>,

		/** The type of annotation this is. */
		annotationType: FormControl<string | null | undefined>,

		/** Data for this annotation. */
		data: FormControl<string | null | undefined>,

		/** Indicates that this annotation is deleted. */
		deleted: FormControl<boolean | null | undefined>,

		/** Unique id of this volume annotation. */
		id: FormControl<string | null | undefined>,

		/** Resource Type */
		kind: FormControl<string | null | undefined>,

		/** The Layer this annotation is for. */
		layerId: FormControl<string | null | undefined>,

		/** Excerpt from the volume. */
		selectedText: FormControl<string | null | undefined>,

		/** URL to this resource. */
		selfLink: FormControl<string | null | undefined>,

		/** Timestamp for the last time this anntoation was updated. (RFC 3339 UTC date-time format). */
		updated: FormControl<string | null | undefined>,

		/** The Volume this annotation is for. */
		volumeId: FormControl<string | null | undefined>,
	}
	export function CreateVolumeannotationFormGroup() {
		return new FormGroup<VolumeannotationFormProperties>({
			annotationDataId: new FormControl<string | null | undefined>(undefined),
			annotationDataLink: new FormControl<string | null | undefined>(undefined),
			annotationType: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			layerId: new FormControl<string | null | undefined>(undefined),
			selectedText: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
			volumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VolumeannotationContentRanges {
		cfiRange?: BooksAnnotationsRange;

		/** Content version applicable to ranges below. */
		contentVersion?: string | null;
		gbImageRange?: BooksAnnotationsRange;
		gbTextRange?: BooksAnnotationsRange;
	}
	export interface VolumeannotationContentRangesFormProperties {

		/** Content version applicable to ranges below. */
		contentVersion: FormControl<string | null | undefined>,
	}
	export function CreateVolumeannotationContentRangesFormGroup() {
		return new FormGroup<VolumeannotationContentRangesFormProperties>({
			contentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Volumeannotations {

		/** A list of volume annotations. */
		items?: Array<Volumeannotation>;

		/** Resource type */
		kind?: string | null;

		/** Token to pass in for pagination for the next page. This will not be present if this request does not have more results. */
		nextPageToken?: string | null;

		/** The total number of volume annotations found. */
		totalItems?: number | null;

		/** The version string for all of the volume annotations in this layer (not just the ones in this response). Note: the version string doesn't apply to the annotation data, just the information in this response (e.g. the location of annotations in the book). */
		version?: string | null;
	}
	export interface VolumeannotationsFormProperties {

		/** Resource type */
		kind: FormControl<string | null | undefined>,

		/** Token to pass in for pagination for the next page. This will not be present if this request does not have more results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of volume annotations found. */
		totalItems: FormControl<number | null | undefined>,

		/** The version string for all of the volume annotations in this layer (not just the ones in this response). Note: the version string doesn't apply to the annotation data, just the information in this response (e.g. the location of annotations in the book). */
		version: FormControl<string | null | undefined>,
	}
	export function CreateVolumeannotationsFormGroup() {
		return new FormGroup<VolumeannotationsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Volumes {

		/** A list of volumes. */
		items?: Array<Volume>;

		/** Resource type. */
		kind?: string | null;

		/** Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated. */
		totalItems?: number | null;
	}
	export interface VolumesFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated. */
		totalItems: FormControl<number | null | undefined>,
	}
	export function CreateVolumesFormGroup() {
		return new FormGroup<VolumesFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Add a user-upload volume and triggers processing.
		 * Post books/v1/cloudloading/addBook
		 * @param {string} drive_document_id A drive document id. The upload_client_token must not be set.
		 * @param {string} mime_type The document MIME type. It can be set only if the drive_document_id is set.
		 * @param {string} name The document name. It can be set only if the drive_document_id is set.
		 * @param {string} upload_client_token Scotty upload token.
		 * @return {BooksCloudloadingResource} Successful response
		 */
		Books_cloudloading_addBook(drive_document_id: string | null | undefined, mime_type: string | null | undefined, name: string | null | undefined, upload_client_token: string | null | undefined): Observable<BooksCloudloadingResource> {
			return this.http.post<BooksCloudloadingResource>(this.baseUri + 'books/v1/cloudloading/addBook?drive_document_id=' + (drive_document_id == null ? '' : encodeURIComponent(drive_document_id)) + '&mime_type=' + (mime_type == null ? '' : encodeURIComponent(mime_type)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&upload_client_token=' + (upload_client_token == null ? '' : encodeURIComponent(upload_client_token)), null, {});
		}

		/**
		 * Remove the book and its contents
		 * Post books/v1/cloudloading/deleteBook
		 * @param {string} volumeId The id of the book to be removed.
		 * @return {Empty} Successful response
		 */
		Books_cloudloading_deleteBook(volumeId: string): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'books/v1/cloudloading/deleteBook?volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)), null, {});
		}

		/**
		 * Updates a user-upload volume.
		 * Post books/v1/cloudloading/updateBook
		 * @return {BooksCloudloadingResource} Successful response
		 */
		Books_cloudloading_updateBook(requestBody: BooksCloudloadingResource): Observable<BooksCloudloadingResource> {
			return this.http.post<BooksCloudloadingResource>(this.baseUri + 'books/v1/cloudloading/updateBook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of offline dictionary metadata available
		 * Get books/v1/dictionary/listOfflineMetadata
		 * @param {string} cpksver The device/version ID from which to request the data.
		 * @return {Metadata} Successful response
		 */
		Books_dictionary_listOfflineMetadata(cpksver: string): Observable<Metadata> {
			return this.http.get<Metadata>(this.baseUri + 'books/v1/dictionary/listOfflineMetadata?cpksver=' + (cpksver == null ? '' : encodeURIComponent(cpksver)), {});
		}

		/**
		 * Gets information regarding the family that the user is part of.
		 * Get books/v1/familysharing/getFamilyInfo
		 * @param {string} source String to identify the originator of this request.
		 * @return {FamilyInfo} Successful response
		 */
		Books_familysharing_getFamilyInfo(source: string | null | undefined): Observable<FamilyInfo> {
			return this.http.get<FamilyInfo>(this.baseUri + 'books/v1/familysharing/getFamilyInfo?source=' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * Initiates sharing of the content with the user's family. Empty response indicates success.
		 * Post books/v1/familysharing/share
		 * @param {string} docId The docid to share.
		 * @param {string} source String to identify the originator of this request.
		 * @param {string} volumeId The volume to share.
		 * @return {Empty} Successful response
		 */
		Books_familysharing_share(docId: string | null | undefined, source: string | null | undefined, volumeId: string | null | undefined): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'books/v1/familysharing/share?docId=' + (docId == null ? '' : encodeURIComponent(docId)) + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)), null, {});
		}

		/**
		 * Initiates revoking content that has already been shared with the user's family. Empty response indicates success.
		 * Post books/v1/familysharing/unshare
		 * @param {string} docId The docid to unshare.
		 * @param {string} source String to identify the originator of this request.
		 * @param {string} volumeId The volume to unshare.
		 * @return {Empty} Successful response
		 */
		Books_familysharing_unshare(docId: string | null | undefined, source: string | null | undefined, volumeId: string | null | undefined): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'books/v1/familysharing/unshare?docId=' + (docId == null ? '' : encodeURIComponent(docId)) + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)), null, {});
		}

		/**
		 * Gets the current settings for the user.
		 * Get books/v1/myconfig/getUserSettings
		 * @param {string} country Unused. Added only to workaround TEX mandatory request template requirement
		 * @return {Usersettings} Successful response
		 */
		Books_myconfig_getUserSettings(country: string | null | undefined): Observable<Usersettings> {
			return this.http.get<Usersettings>(this.baseUri + 'books/v1/myconfig/getUserSettings?country=' + (country == null ? '' : encodeURIComponent(country)), {});
		}

		/**
		 * Release downloaded content access restriction.
		 * Post books/v1/myconfig/releaseDownloadAccess
		 * @param {string} cpksver The device/version ID from which to release the restriction.
		 * @param {Array<string>} volumeIds The volume(s) to release restrictions for.
		 * @param {string} locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
		 * @param {string} source String to identify the originator of this request.
		 * @return {DownloadAccesses} Successful response
		 */
		Books_myconfig_releaseDownloadAccess(cpksver: string, volumeIds: Array<string>, locale: string | null | undefined, source: string | null | undefined): Observable<DownloadAccesses> {
			return this.http.post<DownloadAccesses>(this.baseUri + 'books/v1/myconfig/releaseDownloadAccess?cpksver=' + (cpksver == null ? '' : encodeURIComponent(cpksver)) + '&' + volumeIds.map(z => `volumeIds=${encodeURIComponent(z)}`).join('&') + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), null, {});
		}

		/**
		 * Request concurrent and download access restrictions.
		 * Post books/v1/myconfig/requestAccess
		 * @param {string} cpksver The device/version ID from which to request the restrictions.
		 * @param {string} nonce The client nonce value.
		 * @param {string} source String to identify the originator of this request.
		 * @param {string} volumeId The volume to request concurrent/download restrictions for.
		 * @param {Books_myconfig_requestAccessLicenseTypes} licenseTypes The type of access license to request. If not specified, the default is BOTH.
		 * @param {string} locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
		 * @return {RequestAccessData} Successful response
		 */
		Books_myconfig_requestAccess(cpksver: string, nonce: string, source: string, volumeId: string, licenseTypes: Books_myconfig_requestAccessLicenseTypes | null | undefined, locale: string | null | undefined): Observable<RequestAccessData> {
			return this.http.post<RequestAccessData>(this.baseUri + 'books/v1/myconfig/requestAccess?cpksver=' + (cpksver == null ? '' : encodeURIComponent(cpksver)) + '&nonce=' + (nonce == null ? '' : encodeURIComponent(nonce)) + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '&licenseTypes=' + licenseTypes + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), null, {});
		}

		/**
		 * Request downloaded content access for specified volumes on the My eBooks shelf.
		 * Post books/v1/myconfig/syncVolumeLicenses
		 * @param {string} cpksver The device/version ID from which to release the restriction.
		 * @param {string} nonce The client nonce value.
		 * @param {string} source String to identify the originator of this request.
		 * @param {Array<string>} features List of features supported by the client, i.e., 'RENTALS'
		 * @param {boolean} includeNonComicsSeries Set to true to include non-comics series. Defaults to false.
		 * @param {string} locale ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
		 * @param {boolean} showPreorders Set to true to show pre-ordered books. Defaults to false.
		 * @param {Array<string>} volumeIds The volume(s) to request download restrictions for.
		 * @return {Volumes} Successful response
		 */
		Books_myconfig_syncVolumeLicenses(cpksver: string, nonce: string, source: string, features: Array<string> | null | undefined, includeNonComicsSeries: boolean | null | undefined, locale: string | null | undefined, showPreorders: boolean | null | undefined, volumeIds: Array<string> | null | undefined): Observable<Volumes> {
			return this.http.post<Volumes>(this.baseUri + 'books/v1/myconfig/syncVolumeLicenses?cpksver=' + (cpksver == null ? '' : encodeURIComponent(cpksver)) + '&nonce=' + (nonce == null ? '' : encodeURIComponent(nonce)) + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&' + features?.map(z => `features=${encodeURIComponent(z)}`).join('&') + '&includeNonComicsSeries=' + includeNonComicsSeries + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&showPreorders=' + showPreorders + '&' + volumeIds?.map(z => `volumeIds=${encodeURIComponent(z)}`).join('&'), null, {});
		}

		/**
		 * Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.
		 * Post books/v1/myconfig/updateUserSettings
		 * @return {Usersettings} Successful response
		 */
		Books_myconfig_updateUserSettings(requestBody: Usersettings): Observable<Usersettings> {
			return this.http.post<Usersettings>(this.baseUri + 'books/v1/myconfig/updateUserSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of annotations, possibly filtered.
		 * Get books/v1/mylibrary/annotations
		 * @param {string} contentVersion The content version for the requested volume.
		 * @param {string} layerId The layer ID to limit annotation by.
		 * @param {Array<string>} layerIds The layer ID(s) to limit annotation by.
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} pageToken The value of the nextToken from the previous page.
		 * @param {boolean} showDeleted Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
		 * @param {string} source String to identify the originator of this request.
		 * @param {string} updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
		 * @param {string} updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
		 * @param {string} volumeId The volume to restrict annotations to.
		 * @return {Annotations} Successful response
		 */
		Books_mylibrary_annotations_list(contentVersion: string | null | undefined, layerId: string | null | undefined, layerIds: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined, source: string | null | undefined, updatedMax: string | null | undefined, updatedMin: string | null | undefined, volumeId: string | null | undefined): Observable<Annotations> {
			return this.http.get<Annotations>(this.baseUri + 'books/v1/mylibrary/annotations?contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&layerId=' + (layerId == null ? '' : encodeURIComponent(layerId)) + '&' + layerIds?.map(z => `layerIds=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&updatedMax=' + (updatedMax == null ? '' : encodeURIComponent(updatedMax)) + '&updatedMin=' + (updatedMin == null ? '' : encodeURIComponent(updatedMin)) + '&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)), {});
		}

		/**
		 * Inserts a new annotation.
		 * Post books/v1/mylibrary/annotations
		 * @param {string} annotationId The ID for the annotation to insert.
		 * @param {string} country ISO-3166-1 code to override the IP-based location.
		 * @param {boolean} showOnlySummaryInResponse Requests that only the summary of the specified layer be provided in the response.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Annotation} Successful response
		 */
		Books_mylibrary_annotations_insert(annotationId: string | null | undefined, country: string | null | undefined, showOnlySummaryInResponse: boolean | null | undefined, source: string | null | undefined, requestBody: Annotation): Observable<Annotation> {
			return this.http.post<Annotation>(this.baseUri + 'books/v1/mylibrary/annotations?annotationId=' + (annotationId == null ? '' : encodeURIComponent(annotationId)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&showOnlySummaryInResponse=' + showOnlySummaryInResponse + '&source=' + (source == null ? '' : encodeURIComponent(source)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the summary of specified layers.
		 * Post books/v1/mylibrary/annotations/summary
		 * @param {Array<string>} layerIds Array of layer IDs to get the summary for.
		 * @param {string} volumeId Volume id to get the summary for.
		 * @return {AnnotationsSummary} Successful response
		 */
		Books_mylibrary_annotations_summary(layerIds: Array<string>, volumeId: string): Observable<AnnotationsSummary> {
			return this.http.post<AnnotationsSummary>(this.baseUri + 'books/v1/mylibrary/annotations/summary?' + layerIds.map(z => `layerIds=${encodeURIComponent(z)}`).join('&') + '&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)), null, {});
		}

		/**
		 * Deletes an annotation.
		 * Delete books/v1/mylibrary/annotations/{annotationId}
		 * @param {string} annotationId The ID for the annotation to delete.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Empty} Successful response
		 */
		Books_mylibrary_annotations_delete(annotationId: string, source: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'books/v1/mylibrary/annotations/' + (annotationId == null ? '' : encodeURIComponent(annotationId)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * Updates an existing annotation.
		 * Put books/v1/mylibrary/annotations/{annotationId}
		 * @param {string} annotationId The ID for the annotation to update.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Annotation} Successful response
		 */
		Books_mylibrary_annotations_update(annotationId: string, source: string | null | undefined, requestBody: Annotation): Observable<Annotation> {
			return this.http.put<Annotation>(this.baseUri + 'books/v1/mylibrary/annotations/' + (annotationId == null ? '' : encodeURIComponent(annotationId)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of bookshelves belonging to the authenticated user.
		 * Get books/v1/mylibrary/bookshelves
		 * @param {string} source String to identify the originator of this request.
		 * @return {Bookshelves} Successful response
		 */
		Books_mylibrary_bookshelves_list(source: string | null | undefined): Observable<Bookshelves> {
			return this.http.get<Bookshelves>(this.baseUri + 'books/v1/mylibrary/bookshelves?source=' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * Retrieves metadata for a specific bookshelf belonging to the authenticated user.
		 * Get books/v1/mylibrary/bookshelves/{shelf}
		 * @param {string} shelf ID of bookshelf to retrieve.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Bookshelf} Successful response
		 */
		Books_mylibrary_bookshelves_get(shelf: string, source: string | null | undefined): Observable<Bookshelf> {
			return this.http.get<Bookshelf>(this.baseUri + 'books/v1/mylibrary/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * Adds a volume to a bookshelf.
		 * Post books/v1/mylibrary/bookshelves/{shelf}/addVolume
		 * @param {string} shelf ID of bookshelf to which to add a volume.
		 * @param {string} volumeId ID of volume to add.
		 * @param {Books_mylibrary_bookshelves_addVolumeReason} reason The reason for which the book is added to the library.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Empty} Successful response
		 */
		Books_mylibrary_bookshelves_addVolume(shelf: string, volumeId: string, reason: Books_mylibrary_bookshelves_addVolumeReason | null | undefined, source: string | null | undefined): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'books/v1/mylibrary/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '/addVolume&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '&reason=' + reason + '&source=' + (source == null ? '' : encodeURIComponent(source)), null, {});
		}

		/**
		 * Clears all volumes from a bookshelf.
		 * Post books/v1/mylibrary/bookshelves/{shelf}/clearVolumes
		 * @param {string} shelf ID of bookshelf from which to remove a volume.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Empty} Successful response
		 */
		Books_mylibrary_bookshelves_clearVolumes(shelf: string, source: string | null | undefined): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'books/v1/mylibrary/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '/clearVolumes&source=' + (source == null ? '' : encodeURIComponent(source)), null, {});
		}

		/**
		 * Moves a volume within a bookshelf.
		 * Post books/v1/mylibrary/bookshelves/{shelf}/moveVolume
		 * @param {string} shelf ID of bookshelf with the volume.
		 * @param {string} volumeId ID of volume to move.
		 * @param {number} volumePosition Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
		 * @param {string} source String to identify the originator of this request.
		 * @return {Empty} Successful response
		 */
		Books_mylibrary_bookshelves_moveVolume(shelf: string, volumeId: string, volumePosition: number, source: string | null | undefined): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'books/v1/mylibrary/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '/moveVolume&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '&volumePosition=' + volumePosition + '&source=' + (source == null ? '' : encodeURIComponent(source)), null, {});
		}

		/**
		 * Removes a volume from a bookshelf.
		 * Post books/v1/mylibrary/bookshelves/{shelf}/removeVolume
		 * @param {string} shelf ID of bookshelf from which to remove a volume.
		 * @param {string} volumeId ID of volume to remove.
		 * @param {Books_mylibrary_bookshelves_removeVolumeReason} reason The reason for which the book is removed from the library.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Empty} Successful response
		 */
		Books_mylibrary_bookshelves_removeVolume(shelf: string, volumeId: string, reason: Books_mylibrary_bookshelves_removeVolumeReason | null | undefined, source: string | null | undefined): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'books/v1/mylibrary/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '/removeVolume&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '&reason=' + reason + '&source=' + (source == null ? '' : encodeURIComponent(source)), null, {});
		}

		/**
		 * Gets volume information for volumes on a bookshelf.
		 * Get books/v1/mylibrary/bookshelves/{shelf}/volumes
		 * @param {string} shelf The bookshelf ID or name retrieve volumes for.
		 * @param {string} country ISO-3166-1 code to override the IP-based location.
		 * @param {number} maxResults Maximum number of results to return
		 * @param {Books_mylibrary_bookshelves_volumes_listProjection} projection Restrict information returned to a set of selected fields.
		 * @param {string} q Full-text search query string in this bookshelf.
		 * @param {boolean} showPreorders Set to true to show pre-ordered books. Defaults to false.
		 * @param {string} source String to identify the originator of this request.
		 * @param {number} startIndex Index of the first element to return (starts at 0)
		 * @return {Volumes} Successful response
		 */
		Books_mylibrary_bookshelves_volumes_list(shelf: string, country: string | null | undefined, maxResults: number | null | undefined, projection: Books_mylibrary_bookshelves_volumes_listProjection | null | undefined, q: string | null | undefined, showPreorders: boolean | null | undefined, source: string | null | undefined, startIndex: number | null | undefined): Observable<Volumes> {
			return this.http.get<Volumes>(this.baseUri + 'books/v1/mylibrary/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '/volumes&country=' + (country == null ? '' : encodeURIComponent(country)) + '&maxResults=' + maxResults + '&projection=' + projection + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&showPreorders=' + showPreorders + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&startIndex=' + startIndex, {});
		}

		/**
		 * Retrieves my reading position information for a volume.
		 * Get books/v1/mylibrary/readingpositions/{volumeId}
		 * @param {string} volumeId ID of volume for which to retrieve a reading position.
		 * @param {string} contentVersion Volume content version for which this reading position is requested.
		 * @param {string} source String to identify the originator of this request.
		 * @return {ReadingPosition} Successful response
		 */
		Books_mylibrary_readingpositions_get(volumeId: string, contentVersion: string | null | undefined, source: string | null | undefined): Observable<ReadingPosition> {
			return this.http.get<ReadingPosition>(this.baseUri + 'books/v1/mylibrary/readingpositions/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '&contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * Sets my reading position information for a volume.
		 * Post books/v1/mylibrary/readingpositions/{volumeId}/setPosition
		 * @param {string} volumeId ID of volume for which to update the reading position.
		 * @param {string} position Position string for the new volume reading position.
		 * @param {string} timestamp RFC 3339 UTC format timestamp associated with this reading position.
		 * @param {Books_mylibrary_readingpositions_setPositionAction} action Action that caused this reading position to be set.
		 * @param {string} contentVersion Volume content version for which this reading position applies.
		 * @param {string} deviceCookie Random persistent device cookie optional on set position.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Empty} Successful response
		 */
		Books_mylibrary_readingpositions_setPosition(volumeId: string, position: string, timestamp: string, action: Books_mylibrary_readingpositions_setPositionAction | null | undefined, contentVersion: string | null | undefined, deviceCookie: string | null | undefined, source: string | null | undefined): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'books/v1/mylibrary/readingpositions/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/setPosition&position=' + (position == null ? '' : encodeURIComponent(position)) + '&timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)) + '&action=' + action + '&contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&deviceCookie=' + (deviceCookie == null ? '' : encodeURIComponent(deviceCookie)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), null, {});
		}

		/**
		 * Returns notification details for a given notification id.
		 * Get books/v1/notification/get
		 * @param {string} notification_id String to identify the notification.
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Notification} Successful response
		 */
		Books_notification_get(notification_id: string, locale: string | null | undefined, source: string | null | undefined): Observable<Notification> {
			return this.http.get<Notification>(this.baseUri + 'books/v1/notification/get?notification_id=' + (notification_id == null ? '' : encodeURIComponent(notification_id)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * List categories for onboarding experience.
		 * Get books/v1/onboarding/listCategories
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
		 * @return {Category} Successful response
		 */
		Books_onboarding_listCategories(locale: string | null | undefined): Observable<Category> {
			return this.http.get<Category>(this.baseUri + 'books/v1/onboarding/listCategories?locale=' + (locale == null ? '' : encodeURIComponent(locale)), {});
		}

		/**
		 * List available volumes under categories for onboarding experience.
		 * Get books/v1/onboarding/listCategoryVolumes
		 * @param {Array<string>} categoryId List of category ids requested.
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
		 * @param {Books_onboarding_listCategoryVolumesMaxAllowedMaturityRating} maxAllowedMaturityRating The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
		 * @param {number} pageSize Number of maximum results per page to be included in the response.
		 * @param {string} pageToken The value of the nextToken from the previous page.
		 * @return {Volume2} Successful response
		 */
		Books_onboarding_listCategoryVolumes(categoryId: Array<string> | null | undefined, locale: string | null | undefined, maxAllowedMaturityRating: Books_onboarding_listCategoryVolumesMaxAllowedMaturityRating | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<Volume2> {
			return this.http.get<Volume2>(this.baseUri + 'books/v1/onboarding/listCategoryVolumes?' + categoryId?.map(z => `categoryId=${encodeURIComponent(z)}`).join('&') + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxAllowedMaturityRating=' + maxAllowedMaturityRating + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns a stream of personalized book clusters
		 * Get books/v1/personalizedstream/get
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
		 * @param {Books_onboarding_listCategoryVolumesMaxAllowedMaturityRating} maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Discoveryclusters} Successful response
		 */
		Books_personalizedstream_get(locale: string | null | undefined, maxAllowedMaturityRating: Books_onboarding_listCategoryVolumesMaxAllowedMaturityRating | null | undefined, source: string | null | undefined): Observable<Discoveryclusters> {
			return this.http.get<Discoveryclusters>(this.baseUri + 'books/v1/personalizedstream/get?locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxAllowedMaturityRating=' + maxAllowedMaturityRating + '&source=' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * Accepts the promo offer.
		 * Post books/v1/promooffer/accept
		 * @param {string} androidId device android_id
		 * @param {string} device device device
		 * @param {string} manufacturer device manufacturer
		 * @param {string} model device model
		 * @param {string} product device product
		 * @param {string} serial device serial
		 * @param {string} volumeId Volume id to exercise the offer
		 * @return {Empty} Successful response
		 */
		Books_promooffer_accept(androidId: string | null | undefined, device: string | null | undefined, manufacturer: string | null | undefined, model: string | null | undefined, offerId: string | null | undefined, product: string | null | undefined, serial: string | null | undefined, volumeId: string | null | undefined): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'books/v1/promooffer/accept?androidId=' + (androidId == null ? '' : encodeURIComponent(androidId)) + '&device=' + (device == null ? '' : encodeURIComponent(device)) + '&manufacturer=' + (manufacturer == null ? '' : encodeURIComponent(manufacturer)) + '&model=' + (model == null ? '' : encodeURIComponent(model)) + '&offerId=' + (offerId == null ? '' : encodeURIComponent(offerId)) + '&product=' + (product == null ? '' : encodeURIComponent(product)) + '&serial=' + (serial == null ? '' : encodeURIComponent(serial)) + '&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)), null, {});
		}

		/**
		 * Marks the promo offer as dismissed.
		 * Post books/v1/promooffer/dismiss
		 * @param {string} androidId device android_id
		 * @param {string} device device device
		 * @param {string} manufacturer device manufacturer
		 * @param {string} model device model
		 * @param {string} offerId Offer to dimiss
		 * @param {string} product device product
		 * @param {string} serial device serial
		 * @return {Empty} Successful response
		 */
		Books_promooffer_dismiss(androidId: string | null | undefined, device: string | null | undefined, manufacturer: string | null | undefined, model: string | null | undefined, offerId: string | null | undefined, product: string | null | undefined, serial: string | null | undefined): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'books/v1/promooffer/dismiss?androidId=' + (androidId == null ? '' : encodeURIComponent(androidId)) + '&device=' + (device == null ? '' : encodeURIComponent(device)) + '&manufacturer=' + (manufacturer == null ? '' : encodeURIComponent(manufacturer)) + '&model=' + (model == null ? '' : encodeURIComponent(model)) + '&offerId=' + (offerId == null ? '' : encodeURIComponent(offerId)) + '&product=' + (product == null ? '' : encodeURIComponent(product)) + '&serial=' + (serial == null ? '' : encodeURIComponent(serial)), null, {});
		}

		/**
		 * Returns a list of promo offers available to the user
		 * Get books/v1/promooffer/get
		 * @param {string} androidId device android_id
		 * @param {string} device device device
		 * @param {string} manufacturer device manufacturer
		 * @param {string} model device model
		 * @param {string} product device product
		 * @param {string} serial device serial
		 * @return {Offers} Successful response
		 */
		Books_promooffer_get(androidId: string | null | undefined, device: string | null | undefined, manufacturer: string | null | undefined, model: string | null | undefined, product: string | null | undefined, serial: string | null | undefined): Observable<Offers> {
			return this.http.get<Offers>(this.baseUri + 'books/v1/promooffer/get?androidId=' + (androidId == null ? '' : encodeURIComponent(androidId)) + '&device=' + (device == null ? '' : encodeURIComponent(device)) + '&manufacturer=' + (manufacturer == null ? '' : encodeURIComponent(manufacturer)) + '&model=' + (model == null ? '' : encodeURIComponent(model)) + '&product=' + (product == null ? '' : encodeURIComponent(product)) + '&serial=' + (serial == null ? '' : encodeURIComponent(serial)), {});
		}

		/**
		 * Returns Series metadata for the given series ids.
		 * Get books/v1/series/get
		 * @param {Array<string>} series_id String that identifies the series
		 * @return {Series} Successful response
		 */
		Books_series_get(series_id: Array<string>): Observable<Series> {
			return this.http.get<Series>(this.baseUri + 'books/v1/series/get?' + series_id.map(z => `series_id=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns Series membership data given the series id.
		 * Get books/v1/series/membership/get
		 * @param {string} series_id String that identifies the series
		 * @param {number} page_size Number of maximum results per page to be included in the response.
		 * @param {string} page_token The value of the nextToken from the previous page.
		 * @return {Seriesmembership} Successful response
		 */
		Books_series_membership_get(series_id: string, page_size: number | null | undefined, page_token: string | null | undefined): Observable<Seriesmembership> {
			return this.http.get<Seriesmembership>(this.baseUri + 'books/v1/series/membership/get?series_id=' + (series_id == null ? '' : encodeURIComponent(series_id)) + '&page_size=' + page_size + '&page_token=' + (page_token == null ? '' : encodeURIComponent(page_token)), {});
		}

		/**
		 * Retrieves a list of public bookshelves for the specified user.
		 * Get books/v1/users/{userId}/bookshelves
		 * @param {string} userId ID of user for whom to retrieve bookshelves.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Bookshelves} Successful response
		 */
		Books_bookshelves_list(userId: string, source: string | null | undefined): Observable<Bookshelves> {
			return this.http.get<Bookshelves>(this.baseUri + 'books/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/bookshelves&source=' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * Retrieves metadata for a specific bookshelf for the specified user.
		 * Get books/v1/users/{userId}/bookshelves/{shelf}
		 * @param {string} userId ID of user for whom to retrieve bookshelves.
		 * @param {string} shelf ID of bookshelf to retrieve.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Bookshelf} Successful response
		 */
		Books_bookshelves_get(userId: string, shelf: string, source: string | null | undefined): Observable<Bookshelf> {
			return this.http.get<Bookshelf>(this.baseUri + 'books/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * Retrieves volumes in a specific bookshelf for the specified user.
		 * Get books/v1/users/{userId}/bookshelves/{shelf}/volumes
		 * @param {string} userId ID of user for whom to retrieve bookshelf volumes.
		 * @param {string} shelf ID of bookshelf to retrieve volumes.
		 * @param {number} maxResults Maximum number of results to return
		 * @param {boolean} showPreorders Set to true to show pre-ordered books. Defaults to false.
		 * @param {string} source String to identify the originator of this request.
		 * @param {number} startIndex Index of the first element to return (starts at 0)
		 * @return {Volumes} Successful response
		 */
		Books_bookshelves_volumes_list(userId: string, shelf: string, maxResults: number | null | undefined, showPreorders: boolean | null | undefined, source: string | null | undefined, startIndex: number | null | undefined): Observable<Volumes> {
			return this.http.get<Volumes>(this.baseUri + 'books/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/bookshelves/' + (shelf == null ? '' : encodeURIComponent(shelf)) + '/volumes&maxResults=' + maxResults + '&showPreorders=' + showPreorders + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&startIndex=' + startIndex, {});
		}

		/**
		 * Performs a book search.
		 * Get books/v1/volumes
		 * @param {string} q Full-text search query string.
		 * @param {Books_volumes_listDownload} download Restrict to volumes by download availability.
		 * @param {Books_volumes_listFilter} filter Filter search results.
		 * @param {string} langRestrict Restrict results to books with this language code.
		 * @param {Books_volumes_listLibraryRestrict} libraryRestrict Restrict search to this user's library.
		 * @param {Books_onboarding_listCategoryVolumesMaxAllowedMaturityRating} maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {Books_volumes_listOrderBy} orderBy Sort search results.
		 * @param {string} partner Restrict and brand results for partner ID.
		 * @param {Books_volumes_listPrintType} printType Restrict to books or magazines.
		 * @param {Books_mylibrary_bookshelves_volumes_listProjection} projection Restrict information returned to a set of selected fields.
		 * @param {boolean} showPreorders Set to true to show books available for preorder. Defaults to false.
		 * @param {string} source String to identify the originator of this request.
		 * @param {number} startIndex Index of the first result to return (starts at 0)
		 * @return {Volumes} Successful response
		 */
		Books_volumes_list(q: string, download: Books_volumes_listDownload | null | undefined, filter: Books_volumes_listFilter | null | undefined, langRestrict: string | null | undefined, libraryRestrict: Books_volumes_listLibraryRestrict | null | undefined, maxAllowedMaturityRating: Books_onboarding_listCategoryVolumesMaxAllowedMaturityRating | null | undefined, maxResults: number | null | undefined, orderBy: Books_volumes_listOrderBy | null | undefined, partner: string | null | undefined, printType: Books_volumes_listPrintType | null | undefined, projection: Books_mylibrary_bookshelves_volumes_listProjection | null | undefined, showPreorders: boolean | null | undefined, source: string | null | undefined, startIndex: number | null | undefined): Observable<Volumes> {
			return this.http.get<Volumes>(this.baseUri + 'books/v1/volumes?q=' + (q == null ? '' : encodeURIComponent(q)) + '&download=' + download + '&filter=' + filter + '&langRestrict=' + (langRestrict == null ? '' : encodeURIComponent(langRestrict)) + '&libraryRestrict=' + libraryRestrict + '&maxAllowedMaturityRating=' + maxAllowedMaturityRating + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&partner=' + (partner == null ? '' : encodeURIComponent(partner)) + '&printType=' + printType + '&projection=' + projection + '&showPreorders=' + showPreorders + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&startIndex=' + startIndex, {});
		}

		/**
		 * Return a list of books in My Library.
		 * Get books/v1/volumes/mybooks
		 * @param {Array<string>} acquireMethod How the book was acquired
		 * @param {string} country ISO-3166-1 code to override the IP-based location.
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {Array<string>} processingState The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
		 * @param {string} source String to identify the originator of this request.
		 * @param {number} startIndex Index of the first result to return (starts at 0)
		 * @return {Volumes} Successful response
		 */
		Books_volumes_mybooks_list(acquireMethod: Array<string> | null | undefined, country: string | null | undefined, locale: string | null | undefined, maxResults: number | null | undefined, processingState: Array<string> | null | undefined, source: string | null | undefined, startIndex: number | null | undefined): Observable<Volumes> {
			return this.http.get<Volumes>(this.baseUri + 'books/v1/volumes/mybooks?' + acquireMethod?.map(z => `acquireMethod=${encodeURIComponent(z)}`).join('&') + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&' + processingState?.map(z => `processingState=${encodeURIComponent(z)}`).join('&') + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&startIndex=' + startIndex, {});
		}

		/**
		 * Return a list of recommended books for the current user.
		 * Get books/v1/volumes/recommended
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
		 * @param {Books_onboarding_listCategoryVolumesMaxAllowedMaturityRating} maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Volumes} Successful response
		 */
		Books_volumes_recommended_list(locale: string | null | undefined, maxAllowedMaturityRating: Books_onboarding_listCategoryVolumesMaxAllowedMaturityRating | null | undefined, source: string | null | undefined): Observable<Volumes> {
			return this.http.get<Volumes>(this.baseUri + 'books/v1/volumes/recommended?locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxAllowedMaturityRating=' + maxAllowedMaturityRating + '&source=' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * Rate a recommended book for the current user.
		 * Post books/v1/volumes/recommended/rate
		 * @param {Books_volumes_recommended_rateRating} rating Rating to be given to the volume.
		 * @param {string} volumeId ID of the source volume.
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
		 * @param {string} source String to identify the originator of this request.
		 * @return {BooksVolumesRecommendedRateResponse} Successful response
		 */
		Books_volumes_recommended_rate(rating: Books_volumes_recommended_rateRating, volumeId: string, locale: string | null | undefined, source: string | null | undefined): Observable<BooksVolumesRecommendedRateResponse> {
			return this.http.post<BooksVolumesRecommendedRateResponse>(this.baseUri + 'books/v1/volumes/recommended/rate?rating=' + rating + '&volumeId=' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), null, {});
		}

		/**
		 * Return a list of books uploaded by the current user.
		 * Get books/v1/volumes/useruploaded
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {Array<string>} processingState The processing state of the user uploaded volumes to be returned.
		 * @param {string} source String to identify the originator of this request.
		 * @param {number} startIndex Index of the first result to return (starts at 0)
		 * @param {Array<string>} volumeId The ids of the volumes to be returned. If not specified all that match the processingState are returned.
		 * @return {Volumes} Successful response
		 */
		Books_volumes_useruploaded_list(locale: string | null | undefined, maxResults: number | null | undefined, processingState: Array<string> | null | undefined, source: string | null | undefined, startIndex: number | null | undefined, volumeId: Array<string> | null | undefined): Observable<Volumes> {
			return this.http.get<Volumes>(this.baseUri + 'books/v1/volumes/useruploaded?locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&' + processingState?.map(z => `processingState=${encodeURIComponent(z)}`).join('&') + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&startIndex=' + startIndex + '&' + volumeId?.map(z => `volumeId=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Gets volume information for a single volume.
		 * Get books/v1/volumes/{volumeId}
		 * @param {string} volumeId ID of volume to retrieve.
		 * @param {string} country ISO-3166-1 code to override the IP-based location.
		 * @param {boolean} includeNonComicsSeries Set to true to include non-comics series. Defaults to false.
		 * @param {string} partner Brand results for partner ID.
		 * @param {Books_mylibrary_bookshelves_volumes_listProjection} projection Restrict information returned to a set of selected fields.
		 * @param {string} source string to identify the originator of this request.
		 * @return {Volume} Successful response
		 */
		Books_volumes_get(volumeId: string, country: string | null | undefined, includeNonComicsSeries: boolean | null | undefined, partner: string | null | undefined, projection: Books_mylibrary_bookshelves_volumes_listProjection | null | undefined, source: string | null | undefined, user_library_consistent_read: boolean | null | undefined): Observable<Volume> {
			return this.http.get<Volume>(this.baseUri + 'books/v1/volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&includeNonComicsSeries=' + includeNonComicsSeries + '&partner=' + (partner == null ? '' : encodeURIComponent(partner)) + '&projection=' + projection + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&user_library_consistent_read=' + user_library_consistent_read, {});
		}

		/**
		 * Return a list of associated books.
		 * Get books/v1/volumes/{volumeId}/associated
		 * @param {string} volumeId ID of the source volume.
		 * @param {Books_volumes_associated_listAssociation} association Association type.
		 * @param {string} locale ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
		 * @param {Books_onboarding_listCategoryVolumesMaxAllowedMaturityRating} maxAllowedMaturityRating The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Volumes} Successful response
		 */
		Books_volumes_associated_list(volumeId: string, association: Books_volumes_associated_listAssociation | null | undefined, locale: string | null | undefined, maxAllowedMaturityRating: Books_onboarding_listCategoryVolumesMaxAllowedMaturityRating | null | undefined, source: string | null | undefined): Observable<Volumes> {
			return this.http.get<Volumes>(this.baseUri + 'books/v1/volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/associated&association=' + association + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxAllowedMaturityRating=' + maxAllowedMaturityRating + '&source=' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * Gets the volume annotations for a volume and layer.
		 * Get books/v1/volumes/{volumeId}/layers/{layerId}
		 * @param {string} volumeId The volume to retrieve annotations for.
		 * @param {string} layerId The ID for the layer to get the annotations.
		 * @param {string} contentVersion The content version for the requested volume.
		 * @param {string} endOffset The end offset to end retrieving data from.
		 * @param {string} endPosition The end position to end retrieving data from.
		 * @param {string} locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} pageToken The value of the nextToken from the previous page.
		 * @param {boolean} showDeleted Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
		 * @param {string} source String to identify the originator of this request.
		 * @param {string} startOffset The start offset to start retrieving data from.
		 * @param {string} startPosition The start position to start retrieving data from.
		 * @param {string} updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
		 * @param {string} updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
		 * @param {string} volumeAnnotationsVersion The version of the volume annotations that you are requesting.
		 * @return {Volumeannotations} Successful response
		 */
		Books_layers_volumeAnnotations_list(volumeId: string, layerId: string, contentVersion: string, endOffset: string | null | undefined, endPosition: string | null | undefined, locale: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined, source: string | null | undefined, startOffset: string | null | undefined, startPosition: string | null | undefined, updatedMax: string | null | undefined, updatedMin: string | null | undefined, volumeAnnotationsVersion: string | null | undefined): Observable<Volumeannotations> {
			return this.http.get<Volumeannotations>(this.baseUri + 'books/v1/volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/layers/' + (layerId == null ? '' : encodeURIComponent(layerId)) + '&contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&endOffset=' + (endOffset == null ? '' : encodeURIComponent(endOffset)) + '&endPosition=' + (endPosition == null ? '' : encodeURIComponent(endPosition)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&startOffset=' + (startOffset == null ? '' : encodeURIComponent(startOffset)) + '&startPosition=' + (startPosition == null ? '' : encodeURIComponent(startPosition)) + '&updatedMax=' + (updatedMax == null ? '' : encodeURIComponent(updatedMax)) + '&updatedMin=' + (updatedMin == null ? '' : encodeURIComponent(updatedMin)) + '&volumeAnnotationsVersion=' + (volumeAnnotationsVersion == null ? '' : encodeURIComponent(volumeAnnotationsVersion)), {});
		}

		/**
		 * Gets the volume annotation.
		 * Get books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}
		 * @param {string} volumeId The volume to retrieve annotations for.
		 * @param {string} layerId The ID for the layer to get the annotations.
		 * @param {string} annotationId The ID of the volume annotation to retrieve.
		 * @param {string} locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Volumeannotation} Successful response
		 */
		Books_layers_volumeAnnotations_get(volumeId: string, layerId: string, annotationId: string, locale: string | null | undefined, source: string | null | undefined): Observable<Volumeannotation> {
			return this.http.get<Volumeannotation>(this.baseUri + 'books/v1/volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/layers/' + (layerId == null ? '' : encodeURIComponent(layerId)) + '/annotations/' + (annotationId == null ? '' : encodeURIComponent(annotationId)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * Gets the annotation data for a volume and layer.
		 * Get books/v1/volumes/{volumeId}/layers/{layerId}/data
		 * @param {string} volumeId The volume to retrieve annotation data for.
		 * @param {string} layerId The ID for the layer to get the annotation data.
		 * @param {string} contentVersion The content version for the requested volume.
		 * @param {Array<string>} annotationDataId The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
		 * @param {number} h The requested pixel height for any images. If height is provided width must also be provided.
		 * @param {string} locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} pageToken The value of the nextToken from the previous page.
		 * @param {number} scale The requested scale for the image.
		 * @param {string} source String to identify the originator of this request.
		 * @param {string} updatedMax RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
		 * @param {string} updatedMin RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
		 * @param {number} w The requested pixel width for any images. If width is provided height must also be provided.
		 * @return {Annotationsdata} Successful response
		 */
		Books_layers_annotationData_list(volumeId: string, layerId: string, contentVersion: string, annotationDataId: Array<string> | null | undefined, h: number | null | undefined, locale: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, scale: number | null | undefined, source: string | null | undefined, updatedMax: string | null | undefined, updatedMin: string | null | undefined, w: number | null | undefined): Observable<Annotationsdata> {
			return this.http.get<Annotationsdata>(this.baseUri + 'books/v1/volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/layers/' + (layerId == null ? '' : encodeURIComponent(layerId)) + '/data&contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&' + annotationDataId?.map(z => `annotationDataId=${encodeURIComponent(z)}`).join('&') + '&h=' + h + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&scale=' + scale + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&updatedMax=' + (updatedMax == null ? '' : encodeURIComponent(updatedMax)) + '&updatedMin=' + (updatedMin == null ? '' : encodeURIComponent(updatedMin)) + '&w=' + w, {});
		}

		/**
		 * Gets the annotation data.
		 * Get books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}
		 * @param {string} volumeId The volume to retrieve annotations for.
		 * @param {string} layerId The ID for the layer to get the annotations.
		 * @param {string} annotationDataId The ID of the annotation data to retrieve.
		 * @param {string} contentVersion The content version for the volume you are trying to retrieve.
		 * @param {boolean} allowWebDefinitions For the dictionary layer. Whether or not to allow web definitions.
		 * @param {number} h The requested pixel height for any images. If height is provided width must also be provided.
		 * @param {string} locale The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
		 * @param {number} scale The requested scale for the image.
		 * @param {string} source String to identify the originator of this request.
		 * @param {number} w The requested pixel width for any images. If width is provided height must also be provided.
		 * @return {DictionaryAnnotationdata} Successful response
		 */
		Books_layers_annotationData_get(volumeId: string, layerId: string, annotationDataId: string, contentVersion: string, allowWebDefinitions: boolean | null | undefined, h: number | null | undefined, locale: string | null | undefined, scale: number | null | undefined, source: string | null | undefined, w: number | null | undefined): Observable<DictionaryAnnotationdata> {
			return this.http.get<DictionaryAnnotationdata>(this.baseUri + 'books/v1/volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/layers/' + (layerId == null ? '' : encodeURIComponent(layerId)) + '/data/' + (annotationDataId == null ? '' : encodeURIComponent(annotationDataId)) + '&contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&allowWebDefinitions=' + allowWebDefinitions + '&h=' + h + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&scale=' + scale + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&w=' + w, {});
		}

		/**
		 * List the layer summaries for a volume.
		 * Get books/v1/volumes/{volumeId}/layersummary
		 * @param {string} volumeId The volume to retrieve layers for.
		 * @param {string} contentVersion The content version for the requested volume.
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} pageToken The value of the nextToken from the previous page.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Layersummaries} Successful response
		 */
		Books_layers_list(volumeId: string, contentVersion: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, source: string | null | undefined): Observable<Layersummaries> {
			return this.http.get<Layersummaries>(this.baseUri + 'books/v1/volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/layersummary&contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * Gets the layer summary for a volume.
		 * Get books/v1/volumes/{volumeId}/layersummary/{summaryId}
		 * @param {string} volumeId The volume to retrieve layers for.
		 * @param {string} summaryId The ID for the layer to get the summary for.
		 * @param {string} contentVersion The content version for the requested volume.
		 * @param {string} source String to identify the originator of this request.
		 * @return {Layersummary} Successful response
		 */
		Books_layers_get(volumeId: string, summaryId: string, contentVersion: string | null | undefined, source: string | null | undefined): Observable<Layersummary> {
			return this.http.get<Layersummary>(this.baseUri + 'books/v1/volumes/' + (volumeId == null ? '' : encodeURIComponent(volumeId)) + '/layersummary/' + (summaryId == null ? '' : encodeURIComponent(summaryId)) + '&contentVersion=' + (contentVersion == null ? '' : encodeURIComponent(contentVersion)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), {});
		}
	}

	export enum Books_myconfig_requestAccessLicenseTypes { LICENSE_TYPES_UNDEFINED = 0, BOTH = 1, CONCURRENT = 2, DOWNLOAD = 3 }

	export enum Books_mylibrary_bookshelves_addVolumeReason { REASON_UNDEFINED = 0, IOS_PREX = 1, IOS_SEARCH = 2, ONBOARDING = 3 }

	export enum Books_mylibrary_bookshelves_removeVolumeReason { REASON_UNDEFINED = 0, ONBOARDING = 1 }

	export enum Books_mylibrary_bookshelves_volumes_listProjection { PROJECTION_UNDEFINED = 0, FULL = 1, LITE = 2 }

	export enum Books_mylibrary_readingpositions_setPositionAction { ACTION_UNDEFINED = 0, bookmark = 1, chapter = 2, 'next-page' = 3, 'prev-page' = 4, scroll = 5, search = 6 }

	export enum Books_onboarding_listCategoryVolumesMaxAllowedMaturityRating { MAX_ALLOWED_MATURITY_RATING_UNDEFINED = 0, MATURE = 1, 'not-mature' = 2 }

	export enum Books_volumes_listDownload { DOWNLOAD_UNDEFINED = 0, EPUB = 1 }

	export enum Books_volumes_listFilter { FILTER_UNDEFINED = 0, ebooks = 1, 'free-ebooks' = 2, full = 3, 'paid-ebooks' = 4, partial = 5 }

	export enum Books_volumes_listLibraryRestrict { LIBRARY_RESTRICT_UNDEFINED = 0, 'my-library' = 1, 'no-restrict' = 2 }

	export enum Books_volumes_listOrderBy { ORDER_BY_UNDEFINED = 0, newest = 1, relevance = 2 }

	export enum Books_volumes_listPrintType { PRINT_TYPE_UNDEFINED = 0, ALL = 1, BOOKS = 2, MAGAZINES = 3 }

	export enum Books_volumes_recommended_rateRating { RATING_UNDEFINED = 0, HAVE_IT = 1, NOT_INTERESTED = 2 }

	export enum Books_volumes_associated_listAssociation { ASSOCIATION_UNDEFINED = 0, 'end-of-sample' = 1, 'end-of-volume' = 2, 'related-for-play' = 3 }

}

