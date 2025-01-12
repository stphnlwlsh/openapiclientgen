import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BadRequestResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface BadRequestResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/** HTTP status code */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateBadRequestResponseFormGroup() {
		return new FormGroup<BadRequestResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWebhookRequest {

		/**
		 * The delivery url of the webhook endpoint.
		 * Required
		 */
		delivery_url: string;

		/** A description of the object. */
		description?: string | null;

		/**
		 * The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.
		 * Required
		 */
		events: Array<WebhookEventType>;

		/**
		 * The status of the webhook.
		 * Required
		 */
		status: CreateWebhookRequestStatus;

		/**
		 * Name of Apideck Unified API
		 * Required
		 */
		unified_api: CreateWebhookRequestUnified_api;
	}
	export interface CreateWebhookRequestFormProperties {

		/**
		 * The delivery url of the webhook endpoint.
		 * Required
		 */
		delivery_url: FormControl<string | null | undefined>,

		/** A description of the object. */
		description: FormControl<string | null | undefined>,

		/**
		 * The status of the webhook.
		 * Required
		 */
		status: FormControl<CreateWebhookRequestStatus | null | undefined>,

		/**
		 * Name of Apideck Unified API
		 * Required
		 */
		unified_api: FormControl<CreateWebhookRequestUnified_api | null | undefined>,
	}
	export function CreateCreateWebhookRequestFormGroup() {
		return new FormGroup<CreateWebhookRequestFormProperties>({
			delivery_url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(https?)://')]),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CreateWebhookRequestStatus | null | undefined>(undefined, [Validators.required]),
			unified_api: new FormControl<CreateWebhookRequestUnified_api | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WebhookEventType { '*' = 0, 'crm.activity.created' = 1, 'crm.activity.updated' = 2, 'crm.activity.deleted' = 3, 'crm.company.created' = 4, 'crm.company.updated' = 5, 'crm.company.deleted' = 6, 'crm.contact.created' = 7, 'crm.contact.updated' = 8, 'crm.contact.deleted' = 9, 'crm.lead.created' = 10, 'crm.lead.updated' = 11, 'crm.lead.deleted' = 12, 'crm.note.created' = 13, 'crm.notes.updated' = 14, 'crm.notes.deleted' = 15, 'crm.opportunity.created' = 16, 'crm.opportunity.updated' = 17, 'crm.opportunity.deleted' = 18, 'lead.lead.created' = 19, 'lead.lead.updated' = 20, 'lead.lead.deleted' = 21, 'vault.connection.created' = 22, 'vault.connection.updated' = 23, 'vault.connection.disabled' = 24, 'vault.connection.deleted' = 25, 'vault.connection.callable' = 26, 'vault.connection.revoked' = 27, 'vault.connection.token_refresh.failed' = 28, 'ats.job.created' = 29, 'ats.job.updated' = 30, 'ats.job.deleted' = 31, 'ats.applicant.created' = 32, 'ats.applicant.updated' = 33, 'ats.applicant.deleted' = 34, 'accounting.customer.created' = 35, 'accounting.customer.updated' = 36, 'accounting.customer.deleted' = 37, 'accounting.invoice.created' = 38, 'accounting.invoice.updated' = 39, 'accounting.invoice.deleted' = 40, 'accounting.invoice_item.created' = 41, 'accounting.invoice_item.updated' = 42, 'accounting.invoice_item.deleted' = 43, 'accounting.ledger_account.created' = 44, 'accounting.ledger_account.updated' = 45, 'accounting.ledger_account.deleted' = 46, 'accounting.tax_rate.created' = 47, 'accounting.tax_rate.updated' = 48, 'accounting.tax_rate.deleted' = 49, 'accounting.bill.created' = 50, 'accounting.bill.updated' = 51, 'accounting.bill.deleted' = 52, 'accounting.payment.created' = 53, 'accounting.payment.updated' = 54, 'accounting.payment.deleted' = 55, 'accounting.supplier.created' = 56, 'accounting.supplier.updated' = 57, 'accounting.supplier.deleted' = 58, 'accounting.purchase-order.created' = 59, 'accounting.purchase-order.updated' = 60, 'accounting.purchase-order.deleted' = 61, 'pos.order.created' = 62, 'pos.order.updated' = 63, 'pos.order.deleted' = 64, 'pos.product.created' = 65, 'pos.product.updated' = 66, 'pos.product.deleted' = 67, 'pos.payment.created' = 68, 'pos.payment.updated' = 69, 'pos.payment.deleted' = 70, 'pos.merchant.created' = 71, 'pos.merchant.updated' = 72, 'pos.merchant.deleted' = 73, 'pos.location.created' = 74, 'pos.location.updated' = 75, 'pos.location.deleted' = 76, 'pos.item.created' = 77, 'pos.item.updated' = 78, 'pos.item.deleted' = 79, 'pos.modifier.created' = 80, 'pos.modifier.updated' = 81, 'pos.modifier.deleted' = 82, 'pos.modifier-group.created' = 83, 'pos.modifier-group.updated' = 84, 'pos.modifier-group.deleted' = 85, 'hris.employee.created' = 86, 'hris.employee.updated' = 87, 'hris.employee.deleted' = 88, 'hris.employee.terminated' = 89, 'hris.company.created' = 90, 'hris.company.updated' = 91, 'hris.company.deleted' = 92, 'file-storage.file.created' = 93, 'file-storage.file.updated' = 94, 'file-storage.file.deleted' = 95, 'issue-tracking.ticket.created' = 96, 'issue-tracking.ticket.updated' = 97, 'issue-tracking.ticket.deleted' = 98, 'ats.application.created' = 99, 'ats.application.updated' = 100, 'ats.application.deleted' = 101 }

	export enum CreateWebhookRequestStatus { enabled = 0, disabled = 1 }

	export enum CreateWebhookRequestUnified_api { accounting = 0, ats = 1, calendar = 2, crm = 3, csp = 4, 'customer-support' = 5, ecommerce = 6, email = 7, 'email-marketing' = 8, 'expense-management' = 9, 'file-storage' = 10, form = 11, hris = 12, lead = 13, payroll = 14, pos = 15, procurement = 16, 'project-management' = 17, script = 18, sms = 19, spreadsheet = 20, 'team-messaging' = 21, 'issue-tracking' = 22, 'time-registration' = 23, 'transactional-email' = 24, vault = 25, 'data-warehouse' = 26 }

	export interface CreateWebhookResponse {

		/** Required */
		data: Webhook;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;
	}
	export interface CreateWebhookResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateWebhookResponseFormGroup() {
		return new FormGroup<CreateWebhookResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Webhook {

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/**
		 * The delivery url of the webhook endpoint.
		 * Required
		 */
		delivery_url: string;

		/** A description of the object. */
		description?: string | null;

		/** Indicates if the webhook has has been disabled as it reached its retry limit or if account is over the usage allocated by it's plan. */
		disabled_reason?: WebhookDisabled_reason | null;

		/**
		 * The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.
		 * Required
		 */
		events: Array<WebhookEventType>;

		/**
		 * The Unify Base URL events from connectors will be sent to after service id is appended.
		 * Required
		 */
		execute_base_url: string;
		id?: string | null;

		/**
		 * The status of the webhook.
		 * Required
		 */
		status: CreateWebhookRequestStatus;

		/**
		 * Name of Apideck Unified API
		 * Required
		 */
		unified_api: CreateWebhookRequestUnified_api;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;
	}
	export interface WebhookFormProperties {

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/**
		 * The delivery url of the webhook endpoint.
		 * Required
		 */
		delivery_url: FormControl<string | null | undefined>,

		/** A description of the object. */
		description: FormControl<string | null | undefined>,

		/** Indicates if the webhook has has been disabled as it reached its retry limit or if account is over the usage allocated by it's plan. */
		disabled_reason: FormControl<WebhookDisabled_reason | null | undefined>,

		/**
		 * The Unify Base URL events from connectors will be sent to after service id is appended.
		 * Required
		 */
		execute_base_url: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/**
		 * The status of the webhook.
		 * Required
		 */
		status: FormControl<CreateWebhookRequestStatus | null | undefined>,

		/**
		 * Name of Apideck Unified API
		 * Required
		 */
		unified_api: FormControl<CreateWebhookRequestUnified_api | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateWebhookFormGroup() {
		return new FormGroup<WebhookFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			delivery_url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(https?)://')]),
			description: new FormControl<string | null | undefined>(undefined),
			disabled_reason: new FormControl<WebhookDisabled_reason | null | undefined>(undefined),
			execute_base_url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(https?)://')]),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CreateWebhookRequestStatus | null | undefined>(undefined, [Validators.required]),
			unified_api: new FormControl<CreateWebhookRequestUnified_api | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum WebhookDisabled_reason { none = 0, retry_limit = 1, usage_limit = 2 }

	export interface DeleteWebhookResponse {

		/** Required */
		data: Webhook;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;
	}
	export interface DeleteWebhookResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteWebhookResponseFormGroup() {
		return new FormGroup<DeleteWebhookResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExecuteWebhookEventRequest {
	}
	export interface ExecuteWebhookEventRequestFormProperties {
	}
	export function CreateExecuteWebhookEventRequestFormGroup() {
		return new FormGroup<ExecuteWebhookEventRequestFormProperties>({
		});

	}

	export interface ExecuteWebhookResponse {

		/** UUID of the request received */
		request_id?: string | null;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;

		/** ISO Datetime webhook event was received */
		timestamp?: string | null;
	}
	export interface ExecuteWebhookResponseFormProperties {

		/** UUID of the request received */
		request_id: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,

		/** ISO Datetime webhook event was received */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateExecuteWebhookResponseFormGroup() {
		return new FormGroup<ExecuteWebhookResponseFormProperties>({
			request_id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetWebhookEventLogsResponse {

		/** Required */
		data: Array<WebhookEventLog>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;
	}
	export interface GetWebhookEventLogsResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetWebhookEventLogsResponseFormGroup() {
		return new FormGroup<GetWebhookEventLogsResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebhookEventLog {

		/** ID of your Apideck Application */
		application_id?: string | null;

		/** record of each attempt to call webhook endpoint */
		WebhookEventLogAttempts?: Array<WebhookEventLogAttempts>;

		/** Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID. */
		consumer_id?: string | null;

		/** The URL of the webhook endpoint. */
		endpoint?: string | null;

		/** Name of the Entity described by the attributes delivered within payload */
		entity_type?: string | null;

		/** Name of source event that webhook is subscribed to. */
		event_type?: string | null;

		/** Number of attempts webhook endpoint was called before a success was returned or eventually failed */
		execution_attempt?: number | null;

		/** HTTP Method of request to endpoint. */
		http_method?: string | null;
		id?: string | null;

		/** The JSON stringified payload that was delivered to the webhook endpoint. */
		request_body?: string | null;

		/** The JSON stringified response that was returned from the webhook endpoint. */
		response_body?: string | null;

		/** If the request has not hit the max retry limit and will be retried. */
		retry_scheduled?: boolean | null;

		/** Apideck service provider associated with event. */
		service?: WebhookEventLogService;

		/** HTTP Status code that was returned. */
		status_code?: number | null;

		/** Whether or not the request was successful. */
		success?: boolean | null;

		/** ISO Date and time when the request was made. */
		timestamp?: string | null;

		/** Name of Apideck Unified API */
		unified_api?: CreateWebhookRequestUnified_api | null;
	}
	export interface WebhookEventLogFormProperties {

		/** ID of your Apideck Application */
		application_id: FormControl<string | null | undefined>,

		/** Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn't exist yet, Vault will upsert a consumer based on your ID. */
		consumer_id: FormControl<string | null | undefined>,

		/** The URL of the webhook endpoint. */
		endpoint: FormControl<string | null | undefined>,

		/** Name of the Entity described by the attributes delivered within payload */
		entity_type: FormControl<string | null | undefined>,

		/** Name of source event that webhook is subscribed to. */
		event_type: FormControl<string | null | undefined>,

		/** Number of attempts webhook endpoint was called before a success was returned or eventually failed */
		execution_attempt: FormControl<number | null | undefined>,

		/** HTTP Method of request to endpoint. */
		http_method: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** The JSON stringified payload that was delivered to the webhook endpoint. */
		request_body: FormControl<string | null | undefined>,

		/** The JSON stringified response that was returned from the webhook endpoint. */
		response_body: FormControl<string | null | undefined>,

		/** If the request has not hit the max retry limit and will be retried. */
		retry_scheduled: FormControl<boolean | null | undefined>,

		/** HTTP Status code that was returned. */
		status_code: FormControl<number | null | undefined>,

		/** Whether or not the request was successful. */
		success: FormControl<boolean | null | undefined>,

		/** ISO Date and time when the request was made. */
		timestamp: FormControl<string | null | undefined>,

		/** Name of Apideck Unified API */
		unified_api: FormControl<CreateWebhookRequestUnified_api | null | undefined>,
	}
	export function CreateWebhookEventLogFormGroup() {
		return new FormGroup<WebhookEventLogFormProperties>({
			application_id: new FormControl<string | null | undefined>(undefined),
			consumer_id: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(https?)://')]),
			entity_type: new FormControl<string | null | undefined>(undefined),
			event_type: new FormControl<string | null | undefined>(undefined),
			execution_attempt: new FormControl<number | null | undefined>(undefined),
			http_method: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			request_body: new FormControl<string | null | undefined>(undefined),
			response_body: new FormControl<string | null | undefined>(undefined),
			retry_scheduled: new FormControl<boolean | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			unified_api: new FormControl<CreateWebhookRequestUnified_api | null | undefined>(undefined),
		});

	}

	export interface WebhookEventLogAttempts {

		/** Number of attempts webhook endpoint was called before a success was returned or eventually failed */
		execution_attempt?: number | null;

		/** HTTP Status code that was returned. */
		status_code?: number | null;

		/** Whether or not the request was successful. */
		success?: boolean | null;

		/** ISO Date and time when the request was made. */
		timestamp?: string | null;
	}
	export interface WebhookEventLogAttemptsFormProperties {

		/** Number of attempts webhook endpoint was called before a success was returned or eventually failed */
		execution_attempt: FormControl<number | null | undefined>,

		/** HTTP Status code that was returned. */
		status_code: FormControl<number | null | undefined>,

		/** Whether or not the request was successful. */
		success: FormControl<boolean | null | undefined>,

		/** ISO Date and time when the request was made. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateWebhookEventLogAttemptsFormGroup() {
		return new FormGroup<WebhookEventLogAttemptsFormProperties>({
			execution_attempt: new FormControl<number | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebhookEventLogService {

		/**
		 * Apideck service provider id.
		 * Required
		 */
		id: string;

		/**
		 * Apideck service provider name.
		 * Required
		 */
		name: string;
	}
	export interface WebhookEventLogServiceFormProperties {

		/**
		 * Apideck service provider id.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Apideck service provider name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWebhookEventLogServiceFormGroup() {
		return new FormGroup<WebhookEventLogServiceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Links to navigate to previous or next pages through the API */
	export interface Links {

		/** Link to navigate to the current page through the API */
		current?: string | null;

		/** Link to navigate to the previous page through the API */
		next?: string | null;

		/** Link to navigate to the previous page through the API */
		previous?: string | null;
	}

	/** Links to navigate to previous or next pages through the API */
	export interface LinksFormProperties {

		/** Link to navigate to the current page through the API */
		current: FormControl<string | null | undefined>,

		/** Link to navigate to the previous page through the API */
		next: FormControl<string | null | undefined>,

		/** Link to navigate to the previous page through the API */
		previous: FormControl<string | null | undefined>,
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
			current: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response metadata */
	export interface Meta {

		/** Cursors to navigate to previous or next pages through the API */
		cursors?: MetaCursors;

		/** Number of items returned in the data property of the response */
		items_on_page?: number | null;
	}

	/** Response metadata */
	export interface MetaFormProperties {

		/** Number of items returned in the data property of the response */
		items_on_page: FormControl<number | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			items_on_page: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MetaCursors {

		/** Cursor to navigate to the current page of results through the API */
		current?: string | null;

		/** Cursor to navigate to the next page of results through the API */
		next?: string | null;

		/** Cursor to navigate to the previous page of results through the API */
		previous?: string | null;
	}
	export interface MetaCursorsFormProperties {

		/** Cursor to navigate to the current page of results through the API */
		current: FormControl<string | null | undefined>,

		/** Cursor to navigate to the next page of results through the API */
		next: FormControl<string | null | undefined>,

		/** Cursor to navigate to the previous page of results through the API */
		previous: FormControl<string | null | undefined>,
	}
	export function CreateMetaCursorsFormGroup() {
		return new FormGroup<MetaCursorsFormProperties>({
			current: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetWebhookResponse {

		/** Required */
		data: Webhook;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;
	}
	export interface GetWebhookResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetWebhookResponseFormGroup() {
		return new FormGroup<GetWebhookResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetWebhooksResponse {

		/** Required */
		data: Array<Webhook>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;
	}
	export interface GetWebhooksResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetWebhooksResponseFormGroup() {
		return new FormGroup<GetWebhooksResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NotFoundResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface NotFoundResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/** HTTP status code */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateNotFoundResponseFormGroup() {
		return new FormGroup<NotFoundResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotImplementedResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface NotImplementedResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/** HTTP status code */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateNotImplementedResponseFormGroup() {
		return new FormGroup<NotImplementedResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentRequiredResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface PaymentRequiredResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/** HTTP status code */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreatePaymentRequiredResponseFormGroup() {
		return new FormGroup<PaymentRequiredResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResolveWebhookEventRequest {
	}
	export interface ResolveWebhookEventRequestFormProperties {
	}
	export function CreateResolveWebhookEventRequestFormGroup() {
		return new FormGroup<ResolveWebhookEventRequestFormProperties>({
		});

	}

	export interface ResolveWebhookResponse {

		/** UUID of the request received */
		request_id?: string | null;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;

		/** ISO Datetime webhook event was received */
		timestamp?: string | null;
	}
	export interface ResolveWebhookResponseFormProperties {

		/** UUID of the request received */
		request_id: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,

		/** ISO Datetime webhook event was received */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateResolveWebhookResponseFormGroup() {
		return new FormGroup<ResolveWebhookResponseFormProperties>({
			request_id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of the webhook. */
	export enum Status { enabled = 0, disabled = 1 }

	export interface UnauthorizedResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface UnauthorizedResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/** HTTP status code */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateUnauthorizedResponseFormGroup() {
		return new FormGroup<UnauthorizedResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnexpectedErrorResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface UnexpectedErrorResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/** HTTP status code */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateUnexpectedErrorResponseFormGroup() {
		return new FormGroup<UnexpectedErrorResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Name of Apideck Unified API */
	export enum UnifiedApiId { accounting = 0, ats = 1, calendar = 2, crm = 3, csp = 4, 'customer-support' = 5, ecommerce = 6, email = 7, 'email-marketing' = 8, 'expense-management' = 9, 'file-storage' = 10, form = 11, hris = 12, lead = 13, payroll = 14, pos = 15, procurement = 16, 'project-management' = 17, script = 18, sms = 19, spreadsheet = 20, 'team-messaging' = 21, 'issue-tracking' = 22, 'time-registration' = 23, 'transactional-email' = 24, vault = 25, 'data-warehouse' = 26 }

	export interface UnprocessableResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/** HTTP status code */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface UnprocessableResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/** HTTP status code */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessableResponseFormGroup() {
		return new FormGroup<UnprocessableResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWebhookRequest {

		/** The delivery url of the webhook endpoint. */
		delivery_url?: string | null;

		/** A description of the object. */
		description?: string | null;

		/** The list of subscribed events for this webhook. [`*`] indicates that all events are enabled. */
		events?: Array<WebhookEventType>;

		/** The status of the webhook. */
		status?: CreateWebhookRequestStatus | null;
	}
	export interface UpdateWebhookRequestFormProperties {

		/** The delivery url of the webhook endpoint. */
		delivery_url: FormControl<string | null | undefined>,

		/** A description of the object. */
		description: FormControl<string | null | undefined>,

		/** The status of the webhook. */
		status: FormControl<CreateWebhookRequestStatus | null | undefined>,
	}
	export function CreateUpdateWebhookRequestFormGroup() {
		return new FormGroup<UpdateWebhookRequestFormProperties>({
			delivery_url: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(https?)://')]),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CreateWebhookRequestStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateWebhookResponse {

		/** Required */
		data: Webhook;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: number;
	}
	export interface UpdateWebhookResponseFormProperties {

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateWebhookResponseFormGroup() {
		return new FormGroup<UpdateWebhookResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebhookEvent {

		/** The service provider's ID of the entity that triggered this event */
		entity_id?: string | null;

		/** The type entity that triggered this event */
		entity_type?: string | null;

		/** The url to retrieve entity detail. */
		entity_url?: string | null;

		/** Unique reference to this request event */
		event_id?: string | null;
		event_type?: WebhookEventType | null;

		/** The current count this request event has been attempted */
		execution_attempt?: number | null;

		/** ISO Datetime for when the original event occurred */
		occurred_at?: Date | null;

		/** Service provider identifier */
		service_id?: string | null;
	}
	export interface WebhookEventFormProperties {

		/** The service provider's ID of the entity that triggered this event */
		entity_id: FormControl<string | null | undefined>,

		/** The type entity that triggered this event */
		entity_type: FormControl<string | null | undefined>,

		/** The url to retrieve entity detail. */
		entity_url: FormControl<string | null | undefined>,

		/** Unique reference to this request event */
		event_id: FormControl<string | null | undefined>,
		event_type: FormControl<WebhookEventType | null | undefined>,

		/** The current count this request event has been attempted */
		execution_attempt: FormControl<number | null | undefined>,

		/** ISO Datetime for when the original event occurred */
		occurred_at: FormControl<Date | null | undefined>,

		/** Service provider identifier */
		service_id: FormControl<string | null | undefined>,
	}
	export function CreateWebhookEventFormGroup() {
		return new FormGroup<WebhookEventFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<string | null | undefined>(undefined),
			entity_url: new FormControl<string | null | undefined>(undefined),
			event_id: new FormControl<string | null | undefined>(undefined),
			event_type: new FormControl<WebhookEventType | null | undefined>(undefined),
			execution_attempt: new FormControl<number | null | undefined>(undefined),
			occurred_at: new FormControl<Date | null | undefined>(undefined),
			service_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebhookEventLogsFilter {
		consumer_id?: string | null;
		entity_type?: string | null;
		event_type?: string | null;
		exclude_apis?: string | null;
		service?: WebhookEventLogsFilterService;
	}
	export interface WebhookEventLogsFilterFormProperties {
		consumer_id: FormControl<string | null | undefined>,
		entity_type: FormControl<string | null | undefined>,
		event_type: FormControl<string | null | undefined>,
		exclude_apis: FormControl<string | null | undefined>,
	}
	export function CreateWebhookEventLogsFilterFormGroup() {
		return new FormGroup<WebhookEventLogsFilterFormProperties>({
			consumer_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<string | null | undefined>(undefined),
			event_type: new FormControl<string | null | undefined>(undefined),
			exclude_apis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebhookEventLogsFilterService {
		id?: string | null;
	}
	export interface WebhookEventLogsFilterServiceFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateWebhookEventLogsFilterServiceFormGroup() {
		return new FormGroup<WebhookEventLogsFilterServiceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List event logs
		 * List event logs
		 * Get webhook/logs
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @param {WebhookEventLogsFilter} filter Filter results
		 * @return {GetWebhookEventLogsResponse} EventLogs
		 */
		EventLogsAll(cursor: string | null | undefined, limit: number | null | undefined, filter: WebhookEventLogsFilter | null | undefined): Observable<GetWebhookEventLogsResponse> {
			return this.http.get<GetWebhookEventLogsResponse>(this.baseUri + 'webhook/logs?cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter, {});
		}

		/**
		 * Resolve and Execute a connection webhook
		 * Resolve a webhook based on lookup_id and then execute it
		 * Get webhook/w/{id}/{serviceId}
		 * @param {string} id JWT Webhook token that represents the connection lookupId. Signed so we know source came from us
		 * @param {string} serviceId Service provider ID.
		 * @param {string} e The name of downstream event when connector does not supply in body or header
		 * @return {ResolveWebhookResponse} Resolve Webhook
		 */
		WebhookVerify(id: string, serviceId: string, e: string | null | undefined): Observable<ResolveWebhookResponse> {
			return this.http.get<ResolveWebhookResponse>(this.baseUri + 'webhook/w/' + (id == null ? '' : encodeURIComponent(id)) + '/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '&e=' + (e == null ? '' : encodeURIComponent(e)), {});
		}

		/**
		 * Resolve and Execute a connection webhook
		 * Resolve a webhook based on lookup_id and then execute it
		 * Post webhook/w/{id}/{serviceId}
		 * @param {string} id JWT Webhook token that represents the connection lookupId. Signed so we know source came from us
		 * @param {string} serviceId Service provider ID.
		 * @param {string} e The name of downstream event when connector does not supply in body or header
		 * @return {ResolveWebhookResponse} Resolve Webhook
		 */
		WebhooksResolve(id: string, serviceId: string, e: string | null | undefined, requestBody: ResolveWebhookEventRequest): Observable<ResolveWebhookResponse> {
			return this.http.post<ResolveWebhookResponse>(this.baseUri + 'webhook/w/' + (id == null ? '' : encodeURIComponent(id)) + '/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '&e=' + (e == null ? '' : encodeURIComponent(e)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List webhook subscriptions
		 * List all webhook subscriptions
		 * Get webhook/webhooks
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 * @return {GetWebhooksResponse} Webhooks
		 */
		WebhooksAll(cursor: string | null | undefined, limit: number | null | undefined): Observable<GetWebhooksResponse> {
			return this.http.get<GetWebhooksResponse>(this.baseUri + 'webhook/webhooks?cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit, {});
		}

		/**
		 * Create webhook subscription
		 * Create a webhook subscription to receive events
		 * Post webhook/webhooks
		 * @return {void} 
		 */
		WebhooksAdd(requestBody: CreateWebhookRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'webhook/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete webhook subscription
		 * Delete a webhook subscription
		 * Delete webhook/webhooks/{id}
		 * @param {string} id JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.
		 * @return {DeleteWebhookResponse} Webhooks
		 */
		WebhooksDelete(id: string): Observable<DeleteWebhookResponse> {
			return this.http.delete<DeleteWebhookResponse>(this.baseUri + 'webhook/webhooks/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get webhook subscription
		 * Get the webhook subscription details
		 * Get webhook/webhooks/{id}
		 * @param {string} id JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.
		 * @return {GetWebhookResponse} Webhooks
		 */
		WebhooksOne(id: string): Observable<GetWebhookResponse> {
			return this.http.get<GetWebhookResponse>(this.baseUri + 'webhook/webhooks/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update webhook subscription
		 * Update a webhook subscription
		 * Patch webhook/webhooks/{id}
		 * @param {string} id JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.
		 * @return {UpdateWebhookResponse} Webhooks
		 */
		WebhooksUpdate(id: string, requestBody: UpdateWebhookRequest): Observable<UpdateWebhookResponse> {
			return this.http.patch<UpdateWebhookResponse>(this.baseUri + 'webhook/webhooks/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Execute a webhook
		 * Execute a webhook
		 * Post webhook/webhooks/{id}/execute/{serviceId}
		 * @param {string} id JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.
		 * @param {string} serviceId Service provider ID.
		 * @return {ExecuteWebhookResponse} Execute Webhook
		 */
		WebhooksExecute(id: string, serviceId: string, requestBody: ExecuteWebhookEventRequest): Observable<ExecuteWebhookResponse> {
			return this.http.post<ExecuteWebhookResponse>(this.baseUri + 'webhook/webhooks/' + (id == null ? '' : encodeURIComponent(id)) + '/execute/' + (serviceId == null ? '' : encodeURIComponent(serviceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Execute a webhook
		 * Execute a webhook
		 * Post webhook/webhooks/{id}/x/{serviceId}
		 * @param {string} id JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.
		 * @param {string} serviceId Service provider ID.
		 * @param {string} l_id Unique identifier to used to look up consumer/connection when receiving connector events from downstream.
		 * @param {string} e The name of downstream event when connector does not supply in body or header
		 * @return {ExecuteWebhookResponse} Execute Webhook
		 */
		WebhooksShortExecute(id: string, serviceId: string, l_id: string | null | undefined, e: string | null | undefined, requestBody: ExecuteWebhookEventRequest): Observable<ExecuteWebhookResponse> {
			return this.http.post<ExecuteWebhookResponse>(this.baseUri + 'webhook/webhooks/' + (id == null ? '' : encodeURIComponent(id)) + '/x/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '&l_id=' + (l_id == null ? '' : encodeURIComponent(l_id)) + '&e=' + (e == null ? '' : encodeURIComponent(e)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

