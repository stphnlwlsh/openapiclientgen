import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchInputMarketingEventCreateRequestParams {

		/** Required */
		inputs: Array<MarketingEventCreateRequestParams>;
	}
	export interface BatchInputMarketingEventCreateRequestParamsFormProperties {
	}
	export function CreateBatchInputMarketingEventCreateRequestParamsFormGroup() {
		return new FormGroup<BatchInputMarketingEventCreateRequestParamsFormProperties>({
		});

	}

	export interface MarketingEventCreateRequestParams {

		/**
		 * A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.
		 * In order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.
		 */
		customProperties?: Array<PropertyValue>;

		/** The end date and time of the marketing event. */
		endDateTime?: Date | null;

		/** Indicates if the marketing event has been cancelled.  Defaults to `false` */
		eventCancelled?: boolean | null;

		/** The description of the marketing event. */
		eventDescription?: string | null;

		/**
		 * The name of the marketing event.
		 * Required
		 */
		eventName: string;

		/**
		 * The name of the organizer of the marketing event.
		 * Required
		 */
		eventOrganizer: string;

		/** Describes what type of event this is.  For example: `WEBINAR`, `CONFERENCE`, `WORKSHOP` */
		eventType?: string | null;

		/** A URL in the external event application where the marketing event can be managed. */
		eventUrl?: string | null;

		/**
		 * The accountId that is associated with this marketing event in the external event application.
		 * Required
		 */
		externalAccountId: string;

		/**
		 * The id of the marketing event in the external event application.
		 * Required
		 */
		externalEventId: string;

		/** The start date and time of the marketing event. */
		startDateTime?: Date | null;
	}
	export interface MarketingEventCreateRequestParamsFormProperties {

		/** The end date and time of the marketing event. */
		endDateTime: FormControl<Date | null | undefined>,

		/** Indicates if the marketing event has been cancelled.  Defaults to `false` */
		eventCancelled: FormControl<boolean | null | undefined>,

		/** The description of the marketing event. */
		eventDescription: FormControl<string | null | undefined>,

		/**
		 * The name of the marketing event.
		 * Required
		 */
		eventName: FormControl<string | null | undefined>,

		/**
		 * The name of the organizer of the marketing event.
		 * Required
		 */
		eventOrganizer: FormControl<string | null | undefined>,

		/** Describes what type of event this is.  For example: `WEBINAR`, `CONFERENCE`, `WORKSHOP` */
		eventType: FormControl<string | null | undefined>,

		/** A URL in the external event application where the marketing event can be managed. */
		eventUrl: FormControl<string | null | undefined>,

		/**
		 * The accountId that is associated with this marketing event in the external event application.
		 * Required
		 */
		externalAccountId: FormControl<string | null | undefined>,

		/**
		 * The id of the marketing event in the external event application.
		 * Required
		 */
		externalEventId: FormControl<string | null | undefined>,

		/** The start date and time of the marketing event. */
		startDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateMarketingEventCreateRequestParamsFormGroup() {
		return new FormGroup<MarketingEventCreateRequestParamsFormProperties>({
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			eventCancelled: new FormControl<boolean | null | undefined>(undefined),
			eventDescription: new FormControl<string | null | undefined>(undefined),
			eventName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventOrganizer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<string | null | undefined>(undefined),
			eventUrl: new FormControl<string | null | undefined>(undefined),
			externalAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			externalEventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PropertyValue {
		isLargeValue?: boolean | null;

		/** Required */
		name: string;
		persistenceTimestamp?: number | null;

		/** Required */
		requestId: string;

		/** Required */
		selectedByUser: boolean;

		/** Required */
		selectedByUserTimestamp: number;

		/** Required */
		source: PropertyValueSource;

		/** Required */
		sourceId: string;

		/** Required */
		sourceLabel: string;

		/**
		 * Source metadata encoded as a base64 string. For example: `ZXhhbXBsZSBzdHJpbmc=`
		 * Required
		 */
		sourceMetadata: string;

		/** Required */
		sourceVid: Array<number>;

		/** Required */
		timestamp: number;
		updatedByUserId?: number | null;
		useTimestampAsPersistenceTimestamp?: boolean | null;

		/** Required */
		value: string;
	}
	export interface PropertyValueFormProperties {
		isLargeValue: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		persistenceTimestamp: FormControl<number | null | undefined>,

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/** Required */
		selectedByUser: FormControl<boolean | null | undefined>,

		/** Required */
		selectedByUserTimestamp: FormControl<number | null | undefined>,

		/** Required */
		source: FormControl<PropertyValueSource | null | undefined>,

		/** Required */
		sourceId: FormControl<string | null | undefined>,

		/** Required */
		sourceLabel: FormControl<string | null | undefined>,

		/**
		 * Source metadata encoded as a base64 string. For example: `ZXhhbXBsZSBzdHJpbmc=`
		 * Required
		 */
		sourceMetadata: FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<number | null | undefined>,
		updatedByUserId: FormControl<number | null | undefined>,
		useTimestampAsPersistenceTimestamp: FormControl<boolean | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePropertyValueFormGroup() {
		return new FormGroup<PropertyValueFormProperties>({
			isLargeValue: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			persistenceTimestamp: new FormControl<number | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			selectedByUser: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			selectedByUserTimestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<PropertyValueSource | null | undefined>(undefined, [Validators.required]),
			sourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceMetadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			updatedByUserId: new FormControl<number | null | undefined>(undefined),
			useTimestampAsPersistenceTimestamp: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PropertyValueSource { IMPORT = 0, API = 1, FORM = 2, ANALYTICS = 3, MIGRATION = 4, SALESFORCE = 5, INTEGRATION = 6, CONTACTS_WEB = 7, WAL_INCREMENTAL = 8, TASK = 9, EMAIL = 10, WORKFLOWS = 11, CALCULATED = 12, SOCIAL = 13, BATCH_UPDATE = 14, SIGNALS = 15, BIDEN = 16, DEFAULT = 17, COMPANIES = 18, DEALS = 19, ASSISTS = 20, PRESENTATIONS = 21, TALLY = 22, SIDEKICK = 23, CRM_UI = 24, MERGE_CONTACTS = 25, PORTAL_USER_ASSOCIATOR = 26, INTEGRATIONS_PLATFORM = 27, BCC_TO_CRM = 28, FORWARD_TO_CRM = 29, ENGAGEMENTS = 30, SALES = 31, HEISENBERG = 32, LEADIN = 33, GMAIL_INTEGRATION = 34, ACADEMY = 35, SALES_MESSAGES = 36, AVATARS_SERVICE = 37, MERGE_COMPANIES = 38, SEQUENCES = 39, COMPANY_FAMILIES = 40, MOBILE_IOS = 41, MOBILE_ANDROID = 42, CONTACTS = 43, ASSOCIATIONS = 44, EXTENSION = 45, SUCCESS = 46, BOT = 47, INTEGRATIONS_SYNC = 48, AUTOMATION_PLATFORM = 49, CONVERSATIONS = 50, EMAIL_INTEGRATION = 51, CONTENT_MEMBERSHIP = 52, QUOTES = 53, BET_ASSIGNMENT = 54, QUOTAS = 55, BET_CRM_CONNECTOR = 56, MEETINGS = 57, MERGE_OBJECTS = 58, RECYCLING_BIN = 59, ADS = 60, AI_GROUP = 61, COMMUNICATOR = 62, SETTINGS = 63, PROPERTY_SETTINGS = 64, PIPELINE_SETTINGS = 65, COMPANY_INSIGHTS = 66, BEHAVIORAL_EVENTS = 67, PAYMENTS = 68, GOALS = 69, PORTAL_OBJECT_SYNC = 70, APPROVALS = 71, FILE_MANAGER = 72, MARKETPLACE = 73, INTERNAL_PROCESSING = 74, FORECASTING = 75, SLACK_INTEGRATION = 76, CRM_UI_BULK_ACTION = 77, WORKFLOW_CONTACT_DELETE_ACTION = 78 }


	/** List of marketing event details to create or update */
	export interface BatchInputMarketingEventEmailSubscriber {

		/**
		 * List of marketing event details to create or update
		 * Required
		 */
		inputs: Array<MarketingEventEmailSubscriber>;
	}

	/** List of marketing event details to create or update */
	export interface BatchInputMarketingEventEmailSubscriberFormProperties {
	}
	export function CreateBatchInputMarketingEventEmailSubscriberFormGroup() {
		return new FormGroup<BatchInputMarketingEventEmailSubscriberFormProperties>({
		});

	}

	export interface MarketingEventEmailSubscriber {
		contactProperties?: {[id: string]: string };

		/**
		 * The email address of the contact in HubSpot to associate with the event.
		 * Required
		 */
		email: string;

		/**
		 * The date and time at which the contact subscribed to the event.
		 * Required
		 */
		interactionDateTime: number;
		properties?: {[id: string]: string };
	}
	export interface MarketingEventEmailSubscriberFormProperties {
		contactProperties: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The email address of the contact in HubSpot to associate with the event.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * The date and time at which the contact subscribed to the event.
		 * Required
		 */
		interactionDateTime: FormControl<number | null | undefined>,
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateMarketingEventEmailSubscriberFormGroup() {
		return new FormGroup<MarketingEventEmailSubscriberFormProperties>({
			contactProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			interactionDateTime: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface BatchInputMarketingEventExternalUniqueIdentifier {

		/** Required */
		inputs: Array<MarketingEventExternalUniqueIdentifier>;
	}
	export interface BatchInputMarketingEventExternalUniqueIdentifierFormProperties {
	}
	export function CreateBatchInputMarketingEventExternalUniqueIdentifierFormGroup() {
		return new FormGroup<BatchInputMarketingEventExternalUniqueIdentifierFormProperties>({
		});

	}

	export interface MarketingEventExternalUniqueIdentifier {

		/**
		 * The id of the application that created the marketing event in HubSpot.
		 * Required
		 */
		appId: number;

		/**
		 * The accountId that is associated with this marketing event in the external event application.
		 * Required
		 */
		externalAccountId: string;

		/**
		 * The id of the marketing event in the external event application.
		 * Required
		 */
		externalEventId: string;
	}
	export interface MarketingEventExternalUniqueIdentifierFormProperties {

		/**
		 * The id of the application that created the marketing event in HubSpot.
		 * Required
		 */
		appId: FormControl<number | null | undefined>,

		/**
		 * The accountId that is associated with this marketing event in the external event application.
		 * Required
		 */
		externalAccountId: FormControl<string | null | undefined>,

		/**
		 * The id of the marketing event in the external event application.
		 * Required
		 */
		externalEventId: FormControl<string | null | undefined>,
	}
	export function CreateMarketingEventExternalUniqueIdentifierFormGroup() {
		return new FormGroup<MarketingEventExternalUniqueIdentifierFormProperties>({
			appId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			externalAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			externalEventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of HubSpot contacts to subscribe to the marketing event */
	export interface BatchInputMarketingEventSubscriber {

		/**
		 * List of HubSpot contacts to subscribe to the marketing event
		 * Required
		 */
		inputs: Array<MarketingEventSubscriber>;
	}

	/** List of HubSpot contacts to subscribe to the marketing event */
	export interface BatchInputMarketingEventSubscriberFormProperties {
	}
	export function CreateBatchInputMarketingEventSubscriberFormGroup() {
		return new FormGroup<BatchInputMarketingEventSubscriberFormProperties>({
		});

	}

	export interface MarketingEventSubscriber {

		/**
		 * The date and time at which the contact subscribed to the event.
		 * Required
		 */
		interactionDateTime: number;
		properties?: {[id: string]: string };
		vid?: number | null;
	}
	export interface MarketingEventSubscriberFormProperties {

		/**
		 * The date and time at which the contact subscribed to the event.
		 * Required
		 */
		interactionDateTime: FormControl<number | null | undefined>,
		properties: FormControl<{[id: string]: string } | null | undefined>,
		vid: FormControl<number | null | undefined>,
	}
	export function CreateMarketingEventSubscriberFormGroup() {
		return new FormGroup<MarketingEventSubscriberFormProperties>({
			interactionDateTime: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			vid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchResponseMarketingEventPublicDefaultResponse {

		/** Required */
		completedAt: Date;
		errors?: Array<StandardError>;
		links?: {[id: string]: string };
		numErrors?: number | null;
		requestedAt?: Date | null;

		/** Required */
		results: Array<MarketingEventPublicDefaultResponse>;

		/** Required */
		startedAt: Date;

		/** Required */
		status: BatchResponseMarketingEventPublicDefaultResponseStatus;
	}
	export interface BatchResponseMarketingEventPublicDefaultResponseFormProperties {

		/** Required */
		completedAt: FormControl<Date | null | undefined>,
		links: FormControl<{[id: string]: string } | null | undefined>,
		numErrors: FormControl<number | null | undefined>,
		requestedAt: FormControl<Date | null | undefined>,

		/** Required */
		startedAt: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<BatchResponseMarketingEventPublicDefaultResponseStatus | null | undefined>,
	}
	export function CreateBatchResponseMarketingEventPublicDefaultResponseFormGroup() {
		return new FormGroup<BatchResponseMarketingEventPublicDefaultResponseFormProperties>({
			completedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			numErrors: new FormControl<number | null | undefined>(undefined),
			requestedAt: new FormControl<Date | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BatchResponseMarketingEventPublicDefaultResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StandardError {

		/** Required */
		category: string;

		/** Required */
		context: {[id: string]: Array<string> };

		/** Required */
		errors: Array<ErrorDetail>;
		id?: string | null;

		/** Required */
		links: {[id: string]: string };

		/** Required */
		message: string;

		/** Required */
		status: string;
		subCategory?: string | null;
	}
	export interface StandardErrorFormProperties {

		/** Required */
		category: FormControl<string | null | undefined>,

		/** Required */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		links: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateStandardErrorFormGroup() {
		return new FormGroup<StandardErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorDetail {

		/** The status code associated with the error detail */
		code?: string | null;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/** The name of the field or parameter in which the error was found. */
		in?: string | null;

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorDetailFormProperties {

		/** The status code associated with the error detail */
		code: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** The name of the field or parameter in which the error was found. */
		in: FormControl<string | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			in: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MarketingEventPublicDefaultResponse {

		/** Required */
		createdAt: Date;

		/**
		 * A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.
		 * In order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.
		 */
		customProperties?: Array<PropertyValue>;

		/** The end date and time of the marketing event. */
		endDateTime?: Date | null;

		/** Indicates if the marketing event has been cancelled. */
		eventCancelled?: boolean | null;

		/** The description of the marketing event. */
		eventDescription?: string | null;

		/**
		 * The name of the marketing event.
		 * Required
		 */
		eventName: string;

		/**
		 * The name of the organizer of the marketing event.
		 * Required
		 */
		eventOrganizer: string;

		/** The type of the marketing event. */
		eventType?: string | null;

		/** A URL in the external event application where the marketing event can be managed. */
		eventUrl?: string | null;

		/** Required */
		id: string;

		/** The start date and time of the marketing event. */
		startDateTime?: Date | null;

		/** Required */
		updatedAt: Date;
	}
	export interface MarketingEventPublicDefaultResponseFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** The end date and time of the marketing event. */
		endDateTime: FormControl<Date | null | undefined>,

		/** Indicates if the marketing event has been cancelled. */
		eventCancelled: FormControl<boolean | null | undefined>,

		/** The description of the marketing event. */
		eventDescription: FormControl<string | null | undefined>,

		/**
		 * The name of the marketing event.
		 * Required
		 */
		eventName: FormControl<string | null | undefined>,

		/**
		 * The name of the organizer of the marketing event.
		 * Required
		 */
		eventOrganizer: FormControl<string | null | undefined>,

		/** The type of the marketing event. */
		eventType: FormControl<string | null | undefined>,

		/** A URL in the external event application where the marketing event can be managed. */
		eventUrl: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** The start date and time of the marketing event. */
		startDateTime: FormControl<Date | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateMarketingEventPublicDefaultResponseFormGroup() {
		return new FormGroup<MarketingEventPublicDefaultResponseFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			eventCancelled: new FormControl<boolean | null | undefined>(undefined),
			eventDescription: new FormControl<string | null | undefined>(undefined),
			eventName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventOrganizer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<string | null | undefined>(undefined),
			eventUrl: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BatchResponseMarketingEventPublicDefaultResponseStatus { PENDING = 0, PROCESSING = 1, CANCELED = 2, COMPLETE = 3 }

	export interface BatchResponseSubscriberEmailResponse {

		/** Required */
		completedAt: Date;
		errors?: Array<StandardError>;
		links?: {[id: string]: string };
		numErrors?: number | null;
		requestedAt?: Date | null;

		/** Required */
		results: Array<SubscriberEmailResponse>;

		/** Required */
		startedAt: Date;

		/** Required */
		status: BatchResponseMarketingEventPublicDefaultResponseStatus;
	}
	export interface BatchResponseSubscriberEmailResponseFormProperties {

		/** Required */
		completedAt: FormControl<Date | null | undefined>,
		links: FormControl<{[id: string]: string } | null | undefined>,
		numErrors: FormControl<number | null | undefined>,
		requestedAt: FormControl<Date | null | undefined>,

		/** Required */
		startedAt: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<BatchResponseMarketingEventPublicDefaultResponseStatus | null | undefined>,
	}
	export function CreateBatchResponseSubscriberEmailResponseFormGroup() {
		return new FormGroup<BatchResponseSubscriberEmailResponseFormProperties>({
			completedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			numErrors: new FormControl<number | null | undefined>(undefined),
			requestedAt: new FormControl<Date | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BatchResponseMarketingEventPublicDefaultResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubscriberEmailResponse {

		/** Required */
		email: string;

		/** Required */
		vid: number;
	}
	export interface SubscriberEmailResponseFormProperties {

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		vid: FormControl<number | null | undefined>,
	}
	export function CreateSubscriberEmailResponseFormGroup() {
		return new FormGroup<SubscriberEmailResponseFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchResponseSubscriberVidResponse {

		/** Required */
		completedAt: Date;
		errors?: Array<StandardError>;
		links?: {[id: string]: string };
		numErrors?: number | null;
		requestedAt?: Date | null;

		/** Required */
		results: Array<SubscriberVidResponse>;

		/** Required */
		startedAt: Date;

		/** Required */
		status: BatchResponseMarketingEventPublicDefaultResponseStatus;
	}
	export interface BatchResponseSubscriberVidResponseFormProperties {

		/** Required */
		completedAt: FormControl<Date | null | undefined>,
		links: FormControl<{[id: string]: string } | null | undefined>,
		numErrors: FormControl<number | null | undefined>,
		requestedAt: FormControl<Date | null | undefined>,

		/** Required */
		startedAt: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<BatchResponseMarketingEventPublicDefaultResponseStatus | null | undefined>,
	}
	export function CreateBatchResponseSubscriberVidResponseFormGroup() {
		return new FormGroup<BatchResponseSubscriberVidResponseFormProperties>({
			completedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			numErrors: new FormControl<number | null | undefined>(undefined),
			requestedAt: new FormControl<Date | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BatchResponseMarketingEventPublicDefaultResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubscriberVidResponse {

		/** Required */
		vid: number;
	}
	export interface SubscriberVidResponseFormProperties {

		/** Required */
		vid: FormControl<number | null | undefined>,
	}
	export function CreateSubscriberVidResponseFormGroup() {
		return new FormGroup<SubscriberVidResponseFormProperties>({
			vid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging {

		/** Required */
		results: Array<MarketingEventExternalUniqueIdentifier>;
	}
	export interface CollectionResponseMarketingEventExternalUniqueIdentifierNoPagingFormProperties {
	}
	export function CreateCollectionResponseMarketingEventExternalUniqueIdentifierNoPagingFormGroup() {
		return new FormGroup<CollectionResponseMarketingEventExternalUniqueIdentifierNoPagingFormProperties>({
		});

	}

	export interface Error {

		/**
		 * The error category
		 * Required
		 */
		category: string;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: string;

		/** further information about the error */
		errors?: Array<ErrorDetail>;

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links?: {[id: string]: string };

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorFormProperties {

		/**
		 * The error category
		 * Required
		 */
		category: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: FormControl<string | null | undefined>,

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventDetailSettings {

		/**
		 * The id of the application the settings are for
		 * Required
		 */
		appId: number;

		/**
		 * The url that will be used to fetch marketing event details by id
		 * Required
		 */
		eventDetailsUrl: string;
	}
	export interface EventDetailSettingsFormProperties {

		/**
		 * The id of the application the settings are for
		 * Required
		 */
		appId: FormControl<number | null | undefined>,

		/**
		 * The url that will be used to fetch marketing event details by id
		 * Required
		 */
		eventDetailsUrl: FormControl<string | null | undefined>,
	}
	export function CreateEventDetailSettingsFormGroup() {
		return new FormGroup<EventDetailSettingsFormProperties>({
			appId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			eventDetailsUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EventDetailSettingsUrl {

		/**
		 * The url that will be used to fetch marketing event details by id. Must contain a `%s` character sequence that will be substituted with the event id. For example: `https://my.event.app/events/%s`
		 * Required
		 */
		eventDetailsUrl: string;
	}
	export interface EventDetailSettingsUrlFormProperties {

		/**
		 * The url that will be used to fetch marketing event details by id. Must contain a `%s` character sequence that will be substituted with the event id. For example: `https://my.event.app/events/%s`
		 * Required
		 */
		eventDetailsUrl: FormControl<string | null | undefined>,
	}
	export function CreateEventDetailSettingsUrlFormGroup() {
		return new FormGroup<EventDetailSettingsUrlFormProperties>({
			eventDetailsUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MarketingEventCompleteRequestParams {

		/** Required */
		endDateTime: Date;

		/** Required */
		startDateTime: Date;
	}
	export interface MarketingEventCompleteRequestParamsFormProperties {

		/** Required */
		endDateTime: FormControl<Date | null | undefined>,

		/** Required */
		startDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateMarketingEventCompleteRequestParamsFormGroup() {
		return new FormGroup<MarketingEventCompleteRequestParamsFormProperties>({
			endDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MarketingEventDefaultResponse {

		/**
		 * A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.
		 * In order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.
		 */
		customProperties?: Array<PropertyValue>;

		/** The end date and time of the marketing event. */
		endDateTime?: Date | null;

		/** Indicates if the marketing event has been cancelled. */
		eventCancelled?: boolean | null;

		/** The description of the marketing event. */
		eventDescription?: string | null;

		/**
		 * The name of the marketing event.
		 * Required
		 */
		eventName: string;

		/**
		 * The name of the organizer of the marketing event.
		 * Required
		 */
		eventOrganizer: string;

		/** The type of the marketing event. */
		eventType?: string | null;

		/** The URL in the external event application where the marketing event can be managed. */
		eventUrl?: string | null;

		/** The start date and time of the marketing event. */
		startDateTime?: Date | null;
	}
	export interface MarketingEventDefaultResponseFormProperties {

		/** The end date and time of the marketing event. */
		endDateTime: FormControl<Date | null | undefined>,

		/** Indicates if the marketing event has been cancelled. */
		eventCancelled: FormControl<boolean | null | undefined>,

		/** The description of the marketing event. */
		eventDescription: FormControl<string | null | undefined>,

		/**
		 * The name of the marketing event.
		 * Required
		 */
		eventName: FormControl<string | null | undefined>,

		/**
		 * The name of the organizer of the marketing event.
		 * Required
		 */
		eventOrganizer: FormControl<string | null | undefined>,

		/** The type of the marketing event. */
		eventType: FormControl<string | null | undefined>,

		/** The URL in the external event application where the marketing event can be managed. */
		eventUrl: FormControl<string | null | undefined>,

		/** The start date and time of the marketing event. */
		startDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateMarketingEventDefaultResponseFormGroup() {
		return new FormGroup<MarketingEventDefaultResponseFormProperties>({
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			eventCancelled: new FormControl<boolean | null | undefined>(undefined),
			eventDescription: new FormControl<string | null | undefined>(undefined),
			eventName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventOrganizer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<string | null | undefined>(undefined),
			eventUrl: new FormControl<string | null | undefined>(undefined),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface MarketingEventPublicReadResponse {

		/**
		 * The number of HubSpot contacts that attended this marketing event.
		 * Required
		 */
		attendees: number;

		/**
		 * The number of HubSpot contacts that registered for this marketing event, but later cancelled their registration.
		 * Required
		 */
		cancellations: number;

		/** Required */
		createdAt: Date;

		/**
		 * A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.
		 * In order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.
		 */
		customProperties?: Array<PropertyValue>;

		/** The end date and time of the marketing event. */
		endDateTime?: Date | null;

		/** Indicates if the marketing event has been cancelled. */
		eventCancelled?: boolean | null;

		/** The description of the marketing event. */
		eventDescription?: string | null;

		/**
		 * The name of the marketing event.
		 * Required
		 */
		eventName: string;

		/**
		 * The name of the organizer of the marketing event.
		 * Required
		 */
		eventOrganizer: string;

		/** The type of the marketing event. */
		eventType?: string | null;

		/** A URL in the external event application where the marketing event can be managed. */
		eventUrl?: string | null;

		/**
		 * The id of the marketing event in the external event application.
		 * Required
		 */
		externalEventId: string;

		/** Required */
		id: string;

		/**
		 * The number of HubSpot contacts that registered for this marketing event, but did not attend. This field only had a value when the event is over.
		 * Required
		 */
		noShows: number;

		/**
		 * The number of HubSpot contacts that registered for this marketing event.
		 * Required
		 */
		registrants: number;

		/** The start date and time of the marketing event. */
		startDateTime?: Date | null;

		/** Required */
		updatedAt: Date;
	}
	export interface MarketingEventPublicReadResponseFormProperties {

		/**
		 * The number of HubSpot contacts that attended this marketing event.
		 * Required
		 */
		attendees: FormControl<number | null | undefined>,

		/**
		 * The number of HubSpot contacts that registered for this marketing event, but later cancelled their registration.
		 * Required
		 */
		cancellations: FormControl<number | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** The end date and time of the marketing event. */
		endDateTime: FormControl<Date | null | undefined>,

		/** Indicates if the marketing event has been cancelled. */
		eventCancelled: FormControl<boolean | null | undefined>,

		/** The description of the marketing event. */
		eventDescription: FormControl<string | null | undefined>,

		/**
		 * The name of the marketing event.
		 * Required
		 */
		eventName: FormControl<string | null | undefined>,

		/**
		 * The name of the organizer of the marketing event.
		 * Required
		 */
		eventOrganizer: FormControl<string | null | undefined>,

		/** The type of the marketing event. */
		eventType: FormControl<string | null | undefined>,

		/** A URL in the external event application where the marketing event can be managed. */
		eventUrl: FormControl<string | null | undefined>,

		/**
		 * The id of the marketing event in the external event application.
		 * Required
		 */
		externalEventId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * The number of HubSpot contacts that registered for this marketing event, but did not attend. This field only had a value when the event is over.
		 * Required
		 */
		noShows: FormControl<number | null | undefined>,

		/**
		 * The number of HubSpot contacts that registered for this marketing event.
		 * Required
		 */
		registrants: FormControl<number | null | undefined>,

		/** The start date and time of the marketing event. */
		startDateTime: FormControl<Date | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateMarketingEventPublicReadResponseFormGroup() {
		return new FormGroup<MarketingEventPublicReadResponseFormProperties>({
			attendees: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			cancellations: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			eventCancelled: new FormControl<boolean | null | undefined>(undefined),
			eventDescription: new FormControl<string | null | undefined>(undefined),
			eventName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventOrganizer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<string | null | undefined>(undefined),
			eventUrl: new FormControl<string | null | undefined>(undefined),
			externalEventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			noShows: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			registrants: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MarketingEventUpdateRequestParams {

		/**
		 * A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account's definition of the MarketingEvent Object. If they don't they will be filtered out and not set.
		 * In order to do this you'll need to create a new PropertyGroup on the HubSpot account's MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts.
		 */
		customProperties?: Array<PropertyValue>;

		/** The end date and time of the marketing event. */
		endDateTime?: Date | null;

		/** Indicates if the marketing event has been cancelled. Defaults to `false` */
		eventCancelled?: boolean | null;

		/** The description of the marketing event. */
		eventDescription?: string | null;

		/** The name of the marketing event. */
		eventName?: string | null;

		/** The name of the organizer of the marketing event. */
		eventOrganizer?: string | null;

		/** Describes what type of event this is.  For example: `WEBINAR`, `CONFERENCE`, `WORKSHOP` */
		eventType?: string | null;

		/** A URL in the external event application where the marketing event can be managed. */
		eventUrl?: string | null;

		/** The start date and time of the marketing event. */
		startDateTime?: Date | null;
	}
	export interface MarketingEventUpdateRequestParamsFormProperties {

		/** The end date and time of the marketing event. */
		endDateTime: FormControl<Date | null | undefined>,

		/** Indicates if the marketing event has been cancelled. Defaults to `false` */
		eventCancelled: FormControl<boolean | null | undefined>,

		/** The description of the marketing event. */
		eventDescription: FormControl<string | null | undefined>,

		/** The name of the marketing event. */
		eventName: FormControl<string | null | undefined>,

		/** The name of the organizer of the marketing event. */
		eventOrganizer: FormControl<string | null | undefined>,

		/** Describes what type of event this is.  For example: `WEBINAR`, `CONFERENCE`, `WORKSHOP` */
		eventType: FormControl<string | null | undefined>,

		/** A URL in the external event application where the marketing event can be managed. */
		eventUrl: FormControl<string | null | undefined>,

		/** The start date and time of the marketing event. */
		startDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateMarketingEventUpdateRequestParamsFormGroup() {
		return new FormGroup<MarketingEventUpdateRequestParamsFormProperties>({
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			eventCancelled: new FormControl<boolean | null | undefined>(undefined),
			eventDescription: new FormControl<string | null | undefined>(undefined),
			eventName: new FormControl<string | null | undefined>(undefined),
			eventOrganizer: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<string | null | undefined>(undefined),
			eventUrl: new FormControl<string | null | undefined>(undefined),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Record
		 * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
		 * Post marketing/v3/marketing-events/attendance/{externalEventId}/{subscriberState}/create
		 * @param {string} externalEventId The id of the marketing event
		 * @param {string} subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: 'register', 'attend' or 'cancel'.
		 * @param {string} externalAccountId The account id associated with the marketing event
		 * @param {BatchInputMarketingEventSubscriber} requestBody The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
		 * @return {BatchResponseSubscriberVidResponse} successful operation
		 */
		Post_SlashmarketingSlashv3Slashmarketing_eventsSlashattendanceSlashexternalEventIdSlashsubscriberStateSlashcreate_create(externalEventId: string, subscriberState: string, externalAccountId: string | null | undefined, requestBody: BatchInputMarketingEventSubscriber): Observable<BatchResponseSubscriberVidResponse> {
			return this.http.post<BatchResponseSubscriberVidResponse>(this.baseUri + 'marketing/v3/marketing-events/attendance/' + (externalEventId == null ? '' : encodeURIComponent(externalEventId)) + '/' + (subscriberState == null ? '' : encodeURIComponent(subscriberState)) + '/create&externalAccountId=' + (externalAccountId == null ? '' : encodeURIComponent(externalAccountId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Record
		 * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created.
		 * Post marketing/v3/marketing-events/attendance/{externalEventId}/{subscriberState}/email-create
		 * @param {string} externalEventId The id of the marketing event
		 * @param {string} subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: 'register', 'attend' or 'cancel'.
		 * @param {string} externalAccountId The account id associated with the marketing event
		 * @param {BatchInputMarketingEventEmailSubscriber} requestBody The details of the contacts to subscribe to the event. Parameters of join and left time if state is Attended.
		 * @return {BatchResponseSubscriberEmailResponse} successful operation
		 */
		Post_SlashmarketingSlashv3Slashmarketing_eventsSlashattendanceSlashexternalEventIdSlashsubscriberStateSlashemail_create_createByEmail(externalEventId: string, subscriberState: string, externalAccountId: string | null | undefined, requestBody: BatchInputMarketingEventEmailSubscriber): Observable<BatchResponseSubscriberEmailResponse> {
			return this.http.post<BatchResponseSubscriberEmailResponse>(this.baseUri + 'marketing/v3/marketing-events/attendance/' + (externalEventId == null ? '' : encodeURIComponent(externalEventId)) + '/' + (subscriberState == null ? '' : encodeURIComponent(subscriberState)) + '/email-create&externalAccountId=' + (externalAccountId == null ? '' : encodeURIComponent(externalAccountId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a marketing event
		 * Creates a new marketing event in HubSpot
		 * Post marketing/v3/marketing-events/events
		 * @param {MarketingEventCreateRequestParams} requestBody The details of the marketing event to create
		 * @return {MarketingEventDefaultResponse} successful operation
		 */
		Post_SlashmarketingSlashv3Slashmarketing_eventsSlashevents_create(requestBody: MarketingEventCreateRequestParams): Observable<MarketingEventDefaultResponse> {
			return this.http.post<MarketingEventDefaultResponse>(this.baseUri + 'marketing/v3/marketing-events/events', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete multiple marketing events
		 * Bulk delete a number of marketing events in HubSpot
		 * Post marketing/v3/marketing-events/events/delete
		 * @param {BatchInputMarketingEventExternalUniqueIdentifier} requestBody The details of the marketing events to delete
		 * @return {void} 
		 */
		Post_SlashmarketingSlashv3Slashmarketing_eventsSlasheventsSlashdelete_archiveBatch(requestBody: BatchInputMarketingEventExternalUniqueIdentifier): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'marketing/v3/marketing-events/events/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search for marketing events
		 * Search for marketing events that have an event id that starts with the query string
		 * Get marketing/v3/marketing-events/events/search
		 * @param {string} q The id of the marketing event in the external event application
		 * @return {CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging} successful operation
		 */
		Get_SlashmarketingSlashv3Slashmarketing_eventsSlasheventsSlashsearch_doSearch(q: string): Observable<CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging> {
			return this.http.get<CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging>(this.baseUri + 'marketing/v3/marketing-events/events/search?q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Create or update multiple marketing events
		 * Upset multiple Marketing Event. If there is an existing Marketing event with the specified id, it will be updated; otherwise a new event will be created.
		 * Post marketing/v3/marketing-events/events/upsert
		 * @param {BatchInputMarketingEventCreateRequestParams} requestBody The details of the marketing events to upsert
		 * @return {BatchResponseMarketingEventPublicDefaultResponse} successful operation
		 */
		Post_SlashmarketingSlashv3Slashmarketing_eventsSlasheventsSlashupsert_doUpsert(requestBody: BatchInputMarketingEventCreateRequestParams): Observable<BatchResponseMarketingEventPublicDefaultResponse> {
			return this.http.post<BatchResponseMarketingEventPublicDefaultResponse>(this.baseUri + 'marketing/v3/marketing-events/events/upsert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a marketing event
		 * Deletes an existing Marketing Event with the specified id, if one exists.
		 * Delete marketing/v3/marketing-events/events/{externalEventId}
		 * @param {string} externalEventId The id of the marketing event to delete
		 * @param {string} externalAccountId The account id associated with the marketing event
		 * @return {void} 
		 */
		Delete_SlashmarketingSlashv3Slashmarketing_eventsSlasheventsSlashexternalEventId_archive(externalEventId: string, externalAccountId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'marketing/v3/marketing-events/events/' + (externalEventId == null ? '' : encodeURIComponent(externalEventId)) + '&externalAccountId=' + (externalAccountId == null ? '' : encodeURIComponent(externalAccountId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a marketing event
		 * Returns the details of the Marketing Event with the specified id, if one exists.
		 * Get marketing/v3/marketing-events/events/{externalEventId}
		 * @param {string} externalEventId The id of the marketing event to return
		 * @param {string} externalAccountId The account id associated with the marketing event
		 * @return {MarketingEventPublicReadResponse} successful operation
		 */
		Get_SlashmarketingSlashv3Slashmarketing_eventsSlasheventsSlashexternalEventId_getById(externalEventId: string, externalAccountId: string): Observable<MarketingEventPublicReadResponse> {
			return this.http.get<MarketingEventPublicReadResponse>(this.baseUri + 'marketing/v3/marketing-events/events/' + (externalEventId == null ? '' : encodeURIComponent(externalEventId)) + '&externalAccountId=' + (externalAccountId == null ? '' : encodeURIComponent(externalAccountId)), {});
		}

		/**
		 * Update a marketing event
		 * Updates an existing Marketing Event with the specified id, if one exists.
		 * Patch marketing/v3/marketing-events/events/{externalEventId}
		 * @param {string} externalEventId The id of the marketing event to update
		 * @param {string} externalAccountId The account id associated with the marketing event
		 * @param {MarketingEventUpdateRequestParams} requestBody The details of the marketing event to update
		 * @return {MarketingEventPublicDefaultResponse} successful operation
		 */
		Patch_SlashmarketingSlashv3Slashmarketing_eventsSlasheventsSlashexternalEventId_update(externalEventId: string, externalAccountId: string, requestBody: MarketingEventUpdateRequestParams): Observable<MarketingEventPublicDefaultResponse> {
			return this.http.patch<MarketingEventPublicDefaultResponse>(this.baseUri + 'marketing/v3/marketing-events/events/' + (externalEventId == null ? '' : encodeURIComponent(externalEventId)) + '&externalAccountId=' + (externalAccountId == null ? '' : encodeURIComponent(externalAccountId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create or update a marketing event
		 * Upsets a Marketing Event. If there is an existing Marketing event with the specified id, it will be updated; otherwise a new event will be created.
		 * Put marketing/v3/marketing-events/events/{externalEventId}
		 * @param {string} externalEventId The id of the marketing event to upsert
		 * @param {MarketingEventCreateRequestParams} requestBody The details of the marketing event to upsert
		 * @return {MarketingEventPublicDefaultResponse} successful operation
		 */
		Put_SlashmarketingSlashv3Slashmarketing_eventsSlasheventsSlashexternalEventId_replace(externalEventId: string, requestBody: MarketingEventCreateRequestParams): Observable<MarketingEventPublicDefaultResponse> {
			return this.http.put<MarketingEventPublicDefaultResponse>(this.baseUri + 'marketing/v3/marketing-events/events/' + (externalEventId == null ? '' : encodeURIComponent(externalEventId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Mark a marketing event as cancelled
		 * Mark a marketing event as cancelled.
		 * Post marketing/v3/marketing-events/events/{externalEventId}/cancel
		 * @param {string} externalEventId The id of the marketing event to mark as cancelled
		 * @param {string} externalAccountId The account id associated with the marketing event
		 * @return {MarketingEventDefaultResponse} successful operation
		 */
		Post_SlashmarketingSlashv3Slashmarketing_eventsSlasheventsSlashexternalEventIdSlashcancel_doCancel(externalEventId: string, externalAccountId: string): Observable<MarketingEventDefaultResponse> {
			return this.http.post<MarketingEventDefaultResponse>(this.baseUri + 'marketing/v3/marketing-events/events/' + (externalEventId == null ? '' : encodeURIComponent(externalEventId)) + '/cancel&externalAccountId=' + (externalAccountId == null ? '' : encodeURIComponent(externalAccountId)), null, {});
		}

		/**
		 * Post marketing/v3/marketing-events/events/{externalEventId}/complete
		 * @return {MarketingEventDefaultResponse} successful operation
		 */
		Post_SlashmarketingSlashv3Slashmarketing_eventsSlasheventsSlashexternalEventIdSlashcomplete_complete(externalEventId: string, externalAccountId: string, requestBody: MarketingEventCompleteRequestParams): Observable<MarketingEventDefaultResponse> {
			return this.http.post<MarketingEventDefaultResponse>(this.baseUri + 'marketing/v3/marketing-events/events/' + (externalEventId == null ? '' : encodeURIComponent(externalEventId)) + '/complete&externalAccountId=' + (externalAccountId == null ? '' : encodeURIComponent(externalAccountId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Record
		 * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created.
		 * Post marketing/v3/marketing-events/events/{externalEventId}/{subscriberState}/email-upsert
		 * @param {string} externalEventId The id of the marketing event
		 * @param {string} subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event
		 * @param {string} externalAccountId The account id associated with the marketing event
		 * @param {BatchInputMarketingEventEmailSubscriber} requestBody The details of the contacts to subscribe to the event
		 * @return {void} 
		 */
		Post_SlashmarketingSlashv3Slashmarketing_eventsSlasheventsSlashexternalEventIdSlashsubscriberStateSlashemail_upsert_doEmailUpsertById(externalEventId: string, subscriberState: string, externalAccountId: string, requestBody: BatchInputMarketingEventEmailSubscriber): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'marketing/v3/marketing-events/events/' + (externalEventId == null ? '' : encodeURIComponent(externalEventId)) + '/' + (subscriberState == null ? '' : encodeURIComponent(subscriberState)) + '/email-upsert&externalAccountId=' + (externalAccountId == null ? '' : encodeURIComponent(externalAccountId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Record
		 * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids. Note that the contact must already exist in HubSpot; a contact will not be create.
		 * Post marketing/v3/marketing-events/events/{externalEventId}/{subscriberState}/upsert
		 * @param {string} externalEventId The id of the marketing event
		 * @param {string} subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event
		 * @param {string} externalAccountId The account id associated with the marketing event
		 * @param {BatchInputMarketingEventSubscriber} requestBody The details of the contacts to subscribe to the event
		 * @return {void} 
		 */
		Post_SlashmarketingSlashv3Slashmarketing_eventsSlasheventsSlashexternalEventIdSlashsubscriberStateSlashupsert_doUpsertById(externalEventId: string, subscriberState: string, externalAccountId: string, requestBody: BatchInputMarketingEventSubscriber): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'marketing/v3/marketing-events/events/' + (externalEventId == null ? '' : encodeURIComponent(externalEventId)) + '/' + (subscriberState == null ? '' : encodeURIComponent(subscriberState)) + '/upsert&externalAccountId=' + (externalAccountId == null ? '' : encodeURIComponent(externalAccountId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the application settings
		 * Retrieve the current settings for the application.
		 * Get marketing/v3/marketing-events/{appId}/settings
		 * @param {number} appId The id of the application to retrieve the settings for.
		 * @return {EventDetailSettings} successful operation
		 */
		Get_SlashmarketingSlashv3Slashmarketing_eventsSlashappIdSlashsettings_getAll(appId: number): Observable<EventDetailSettings> {
			return this.http.get<EventDetailSettings>(this.baseUri + 'marketing/v3/marketing-events/' + appId + '/settings', {});
		}

		/**
		 * Update the application settings
		 * Create or update the current settings for the application.
		 * Post marketing/v3/marketing-events/{appId}/settings
		 * @param {number} appId The id of the application to update the settings for.
		 * @param {EventDetailSettingsUrl} requestBody The new application settings
		 * @return {EventDetailSettings} successful operation
		 */
		Post_SlashmarketingSlashv3Slashmarketing_eventsSlashappIdSlashsettings_create(appId: number, requestBody: EventDetailSettingsUrl): Observable<EventDetailSettings> {
			return this.http.post<EventDetailSettings>(this.baseUri + 'marketing/v3/marketing-events/' + appId + '/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

