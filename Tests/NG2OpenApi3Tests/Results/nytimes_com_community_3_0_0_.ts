import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Comments by Date
		 * Get user-content/by-date.json
		 * @return {GET_user_content_by_date_jsonReturn} 
		 */
		GET_user_content_by_date_json(date: string | null | undefined): Observable<GET_user_content_by_date_jsonReturn> {
			return this.http.get<GET_user_content_by_date_jsonReturn>(this.baseUri + 'user-content/by-date.json?date=' + (date == null ? '' : encodeURIComponent(date)), {});
		}

		/**
		 * Recent User Comments
		 * Get user-content/recent.json
		 * @return {GET_user_content_recent_jsonReturn} 
		 */
		GET_user_content_recent_json(): Observable<GET_user_content_recent_jsonReturn> {
			return this.http.get<GET_user_content_recent_jsonReturn>(this.baseUri + 'user-content/recent.json', {});
		}

		/**
		 * Comments by URL
		 * Get user-content/url.json
		 * @return {GET_user_content_url_jsonReturn} 
		 */
		GET_user_content_url_json(url: string | null | undefined): Observable<GET_user_content_url_jsonReturn> {
			return this.http.get<GET_user_content_url_jsonReturn>(this.baseUri + 'user-content/url.json?url=' + (url == null ? '' : encodeURIComponent(url)), {});
		}

		/**
		 * Comments by User
		 * Get user-content/user.json
		 * @return {GET_user_content_user_jsonReturn} 
		 */
		GET_user_content_user_json(userID: number | null | undefined): Observable<GET_user_content_user_jsonReturn> {
			return this.http.get<GET_user_content_user_jsonReturn>(this.baseUri + 'user-content/user.json?userID=' + userID, {});
		}
	}

	export interface GET_user_content_by_date_jsonReturn {
		copyright?: string | null;
		debug?: GET_user_content_by_date_jsonReturnDebug;
		results?: GET_user_content_by_date_jsonReturnResults;
		status?: string | null;
	}
	export interface GET_user_content_by_date_jsonReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGET_user_content_by_date_jsonReturnFormGroup() {
		return new FormGroup<GET_user_content_by_date_jsonReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_by_date_jsonReturnDebug {
		version?: number | null;
	}
	export interface GET_user_content_by_date_jsonReturnDebugFormProperties {
		version: FormControl<number | null | undefined>,
	}
	export function CreateGET_user_content_by_date_jsonReturnDebugFormGroup() {
		return new FormGroup<GET_user_content_by_date_jsonReturnDebugFormProperties>({
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_by_date_jsonReturnResults {
		api_timestamp?: string | null;
		GET_user_content_by_date_jsonReturnResultsComments?: Array<GET_user_content_by_date_jsonReturnResultsComments>;
		totalCommentsFound?: number | null;
		totalCommentsReturned?: number | null;
	}
	export interface GET_user_content_by_date_jsonReturnResultsFormProperties {
		api_timestamp: FormControl<string | null | undefined>,
		totalCommentsFound: FormControl<number | null | undefined>,
		totalCommentsReturned: FormControl<number | null | undefined>,
	}
	export function CreateGET_user_content_by_date_jsonReturnResultsFormGroup() {
		return new FormGroup<GET_user_content_by_date_jsonReturnResultsFormProperties>({
			api_timestamp: new FormControl<string | null | undefined>(undefined),
			totalCommentsFound: new FormControl<number | null | undefined>(undefined),
			totalCommentsReturned: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_by_date_jsonReturnResultsComments {
		approveDate?: string | null;
		assetID?: number | null;
		assetURL?: string | null;
		commentBody?: string | null;
		commentID?: number | null;
		commentSequence?: number | null;
		commentTitle?: string | null;
		commentType?: string | null;
		createDate?: string | null;
		editorsSelection?: number | null;
		lft?: number | null;
		parentID?: any;
		recommendationCount?: number | null;
		replies?: Array<string>;
		replyCount?: number | null;
		rgt?: number | null;
		status?: string | null;
		statusID?: number | null;
		updateDate?: string | null;
		userDisplayName?: string | null;
		userID?: number | null;
		userLocation?: string | null;
		userTitle?: string | null;
		userURL?: number | null;
	}
	export interface GET_user_content_by_date_jsonReturnResultsCommentsFormProperties {
		approveDate: FormControl<string | null | undefined>,
		assetID: FormControl<number | null | undefined>,
		assetURL: FormControl<string | null | undefined>,
		commentBody: FormControl<string | null | undefined>,
		commentID: FormControl<number | null | undefined>,
		commentSequence: FormControl<number | null | undefined>,
		commentTitle: FormControl<string | null | undefined>,
		commentType: FormControl<string | null | undefined>,
		createDate: FormControl<string | null | undefined>,
		editorsSelection: FormControl<number | null | undefined>,
		lft: FormControl<number | null | undefined>,
		parentID: FormControl<any | null | undefined>,
		recommendationCount: FormControl<number | null | undefined>,
		replyCount: FormControl<number | null | undefined>,
		rgt: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		statusID: FormControl<number | null | undefined>,
		updateDate: FormControl<string | null | undefined>,
		userDisplayName: FormControl<string | null | undefined>,
		userID: FormControl<number | null | undefined>,
		userLocation: FormControl<string | null | undefined>,
		userTitle: FormControl<string | null | undefined>,
		userURL: FormControl<number | null | undefined>,
	}
	export function CreateGET_user_content_by_date_jsonReturnResultsCommentsFormGroup() {
		return new FormGroup<GET_user_content_by_date_jsonReturnResultsCommentsFormProperties>({
			approveDate: new FormControl<string | null | undefined>(undefined),
			assetID: new FormControl<number | null | undefined>(undefined),
			assetURL: new FormControl<string | null | undefined>(undefined),
			commentBody: new FormControl<string | null | undefined>(undefined),
			commentID: new FormControl<number | null | undefined>(undefined),
			commentSequence: new FormControl<number | null | undefined>(undefined),
			commentTitle: new FormControl<string | null | undefined>(undefined),
			commentType: new FormControl<string | null | undefined>(undefined),
			createDate: new FormControl<string | null | undefined>(undefined),
			editorsSelection: new FormControl<number | null | undefined>(undefined),
			lft: new FormControl<number | null | undefined>(undefined),
			parentID: new FormControl<any | null | undefined>(undefined),
			recommendationCount: new FormControl<number | null | undefined>(undefined),
			replyCount: new FormControl<number | null | undefined>(undefined),
			rgt: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			statusID: new FormControl<number | null | undefined>(undefined),
			updateDate: new FormControl<string | null | undefined>(undefined),
			userDisplayName: new FormControl<string | null | undefined>(undefined),
			userID: new FormControl<number | null | undefined>(undefined),
			userLocation: new FormControl<string | null | undefined>(undefined),
			userTitle: new FormControl<string | null | undefined>(undefined),
			userURL: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_recent_jsonReturn {
		copyright?: string | null;
		debug?: GET_user_content_recent_jsonReturnDebug;
		results?: GET_user_content_recent_jsonReturnResults;
		status?: string | null;
	}
	export interface GET_user_content_recent_jsonReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGET_user_content_recent_jsonReturnFormGroup() {
		return new FormGroup<GET_user_content_recent_jsonReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_recent_jsonReturnDebug {
		version?: number | null;
	}
	export interface GET_user_content_recent_jsonReturnDebugFormProperties {
		version: FormControl<number | null | undefined>,
	}
	export function CreateGET_user_content_recent_jsonReturnDebugFormGroup() {
		return new FormGroup<GET_user_content_recent_jsonReturnDebugFormProperties>({
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_recent_jsonReturnResults {
		api_timestamp?: string | null;
		GET_user_content_recent_jsonReturnResultsComments?: Array<GET_user_content_recent_jsonReturnResultsComments>;
		totalCommentsReturned?: number | null;
	}
	export interface GET_user_content_recent_jsonReturnResultsFormProperties {
		api_timestamp: FormControl<string | null | undefined>,
		totalCommentsReturned: FormControl<number | null | undefined>,
	}
	export function CreateGET_user_content_recent_jsonReturnResultsFormGroup() {
		return new FormGroup<GET_user_content_recent_jsonReturnResultsFormProperties>({
			api_timestamp: new FormControl<string | null | undefined>(undefined),
			totalCommentsReturned: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_recent_jsonReturnResultsComments {
		approveDate?: string | null;
		asset?: GET_user_content_recent_jsonReturnResultsCommentsAsset;
		assetID?: number | null;
		commentBody?: string | null;
		commentID?: number | null;
		commentSequence?: number | null;
		commentTitle?: string | null;
		commentType?: string | null;
		createDate?: string | null;
		display_name?: string | null;
		editorsSelection?: number | null;
		location?: string | null;
		parentID?: any;
		recommendationCount?: number | null;
		replies?: Array<string>;
		status?: string | null;
		statusID?: number | null;
		updateDate?: string | null;
		userDisplayName?: string | null;
		userID?: number | null;
		userLocation?: string | null;
		userTitle?: string | null;
		userURL?: string | null;
	}
	export interface GET_user_content_recent_jsonReturnResultsCommentsFormProperties {
		approveDate: FormControl<string | null | undefined>,
		assetID: FormControl<number | null | undefined>,
		commentBody: FormControl<string | null | undefined>,
		commentID: FormControl<number | null | undefined>,
		commentSequence: FormControl<number | null | undefined>,
		commentTitle: FormControl<string | null | undefined>,
		commentType: FormControl<string | null | undefined>,
		createDate: FormControl<string | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		editorsSelection: FormControl<number | null | undefined>,
		location: FormControl<string | null | undefined>,
		parentID: FormControl<any | null | undefined>,
		recommendationCount: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		statusID: FormControl<number | null | undefined>,
		updateDate: FormControl<string | null | undefined>,
		userDisplayName: FormControl<string | null | undefined>,
		userID: FormControl<number | null | undefined>,
		userLocation: FormControl<string | null | undefined>,
		userTitle: FormControl<string | null | undefined>,
		userURL: FormControl<string | null | undefined>,
	}
	export function CreateGET_user_content_recent_jsonReturnResultsCommentsFormGroup() {
		return new FormGroup<GET_user_content_recent_jsonReturnResultsCommentsFormProperties>({
			approveDate: new FormControl<string | null | undefined>(undefined),
			assetID: new FormControl<number | null | undefined>(undefined),
			commentBody: new FormControl<string | null | undefined>(undefined),
			commentID: new FormControl<number | null | undefined>(undefined),
			commentSequence: new FormControl<number | null | undefined>(undefined),
			commentTitle: new FormControl<string | null | undefined>(undefined),
			commentType: new FormControl<string | null | undefined>(undefined),
			createDate: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			editorsSelection: new FormControl<number | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			parentID: new FormControl<any | null | undefined>(undefined),
			recommendationCount: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			statusID: new FormControl<number | null | undefined>(undefined),
			updateDate: new FormControl<string | null | undefined>(undefined),
			userDisplayName: new FormControl<string | null | undefined>(undefined),
			userID: new FormControl<number | null | undefined>(undefined),
			userLocation: new FormControl<string | null | undefined>(undefined),
			userTitle: new FormControl<string | null | undefined>(undefined),
			userURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_recent_jsonReturnResultsCommentsAsset {
		GET_user_content_recent_jsonReturnResultsCommentsAsset_all_properties_?: Array<GET_user_content_recent_jsonReturnResultsCommentsAsset_all_properties_>;
		assetID?: number | null;
		assetTitle?: string | null;
		assetURL?: string | null;
		createDate?: string | null;
		labels?: Array<string>;
		properties?: GET_user_content_recent_jsonReturnResultsCommentsAssetProperties;
		source?: string | null;
		taxonomy?: string | null;
		text?: Array<string>;
		updateDate?: string | null;
		vendorID?: string | null;
	}
	export interface GET_user_content_recent_jsonReturnResultsCommentsAssetFormProperties {
		assetID: FormControl<number | null | undefined>,
		assetTitle: FormControl<string | null | undefined>,
		assetURL: FormControl<string | null | undefined>,
		createDate: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		taxonomy: FormControl<string | null | undefined>,
		updateDate: FormControl<string | null | undefined>,
		vendorID: FormControl<string | null | undefined>,
	}
	export function CreateGET_user_content_recent_jsonReturnResultsCommentsAssetFormGroup() {
		return new FormGroup<GET_user_content_recent_jsonReturnResultsCommentsAssetFormProperties>({
			assetID: new FormControl<number | null | undefined>(undefined),
			assetTitle: new FormControl<string | null | undefined>(undefined),
			assetURL: new FormControl<string | null | undefined>(undefined),
			createDate: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			taxonomy: new FormControl<string | null | undefined>(undefined),
			updateDate: new FormControl<string | null | undefined>(undefined),
			vendorID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_recent_jsonReturnResultsCommentsAsset_all_properties_ {
		description?: string | null;
		name?: string | null;
		properties?: Array<string>;
	}
	export interface GET_user_content_recent_jsonReturnResultsCommentsAsset_all_properties_FormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateGET_user_content_recent_jsonReturnResultsCommentsAsset_all_properties_FormGroup() {
		return new FormGroup<GET_user_content_recent_jsonReturnResultsCommentsAsset_all_properties_FormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_recent_jsonReturnResultsCommentsAssetProperties {
		'automoderation-on'?: GET_user_content_recent_jsonReturnResultsCommentsAssetProperties_automoderation_on_;
		'comment-list-sort-editors'?: GET_user_content_recent_jsonReturnResultsCommentsAssetProperties_comment_list_sort_editors_;
		'reached-max-com-off'?: GET_user_content_recent_jsonReturnResultsCommentsAssetProperties_reached_max_com_off_;
	}
	export interface GET_user_content_recent_jsonReturnResultsCommentsAssetPropertiesFormProperties {
	}
	export function CreateGET_user_content_recent_jsonReturnResultsCommentsAssetPropertiesFormGroup() {
		return new FormGroup<GET_user_content_recent_jsonReturnResultsCommentsAssetPropertiesFormProperties>({
		});

	}

	export interface GET_user_content_recent_jsonReturnResultsCommentsAssetProperties_automoderation_on_ {
		groupID?: number | null;
		taxonomyID?: number | null;
	}
	export interface GET_user_content_recent_jsonReturnResultsCommentsAssetProperties_automoderation_on_FormProperties {
		groupID: FormControl<number | null | undefined>,
		taxonomyID: FormControl<number | null | undefined>,
	}
	export function CreateGET_user_content_recent_jsonReturnResultsCommentsAssetProperties_automoderation_on_FormGroup() {
		return new FormGroup<GET_user_content_recent_jsonReturnResultsCommentsAssetProperties_automoderation_on_FormProperties>({
			groupID: new FormControl<number | null | undefined>(undefined),
			taxonomyID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_recent_jsonReturnResultsCommentsAssetProperties_comment_list_sort_editors_ {
		groupID?: number | null;
		taxonomyID?: number | null;
	}
	export interface GET_user_content_recent_jsonReturnResultsCommentsAssetProperties_comment_list_sort_editors_FormProperties {
		groupID: FormControl<number | null | undefined>,
		taxonomyID: FormControl<number | null | undefined>,
	}
	export function CreateGET_user_content_recent_jsonReturnResultsCommentsAssetProperties_comment_list_sort_editors_FormGroup() {
		return new FormGroup<GET_user_content_recent_jsonReturnResultsCommentsAssetProperties_comment_list_sort_editors_FormProperties>({
			groupID: new FormControl<number | null | undefined>(undefined),
			taxonomyID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_recent_jsonReturnResultsCommentsAssetProperties_reached_max_com_off_ {
		groupID?: number | null;
		taxonomyID?: number | null;
	}
	export interface GET_user_content_recent_jsonReturnResultsCommentsAssetProperties_reached_max_com_off_FormProperties {
		groupID: FormControl<number | null | undefined>,
		taxonomyID: FormControl<number | null | undefined>,
	}
	export function CreateGET_user_content_recent_jsonReturnResultsCommentsAssetProperties_reached_max_com_off_FormGroup() {
		return new FormGroup<GET_user_content_recent_jsonReturnResultsCommentsAssetProperties_reached_max_com_off_FormProperties>({
			groupID: new FormControl<number | null | undefined>(undefined),
			taxonomyID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_url_jsonReturn {
		copyright?: string | null;
		debug?: GET_user_content_url_jsonReturnDebug;
		results?: GET_user_content_url_jsonReturnResults;
		status?: string | null;
	}
	export interface GET_user_content_url_jsonReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGET_user_content_url_jsonReturnFormGroup() {
		return new FormGroup<GET_user_content_url_jsonReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_url_jsonReturnDebug {
		version?: number | null;
	}
	export interface GET_user_content_url_jsonReturnDebugFormProperties {
		version: FormControl<number | null | undefined>,
	}
	export function CreateGET_user_content_url_jsonReturnDebugFormGroup() {
		return new FormGroup<GET_user_content_url_jsonReturnDebugFormProperties>({
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_url_jsonReturnResults {
		api_timestamp?: string | null;
		callerID?: any;
		GET_user_content_url_jsonReturnResultsComments?: Array<GET_user_content_url_jsonReturnResultsComments>;
		depthLimit?: number | null;
		filter?: string | null;
		page?: number | null;
		replyLimit?: number | null;
		sort?: string | null;
		totalCommentsFound?: number | null;
		totalCommentsReturned?: number | null;
		totalEditorsSelectionFound?: number | null;
		totalEditorsSelectionReturned?: number | null;
		totalParentCommentsFound?: number | null;
		totalParentCommentsReturned?: number | null;
		totalRecommendationsFound?: number | null;
		totalRecommendationsReturned?: number | null;
		totalReplyCommentsFound?: number | null;
		totalReplyCommentsReturned?: number | null;
		totalReporterReplyCommentsFound?: number | null;
		totalReporterReplyCommentsReturned?: number | null;
	}
	export interface GET_user_content_url_jsonReturnResultsFormProperties {
		api_timestamp: FormControl<string | null | undefined>,
		callerID: FormControl<any | null | undefined>,
		depthLimit: FormControl<number | null | undefined>,
		filter: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		replyLimit: FormControl<number | null | undefined>,
		sort: FormControl<string | null | undefined>,
		totalCommentsFound: FormControl<number | null | undefined>,
		totalCommentsReturned: FormControl<number | null | undefined>,
		totalEditorsSelectionFound: FormControl<number | null | undefined>,
		totalEditorsSelectionReturned: FormControl<number | null | undefined>,
		totalParentCommentsFound: FormControl<number | null | undefined>,
		totalParentCommentsReturned: FormControl<number | null | undefined>,
		totalRecommendationsFound: FormControl<number | null | undefined>,
		totalRecommendationsReturned: FormControl<number | null | undefined>,
		totalReplyCommentsFound: FormControl<number | null | undefined>,
		totalReplyCommentsReturned: FormControl<number | null | undefined>,
		totalReporterReplyCommentsFound: FormControl<number | null | undefined>,
		totalReporterReplyCommentsReturned: FormControl<number | null | undefined>,
	}
	export function CreateGET_user_content_url_jsonReturnResultsFormGroup() {
		return new FormGroup<GET_user_content_url_jsonReturnResultsFormProperties>({
			api_timestamp: new FormControl<string | null | undefined>(undefined),
			callerID: new FormControl<any | null | undefined>(undefined),
			depthLimit: new FormControl<number | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			replyLimit: new FormControl<number | null | undefined>(undefined),
			sort: new FormControl<string | null | undefined>(undefined),
			totalCommentsFound: new FormControl<number | null | undefined>(undefined),
			totalCommentsReturned: new FormControl<number | null | undefined>(undefined),
			totalEditorsSelectionFound: new FormControl<number | null | undefined>(undefined),
			totalEditorsSelectionReturned: new FormControl<number | null | undefined>(undefined),
			totalParentCommentsFound: new FormControl<number | null | undefined>(undefined),
			totalParentCommentsReturned: new FormControl<number | null | undefined>(undefined),
			totalRecommendationsFound: new FormControl<number | null | undefined>(undefined),
			totalRecommendationsReturned: new FormControl<number | null | undefined>(undefined),
			totalReplyCommentsFound: new FormControl<number | null | undefined>(undefined),
			totalReplyCommentsReturned: new FormControl<number | null | undefined>(undefined),
			totalReporterReplyCommentsFound: new FormControl<number | null | undefined>(undefined),
			totalReporterReplyCommentsReturned: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_url_jsonReturnResultsComments {
		approveDate?: string | null;
		commentBody?: string | null;
		commentID?: number | null;
		commentSequence?: number | null;
		commentTitle?: string | null;
		commentType?: string | null;
		createDate?: string | null;
		depth?: number | null;
		editorsSelection?: boolean | null;
		parentID?: any;
		parentUserDisplayName?: any;
		permID?: string | null;
		picURL?: string | null;
		recommendations?: number | null;
		recommendedFlag?: any;
		replies?: Array<string>;
		replyCount?: number | null;
		reportAbuseFlag?: any;
		sharing?: number | null;
		status?: string | null;
		timespeople?: number | null;
		trusted?: number | null;
		updateDate?: string | null;
		userDisplayName?: string | null;
		userID?: number | null;
		userLocation?: string | null;
		userTitle?: any;
		userURL?: any;
	}
	export interface GET_user_content_url_jsonReturnResultsCommentsFormProperties {
		approveDate: FormControl<string | null | undefined>,
		commentBody: FormControl<string | null | undefined>,
		commentID: FormControl<number | null | undefined>,
		commentSequence: FormControl<number | null | undefined>,
		commentTitle: FormControl<string | null | undefined>,
		commentType: FormControl<string | null | undefined>,
		createDate: FormControl<string | null | undefined>,
		depth: FormControl<number | null | undefined>,
		editorsSelection: FormControl<boolean | null | undefined>,
		parentID: FormControl<any | null | undefined>,
		parentUserDisplayName: FormControl<any | null | undefined>,
		permID: FormControl<string | null | undefined>,
		picURL: FormControl<string | null | undefined>,
		recommendations: FormControl<number | null | undefined>,
		recommendedFlag: FormControl<any | null | undefined>,
		replyCount: FormControl<number | null | undefined>,
		reportAbuseFlag: FormControl<any | null | undefined>,
		sharing: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		timespeople: FormControl<number | null | undefined>,
		trusted: FormControl<number | null | undefined>,
		updateDate: FormControl<string | null | undefined>,
		userDisplayName: FormControl<string | null | undefined>,
		userID: FormControl<number | null | undefined>,
		userLocation: FormControl<string | null | undefined>,
		userTitle: FormControl<any | null | undefined>,
		userURL: FormControl<any | null | undefined>,
	}
	export function CreateGET_user_content_url_jsonReturnResultsCommentsFormGroup() {
		return new FormGroup<GET_user_content_url_jsonReturnResultsCommentsFormProperties>({
			approveDate: new FormControl<string | null | undefined>(undefined),
			commentBody: new FormControl<string | null | undefined>(undefined),
			commentID: new FormControl<number | null | undefined>(undefined),
			commentSequence: new FormControl<number | null | undefined>(undefined),
			commentTitle: new FormControl<string | null | undefined>(undefined),
			commentType: new FormControl<string | null | undefined>(undefined),
			createDate: new FormControl<string | null | undefined>(undefined),
			depth: new FormControl<number | null | undefined>(undefined),
			editorsSelection: new FormControl<boolean | null | undefined>(undefined),
			parentID: new FormControl<any | null | undefined>(undefined),
			parentUserDisplayName: new FormControl<any | null | undefined>(undefined),
			permID: new FormControl<string | null | undefined>(undefined),
			picURL: new FormControl<string | null | undefined>(undefined),
			recommendations: new FormControl<number | null | undefined>(undefined),
			recommendedFlag: new FormControl<any | null | undefined>(undefined),
			replyCount: new FormControl<number | null | undefined>(undefined),
			reportAbuseFlag: new FormControl<any | null | undefined>(undefined),
			sharing: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			timespeople: new FormControl<number | null | undefined>(undefined),
			trusted: new FormControl<number | null | undefined>(undefined),
			updateDate: new FormControl<string | null | undefined>(undefined),
			userDisplayName: new FormControl<string | null | undefined>(undefined),
			userID: new FormControl<number | null | undefined>(undefined),
			userLocation: new FormControl<string | null | undefined>(undefined),
			userTitle: new FormControl<any | null | undefined>(undefined),
			userURL: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_user_jsonReturn {
		copyright?: string | null;
		debug?: GET_user_content_user_jsonReturnDebug;
		results?: GET_user_content_user_jsonReturnResults;
		status?: string | null;
	}
	export interface GET_user_content_user_jsonReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGET_user_content_user_jsonReturnFormGroup() {
		return new FormGroup<GET_user_content_user_jsonReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_user_jsonReturnDebug {
		version?: number | null;
	}
	export interface GET_user_content_user_jsonReturnDebugFormProperties {
		version: FormControl<number | null | undefined>,
	}
	export function CreateGET_user_content_user_jsonReturnDebugFormGroup() {
		return new FormGroup<GET_user_content_user_jsonReturnDebugFormProperties>({
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_user_jsonReturnResults {
		api_timestamp?: string | null;
		GET_user_content_user_jsonReturnResultsComments?: Array<GET_user_content_user_jsonReturnResultsComments>;
		totalCommentsFound?: number | null;
		totalCommentsReturned?: number | null;
	}
	export interface GET_user_content_user_jsonReturnResultsFormProperties {
		api_timestamp: FormControl<string | null | undefined>,
		totalCommentsFound: FormControl<number | null | undefined>,
		totalCommentsReturned: FormControl<number | null | undefined>,
	}
	export function CreateGET_user_content_user_jsonReturnResultsFormGroup() {
		return new FormGroup<GET_user_content_user_jsonReturnResultsFormProperties>({
			api_timestamp: new FormControl<string | null | undefined>(undefined),
			totalCommentsFound: new FormControl<number | null | undefined>(undefined),
			totalCommentsReturned: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_user_jsonReturnResultsComments {
		approveDate?: string | null;
		asset?: GET_user_content_user_jsonReturnResultsCommentsAsset;
		commentBody?: string | null;
		commentID?: number | null;
		commentSequence?: number | null;
		commentTitle?: string | null;
		commentType?: string | null;
		createDate?: string | null;
		editorsSelection?: boolean | null;
		labels?: Array<string>;
		parentID?: any;
		permid?: number | null;
		picURL?: string | null;
		recommendations?: number | null;
		replies?: Array<string>;
		replyCount?: number | null;
		status?: string | null;
		updateDate?: string | null;
		userDisplayName?: any;
		userID?: number | null;
		userLocation?: any;
		userSubmittedDisplayName?: string | null;
		userSubmittedLocation?: string | null;
		userSubmittedTitle?: any;
		userSubmittedURL?: any;
		userTitle?: any;
		userURL?: any;
	}
	export interface GET_user_content_user_jsonReturnResultsCommentsFormProperties {
		approveDate: FormControl<string | null | undefined>,
		commentBody: FormControl<string | null | undefined>,
		commentID: FormControl<number | null | undefined>,
		commentSequence: FormControl<number | null | undefined>,
		commentTitle: FormControl<string | null | undefined>,
		commentType: FormControl<string | null | undefined>,
		createDate: FormControl<string | null | undefined>,
		editorsSelection: FormControl<boolean | null | undefined>,
		parentID: FormControl<any | null | undefined>,
		permid: FormControl<number | null | undefined>,
		picURL: FormControl<string | null | undefined>,
		recommendations: FormControl<number | null | undefined>,
		replyCount: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		updateDate: FormControl<string | null | undefined>,
		userDisplayName: FormControl<any | null | undefined>,
		userID: FormControl<number | null | undefined>,
		userLocation: FormControl<any | null | undefined>,
		userSubmittedDisplayName: FormControl<string | null | undefined>,
		userSubmittedLocation: FormControl<string | null | undefined>,
		userSubmittedTitle: FormControl<any | null | undefined>,
		userSubmittedURL: FormControl<any | null | undefined>,
		userTitle: FormControl<any | null | undefined>,
		userURL: FormControl<any | null | undefined>,
	}
	export function CreateGET_user_content_user_jsonReturnResultsCommentsFormGroup() {
		return new FormGroup<GET_user_content_user_jsonReturnResultsCommentsFormProperties>({
			approveDate: new FormControl<string | null | undefined>(undefined),
			commentBody: new FormControl<string | null | undefined>(undefined),
			commentID: new FormControl<number | null | undefined>(undefined),
			commentSequence: new FormControl<number | null | undefined>(undefined),
			commentTitle: new FormControl<string | null | undefined>(undefined),
			commentType: new FormControl<string | null | undefined>(undefined),
			createDate: new FormControl<string | null | undefined>(undefined),
			editorsSelection: new FormControl<boolean | null | undefined>(undefined),
			parentID: new FormControl<any | null | undefined>(undefined),
			permid: new FormControl<number | null | undefined>(undefined),
			picURL: new FormControl<string | null | undefined>(undefined),
			recommendations: new FormControl<number | null | undefined>(undefined),
			replyCount: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			updateDate: new FormControl<string | null | undefined>(undefined),
			userDisplayName: new FormControl<any | null | undefined>(undefined),
			userID: new FormControl<number | null | undefined>(undefined),
			userLocation: new FormControl<any | null | undefined>(undefined),
			userSubmittedDisplayName: new FormControl<string | null | undefined>(undefined),
			userSubmittedLocation: new FormControl<string | null | undefined>(undefined),
			userSubmittedTitle: new FormControl<any | null | undefined>(undefined),
			userSubmittedURL: new FormControl<any | null | undefined>(undefined),
			userTitle: new FormControl<any | null | undefined>(undefined),
			userURL: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_user_jsonReturnResultsCommentsAsset {
		GET_user_content_user_jsonReturnResultsCommentsAsset_all_properties_?: Array<GET_user_content_user_jsonReturnResultsCommentsAsset_all_properties_>;
		assetID?: number | null;
		assetTitle?: string | null;
		assetURL?: string | null;
		createDate?: string | null;
		GET_user_content_user_jsonReturnResultsCommentsAssetLabels?: Array<GET_user_content_user_jsonReturnResultsCommentsAssetLabels>;
		properties?: GET_user_content_user_jsonReturnResultsCommentsAssetProperties;
		source?: string | null;
		taxonomy?: string | null;
		text?: Array<string>;
		updateDate?: string | null;
		vendorID?: string | null;
	}
	export interface GET_user_content_user_jsonReturnResultsCommentsAssetFormProperties {
		assetID: FormControl<number | null | undefined>,
		assetTitle: FormControl<string | null | undefined>,
		assetURL: FormControl<string | null | undefined>,
		createDate: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		taxonomy: FormControl<string | null | undefined>,
		updateDate: FormControl<string | null | undefined>,
		vendorID: FormControl<string | null | undefined>,
	}
	export function CreateGET_user_content_user_jsonReturnResultsCommentsAssetFormGroup() {
		return new FormGroup<GET_user_content_user_jsonReturnResultsCommentsAssetFormProperties>({
			assetID: new FormControl<number | null | undefined>(undefined),
			assetTitle: new FormControl<string | null | undefined>(undefined),
			assetURL: new FormControl<string | null | undefined>(undefined),
			createDate: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			taxonomy: new FormControl<string | null | undefined>(undefined),
			updateDate: new FormControl<string | null | undefined>(undefined),
			vendorID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_user_jsonReturnResultsCommentsAsset_all_properties_ {
		description?: string | null;
		name?: string | null;
		properties?: Array<string>;
	}
	export interface GET_user_content_user_jsonReturnResultsCommentsAsset_all_properties_FormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateGET_user_content_user_jsonReturnResultsCommentsAsset_all_properties_FormGroup() {
		return new FormGroup<GET_user_content_user_jsonReturnResultsCommentsAsset_all_properties_FormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_user_jsonReturnResultsCommentsAssetLabels {
		labelID?: number | null;
		labelName?: string | null;
	}
	export interface GET_user_content_user_jsonReturnResultsCommentsAssetLabelsFormProperties {
		labelID: FormControl<number | null | undefined>,
		labelName: FormControl<string | null | undefined>,
	}
	export function CreateGET_user_content_user_jsonReturnResultsCommentsAssetLabelsFormGroup() {
		return new FormGroup<GET_user_content_user_jsonReturnResultsCommentsAssetLabelsFormProperties>({
			labelID: new FormControl<number | null | undefined>(undefined),
			labelName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_user_jsonReturnResultsCommentsAssetProperties {
		'automoderation-off'?: GET_user_content_user_jsonReturnResultsCommentsAssetProperties_automoderation_off_;
		'comment-list-sort-approvedate-desc'?: GET_user_content_user_jsonReturnResultsCommentsAssetProperties_comment_list_sort_approvedate_desc_;
		'reached-max-com-on'?: GET_user_content_user_jsonReturnResultsCommentsAssetProperties_reached_max_com_on_;
	}
	export interface GET_user_content_user_jsonReturnResultsCommentsAssetPropertiesFormProperties {
	}
	export function CreateGET_user_content_user_jsonReturnResultsCommentsAssetPropertiesFormGroup() {
		return new FormGroup<GET_user_content_user_jsonReturnResultsCommentsAssetPropertiesFormProperties>({
		});

	}

	export interface GET_user_content_user_jsonReturnResultsCommentsAssetProperties_automoderation_off_ {
		groupID?: number | null;
		taxonomyID?: number | null;
	}
	export interface GET_user_content_user_jsonReturnResultsCommentsAssetProperties_automoderation_off_FormProperties {
		groupID: FormControl<number | null | undefined>,
		taxonomyID: FormControl<number | null | undefined>,
	}
	export function CreateGET_user_content_user_jsonReturnResultsCommentsAssetProperties_automoderation_off_FormGroup() {
		return new FormGroup<GET_user_content_user_jsonReturnResultsCommentsAssetProperties_automoderation_off_FormProperties>({
			groupID: new FormControl<number | null | undefined>(undefined),
			taxonomyID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_user_jsonReturnResultsCommentsAssetProperties_comment_list_sort_approvedate_desc_ {
		groupID?: number | null;
		taxonomyID?: number | null;
	}
	export interface GET_user_content_user_jsonReturnResultsCommentsAssetProperties_comment_list_sort_approvedate_desc_FormProperties {
		groupID: FormControl<number | null | undefined>,
		taxonomyID: FormControl<number | null | undefined>,
	}
	export function CreateGET_user_content_user_jsonReturnResultsCommentsAssetProperties_comment_list_sort_approvedate_desc_FormGroup() {
		return new FormGroup<GET_user_content_user_jsonReturnResultsCommentsAssetProperties_comment_list_sort_approvedate_desc_FormProperties>({
			groupID: new FormControl<number | null | undefined>(undefined),
			taxonomyID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_user_content_user_jsonReturnResultsCommentsAssetProperties_reached_max_com_on_ {
		groupID?: number | null;
		taxonomyID?: number | null;
	}
	export interface GET_user_content_user_jsonReturnResultsCommentsAssetProperties_reached_max_com_on_FormProperties {
		groupID: FormControl<number | null | undefined>,
		taxonomyID: FormControl<number | null | undefined>,
	}
	export function CreateGET_user_content_user_jsonReturnResultsCommentsAssetProperties_reached_max_com_on_FormGroup() {
		return new FormGroup<GET_user_content_user_jsonReturnResultsCommentsAssetProperties_reached_max_com_on_FormProperties>({
			groupID: new FormControl<number | null | undefined>(undefined),
			taxonomyID: new FormControl<number | null | undefined>(undefined),
		});

	}

}
