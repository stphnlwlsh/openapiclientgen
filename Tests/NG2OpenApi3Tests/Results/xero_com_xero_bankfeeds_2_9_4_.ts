import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** ISO-3166 alpha-2 country code, e.g. US, AU This element is required only when the Application supports multi-region. Talk to your Partner Manager to confirm if this is the case. */
	export enum CountryCode { AD = 0, AE = 1, AF = 2, AG = 3, AI = 4, AL = 5, AM = 6, AN = 7, AO = 8, AQ = 9, AR = 10, AS = 11, AT = 12, AU = 13, AW = 14, AZ = 15, BA = 16, BB = 17, BD = 18, BE = 19, BF = 20, BG = 21, BH = 22, BI = 23, BJ = 24, BL = 25, BM = 26, BN = 27, BO = 28, BR = 29, BS = 30, BT = 31, BW = 32, BY = 33, BZ = 34, CA = 35, CC = 36, CD = 37, CF = 38, CG = 39, CH = 40, CI = 41, CK = 42, CL = 43, CM = 44, CN = 45, CO = 46, CR = 47, CU = 48, CV = 49, CW = 50, CX = 51, CY = 52, CZ = 53, DE = 54, DJ = 55, DK = 56, DM = 57, DO = 58, DZ = 59, EC = 60, EE = 61, EG = 62, EH = 63, ER = 64, ES = 65, ET = 66, FI = 67, FJ = 68, FK = 69, FM = 70, FO = 71, FR = 72, GA = 73, GB = 74, GD = 75, GE = 76, GG = 77, GH = 78, GI = 79, GL = 80, GM = 81, GN = 82, GQ = 83, GR = 84, GT = 85, GU = 86, GW = 87, GY = 88, HK = 89, HN = 90, HR = 91, HT = 92, HU = 93, ID = 94, IE = 95, IL = 96, IM = 97, IN = 98, IO = 99, IQ = 100, IR = 101, IS = 102, IT = 103, JE = 104, JM = 105, JO = 106, JP = 107, KE = 108, KG = 109, KH = 110, KI = 111, KM = 112, KN = 113, KP = 114, KR = 115, KW = 116, KY = 117, KZ = 118, LA = 119, LB = 120, LC = 121, LI = 122, LK = 123, LR = 124, LS = 125, LT = 126, LU = 127, LV = 128, LY = 129, MA = 130, MC = 131, MD = 132, ME = 133, MF = 134, MG = 135, MH = 136, MK = 137, ML = 138, MM = 139, MN = 140, MO = 141, MP = 142, MR = 143, MS = 144, MT = 145, MU = 146, MV = 147, MW = 148, MX = 149, MY = 150, MZ = 151, NA = 152, NC = 153, NE = 154, NG = 155, NI = 156, NL = 157, NO = 158, NP = 159, NR = 160, NU = 161, NZ = 162, OM = 163, PA = 164, PE = 165, PF = 166, PG = 167, PH = 168, PK = 169, PL = 170, PM = 171, PN = 172, PR = 173, PS = 174, PT = 175, PW = 176, PY = 177, QA = 178, RE = 179, RO = 180, RS = 181, RU = 182, RW = 183, SA = 184, SB = 185, SC = 186, SD = 187, SE = 188, SG = 189, SH = 190, SI = 191, SJ = 192, SK = 193, SL = 194, SM = 195, SN = 196, SO = 197, SR = 198, SS = 199, ST = 200, SV = 201, SX = 202, SY = 203, SZ = 204, TC = 205, TD = 206, TG = 207, TH = 208, TJ = 209, TK = 210, TL = 211, TM = 212, TN = 213, TO = 214, TR = 215, TT = 216, TV = 217, TW = 218, TZ = 219, UA = 220, UG = 221, US = 222, UY = 223, UZ = 224, VA = 225, VC = 226, VE = 227, VG = 228, VI = 229, VN = 230, VU = 231, WF = 232, WS = 233, XK = 234, YE = 235, YT = 236, ZA = 237, ZM = 238, ZW = 239 }


	/** If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer. */
	export enum CreditDebitIndicator { CREDIT = 0, DEBIT = 1 }


	/** 3 letter alpha code for the ISO-4217 currency code, e.g. USD, AUD. */
	export enum CurrencyCode { AED = 0, AFN = 1, ALL = 2, AMD = 3, ANG = 4, AOA = 5, ARS = 6, AUD = 7, AWG = 8, AZN = 9, BAM = 10, BBD = 11, BDT = 12, BGN = 13, BHD = 14, BIF = 15, BMD = 16, BND = 17, BOB = 18, BRL = 19, BSD = 20, BTN = 21, BWP = 22, BYN = 23, BZD = 24, CAD = 25, CDF = 26, CHF = 27, CLP = 28, CNY = 29, COP = 30, CRC = 31, CUC = 32, CUP = 33, CVE = 34, CZK = 35, DJF = 36, DKK = 37, DOP = 38, DZD = 39, EGP = 40, ERN = 41, ETB = 42, EUR = 43, FJD = 44, FKP = 45, GBP = 46, GEL = 47, GGP = 48, GHS = 49, GIP = 50, GMD = 51, GNF = 52, GTQ = 53, GYD = 54, HKD = 55, HNL = 56, HRK = 57, HTG = 58, HUF = 59, IDR = 60, ILS = 61, IMP = 62, INR = 63, IQD = 64, IRR = 65, ISK = 66, JEP = 67, JMD = 68, JOD = 69, JPY = 70, KES = 71, KGS = 72, KHR = 73, KMF = 74, KPW = 75, KRW = 76, KWD = 77, KYD = 78, KZT = 79, LAK = 80, LBP = 81, LKR = 82, LRD = 83, LSL = 84, LYD = 85, MAD = 86, MDL = 87, MGA = 88, MKD = 89, MMK = 90, MNT = 91, MOP = 92, MRU = 93, MUR = 94, MVR = 95, MWK = 96, MXN = 97, MYR = 98, MZN = 99, NAD = 100, NGN = 101, NIO = 102, NOK = 103, NPR = 104, NZD = 105, OMR = 106, PAB = 107, PEN = 108, PGK = 109, PHP = 110, PKR = 111, PLN = 112, PYG = 113, QAR = 114, RON = 115, RSD = 116, RUB = 117, RWF = 118, SAR = 119, SBD = 120, SCR = 121, SDG = 122, SEK = 123, SGD = 124, SHP = 125, SLL = 126, SOS = 127, SPL = 128, SRD = 129, STN = 130, SVC = 131, SYP = 132, SZL = 133, THB = 134, TJS = 135, TMT = 136, TND = 137, TOP = 138, TRY = 139, TTD = 140, TVD = 141, TWD = 142, TZS = 143, UAH = 144, UGX = 145, USD = 146, UYU = 147, UZS = 148, VEF = 149, VND = 150, VUV = 151, WST = 152, XAF = 153, XCD = 154, XDR = 155, XOF = 156, XPF = 157, YER = 158, ZAR = 159, ZMW = 160, ZMK = 161, ZWD = 162, '' = 163 }


	/** The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount. */
	export interface EndBalance {
		amount?: number | null;

		/** If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer. */
		creditDebitIndicator?: CreditDebitIndicator | null;
	}

	/** The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount. */
	export interface EndBalanceFormProperties {
		amount: FormControl<number | null | undefined>,

		/** If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer. */
		creditDebitIndicator: FormControl<CreditDebitIndicator | null | undefined>,
	}
	export function CreateEndBalanceFormGroup() {
		return new FormGroup<EndBalanceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			creditDebitIndicator: new FormControl<CreditDebitIndicator | null | undefined>(undefined),
		});

	}


	/** On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json. */
	export interface Error {

		/**
		 * Human readable detailed error description.
		 * Maximum: 255
		 */
		detail?: string | null;

		/** The numeric HTTP Status Code, e.g. 404 */
		status?: number | null;

		/**
		 * Human readable high level error description.
		 * Maximum: 255
		 */
		title?: string | null;

		/** Identifies the type of error. */
		type?: ErrorType | null;
	}

	/** On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json. */
	export interface ErrorFormProperties {

		/**
		 * Human readable detailed error description.
		 * Maximum: 255
		 */
		detail: FormControl<string | null | undefined>,

		/** The numeric HTTP Status Code, e.g. 404 */
		status: FormControl<number | null | undefined>,

		/**
		 * Human readable high level error description.
		 * Maximum: 255
		 */
		title: FormControl<string | null | undefined>,

		/** Identifies the type of error. */
		type: FormControl<ErrorType | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ErrorType | null | undefined>(undefined),
		});

	}

	export enum ErrorType { 'invalid-request' = 0, 'invalid-application' = 1, 'invalid-feed-connection' = 2, 'duplicate-statement' = 3, 'invalid-end-balance' = 4, 'invalid-start-and-end-date' = 5, 'invalid-start-date' = 6, 'internal-error' = 7, 'feed-already-connected-in-current-organisation' = 8, 'invalid-end-date' = 9, 'statement-not-found' = 10, 'feed-connected-in-different-organisation' = 11, 'feed-already-connected-in-different-organisation' = 12, 'bank-feed-not-found' = 13, 'invalid-country-specified' = 14, 'invalid-organisation-bank-feeds' = 15, 'invalid-organisation-multi-currency' = 16, 'invalid-feed-connection-for-organisation' = 17, 'invalid-user-role' = 18, 'account-not-valid' = 19 }

	export interface FeedConnection {

		/** Xero identifier for a bank account in Xero. Must be included if AccountNumber is not specified. */
		accountId?: string | null;

		/**
		 * The Account Name will be used for the creation of a new Xero Bank Account if a matching Xero Bank Account is not found.
		 * Maximum: 30
		 */
		accountName?: string | null;

		/**
		 * String(40) when AccountType is BANK String(4) when AccountType is CREDITCARD The Account Number is used to match the feed to a Xero Bank Account. The API will create a new Xero Bank Account if a match to an existing Xero Bank Account is not found. Only the last 4 digits must be supplied for Credit Card numbers. Must be included if AccountId is not specified.
		 * Maximum: 40
		 */
		accountNumber?: string | null;

		/**
		 * This account identifier is generated by the financial institute (FI). This must be unique for your financial institute.
		 * Maximum: 50
		 */
		accountToken?: string | null;

		/** High level bank account type - BANK CREDITCARD BANK encompasses all bank account types other than credit cards. */
		accountType?: FeedConnectionAccountType | null;

		/** ISO-3166 alpha-2 country code, e.g. US, AU This element is required only when the Application supports multi-region. Talk to your Partner Manager to confirm if this is the case. */
		country?: CountryCode | null;

		/** 3 letter alpha code for the ISO-4217 currency code, e.g. USD, AUD. */
		currency?: CurrencyCode | null;

		/** On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json. */
		error?: Error;

		/** GUID used to identify the Account. */
		id?: string | null;

		/** the current status of the feed connection */
		status?: FeedConnectionStatus | null;
	}
	export interface FeedConnectionFormProperties {

		/** Xero identifier for a bank account in Xero. Must be included if AccountNumber is not specified. */
		accountId: FormControl<string | null | undefined>,

		/**
		 * The Account Name will be used for the creation of a new Xero Bank Account if a matching Xero Bank Account is not found.
		 * Maximum: 30
		 */
		accountName: FormControl<string | null | undefined>,

		/**
		 * String(40) when AccountType is BANK String(4) when AccountType is CREDITCARD The Account Number is used to match the feed to a Xero Bank Account. The API will create a new Xero Bank Account if a match to an existing Xero Bank Account is not found. Only the last 4 digits must be supplied for Credit Card numbers. Must be included if AccountId is not specified.
		 * Maximum: 40
		 */
		accountNumber: FormControl<string | null | undefined>,

		/**
		 * This account identifier is generated by the financial institute (FI). This must be unique for your financial institute.
		 * Maximum: 50
		 */
		accountToken: FormControl<string | null | undefined>,

		/** High level bank account type - BANK CREDITCARD BANK encompasses all bank account types other than credit cards. */
		accountType: FormControl<FeedConnectionAccountType | null | undefined>,

		/** ISO-3166 alpha-2 country code, e.g. US, AU This element is required only when the Application supports multi-region. Talk to your Partner Manager to confirm if this is the case. */
		country: FormControl<CountryCode | null | undefined>,

		/** 3 letter alpha code for the ISO-4217 currency code, e.g. USD, AUD. */
		currency: FormControl<CurrencyCode | null | undefined>,

		/** GUID used to identify the Account. */
		id: FormControl<string | null | undefined>,

		/** the current status of the feed connection */
		status: FormControl<FeedConnectionStatus | null | undefined>,
	}
	export function CreateFeedConnectionFormGroup() {
		return new FormGroup<FeedConnectionFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			accountToken: new FormControl<string | null | undefined>(undefined),
			accountType: new FormControl<FeedConnectionAccountType | null | undefined>(undefined),
			country: new FormControl<CountryCode | null | undefined>(undefined),
			currency: new FormControl<CurrencyCode | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<FeedConnectionStatus | null | undefined>(undefined),
		});

	}

	export enum FeedConnectionAccountType { BANK = 0, CREDITCARD = 1 }

	export enum FeedConnectionStatus { PENDING = 0, REJECTED = 1 }

	export interface FeedConnections {
		items?: Array<FeedConnection>;
		pagination?: Pagination;
	}
	export interface FeedConnectionsFormProperties {
	}
	export function CreateFeedConnectionsFormGroup() {
		return new FormGroup<FeedConnectionsFormProperties>({
		});

	}

	export interface Pagination {

		/** Number of items returned */
		itemCount?: number | null;

		/** Page number which specifies the set of records to retrieve. Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?page=2 to get the second set of the records. When page value is not a number or a negative number, by default, the first set of records is returned. */
		page?: number | null;

		/** Number of pages available */
		pageCount?: number | null;

		/** Page size which specifies how many records per page will be returned (default 50). Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?pageSize=100 to specify page size of 100. */
		pageSize?: number | null;
	}
	export interface PaginationFormProperties {

		/** Number of items returned */
		itemCount: FormControl<number | null | undefined>,

		/** Page number which specifies the set of records to retrieve. Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?page=2 to get the second set of the records. When page value is not a number or a negative number, by default, the first set of records is returned. */
		page: FormControl<number | null | undefined>,

		/** Number of pages available */
		pageCount: FormControl<number | null | undefined>,

		/** Page size which specifies how many records per page will be returned (default 50). Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?pageSize=100 to specify page size of 100. */
		pageSize: FormControl<number | null | undefined>,
	}
	export function CreatePaginationFormGroup() {
		return new FormGroup<PaginationFormProperties>({
			itemCount: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pageCount: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The starting balance of the statement */
	export interface StartBalance {

		/** decimal(19,4) unsigned Opening/closing balance amount. */
		amount?: number | null;

		/** If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer. */
		creditDebitIndicator?: CreditDebitIndicator | null;
	}

	/** The starting balance of the statement */
	export interface StartBalanceFormProperties {

		/** decimal(19,4) unsigned Opening/closing balance amount. */
		amount: FormControl<number | null | undefined>,

		/** If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer. */
		creditDebitIndicator: FormControl<CreditDebitIndicator | null | undefined>,
	}
	export function CreateStartBalanceFormGroup() {
		return new FormGroup<StartBalanceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			creditDebitIndicator: new FormControl<CreditDebitIndicator | null | undefined>(undefined),
		});

	}

	export interface Statement {

		/** The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount. */
		endBalance?: EndBalance;

		/** Closing balance date ISO-8601 YYYY-MM-DD */
		endDate?: Date | null;
		errors?: Array<Error>;

		/** The Xero generated feed connection Id that identifies the Xero Bank Account Container into which the statement should be delivered. This is obtained by calling GET FeedConnections. */
		feedConnectionId?: string | null;

		/** GUID used to identify the Statement. */
		id?: string | null;

		/** The starting balance of the statement */
		startBalance?: StartBalance;

		/** Opening balance date (can be no older than one year from the current date) ISO-8601 YYYY-MM-DD */
		startDate?: Date | null;
		statementLineCount?: number | null;
		statementLines?: Array<StatementLine>;

		/** Current status of statements */
		status?: StatementStatus | null;
	}
	export interface StatementFormProperties {

		/** Closing balance date ISO-8601 YYYY-MM-DD */
		endDate: FormControl<Date | null | undefined>,

		/** The Xero generated feed connection Id that identifies the Xero Bank Account Container into which the statement should be delivered. This is obtained by calling GET FeedConnections. */
		feedConnectionId: FormControl<string | null | undefined>,

		/** GUID used to identify the Statement. */
		id: FormControl<string | null | undefined>,

		/** Opening balance date (can be no older than one year from the current date) ISO-8601 YYYY-MM-DD */
		startDate: FormControl<Date | null | undefined>,
		statementLineCount: FormControl<number | null | undefined>,

		/** Current status of statements */
		status: FormControl<StatementStatus | null | undefined>,
	}
	export function CreateStatementFormGroup() {
		return new FormGroup<StatementFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			feedConnectionId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			statementLineCount: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<StatementStatus | null | undefined>(undefined),
		});

	}


	/** the lines details for a statement */
	export interface StatementLine {

		/** Transaction amount */
		amount?: number | null;

		/**
		 * The cheque/check number
		 * Maximum: 20
		 */
		chequeNumber?: string | null;

		/** If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer. */
		creditDebitIndicator?: CreditDebitIndicator | null;

		/**
		 * Transaction description
		 * Maximum: 2000
		 */
		description?: string | null;

		/**
		 * Typically the merchant or payee name
		 * Maximum: 255
		 */
		payeeName?: string | null;

		/** The date that the transaction was processed or cleared as seen in internet banking ISO-8601 YYYY-MM-DD */
		postedDate?: Date | null;

		/**
		 * Optional field to enhance the Description
		 * Maximum: 255
		 */
		reference?: string | null;

		/** Financial institute's internal transaction identifier. If provided this field is factored into duplicate detection. */
		transactionId?: string | null;
	}

	/** the lines details for a statement */
	export interface StatementLineFormProperties {

		/** Transaction amount */
		amount: FormControl<number | null | undefined>,

		/**
		 * The cheque/check number
		 * Maximum: 20
		 */
		chequeNumber: FormControl<string | null | undefined>,

		/** If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer. */
		creditDebitIndicator: FormControl<CreditDebitIndicator | null | undefined>,

		/**
		 * Transaction description
		 * Maximum: 2000
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Typically the merchant or payee name
		 * Maximum: 255
		 */
		payeeName: FormControl<string | null | undefined>,

		/** The date that the transaction was processed or cleared as seen in internet banking ISO-8601 YYYY-MM-DD */
		postedDate: FormControl<Date | null | undefined>,

		/**
		 * Optional field to enhance the Description
		 * Maximum: 255
		 */
		reference: FormControl<string | null | undefined>,

		/** Financial institute's internal transaction identifier. If provided this field is factored into duplicate detection. */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateStatementLineFormGroup() {
		return new FormGroup<StatementLineFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			chequeNumber: new FormControl<string | null | undefined>(undefined),
			creditDebitIndicator: new FormControl<CreditDebitIndicator | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			payeeName: new FormControl<string | null | undefined>(undefined),
			postedDate: new FormControl<Date | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StatementStatus { PENDING = 0, REJECTED = 1, DELIVERED = 2 }

	export interface Statements {
		items?: Array<Statement>;
		pagination?: Pagination;
	}
	export interface StatementsFormProperties {
	}
	export function CreateStatementsFormGroup() {
		return new FormGroup<StatementsFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Searches for feed connections
		 * By passing in the appropriate options, you can search for available feed connections in the system.
		 * Get FeedConnections
		 * @param {number} page Page number which specifies the set of records to retrieve. By default the number of the records per set is 10. Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?page=1 to get the second set of the records. When page value is not a number or a negative number, by default, the first set of records is returned.
		 * @param {number} pageSize Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?pageSize=100 to specify page size of 100.
		 * @return {void} 
		 */
		GetFeedConnections(page: number | null | undefined, pageSize: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'FeedConnections?page=' + page + '&pageSize=' + pageSize, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create one or more new feed connection
		 * By passing in the FeedConnections array object in the body, you can create one or more new feed connections
		 * Post FeedConnections
		 * @param {FeedConnections} requestBody Feed Connection(s) array object in the body
		 * @return {void} 
		 */
		CreateFeedConnections(requestBody: FeedConnections): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'FeedConnections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an existing feed connection
		 * By passing in FeedConnections array object in the body, you can delete a feed connection.
		 * Post FeedConnections/DeleteRequests
		 * @param {FeedConnections} requestBody Feed Connections array object in the body
		 * @return {void} 
		 */
		DeleteFeedConnections(requestBody: FeedConnections): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'FeedConnections/DeleteRequests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve single feed connection based on a unique id provided
		 * By passing in a FeedConnection Id options, you can search for matching feed connections
		 * Get FeedConnections/{id}
		 * @param {string} id Unique identifier for retrieving single object
		 * @return {FeedConnection} success returns a FeedConnection object matching the id in response
		 */
		GetFeedConnection(id: string): Observable<FeedConnection> {
			return this.http.get<FeedConnection>(this.baseUri + 'FeedConnections/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieve all statements
		 * By passing in parameters, you can search for matching statements
		 * Get Statements
		 * @param {number} page unique id for single object
		 * @param {number} pageSize Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?pageSize=100 to specify page size of 100.
		 * @return {Statements} success returns Statements array of objects response
		 */
		GetStatements(page: number | null | undefined, pageSize: number | null | undefined): Observable<Statements> {
			return this.http.get<Statements>(this.baseUri + 'Statements?page=' + page + '&pageSize=' + pageSize, {});
		}

		/**
		 * Creates one or more new statements
		 * Post Statements
		 * @param {Statements} requestBody Statements array of objects in the body
		 * @return {void} 
		 */
		CreateStatements(requestBody: Statements): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'Statements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve single statement based on unique id provided
		 * By passing in a statement id, you can search for matching statements
		 * Get Statements/{statementID}
		 * @param {string} statementId statement id for single object
		 * @return {Statement} search results matching id for single statement
		 */
		GetStatement(statementId: string, statementID: string): Observable<Statement> {
			return this.http.get<Statement>(this.baseUri + 'Statements/' + (statementID == null ? '' : encodeURIComponent(statementID)) + '?statementId=' + (statementId == null ? '' : encodeURIComponent(statementId)), {});
		}
	}

}

