import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface File {
	}
	export interface FileFormProperties {
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
		});

	}


	/** Links relevant to the payload */
	export interface Links {
		First?: string | null;
		Last?: string | null;
		Next?: string | null;
		Prev?: string | null;

		/** Required */
		Self: string;
	}

	/** Links relevant to the payload */
	export interface LinksFormProperties {
		First: FormControl<string | null | undefined>,
		Last: FormControl<string | null | undefined>,
		Next: FormControl<string | null | undefined>,
		Prev: FormControl<string | null | undefined>,

		/** Required */
		Self: FormControl<string | null | undefined>,
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
			First: new FormControl<string | null | undefined>(undefined),
			Last: new FormControl<string | null | undefined>(undefined),
			Next: new FormControl<string | null | undefined>(undefined),
			Prev: new FormControl<string | null | undefined>(undefined),
			Self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Meta Data relevant to the payload */
	export interface Meta {

		/**
		 * All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FirstAvailableDateTime?: Date | null;

		/**
		 * All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastAvailableDateTime?: Date | null;
		TotalPages?: number | null;
	}

	/** Meta Data relevant to the payload */
	export interface MetaFormProperties {

		/**
		 * All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FirstAvailableDateTime: FormControl<Date | null | undefined>,

		/**
		 * All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastAvailableDateTime: FormControl<Date | null | undefined>,
		TotalPages: FormControl<number | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			FirstAvailableDateTime: new FormControl<Date | null | undefined>(undefined),
			LastAvailableDateTime: new FormControl<Date | null | undefined>(undefined),
			TotalPages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Model {
		id?: number | null;
	}
	export interface ModelFormProperties {
		id: FormControl<number | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Unambiguous identification of the account to which credit and debit entries are made. */
	export interface OBAccount4 {
		OBAccount4Account?: Array<OBAccount4Account>;

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * Specifies the sub type of account (product family group).
		 * Required
		 */
		AccountSubType: OBAccount4AccountSubType;

		/**
		 * Specifies the type of account (personal or business).
		 * Required
		 */
		AccountType: OBAccount4AccountType;

		/**
		 * Identification of the currency in which the account is held.
		 * Usage: Currency should only be used in case one and the same account number covers several currencies
		 * and the initiating party needs to identify which currency needs to be used for settlement on the account.
		 * Required
		 */
		Currency: string;

		/**
		 * Specifies the description of the account type.
		 * Max length: 35
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Nickname?: string | null;

		/** Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account. */
		Servicer?: OBBranchAndFinancialInstitutionIdentification5_0;

		/** Specifies the status of account resource in code form. */
		Status?: OBAccount4Status | null;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		StatusUpdateDateTime?: Date | null;
	}

	/** Unambiguous identification of the account to which credit and debit entries are made. */
	export interface OBAccount4FormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Specifies the sub type of account (product family group).
		 * Required
		 */
		AccountSubType: FormControl<OBAccount4AccountSubType | null | undefined>,

		/**
		 * Specifies the type of account (personal or business).
		 * Required
		 */
		AccountType: FormControl<OBAccount4AccountType | null | undefined>,

		/**
		 * Identification of the currency in which the account is held.
		 * Usage: Currency should only be used in case one and the same account number covers several currencies
		 * and the initiating party needs to identify which currency needs to be used for settlement on the account.
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,

		/**
		 * Specifies the description of the account type.
		 * Max length: 35
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Nickname: FormControl<string | null | undefined>,

		/** Specifies the status of account resource in code form. */
		Status: FormControl<OBAccount4Status | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBAccount4FormGroup() {
		return new FormGroup<OBAccount4FormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			AccountSubType: new FormControl<OBAccount4AccountSubType | null | undefined>(undefined, [Validators.required]),
			AccountType: new FormControl<OBAccount4AccountType | null | undefined>(undefined, [Validators.required]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Nickname: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			Status: new FormControl<OBAccount4Status | null | undefined>(undefined),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBAccount4Account {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: string;

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification?: string | null;
	}
	export interface OBAccount4AccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: FormControl<string | null | undefined>,

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification: FormControl<string | null | undefined>,
	}
	export function CreateOBAccount4AccountFormGroup() {
		return new FormGroup<OBAccount4AccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}

	export enum OBAccount4AccountSubType { ChargeCard = 0, CreditCard = 1, CurrentAccount = 2, EMoney = 3, Loan = 4, Mortgage = 5, PrePaidCard = 6, Savings = 7 }

	export enum OBAccount4AccountType { Business = 0, Personal = 1 }


	/** Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account. */
	export interface OBBranchAndFinancialInstitutionIdentification5_0 {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: string;
	}

	/** Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account. */
	export interface OBBranchAndFinancialInstitutionIdentification5_0FormProperties {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBBranchAndFinancialInstitutionIdentification5_0FormGroup() {
		return new FormGroup<OBBranchAndFinancialInstitutionIdentification5_0FormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OBAccount4Status { Deleted = 0, Disabled = 1, Enabled = 2, Pending = 3, ProForma = 4 }


	/** Unambiguous identification of the account to which credit and debit entries are made. */
	export interface OBAccount4Basic {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * Specifies the sub type of account (product family group).
		 * Required
		 */
		AccountSubType: OBAccount4AccountSubType;

		/**
		 * Specifies the type of account (personal or business).
		 * Required
		 */
		AccountType: OBAccount4AccountType;

		/**
		 * Identification of the currency in which the account is held.
		 * Usage: Currency should only be used in case one and the same account number covers several currencies
		 * and the initiating party needs to identify which currency needs to be used for settlement on the account.
		 * Required
		 */
		Currency: string;

		/**
		 * Specifies the description of the account type.
		 * Max length: 35
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Nickname?: string | null;

		/** Specifies the status of account resource in code form. */
		Status?: OBAccount4Status | null;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		StatusUpdateDateTime?: Date | null;
	}

	/** Unambiguous identification of the account to which credit and debit entries are made. */
	export interface OBAccount4BasicFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Specifies the sub type of account (product family group).
		 * Required
		 */
		AccountSubType: FormControl<OBAccount4AccountSubType | null | undefined>,

		/**
		 * Specifies the type of account (personal or business).
		 * Required
		 */
		AccountType: FormControl<OBAccount4AccountType | null | undefined>,

		/**
		 * Identification of the currency in which the account is held.
		 * Usage: Currency should only be used in case one and the same account number covers several currencies
		 * and the initiating party needs to identify which currency needs to be used for settlement on the account.
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,

		/**
		 * Specifies the description of the account type.
		 * Max length: 35
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Nickname: FormControl<string | null | undefined>,

		/** Specifies the status of account resource in code form. */
		Status: FormControl<OBAccount4Status | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBAccount4BasicFormGroup() {
		return new FormGroup<OBAccount4BasicFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			AccountSubType: new FormControl<OBAccount4AccountSubType | null | undefined>(undefined, [Validators.required]),
			AccountType: new FormControl<OBAccount4AccountType | null | undefined>(undefined, [Validators.required]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Nickname: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			Status: new FormControl<OBAccount4Status | null | undefined>(undefined),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Unambiguous identification of the account to which credit and debit entries are made. */
	export interface OBAccount4Detail {

		/** Required */
		OBAccount4DetailAccount: Array<OBAccount4DetailAccount>;

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * Specifies the sub type of account (product family group).
		 * Required
		 */
		AccountSubType: OBAccount4AccountSubType;

		/**
		 * Specifies the type of account (personal or business).
		 * Required
		 */
		AccountType: OBAccount4AccountType;

		/**
		 * Identification of the currency in which the account is held.
		 * Usage: Currency should only be used in case one and the same account number covers several currencies
		 * and the initiating party needs to identify which currency needs to be used for settlement on the account.
		 * Required
		 */
		Currency: string;

		/**
		 * Specifies the description of the account type.
		 * Max length: 35
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Nickname?: string | null;

		/** Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account. */
		Servicer?: OBBranchAndFinancialInstitutionIdentification5_0;

		/** Specifies the status of account resource in code form. */
		Status?: OBAccount4Status | null;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		StatusUpdateDateTime?: Date | null;
	}

	/** Unambiguous identification of the account to which credit and debit entries are made. */
	export interface OBAccount4DetailFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Specifies the sub type of account (product family group).
		 * Required
		 */
		AccountSubType: FormControl<OBAccount4AccountSubType | null | undefined>,

		/**
		 * Specifies the type of account (personal or business).
		 * Required
		 */
		AccountType: FormControl<OBAccount4AccountType | null | undefined>,

		/**
		 * Identification of the currency in which the account is held.
		 * Usage: Currency should only be used in case one and the same account number covers several currencies
		 * and the initiating party needs to identify which currency needs to be used for settlement on the account.
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,

		/**
		 * Specifies the description of the account type.
		 * Max length: 35
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Nickname: FormControl<string | null | undefined>,

		/** Specifies the status of account resource in code form. */
		Status: FormControl<OBAccount4Status | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBAccount4DetailFormGroup() {
		return new FormGroup<OBAccount4DetailFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			AccountSubType: new FormControl<OBAccount4AccountSubType | null | undefined>(undefined, [Validators.required]),
			AccountType: new FormControl<OBAccount4AccountType | null | undefined>(undefined, [Validators.required]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Nickname: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			Status: new FormControl<OBAccount4Status | null | undefined>(undefined),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBAccount4DetailAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: string;

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification?: string | null;
	}
	export interface OBAccount4DetailAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: FormControl<string | null | undefined>,

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification: FormControl<string | null | undefined>,
	}
	export function CreateOBAccount4DetailAccountFormGroup() {
		return new FormGroup<OBAccount4DetailAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}


	/**
	 * Unambiguous identification of the account to which credit and debit entries are made. The following fields are optional only for accounts that are switched:
	 *   * Data.Currency  
	 *   * Data.AccountType  
	 *   * Data.AccountSubType
	 * For all other accounts, the fields must be populated by the ASPSP.
	 */
	export interface OBAccount6 {
		OBAccount6Account?: Array<OBAccount6Account>;

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/** Specifies the sub type of account (product family group). */
		AccountSubType?: OBAccount4AccountSubType | null;

		/** Specifies the type of account (personal or business). */
		AccountType?: OBAccount4AccountType | null;

		/**
		 * Identification of the currency in which the account is held.
		 * Usage: Currency should only be used in case one and the same account number covers several currencies
		 * and the initiating party needs to identify which currency needs to be used for settlement on the account.
		 */
		Currency?: string | null;

		/**
		 * Specifies the description of the account type.
		 * Max length: 35
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		MaturityDate?: Date | null;

		/**
		 * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Nickname?: string | null;

		/**
		 * Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		OpeningDate?: Date | null;

		/** Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account. */
		Servicer?: OBBranchAndFinancialInstitutionIdentification5_0;

		/** Specifies the status of account resource in code form. */
		Status?: OBAccount4Status | null;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		StatusUpdateDateTime?: Date | null;

		/** Specifies the switch status for the account, in a coded form. */
		SwitchStatus?: string | null;
	}

	/**
	 * Unambiguous identification of the account to which credit and debit entries are made. The following fields are optional only for accounts that are switched:
	 *   * Data.Currency  
	 *   * Data.AccountType  
	 *   * Data.AccountSubType
	 * For all other accounts, the fields must be populated by the ASPSP.
	 */
	export interface OBAccount6FormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/** Specifies the sub type of account (product family group). */
		AccountSubType: FormControl<OBAccount4AccountSubType | null | undefined>,

		/** Specifies the type of account (personal or business). */
		AccountType: FormControl<OBAccount4AccountType | null | undefined>,

		/**
		 * Identification of the currency in which the account is held.
		 * Usage: Currency should only be used in case one and the same account number covers several currencies
		 * and the initiating party needs to identify which currency needs to be used for settlement on the account.
		 */
		Currency: FormControl<string | null | undefined>,

		/**
		 * Specifies the description of the account type.
		 * Max length: 35
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		MaturityDate: FormControl<Date | null | undefined>,

		/**
		 * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Nickname: FormControl<string | null | undefined>,

		/**
		 * Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		OpeningDate: FormControl<Date | null | undefined>,

		/** Specifies the status of account resource in code form. */
		Status: FormControl<OBAccount4Status | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,

		/** Specifies the switch status for the account, in a coded form. */
		SwitchStatus: FormControl<string | null | undefined>,
	}
	export function CreateOBAccount6FormGroup() {
		return new FormGroup<OBAccount6FormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			AccountSubType: new FormControl<OBAccount4AccountSubType | null | undefined>(undefined),
			AccountType: new FormControl<OBAccount4AccountType | null | undefined>(undefined),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Z]{3,3}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			MaturityDate: new FormControl<Date | null | undefined>(undefined),
			Nickname: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			OpeningDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<OBAccount4Status | null | undefined>(undefined),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
			SwitchStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBAccount6Account {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: string;

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification?: string | null;
	}
	export interface OBAccount6AccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: FormControl<string | null | undefined>,

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification: FormControl<string | null | undefined>,
	}
	export function CreateOBAccount6AccountFormGroup() {
		return new FormGroup<OBAccount6AccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}


	/** Unambiguous identification of the account to which credit and debit entries are made. */
	export interface OBAccount6Basic {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * Specifies the sub type of account (product family group).
		 * Required
		 */
		AccountSubType: OBAccount4AccountSubType;

		/**
		 * Specifies the type of account (personal or business).
		 * Required
		 */
		AccountType: OBAccount4AccountType;

		/**
		 * Identification of the currency in which the account is held.
		 * Usage: Currency should only be used in case one and the same account number covers several currencies
		 * and the initiating party needs to identify which currency needs to be used for settlement on the account.
		 * Required
		 */
		Currency: string;

		/**
		 * Specifies the description of the account type.
		 * Max length: 35
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		MaturityDate?: Date | null;

		/**
		 * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Nickname?: string | null;

		/**
		 * Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		OpeningDate?: Date | null;

		/** Specifies the status of account resource in code form. */
		Status?: OBAccount4Status | null;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		StatusUpdateDateTime?: Date | null;

		/** Specifies the switch status for the account, in a coded form. */
		SwitchStatus?: string | null;
	}

	/** Unambiguous identification of the account to which credit and debit entries are made. */
	export interface OBAccount6BasicFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Specifies the sub type of account (product family group).
		 * Required
		 */
		AccountSubType: FormControl<OBAccount4AccountSubType | null | undefined>,

		/**
		 * Specifies the type of account (personal or business).
		 * Required
		 */
		AccountType: FormControl<OBAccount4AccountType | null | undefined>,

		/**
		 * Identification of the currency in which the account is held.
		 * Usage: Currency should only be used in case one and the same account number covers several currencies
		 * and the initiating party needs to identify which currency needs to be used for settlement on the account.
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,

		/**
		 * Specifies the description of the account type.
		 * Max length: 35
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		MaturityDate: FormControl<Date | null | undefined>,

		/**
		 * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Nickname: FormControl<string | null | undefined>,

		/**
		 * Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		OpeningDate: FormControl<Date | null | undefined>,

		/** Specifies the status of account resource in code form. */
		Status: FormControl<OBAccount4Status | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,

		/** Specifies the switch status for the account, in a coded form. */
		SwitchStatus: FormControl<string | null | undefined>,
	}
	export function CreateOBAccount6BasicFormGroup() {
		return new FormGroup<OBAccount6BasicFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			AccountSubType: new FormControl<OBAccount4AccountSubType | null | undefined>(undefined, [Validators.required]),
			AccountType: new FormControl<OBAccount4AccountType | null | undefined>(undefined, [Validators.required]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			MaturityDate: new FormControl<Date | null | undefined>(undefined),
			Nickname: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			OpeningDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<OBAccount4Status | null | undefined>(undefined),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
			SwitchStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Unambiguous identification of the account to which credit and debit entries are made. */
	export interface OBAccount6Detail {

		/** Required */
		OBAccount6DetailAccount: Array<OBAccount6DetailAccount>;

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * Specifies the sub type of account (product family group).
		 * Required
		 */
		AccountSubType: OBAccount4AccountSubType;

		/**
		 * Specifies the type of account (personal or business).
		 * Required
		 */
		AccountType: OBAccount4AccountType;

		/**
		 * Identification of the currency in which the account is held.
		 * Usage: Currency should only be used in case one and the same account number covers several currencies
		 * and the initiating party needs to identify which currency needs to be used for settlement on the account.
		 * Required
		 */
		Currency: string;

		/**
		 * Specifies the description of the account type.
		 * Max length: 35
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		MaturityDate?: Date | null;

		/**
		 * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Nickname?: string | null;

		/**
		 * Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		OpeningDate?: Date | null;

		/** Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account. */
		Servicer?: OBBranchAndFinancialInstitutionIdentification5_0;

		/** Specifies the status of account resource in code form. */
		Status?: OBAccount4Status | null;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		StatusUpdateDateTime?: Date | null;

		/** Specifies the switch status for the account, in a coded form. */
		SwitchStatus?: string | null;
	}

	/** Unambiguous identification of the account to which credit and debit entries are made. */
	export interface OBAccount6DetailFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Specifies the sub type of account (product family group).
		 * Required
		 */
		AccountSubType: FormControl<OBAccount4AccountSubType | null | undefined>,

		/**
		 * Specifies the type of account (personal or business).
		 * Required
		 */
		AccountType: FormControl<OBAccount4AccountType | null | undefined>,

		/**
		 * Identification of the currency in which the account is held.
		 * Usage: Currency should only be used in case one and the same account number covers several currencies
		 * and the initiating party needs to identify which currency needs to be used for settlement on the account.
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,

		/**
		 * Specifies the description of the account type.
		 * Max length: 35
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		MaturityDate: FormControl<Date | null | undefined>,

		/**
		 * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
		 * Max length: 70
		 * Min length: 1
		 */
		Nickname: FormControl<string | null | undefined>,

		/**
		 * Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		OpeningDate: FormControl<Date | null | undefined>,

		/** Specifies the status of account resource in code form. */
		Status: FormControl<OBAccount4Status | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,

		/** Specifies the switch status for the account, in a coded form. */
		SwitchStatus: FormControl<string | null | undefined>,
	}
	export function CreateOBAccount6DetailFormGroup() {
		return new FormGroup<OBAccount6DetailFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			AccountSubType: new FormControl<OBAccount4AccountSubType | null | undefined>(undefined, [Validators.required]),
			AccountType: new FormControl<OBAccount4AccountType | null | undefined>(undefined, [Validators.required]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			MaturityDate: new FormControl<Date | null | undefined>(undefined),
			Nickname: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			OpeningDate: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<OBAccount4Status | null | undefined>(undefined),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
			SwitchStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OBAccount6DetailAccount {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: string;

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification?: string | null;
	}
	export interface OBAccount6DetailAccountFormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: FormControl<string | null | undefined>,

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification: FormControl<string | null | undefined>,
	}
	export function CreateOBAccount6DetailAccountFormGroup() {
		return new FormGroup<OBAccount6DetailAccountFormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}


	/** Specifies the status of account resource in code form. */
	export enum OBAccountStatus1Code { Deleted = 0, Disabled = 1, Enabled = 2, Pending = 3, ProForma = 4 }


	/** The amount of the most recent direct debit collection. */
	export interface OBActiveOrHistoricCurrencyAndAmount_0 {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}

	/** The amount of the most recent direct debit collection. */
	export interface OBActiveOrHistoricCurrencyAndAmount_0FormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBActiveOrHistoricCurrencyAndAmount_0FormGroup() {
		return new FormGroup<OBActiveOrHistoricCurrencyAndAmount_0FormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}


	/**
	 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
	 * Usage: This amount has to be transported unchanged through the transaction chain.
	 */
	export interface OBActiveOrHistoricCurrencyAndAmount_1 {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}

	/**
	 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
	 * Usage: This amount has to be transported unchanged through the transaction chain.
	 */
	export interface OBActiveOrHistoricCurrencyAndAmount_1FormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBActiveOrHistoricCurrencyAndAmount_1FormGroup() {
		return new FormGroup<OBActiveOrHistoricCurrencyAndAmount_1FormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}


	/** Transaction charges to be paid by the charge bearer. */
	export interface OBActiveOrHistoricCurrencyAndAmount_10 {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}

	/** Transaction charges to be paid by the charge bearer. */
	export interface OBActiveOrHistoricCurrencyAndAmount_10FormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBActiveOrHistoricCurrencyAndAmount_10FormGroup() {
		return new FormGroup<OBActiveOrHistoricCurrencyAndAmount_10FormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}


	/** The amount of the last (most recent) Standing Order instruction. */
	export interface OBActiveOrHistoricCurrencyAndAmount_11 {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}

	/** The amount of the last (most recent) Standing Order instruction. */
	export interface OBActiveOrHistoricCurrencyAndAmount_11FormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBActiveOrHistoricCurrencyAndAmount_11FormGroup() {
		return new FormGroup<OBActiveOrHistoricCurrencyAndAmount_11FormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}


	/** The amount of the first Standing Order */
	export interface OBActiveOrHistoricCurrencyAndAmount_2 {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}

	/** The amount of the first Standing Order */
	export interface OBActiveOrHistoricCurrencyAndAmount_2FormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBActiveOrHistoricCurrencyAndAmount_2FormGroup() {
		return new FormGroup<OBActiveOrHistoricCurrencyAndAmount_2FormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}


	/** The amount of the next Standing Order. */
	export interface OBActiveOrHistoricCurrencyAndAmount_3 {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}

	/** The amount of the next Standing Order. */
	export interface OBActiveOrHistoricCurrencyAndAmount_3FormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBActiveOrHistoricCurrencyAndAmount_3FormGroup() {
		return new FormGroup<OBActiveOrHistoricCurrencyAndAmount_3FormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}


	/** The amount of the final Standing Order */
	export interface OBActiveOrHistoricCurrencyAndAmount_4 {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}

	/** The amount of the final Standing Order */
	export interface OBActiveOrHistoricCurrencyAndAmount_4FormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBActiveOrHistoricCurrencyAndAmount_4FormGroup() {
		return new FormGroup<OBActiveOrHistoricCurrencyAndAmount_4FormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}


	/** Amount of money associated with the statement benefit type. */
	export interface OBActiveOrHistoricCurrencyAndAmount_5 {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}

	/** Amount of money associated with the statement benefit type. */
	export interface OBActiveOrHistoricCurrencyAndAmount_5FormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBActiveOrHistoricCurrencyAndAmount_5FormGroup() {
		return new FormGroup<OBActiveOrHistoricCurrencyAndAmount_5FormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}


	/** Amount of money associated with the statement fee type. */
	export interface OBActiveOrHistoricCurrencyAndAmount_6 {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}

	/** Amount of money associated with the statement fee type. */
	export interface OBActiveOrHistoricCurrencyAndAmount_6FormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBActiveOrHistoricCurrencyAndAmount_6FormGroup() {
		return new FormGroup<OBActiveOrHistoricCurrencyAndAmount_6FormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}


	/** Amount of money associated with the statement interest amount type. */
	export interface OBActiveOrHistoricCurrencyAndAmount_7 {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}

	/** Amount of money associated with the statement interest amount type. */
	export interface OBActiveOrHistoricCurrencyAndAmount_7FormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBActiveOrHistoricCurrencyAndAmount_7FormGroup() {
		return new FormGroup<OBActiveOrHistoricCurrencyAndAmount_7FormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}


	/** Amount of money associated with the amount type. */
	export interface OBActiveOrHistoricCurrencyAndAmount_8 {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}

	/** Amount of money associated with the amount type. */
	export interface OBActiveOrHistoricCurrencyAndAmount_8FormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBActiveOrHistoricCurrencyAndAmount_8FormGroup() {
		return new FormGroup<OBActiveOrHistoricCurrencyAndAmount_8FormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}


	/** Amount of money in the cash transaction entry. */
	export interface OBActiveOrHistoricCurrencyAndAmount_9 {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}

	/** Amount of money in the cash transaction entry. */
	export interface OBActiveOrHistoricCurrencyAndAmount_9FormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBActiveOrHistoricCurrencyAndAmount_9FormGroup() {
		return new FormGroup<OBActiveOrHistoricCurrencyAndAmount_9FormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}


	/** Identifies the nature of the postal address. */
	export enum OBAddressTypeCode { Business = 0, Correspondence = 1, DeliveryTo = 2, MailTo = 3, POBox = 4, Postal = 5, Residential = 6, Statement = 7 }

	export interface OBBCAData1 {

		/** Details about the interest that may be payable to the BCA account holders */
		CreditInterest?: OBBCAData1CreditInterest;

		/** Contains details of fees and charges which are not associated with either Overdraft or features/benefits */
		OBBCAData1OtherFeesCharges?: Array<OBBCAData1OtherFeesCharges>;

		/** Borrowing details */
		Overdraft?: OBBCAData1Overdraft;
		ProductDetails?: OBBCAData1ProductDetails;
	}
	export interface OBBCAData1FormProperties {
	}
	export function CreateOBBCAData1FormGroup() {
		return new FormGroup<OBBCAData1FormProperties>({
		});

	}

	export interface OBBCAData1CreditInterest {

		/**
		 * The group of tiers or bands for which credit interest can be applied.
		 * Required
		 * Minimum items: 1
		 */
		OBBCAData1CreditInterestTierBandSet: Array<OBBCAData1CreditInterestTierBandSet>;
	}
	export interface OBBCAData1CreditInterestFormProperties {
	}
	export function CreateOBBCAData1CreditInterestFormGroup() {
		return new FormGroup<OBBCAData1CreditInterestFormProperties>({
		});

	}

	export interface OBBCAData1CreditInterestTierBandSet {

		/** Methods of calculating interest */
		CalculationMethod?: OBBCAData1CreditInterestTierBandSetCalculationMethod | null;

		/**
		 * Describes whether accrued interest is payable only to the BCA or to another bank account
		 * Required
		 */
		Destination: OBBCAData1CreditInterestTierBandSetDestination;

		/** Optional additional notes to supplement the Tier Band Set details */
		Notes?: Array<string>;

		/**
		 * Tier Band Details
		 * Required
		 * Minimum items: 1
		 */
		OBBCAData1CreditInterestTierBandSetTierBand: Array<OBBCAData1CreditInterestTierBandSetTierBand>;

		/**
		 * The methodology of how credit interest is paid/applied. It can be:-
		 * 1. Banded
		 * Interest rates are banded. i.e. Increasing rate on whole balance as balance increases.
		 * 2. Tiered
		 * Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.
		 * 3. Whole
		 * The same interest rate is applied irrespective of the BCA balance
		 * Required
		 */
		TierBandMethod: OBBCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage;
	}
	export interface OBBCAData1CreditInterestTierBandSetFormProperties {

		/** Methods of calculating interest */
		CalculationMethod: FormControl<OBBCAData1CreditInterestTierBandSetCalculationMethod | null | undefined>,

		/**
		 * Describes whether accrued interest is payable only to the BCA or to another bank account
		 * Required
		 */
		Destination: FormControl<OBBCAData1CreditInterestTierBandSetDestination | null | undefined>,

		/**
		 * The methodology of how credit interest is paid/applied. It can be:-
		 * 1. Banded
		 * Interest rates are banded. i.e. Increasing rate on whole balance as balance increases.
		 * 2. Tiered
		 * Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.
		 * 3. Whole
		 * The same interest rate is applied irrespective of the BCA balance
		 * Required
		 */
		TierBandMethod: FormControl<OBBCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>,
	}
	export function CreateOBBCAData1CreditInterestTierBandSetFormGroup() {
		return new FormGroup<OBBCAData1CreditInterestTierBandSetFormProperties>({
			CalculationMethod: new FormControl<OBBCAData1CreditInterestTierBandSetCalculationMethod | null | undefined>(undefined),
			Destination: new FormControl<OBBCAData1CreditInterestTierBandSetDestination | null | undefined>(undefined, [Validators.required]),
			TierBandMethod: new FormControl<OBBCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OBBCAData1CreditInterestTierBandSetCalculationMethod { Compound = 0, SimpleInterest = 1 }

	export enum OBBCAData1CreditInterestTierBandSetDestination { PayAway = 0, SelfCredit = 1 }

	export interface OBBCAData1CreditInterestTierBandSetTierBand {

		/**
		 * The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.
		 * Read more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A
		 * Required
		 */
		AER: string;

		/**
		 * How often is interest applied to the BCA for this tier/band i.e. how often the financial institution pays accumulated interest to the customer's BCA.
		 * Required
		 */
		ApplicationFrequency: OBBCAData1CreditInterestTierBandSetTierBandApplicationFrequency;

		/** Bank Interest for the BCA product */
		BankInterestRate?: string | null;

		/** Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the BCA. */
		BankInterestRateType?: OBBCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null;

		/** How often is credit interest calculated for the account. */
		CalculationFrequency?: OBBCAData1CreditInterestTierBandSetTierBandApplicationFrequency | null;

		/** Amount on which Interest applied. */
		DepositInterestAppliedCoverage?: OBBCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null;

		/**
		 * Type of interest rate, Fixed or Variable
		 * Required
		 */
		FixedVariableInterestRateType: OBBCAData1CreditInterestTierBandSetTierBandFixedVariableInterestRateType;

		/**
		 * Unique and unambiguous identification of a  Tier Band for a BCA.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/** Optional additional notes to supplement the Tier Band details */
		Notes?: Array<string>;

		/** Other application frequencies that are not available in the standard code list */
		OtherApplicationFrequency?: OBBCAData1CreditInterestTierBandSetTierBandOtherApplicationFrequency;

		/** Other interest rate types which are not available in the standard code list */
		OtherBankInterestType?: OBBCAData1CreditInterestTierBandSetTierBandOtherBankInterestType;

		/** Other calculation frequency which is not available in the standard code set. */
		OtherCalculationFrequency?: OBBCAData1CreditInterestTierBandSetTierBandOtherCalculationFrequency;

		/** Maximum deposit value for which the credit interest tier applies. */
		TierValueMaximum?: string | null;

		/**
		 * Minimum deposit value for which the credit interest tier applies.
		 * Required
		 */
		TierValueMinimum: string;
	}
	export interface OBBCAData1CreditInterestTierBandSetTierBandFormProperties {

		/**
		 * The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.
		 * Read more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A
		 * Required
		 */
		AER: FormControl<string | null | undefined>,

		/**
		 * How often is interest applied to the BCA for this tier/band i.e. how often the financial institution pays accumulated interest to the customer's BCA.
		 * Required
		 */
		ApplicationFrequency: FormControl<OBBCAData1CreditInterestTierBandSetTierBandApplicationFrequency | null | undefined>,

		/** Bank Interest for the BCA product */
		BankInterestRate: FormControl<string | null | undefined>,

		/** Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the BCA. */
		BankInterestRateType: FormControl<OBBCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/** How often is credit interest calculated for the account. */
		CalculationFrequency: FormControl<OBBCAData1CreditInterestTierBandSetTierBandApplicationFrequency | null | undefined>,

		/** Amount on which Interest applied. */
		DepositInterestAppliedCoverage: FormControl<OBBCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>,

		/**
		 * Type of interest rate, Fixed or Variable
		 * Required
		 */
		FixedVariableInterestRateType: FormControl<OBBCAData1CreditInterestTierBandSetTierBandFixedVariableInterestRateType | null | undefined>,

		/**
		 * Unique and unambiguous identification of a  Tier Band for a BCA.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/** Maximum deposit value for which the credit interest tier applies. */
		TierValueMaximum: FormControl<string | null | undefined>,

		/**
		 * Minimum deposit value for which the credit interest tier applies.
		 * Required
		 */
		TierValueMinimum: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1CreditInterestTierBandSetTierBandFormGroup() {
		return new FormGroup<OBBCAData1CreditInterestTierBandSetTierBandFormProperties>({
			AER: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			ApplicationFrequency: new FormControl<OBBCAData1CreditInterestTierBandSetTierBandApplicationFrequency | null | undefined>(undefined, [Validators.required]),
			BankInterestRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			BankInterestRateType: new FormControl<OBBCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			CalculationFrequency: new FormControl<OBBCAData1CreditInterestTierBandSetTierBandApplicationFrequency | null | undefined>(undefined),
			DepositInterestAppliedCoverage: new FormControl<OBBCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>(undefined),
			FixedVariableInterestRateType: new FormControl<OBBCAData1CreditInterestTierBandSetTierBandFixedVariableInterestRateType | null | undefined>(undefined, [Validators.required]),
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			TierValueMaximum: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			TierValueMinimum: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
		});

	}

	export enum OBBCAData1CreditInterestTierBandSetTierBandApplicationFrequency { Daily = 0, HalfYearly = 1, Monthly = 2, Other = 3, Quarterly = 4, PerStatementDate = 5, Weekly = 6, Yearly = 7 }

	export enum OBBCAData1CreditInterestTierBandSetTierBandBankInterestRateType { Gross = 0, Other = 1 }

	export enum OBBCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage { Banded = 0, Tiered = 1, Whole = 2 }

	export enum OBBCAData1CreditInterestTierBandSetTierBandFixedVariableInterestRateType { Fixed = 0, Variable = 1 }

	export interface OBBCAData1CreditInterestTierBandSetTierBandOtherApplicationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1CreditInterestTierBandSetTierBandOtherApplicationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1CreditInterestTierBandSetTierBandOtherApplicationFrequencyFormGroup() {
		return new FormGroup<OBBCAData1CreditInterestTierBandSetTierBandOtherApplicationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1CreditInterestTierBandSetTierBandOtherBankInterestType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1CreditInterestTierBandSetTierBandOtherBankInterestTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1CreditInterestTierBandSetTierBandOtherBankInterestTypeFormGroup() {
		return new FormGroup<OBBCAData1CreditInterestTierBandSetTierBandOtherBankInterestTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1CreditInterestTierBandSetTierBandOtherCalculationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1CreditInterestTierBandSetTierBandOtherCalculationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1CreditInterestTierBandSetTierBandOtherCalculationFrequencyFormGroup() {
		return new FormGroup<OBBCAData1CreditInterestTierBandSetTierBandOtherCalculationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OtherFeesCharges {

		/** Details about any caps (maximum charges) that apply to a particular or group of fee/charge */
		OBBCAData1OtherFeesChargesFeeChargeCap?: Array<OBBCAData1OtherFeesChargesFeeChargeCap>;

		/**
		 * Other fees/charges details
		 * Required
		 * Minimum items: 1
		 */
		OBBCAData1OtherFeesChargesFeeChargeDetail: Array<OBBCAData1OtherFeesChargesFeeChargeDetail>;

		/** Other tariff type which is not in the standard list. */
		OtherTariffType?: OBBCAData1OtherFeesChargesOtherTariffType;

		/**
		 * Name of the tariff
		 * Max length: 350
		 * Min length: 1
		 */
		TariffName?: string | null;

		/** TariffType which defines the fee and charges. */
		TariffType?: OBBCAData1OtherFeesChargesTariffType | null;
	}
	export interface OBBCAData1OtherFeesChargesFormProperties {

		/**
		 * Name of the tariff
		 * Max length: 350
		 * Min length: 1
		 */
		TariffName: FormControl<string | null | undefined>,

		/** TariffType which defines the fee and charges. */
		TariffType: FormControl<OBBCAData1OtherFeesChargesTariffType | null | undefined>,
	}
	export function CreateOBBCAData1OtherFeesChargesFormGroup() {
		return new FormGroup<OBBCAData1OtherFeesChargesFormProperties>({
			TariffName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			TariffType: new FormControl<OBBCAData1OtherFeesChargesTariffType | null | undefined>(undefined),
		});

	}

	export interface OBBCAData1OtherFeesChargesFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null;

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount?: string | null;

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence?: number | null;

		/**
		 * Fee/charge type which is being capped
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<string>;

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType;

		/** Free text for adding  extra details for fee charge cap */
		Notes?: Array<string>;

		/** Other fee type code which is not available in the standard code set */
		OBBCAData1OtherFeesChargesFeeChargeCapOtherFeeType?: Array<OBBCAData1OtherFeesChargesFeeChargeCapOtherFeeType>;
	}
	export interface OBBCAData1OtherFeesChargesFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBBCAData1OtherFeesChargesFeeChargeCapFormGroup() {
		return new FormGroup<OBBCAData1OtherFeesChargesFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod { Day = 0, 'Half Year' = 1, Month = 2, Quarter = 3, Week = 4, Year = 5 }

	export enum OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType { Minimum = 0, Maximum = 1 }

	export interface OBBCAData1OtherFeesChargesFeeChargeCapOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OtherFeesChargesFeeChargeCapOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OtherFeesChargesFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBBCAData1OtherFeesChargesFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OtherFeesChargesFeeChargeDetail {

		/**
		 * How frequently the fee/charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency;

		/** How frequently the fee/charge is calculated */
		CalculationFrequency?: OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null;

		/** Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount?: string | null;

		/** Range or amounts or rates for which the fee/charge applies */
		FeeApplicableRange?: OBBCAData1OtherFeesChargesFeeChargeDetailFeeApplicableRange;

		/**
		 * Categorisation of fees and charges into standard categories.
		 * Required
		 */
		FeeCategory: OBBCAData1OtherFeesChargesFeeChargeDetailFeeCategory;

		/** Details about any caps (maximum charges) that apply to a particular or group of fee/charge */
		OBBCAData1OtherFeesChargesFeeChargeDetailFeeChargeCap?: Array<OBBCAData1OtherFeesChargesFeeChargeDetailFeeChargeCap>;

		/** Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate?: string | null;

		/** Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType?: OBBCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null;

		/**
		 * Fee/Charge Type
		 * Required
		 */
		FeeType: OBBCAData1OtherFeesChargesFeeChargeDetailFeeType;

		/** Fee/charge which is usually negotiable rather than a fixed amount */
		NegotiableIndicator?: boolean | null;

		/** Optional additional notes to supplement the fee/charge details. */
		Notes?: Array<string>;

		/** Other application frequencies not covered in the standard code list */
		OtherApplicationFrequency?: OBBCAData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency;

		/** Other calculation frequency which is not available in standard code set. */
		OtherCalculationFrequency?: OBBCAData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency;
		OtherFeeCategoryType?: OBBCAData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType;

		/** Other fee rate type which is not available in the standard code set */
		OtherFeeRateType?: OBBCAData1OtherFeesChargesFeeChargeDetailOtherFeeRateType;

		/** Other Fee/charge type which is not available in the standard code set */
		OtherFeeType?: OBBCAData1OtherFeesChargesFeeChargeDetailOtherFeeType;
	}
	export interface OBBCAData1OtherFeesChargesFeeChargeDetailFormProperties {

		/**
		 * How frequently the fee/charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>,

		/** How frequently the fee/charge is calculated */
		CalculationFrequency: FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>,

		/** Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount: FormControl<string | null | undefined>,

		/**
		 * Categorisation of fees and charges into standard categories.
		 * Required
		 */
		FeeCategory: FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailFeeCategory | null | undefined>,

		/** Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate: FormControl<string | null | undefined>,

		/** Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType: FormControl<OBBCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/**
		 * Fee/Charge Type
		 * Required
		 */
		FeeType: FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailFeeType | null | undefined>,

		/** Fee/charge which is usually negotiable rather than a fixed amount */
		NegotiableIndicator: FormControl<boolean | null | undefined>,
	}
	export function CreateOBBCAData1OtherFeesChargesFeeChargeDetailFormGroup() {
		return new FormGroup<OBBCAData1OtherFeesChargesFeeChargeDetailFormProperties>({
			ApplicationFrequency: new FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>(undefined, [Validators.required]),
			CalculationFrequency: new FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>(undefined),
			FeeAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCategory: new FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailFeeCategory | null | undefined>(undefined, [Validators.required]),
			FeeRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			FeeRateType: new FormControl<OBBCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			FeeType: new FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailFeeType | null | undefined>(undefined, [Validators.required]),
			NegotiableIndicator: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency { OnClosing = 0, OnOpening = 1, ChargingPeriod = 2, Daily = 3, PerItem = 4, Monthly = 5, OnAnniversary = 6, Other = 7, PerHundredPounds = 8, PerHour = 9, PerOccurrence = 10, PerSheet = 11, PerTransaction = 12, PerTransactionAmount = 13, PerTransactionPercentage = 14, Quarterly = 15, SixMonthly = 16, StatementMonthly = 17, Weekly = 18, Yearly = 19 }

	export interface OBBCAData1OtherFeesChargesFeeChargeDetailFeeApplicableRange {

		/** Maximum Amount on which fee is applicable (where it is expressed as an amount) */
		MaximumAmount?: string | null;

		/** Maximum rate on which fee/charge is applicable(where it is expressed as an rate) */
		MaximumRate?: string | null;

		/** Minimum Amount on which fee/charge is applicable (where it is expressed as an amount) */
		MinimumAmount?: string | null;

		/** Minimum rate on which fee/charge is applicable(where it is expressed as an rate) */
		MinimumRate?: string | null;
	}
	export interface OBBCAData1OtherFeesChargesFeeChargeDetailFeeApplicableRangeFormProperties {

		/** Maximum Amount on which fee is applicable (where it is expressed as an amount) */
		MaximumAmount: FormControl<string | null | undefined>,

		/** Maximum rate on which fee/charge is applicable(where it is expressed as an rate) */
		MaximumRate: FormControl<string | null | undefined>,

		/** Minimum Amount on which fee/charge is applicable (where it is expressed as an amount) */
		MinimumAmount: FormControl<string | null | undefined>,

		/** Minimum rate on which fee/charge is applicable(where it is expressed as an rate) */
		MinimumRate: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OtherFeesChargesFeeChargeDetailFeeApplicableRangeFormGroup() {
		return new FormGroup<OBBCAData1OtherFeesChargesFeeChargeDetailFeeApplicableRangeFormProperties>({
			MaximumAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			MaximumRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			MinimumAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			MinimumRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
		});

	}

	export enum OBBCAData1OtherFeesChargesFeeChargeDetailFeeCategory { Other = 0, Servicing = 1 }

	export interface OBBCAData1OtherFeesChargesFeeChargeDetailFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null;

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount?: string | null;

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence?: number | null;

		/**
		 * Fee/charge type which is being capped
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<string>;

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType;

		/** Free text for adding  extra details for fee charge cap */
		Notes?: Array<string>;

		/** Other fee type code which is not available in the standard code set */
		OBBCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType?: Array<OBBCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType>;
	}
	export interface OBBCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBBCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapFormGroup() {
		return new FormGroup<OBBCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBBCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBBCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export enum OBBCAData1OtherFeesChargesFeeChargeDetailFeeType { Other = 0, ServiceCAccountFee = 1, ServiceCAccountFeeMonthly = 2, ServiceCAccountFeeQuarterly = 3, ServiceCFixedTariff = 4, ServiceCBusiDepAccBreakage = 5, ServiceCMinimumMonthlyFee = 6, ServiceCOther = 7 }

	export interface OBBCAData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequencyFormGroup() {
		return new FormGroup<OBBCAData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequencyFormGroup() {
		return new FormGroup<OBBCAData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryTypeFormGroup() {
		return new FormGroup<OBBCAData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OtherFeesChargesFeeChargeDetailOtherFeeRateType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OtherFeesChargesFeeChargeDetailOtherFeeRateTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OtherFeesChargesFeeChargeDetailOtherFeeRateTypeFormGroup() {
		return new FormGroup<OBBCAData1OtherFeesChargesFeeChargeDetailOtherFeeRateTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OtherFeesChargesFeeChargeDetailOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Categorisation of fees and charges into standard categories.
		 * Required
		 */
		FeeCategory: OBBCAData1OtherFeesChargesFeeChargeDetailFeeCategory;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Categorisation of fees and charges into standard categories.
		 * Required
		 */
		FeeCategory: FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailFeeCategory | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFormGroup() {
		return new FormGroup<OBBCAData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			FeeCategory: new FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailFeeCategory | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OtherFeesChargesOtherTariffType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OtherFeesChargesOtherTariffTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OtherFeesChargesOtherTariffTypeFormGroup() {
		return new FormGroup<OBBCAData1OtherFeesChargesOtherTariffTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export enum OBBCAData1OtherFeesChargesTariffType { Electronic = 0, Mixed = 1, Other = 2 }

	export interface OBBCAData1Overdraft {

		/** Associated Notes about the overdraft rates */
		Notes?: Array<string>;

		/**
		 * Tier band set details
		 * Required
		 * Minimum items: 1
		 */
		OBBCAData1OverdraftOverdraftTierBandSet: Array<OBBCAData1OverdraftOverdraftTierBandSet>;
	}
	export interface OBBCAData1OverdraftFormProperties {
	}
	export function CreateOBBCAData1OverdraftFormGroup() {
		return new FormGroup<OBBCAData1OverdraftFormProperties>({
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSet {

		/** Indicates if the Overdraft is authorised (Y) or unauthorised (N) */
		AuthorisedIndicator?: boolean | null;

		/** When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply. */
		BufferAmount?: string | null;

		/**
		 * Unique and unambiguous identification of a  Tier Band for a overdraft product.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/** Optional additional notes to supplement the overdraft Tier Band Set details */
		Notes?: Array<string>;

		/** Overdraft fees and charges details */
		OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesCharges?: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesCharges>;

		/**
		 * Provides overdraft details for a specific tier or band
		 * Required
		 * Minimum items: 1
		 */
		OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBand: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBand>;

		/** An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time. */
		OverdraftType?: OBBCAData1OverdraftOverdraftTierBandSetOverdraftType | null;

		/**
		 * The methodology of how overdraft is charged. It can be:
		 * 'Whole'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable).
		 * 'Tiered' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation
		 * 'Banded' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.
		 * Required
		 */
		TierBandMethod: OBBCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetFormProperties {

		/** Indicates if the Overdraft is authorised (Y) or unauthorised (N) */
		AuthorisedIndicator: FormControl<boolean | null | undefined>,

		/** When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply. */
		BufferAmount: FormControl<string | null | undefined>,

		/**
		 * Unique and unambiguous identification of a  Tier Band for a overdraft product.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/** An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time. */
		OverdraftType: FormControl<OBBCAData1OverdraftOverdraftTierBandSetOverdraftType | null | undefined>,

		/**
		 * The methodology of how overdraft is charged. It can be:
		 * 'Whole'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable).
		 * 'Tiered' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation
		 * 'Banded' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.
		 * Required
		 */
		TierBandMethod: FormControl<OBBCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetFormProperties>({
			AuthorisedIndicator: new FormControl<boolean | null | undefined>(undefined),
			BufferAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			OverdraftType: new FormControl<OBBCAData1OverdraftOverdraftTierBandSetOverdraftType | null | undefined>(undefined),
			TierBandMethod: new FormControl<OBBCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesCharges {

		/** Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate. */
		OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap?: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap>;

		/**
		 * Details about the fees/charges
		 * Required
		 * Minimum items: 1
		 */
		OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail>;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesFormProperties {
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesFormProperties>({
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null;

		/** Cap amount charged for a fee/charge */
		FeeCapAmount?: string | null;

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances. */
		FeeCapOccurrence?: number | null;

		/**
		 * Fee/charge type which is being capped
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<string>;

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType;

		/** Notes related to Overdraft fee charge cap */
		Notes?: Array<string>;

		/** Other fee type code which is not available in the standard code set */
		OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType?: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType>;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances. */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail {

		/**
		 * Frequency at which the overdraft charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency;

		/** How often is the overdraft fee/charge calculated for the account. */
		CalculationFrequency?: OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null;

		/** Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount?: string | null;

		/** Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate?: string | null;

		/** Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType?: OBBCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null;

		/**
		 * Overdraft fee type
		 * Required
		 */
		FeeType: OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType;

		/** Every additional tranche of an overdraft balance to which an overdraft fee is applied */
		IncrementalBorrowingAmount?: string | null;

		/** Indicates whether fee and charges are negotiable */
		NegotiableIndicator?: boolean | null;

		/** Free text for capturing any other info related to Overdraft Fees Charge Details */
		Notes?: Array<string>;

		/** Other application frequencies that are not available in the standard code list */
		OtherApplicationFrequency?: OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;

		/** Other calculation frequency which is not available in the standard code set. */
		OtherCalculationFrequency?: OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;

		/** Other fee rate type code which is not available in the standard code set */
		OtherFeeRateType?: OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;

		/** Other Fee type which is not available in the standard code set */
		OtherFeeType?: OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;

		/** Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not. */
		OverdraftControlIndicator?: boolean | null;

		/** Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate. */
		OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap?: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap>;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFormProperties {

		/**
		 * Frequency at which the overdraft charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>,

		/** How often is the overdraft fee/charge calculated for the account. */
		CalculationFrequency: FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>,

		/** Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount: FormControl<string | null | undefined>,

		/** Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate: FormControl<string | null | undefined>,

		/** Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType: FormControl<OBBCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/**
		 * Overdraft fee type
		 * Required
		 */
		FeeType: FormControl<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType | null | undefined>,

		/** Every additional tranche of an overdraft balance to which an overdraft fee is applied */
		IncrementalBorrowingAmount: FormControl<string | null | undefined>,

		/** Indicates whether fee and charges are negotiable */
		NegotiableIndicator: FormControl<boolean | null | undefined>,

		/** Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not. */
		OverdraftControlIndicator: FormControl<boolean | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFormProperties>({
			ApplicationFrequency: new FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>(undefined, [Validators.required]),
			CalculationFrequency: new FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>(undefined),
			FeeAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			FeeRateType: new FormControl<OBBCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			FeeType: new FormControl<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType | null | undefined>(undefined, [Validators.required]),
			IncrementalBorrowingAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			NegotiableIndicator: new FormControl<boolean | null | undefined>(undefined),
			OverdraftControlIndicator: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType { ArrangedOverdraft = 0, AnnualReview = 1, EmergencyBorrowing = 2, BorrowingItem = 3, OverdraftRenewal = 4, OverdraftSetup = 5, Surcharge = 6, TempOverdraft = 7, UnauthorisedBorrowing = 8, UnauthorisedPaidTrans = 9, Other = 10, UnauthorisedUnpaidTrans = 11 }

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null;

		/** Cap amount charged for a fee/charge */
		FeeCapAmount?: string | null;

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances. */
		FeeCapOccurrence?: number | null;

		/**
		 * Fee/charge type which is being capped
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType>;

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType;

		/** Notes related to Overdraft fee charge cap */
		Notes?: Array<string>;

		/** Other fee type code which is not available in the standard code set */
		OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType?: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType>;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances. */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBand {

		/** Specifies the maximum length of a band for a fixed overdraft agreement */
		AgreementLengthMax?: number | null;

		/** Specifies the minimum length of a band for a fixed overdraft agreement */
		AgreementLengthMin?: number | null;

		/** Specifies the period of a fixed length overdraft agreement */
		AgreementPeriod?: OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null;

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances. */
		BankGuaranteedIndicator?: boolean | null;

		/**
		 * EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently
		 * used interchangeably), being the actual annual interest rate of an Overdraft.
		 */
		EAR?: string | null;

		/**
		 * Unique and unambiguous identification of a  Tier Band for a overdraft.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/** Optional additional notes to supplement the Tier/band details */
		Notes?: Array<string>;

		/** Overdraft fees and charges */
		OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges?: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges>;

		/** Refers to which interest rate is applied when interests are tiered. For example, if an overdraft balance is £2k and the interest tiers are:- 0-£500 0.1%, 500-1000 0.2%, 1000-10000 0.5%, then the applicable interest rate could either be 0.5% of the entire balance (since the account balance sits in the top interest tier) or (0.1%*500)+(0.2%*500)+(0.5%*1000). In the 1st situation, we say the interest is applied to the ‘Whole’ of the account balance,  and in the 2nd that it is ‘Tiered’. */
		OverdraftInterestChargingCoverage?: OBBCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null;

		/** An annual percentage rate (APR) is the annual rate charged for borrowing or earned through an investment. APR is expressed as a percentage that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction but does not take compounding into account. */
		RepresentativeAPR?: string | null;

		/** Maximum value of Overdraft Tier/Band */
		TierValueMax?: string | null;

		/**
		 * Minimum value of Overdraft Tier/Band
		 * Required
		 */
		TierValueMin: string;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandFormProperties {

		/** Specifies the maximum length of a band for a fixed overdraft agreement */
		AgreementLengthMax: FormControl<number | null | undefined>,

		/** Specifies the minimum length of a band for a fixed overdraft agreement */
		AgreementLengthMin: FormControl<number | null | undefined>,

		/** Specifies the period of a fixed length overdraft agreement */
		AgreementPeriod: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>,

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances. */
		BankGuaranteedIndicator: FormControl<boolean | null | undefined>,

		/**
		 * EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently
		 * used interchangeably), being the actual annual interest rate of an Overdraft.
		 */
		EAR: FormControl<string | null | undefined>,

		/**
		 * Unique and unambiguous identification of a  Tier Band for a overdraft.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/** Refers to which interest rate is applied when interests are tiered. For example, if an overdraft balance is £2k and the interest tiers are:- 0-£500 0.1%, 500-1000 0.2%, 1000-10000 0.5%, then the applicable interest rate could either be 0.5% of the entire balance (since the account balance sits in the top interest tier) or (0.1%*500)+(0.2%*500)+(0.5%*1000). In the 1st situation, we say the interest is applied to the ‘Whole’ of the account balance,  and in the 2nd that it is ‘Tiered’. */
		OverdraftInterestChargingCoverage: FormControl<OBBCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>,

		/** An annual percentage rate (APR) is the annual rate charged for borrowing or earned through an investment. APR is expressed as a percentage that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction but does not take compounding into account. */
		RepresentativeAPR: FormControl<string | null | undefined>,

		/** Maximum value of Overdraft Tier/Band */
		TierValueMax: FormControl<string | null | undefined>,

		/**
		 * Minimum value of Overdraft Tier/Band
		 * Required
		 */
		TierValueMin: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandFormProperties>({
			AgreementLengthMax: new FormControl<number | null | undefined>(undefined),
			AgreementLengthMin: new FormControl<number | null | undefined>(undefined),
			AgreementPeriod: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>(undefined),
			BankGuaranteedIndicator: new FormControl<boolean | null | undefined>(undefined),
			EAR: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			OverdraftInterestChargingCoverage: new FormControl<OBBCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>(undefined),
			RepresentativeAPR: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			TierValueMax: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			TierValueMin: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges {

		/** Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate. */
		OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap?: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap>;

		/**
		 * Details about the fees/charges
		 * Required
		 * Minimum items: 1
		 */
		OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail>;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesFormProperties {
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesFormProperties>({
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null;

		/** Cap amount charged for a fee/charge */
		FeeCapAmount?: string | null;

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances. */
		FeeCapOccurrence?: number | null;

		/**
		 * Fee/charge type which is being capped
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType>;

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType;

		/** Notes related to Overdraft fee charge cap */
		Notes?: Array<string>;

		/** Other fee type code which is not available in the standard code set */
		OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType?: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType>;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances. */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail {

		/**
		 * Frequency at which the overdraft charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency;

		/** How often is the overdraft fee/charge calculated for the account. */
		CalculationFrequency?: OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null;

		/** Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount?: string | null;

		/** Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate?: string | null;

		/** Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType?: OBBCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null;

		/**
		 * Overdraft fee type
		 * Required
		 */
		FeeType: OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType;

		/** Every additional tranche of an overdraft balance to which an overdraft fee is applied */
		IncrementalBorrowingAmount?: string | null;

		/** Indicates whether fee and charges are negotiable */
		NegotiableIndicator?: boolean | null;

		/** Free text for capturing any other info related to Overdraft Fees Charge Details */
		Notes?: Array<string>;

		/** Other application frequencies that are not available in the standard code list */
		OtherApplicationFrequency?: OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;

		/** Other calculation frequency which is not available in the standard code set. */
		OtherCalculationFrequency?: OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;

		/** Other fee rate type code which is not available in the standard code set */
		OtherFeeRateType?: OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;

		/** Other Fee type which is not available in the standard code set */
		OtherFeeType?: OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;

		/** Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not. */
		OverdraftControlIndicator?: boolean | null;

		/** Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate. */
		OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap?: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap>;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFormProperties {

		/**
		 * Frequency at which the overdraft charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>,

		/** How often is the overdraft fee/charge calculated for the account. */
		CalculationFrequency: FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>,

		/** Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount: FormControl<string | null | undefined>,

		/** Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate: FormControl<string | null | undefined>,

		/** Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType: FormControl<OBBCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/**
		 * Overdraft fee type
		 * Required
		 */
		FeeType: FormControl<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType | null | undefined>,

		/** Every additional tranche of an overdraft balance to which an overdraft fee is applied */
		IncrementalBorrowingAmount: FormControl<string | null | undefined>,

		/** Indicates whether fee and charges are negotiable */
		NegotiableIndicator: FormControl<boolean | null | undefined>,

		/** Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not. */
		OverdraftControlIndicator: FormControl<boolean | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFormProperties>({
			ApplicationFrequency: new FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>(undefined, [Validators.required]),
			CalculationFrequency: new FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>(undefined),
			FeeAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			FeeRateType: new FormControl<OBBCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			FeeType: new FormControl<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType | null | undefined>(undefined, [Validators.required]),
			IncrementalBorrowingAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			NegotiableIndicator: new FormControl<boolean | null | undefined>(undefined),
			OverdraftControlIndicator: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null;

		/** Cap amount charged for a fee/charge */
		FeeCapAmount?: string | null;

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances. */
		FeeCapOccurrence?: number | null;

		/**
		 * Fee/charge type which is being capped
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType>;

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType;

		/** Notes related to Overdraft fee charge cap */
		Notes?: Array<string>;

		/** Other fee type code which is not available in the standard code set */
		OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType?: Array<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType>;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances. */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBBCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export enum OBBCAData1OverdraftOverdraftTierBandSetOverdraftType { Committed = 0, OnDemand = 1 }

	export interface OBBCAData1ProductDetails {

		/** The length/duration of the fee free period */
		FeeFreeLength?: number | null;

		/** The unit of period (days, weeks, months etc.) of the promotional length */
		FeeFreeLengthPeriod?: OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null;

		/** Optional additional notes to supplement the Core product details */
		Notes?: Array<string>;

		/**
		 * Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.
		 * Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd
		 * With respect to BCA products, they are segmented in relation to different markets that they wish to focus on.
		 */
		Segment?: Array<string>;
	}
	export interface OBBCAData1ProductDetailsFormProperties {

		/** The length/duration of the fee free period */
		FeeFreeLength: FormControl<number | null | undefined>,

		/** The unit of period (days, weeks, months etc.) of the promotional length */
		FeeFreeLengthPeriod: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>,
	}
	export function CreateOBBCAData1ProductDetailsFormGroup() {
		return new FormGroup<OBBCAData1ProductDetailsFormProperties>({
			FeeFreeLength: new FormControl<number | null | undefined>(undefined),
			FeeFreeLengthPeriod: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>(undefined),
		});

	}


	/** Balance type, in a coded form. */
	export enum OBBalanceType1Code { ClosingAvailable = 0, ClosingBooked = 1, ClosingCleared = 2, Expected = 3, ForwardAvailable = 4, Information = 5, InterimAvailable = 6, InterimBooked = 7, InterimCleared = 8, OpeningAvailable = 9, OpeningBooked = 10, OpeningCleared = 11, PreviouslyClosedBooked = 12 }


	/** Set of elements used to fully identify the type of underlying transaction resulting in an entry. */
	export interface OBBankTransactionCodeStructure1 {

		/**
		 * Specifies the family within a domain.
		 * Required
		 */
		Code: string;

		/**
		 * Specifies the sub-product family within a specific family.
		 * Required
		 */
		SubCode: string;
	}

	/** Set of elements used to fully identify the type of underlying transaction resulting in an entry. */
	export interface OBBankTransactionCodeStructure1FormProperties {

		/**
		 * Specifies the family within a domain.
		 * Required
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Specifies the sub-product family within a specific family.
		 * Required
		 */
		SubCode: FormControl<string | null | undefined>,
	}
	export function CreateOBBankTransactionCodeStructure1FormGroup() {
		return new FormGroup<OBBankTransactionCodeStructure1FormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SubCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBBeneficiary5 {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId?: string | null;

		/**
		 * A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		BeneficiaryId?: string | null;

		/** Specifies the Beneficiary Type. */
		BeneficiaryType?: OBBeneficiary5BeneficiaryType | null;

		/** Provides the details to identify the beneficiary account. */
		CreditorAccount?: OBCashAccount5_0;

		/**
		 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
		 * This is the servicer of the beneficiary account.
		 */
		CreditorAgent?: OBBranchAndFinancialInstitutionIdentification6_0;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBBeneficiary5FormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		BeneficiaryId: FormControl<string | null | undefined>,

		/** Specifies the Beneficiary Type. */
		BeneficiaryType: FormControl<OBBeneficiary5BeneficiaryType | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,
	}
	export function CreateOBBeneficiary5FormGroup() {
		return new FormGroup<OBBeneficiary5FormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			BeneficiaryId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			BeneficiaryType: new FormControl<OBBeneficiary5BeneficiaryType | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}

	export enum OBBeneficiary5BeneficiaryType { Trusted = 0, Ordinary = 1 }


	/** Provides the details to identify the beneficiary account. */
	export interface OBCashAccount5_0 {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: string;

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification?: string | null;
	}

	/** Provides the details to identify the beneficiary account. */
	export interface OBCashAccount5_0FormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: FormControl<string | null | undefined>,

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification: FormControl<string | null | undefined>,
	}
	export function CreateOBCashAccount5_0FormGroup() {
		return new FormGroup<OBCashAccount5_0FormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}


	/**
	 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
	 * This is the servicer of the beneficiary account.
	 */
	export interface OBBranchAndFinancialInstitutionIdentification6_0 {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}

	/**
	 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
	 * This is the servicer of the beneficiary account.
	 */
	export interface OBBranchAndFinancialInstitutionIdentification6_0FormProperties {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBBranchAndFinancialInstitutionIdentification6_0FormGroup() {
		return new FormGroup<OBBranchAndFinancialInstitutionIdentification6_0FormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information that locates and identifies a specific address, as defined by postal services. */
	export interface OBPostalAddress6 {

		/**
		 * Minimum items: 0
		 * Maximum items: 7
		 */
		AddressLine?: Array<string>;

		/** Identifies the nature of the postal address. */
		AddressType?: OBAddressTypeCode | null;

		/**
		 * Number that identifies the position of a building on a street.
		 * Max length: 16
		 * Min length: 1
		 */
		BuildingNumber?: string | null;

		/** Nation with its own government. */
		Country?: string | null;

		/**
		 * Identifies a subdivision of a country such as state, region, county.
		 * Max length: 35
		 * Min length: 1
		 */
		CountrySubDivision?: string | null;

		/**
		 * Identification of a division of a large organisation or building.
		 * Max length: 70
		 * Min length: 1
		 */
		Department?: string | null;

		/**
		 * Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.
		 * Max length: 16
		 * Min length: 1
		 */
		PostCode?: string | null;

		/**
		 * Name of a street or thoroughfare.
		 * Max length: 70
		 * Min length: 1
		 */
		StreetName?: string | null;

		/**
		 * Identification of a sub-division of a large organisation or building.
		 * Max length: 70
		 * Min length: 1
		 */
		SubDepartment?: string | null;

		/**
		 * Name of a built-up area, with defined boundaries, and a local government.
		 * Max length: 35
		 * Min length: 1
		 */
		TownName?: string | null;
	}

	/** Information that locates and identifies a specific address, as defined by postal services. */
	export interface OBPostalAddress6FormProperties {

		/** Identifies the nature of the postal address. */
		AddressType: FormControl<OBAddressTypeCode | null | undefined>,

		/**
		 * Number that identifies the position of a building on a street.
		 * Max length: 16
		 * Min length: 1
		 */
		BuildingNumber: FormControl<string | null | undefined>,

		/** Nation with its own government. */
		Country: FormControl<string | null | undefined>,

		/**
		 * Identifies a subdivision of a country such as state, region, county.
		 * Max length: 35
		 * Min length: 1
		 */
		CountrySubDivision: FormControl<string | null | undefined>,

		/**
		 * Identification of a division of a large organisation or building.
		 * Max length: 70
		 * Min length: 1
		 */
		Department: FormControl<string | null | undefined>,

		/**
		 * Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.
		 * Max length: 16
		 * Min length: 1
		 */
		PostCode: FormControl<string | null | undefined>,

		/**
		 * Name of a street or thoroughfare.
		 * Max length: 70
		 * Min length: 1
		 */
		StreetName: FormControl<string | null | undefined>,

		/**
		 * Identification of a sub-division of a large organisation or building.
		 * Max length: 70
		 * Min length: 1
		 */
		SubDepartment: FormControl<string | null | undefined>,

		/**
		 * Name of a built-up area, with defined boundaries, and a local government.
		 * Max length: 35
		 * Min length: 1
		 */
		TownName: FormControl<string | null | undefined>,
	}
	export function CreateOBPostalAddress6FormGroup() {
		return new FormGroup<OBPostalAddress6FormProperties>({
			AddressType: new FormControl<OBAddressTypeCode | null | undefined>(undefined),
			BuildingNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16)]),
			Country: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Z]{2,2}$')]),
			CountrySubDivision: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Department: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			PostCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16)]),
			StreetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			SubDepartment: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			TownName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}


	/** Additional information that can not be captured in the structured fields and/or any other specific block. */
	export interface OBSupplementaryData1 {
	}

	/** Additional information that can not be captured in the structured fields and/or any other specific block. */
	export interface OBSupplementaryData1FormProperties {
	}
	export function CreateOBSupplementaryData1FormGroup() {
		return new FormGroup<OBSupplementaryData1FormProperties>({
		});

	}

	export interface OBBeneficiary5Basic {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId?: string | null;

		/**
		 * A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		BeneficiaryId?: string | null;

		/** Specifies the Beneficiary Type. */
		BeneficiaryType?: OBBeneficiary5BeneficiaryType | null;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBBeneficiary5BasicFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		BeneficiaryId: FormControl<string | null | undefined>,

		/** Specifies the Beneficiary Type. */
		BeneficiaryType: FormControl<OBBeneficiary5BeneficiaryType | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,
	}
	export function CreateOBBeneficiary5BasicFormGroup() {
		return new FormGroup<OBBeneficiary5BasicFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			BeneficiaryId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			BeneficiaryType: new FormControl<OBBeneficiary5BeneficiaryType | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}

	export interface OBBeneficiary5Detail {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId?: string | null;

		/**
		 * A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		BeneficiaryId?: string | null;

		/** Specifies the Beneficiary Type. */
		BeneficiaryType?: OBBeneficiary5BeneficiaryType | null;

		/**
		 * Provides the details to identify the beneficiary account.
		 * Required
		 */
		CreditorAccount: OBCashAccount5_0;

		/**
		 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
		 * This is the servicer of the beneficiary account.
		 */
		CreditorAgent?: OBBranchAndFinancialInstitutionIdentification6_0;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBBeneficiary5DetailFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		BeneficiaryId: FormControl<string | null | undefined>,

		/** Specifies the Beneficiary Type. */
		BeneficiaryType: FormControl<OBBeneficiary5BeneficiaryType | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,
	}
	export function CreateOBBeneficiary5DetailFormGroup() {
		return new FormGroup<OBBeneficiary5DetailFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			BeneficiaryId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			BeneficiaryType: new FormControl<OBBeneficiary5BeneficiaryType | null | undefined>(undefined),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}


	/** Specifies the Beneficiary Type. */
	export enum OBBeneficiaryType1Code { Trusted = 0, Ordinary = 1 }


	/**
	 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
	 * This is the servicer of the beneficiary account.
	 */
	export interface OBBranchAndFinancialInstitutionIdentification5_1 {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: string;
	}

	/**
	 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
	 * This is the servicer of the beneficiary account.
	 */
	export interface OBBranchAndFinancialInstitutionIdentification5_1FormProperties {

		/**
		 * Unique and unambiguous identification of the servicing institution.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBBranchAndFinancialInstitutionIdentification5_1FormGroup() {
		return new FormGroup<OBBranchAndFinancialInstitutionIdentification5_1FormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Financial institution servicing an account for the creditor. */
	export interface OBBranchAndFinancialInstitutionIdentification6_1 {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}

	/** Financial institution servicing an account for the creditor. */
	export interface OBBranchAndFinancialInstitutionIdentification6_1FormProperties {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBBranchAndFinancialInstitutionIdentification6_1FormGroup() {
		return new FormGroup<OBBranchAndFinancialInstitutionIdentification6_1FormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Financial institution servicing an account for the debtor. */
	export interface OBBranchAndFinancialInstitutionIdentification6_2 {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name?: string | null;

		/** Information that locates and identifies a specific address, as defined by postal services. */
		PostalAddress?: OBPostalAddress6;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;
	}

	/** Financial institution servicing an account for the debtor. */
	export interface OBBranchAndFinancialInstitutionIdentification6_2FormProperties {

		/**
		 * Unique and unambiguous identification of a financial institution or a branch of a financial institution.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name by which an agent is known and which is usually used to identify that agent.
		 * Max length: 140
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,
	}
	export function CreateOBBranchAndFinancialInstitutionIdentification6_2FormGroup() {
		return new FormGroup<OBBranchAndFinancialInstitutionIdentification6_2FormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(140)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the details to identify the beneficiary account. */
	export interface OBCashAccount5_1 {

		/**
		 * Beneficiary account identification.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: string;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: string;

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification?: string | null;
	}

	/** Provides the details to identify the beneficiary account. */
	export interface OBCashAccount5_1FormProperties {

		/**
		 * Beneficiary account identification.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Name of the identification scheme, in a coded form as published in an external list.
		 * Required
		 */
		SchemeName: FormControl<string | null | undefined>,

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification: FormControl<string | null | undefined>,
	}
	export function CreateOBCashAccount5_1FormGroup() {
		return new FormGroup<OBCashAccount5_1FormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}


	/** Unambiguous identification of the account of the creditor, in the case of a debit transaction. */
	export interface OBCashAccount6_0 {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Max length: 256
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name?: string | null;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification?: string | null;
	}

	/** Unambiguous identification of the account of the creditor, in the case of a debit transaction. */
	export interface OBCashAccount6_0FormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification: FormControl<string | null | undefined>,
	}
	export function CreateOBCashAccount6_0FormGroup() {
		return new FormGroup<OBCashAccount6_0FormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}


	/** Unambiguous identification of the account of the debtor, in the case of a crebit transaction. */
	export interface OBCashAccount6_1 {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Max length: 256
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name?: string | null;

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName?: string | null;

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification?: string | null;
	}

	/** Unambiguous identification of the account of the debtor, in the case of a crebit transaction. */
	export interface OBCashAccount6_1FormProperties {

		/**
		 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
		 * Max length: 256
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
		 * Note, the account name is not the product name or the nickname of the account.
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Name of the identification scheme, in a coded form as published in an external list. */
		SchemeName: FormControl<string | null | undefined>,

		/**
		 * This is secondary identification of the account, as assigned by the account servicing institution.
		 * This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
		 * Max length: 34
		 * Min length: 1
		 */
		SecondaryIdentification: FormControl<string | null | undefined>,
	}
	export function CreateOBCashAccount6_1FormGroup() {
		return new FormGroup<OBCashAccount6_1FormProperties>({
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			SchemeName: new FormControl<string | null | undefined>(undefined),
			SecondaryIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
		});

	}


	/**
	 * Indicates whether the amount is a credit or a debit. 
	 * Usage: A zero amount is considered to be a credit amount.
	 */
	export enum OBCreditDebitCode_0 { Credit = 0, Debit = 1 }


	/** Indicates whether the transaction is a credit or a debit entry. */
	export enum OBCreditDebitCode_1 { Credit = 0, Debit = 1 }


	/**
	 * Indicates whether the balance is a credit or a debit balance. 
	 * Usage: A zero balance is considered to be a credit balance.
	 */
	export enum OBCreditDebitCode_2 { Credit = 0, Debit = 1 }


	/** Set of elements used to provide details on the currency exchange. */
	export interface OBCurrencyExchange5 {

		/**
		 * Unique identification to unambiguously identify the foreign exchange contract.
		 * Max length: 35
		 * Min length: 1
		 */
		ContractIdentification?: string | null;

		/**
		 * Factor used to convert an amount from one currency into another. This reflects the price at which one currency was bought with another currency.
		 * Usage: ExchangeRate expresses the ratio between UnitCurrency and QuotedCurrency (ExchangeRate = UnitCurrency/QuotedCurrency).
		 * Required
		 */
		ExchangeRate: number;

		/** Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party. */
		InstructedAmount?: OBCurrencyExchange5InstructedAmount;

		/**
		 * Date and time at which an exchange rate is quoted.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		QuotationDate?: Date | null;

		/**
		 * Currency from which an amount is to be converted in a currency conversion.
		 * Required
		 */
		SourceCurrency: string;

		/** Currency into which an amount is to be converted in a currency conversion. */
		TargetCurrency?: string | null;

		/** Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP. */
		UnitCurrency?: string | null;
	}

	/** Set of elements used to provide details on the currency exchange. */
	export interface OBCurrencyExchange5FormProperties {

		/**
		 * Unique identification to unambiguously identify the foreign exchange contract.
		 * Max length: 35
		 * Min length: 1
		 */
		ContractIdentification: FormControl<string | null | undefined>,

		/**
		 * Factor used to convert an amount from one currency into another. This reflects the price at which one currency was bought with another currency.
		 * Usage: ExchangeRate expresses the ratio between UnitCurrency and QuotedCurrency (ExchangeRate = UnitCurrency/QuotedCurrency).
		 * Required
		 */
		ExchangeRate: FormControl<number | null | undefined>,

		/**
		 * Date and time at which an exchange rate is quoted.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		QuotationDate: FormControl<Date | null | undefined>,

		/**
		 * Currency from which an amount is to be converted in a currency conversion.
		 * Required
		 */
		SourceCurrency: FormControl<string | null | undefined>,

		/** Currency into which an amount is to be converted in a currency conversion. */
		TargetCurrency: FormControl<string | null | undefined>,

		/** Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP. */
		UnitCurrency: FormControl<string | null | undefined>,
	}
	export function CreateOBCurrencyExchange5FormGroup() {
		return new FormGroup<OBCurrencyExchange5FormProperties>({
			ContractIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			ExchangeRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			QuotationDate: new FormControl<Date | null | undefined>(undefined),
			SourceCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
			TargetCurrency: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Z]{3,3}$')]),
			UnitCurrency: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBCurrencyExchange5InstructedAmount {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}
	export interface OBCurrencyExchange5InstructedAmountFormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBCurrencyExchange5InstructedAmountFormGroup() {
		return new FormGroup<OBCurrencyExchange5InstructedAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}


	/** Status of a transaction entry on the books of the account servicer. */
	export enum OBEntryStatus1Code { Booked = 0, Pending = 1 }

	export interface OBError1 {

		/**
		 * Low level textual error code, e.g., UK.OBIE.Field.Missing
		 * Required
		 */
		ErrorCode: string;

		/**
		 * A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'
		 * OBIE doesn't standardise this field
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		Message: string;

		/**
		 * Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency
		 * Max length: 500
		 * Min length: 1
		 */
		Path?: string | null;

		/** URL to help remediate the problem, or provide more information, or to API Reference, or help etc */
		Url?: string | null;
	}
	export interface OBError1FormProperties {

		/**
		 * Low level textual error code, e.g., UK.OBIE.Field.Missing
		 * Required
		 */
		ErrorCode: FormControl<string | null | undefined>,

		/**
		 * A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'
		 * OBIE doesn't standardise this field
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,

		/**
		 * Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency
		 * Max length: 500
		 * Min length: 1
		 */
		Path: FormControl<string | null | undefined>,

		/** URL to help remediate the problem, or provide more information, or to API Reference, or help etc */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateOBError1FormGroup() {
		return new FormGroup<OBError1FormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(500)]),
			Path: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array of detail error codes, and messages, and URLs to documentation to help remediation. */
	export interface OBErrorResponse1 {

		/**
		 * High level textual error code, to help categorize the errors.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Code: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Errors: Array<OBError1>;

		/**
		 * A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.
		 * Max length: 40
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Brief Error message, e.g., 'There is something wrong with the request parameters provided'
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		Message: string;
	}

	/** An array of detail error codes, and messages, and URLs to documentation to help remediation. */
	export interface OBErrorResponse1FormProperties {

		/**
		 * High level textual error code, to help categorize the errors.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.
		 * Max length: 40
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Brief Error message, e.g., 'There is something wrong with the request parameters provided'
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateOBErrorResponse1FormGroup() {
		return new FormGroup<OBErrorResponse1FormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(500)]),
		});

	}


	/** Specifies the sub type of account (product family group). */
	export enum OBExternalAccountSubType1Code { ChargeCard = 0, CreditCard = 1, CurrentAccount = 2, EMoney = 3, Loan = 4, Mortgage = 5, PrePaidCard = 6, Savings = 7 }


	/** Specifies the type of account (personal or business). */
	export enum OBExternalAccountType1Code { Business = 0, Personal = 1 }


	/** Specifies the status of the direct debit in code form. */
	export enum OBExternalDirectDebitStatus1Code { Active = 0, Inactive = 1 }


	/** Party type, in a coded form. */
	export enum OBExternalPartyType1Code { Delegate = 0, Joint = 1, Sole = 2 }


	/** Specifies the scheduled payment date type requested */
	export enum OBExternalScheduleType1Code { Arrival = 0, Execution = 1 }


	/** Specifies the status of the standing order in code form. */
	export enum OBExternalStandingOrderStatus1Code { Active = 0, Inactive = 1 }


	/** Statement type, in a coded form. */
	export enum OBExternalStatementType1Code { AccountClosure = 0, AccountOpening = 1, Annual = 2, Interim = 3, RegularPeriodic = 4 }


	/** Details of the merchant involved in the transaction. */
	export interface OBMerchantDetails1 {

		/**
		 * Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.
		 * Max length: 4
		 * Min length: 3
		 */
		MerchantCategoryCode?: string | null;

		/**
		 * Name by which the merchant is known.
		 * Max length: 350
		 * Min length: 1
		 */
		MerchantName?: string | null;
	}

	/** Details of the merchant involved in the transaction. */
	export interface OBMerchantDetails1FormProperties {

		/**
		 * Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.
		 * Max length: 4
		 * Min length: 3
		 */
		MerchantCategoryCode: FormControl<string | null | undefined>,

		/**
		 * Name by which the merchant is known.
		 * Max length: 350
		 * Min length: 1
		 */
		MerchantName: FormControl<string | null | undefined>,
	}
	export function CreateOBMerchantDetails1FormGroup() {
		return new FormGroup<OBMerchantDetails1FormProperties>({
			MerchantCategoryCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(4)]),
			MerchantName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
		});

	}

	export interface OBPCAData1 {

		/** Details about the interest that may be payable to the PCA account holders */
		CreditInterest?: OBPCAData1CreditInterest;

		/** Contains details of fees and charges which are not associated with either borrowing or features/benefits */
		OtherFeesCharges?: OBPCAData1OtherFeesCharges;

		/** Details about Overdraft rates, fees & charges */
		Overdraft?: OBPCAData1Overdraft;
		ProductDetails?: OBPCAData1ProductDetails;
	}
	export interface OBPCAData1FormProperties {
	}
	export function CreateOBPCAData1FormGroup() {
		return new FormGroup<OBPCAData1FormProperties>({
		});

	}

	export interface OBPCAData1CreditInterest {

		/**
		 * The group of tiers or bands for which credit interest can be applied.
		 * Required
		 * Minimum items: 1
		 */
		OBPCAData1CreditInterestTierBandSet: Array<OBPCAData1CreditInterestTierBandSet>;
	}
	export interface OBPCAData1CreditInterestFormProperties {
	}
	export function CreateOBPCAData1CreditInterestFormGroup() {
		return new FormGroup<OBPCAData1CreditInterestFormProperties>({
		});

	}

	export interface OBPCAData1CreditInterestTierBandSet {

		/** Methods of calculating interest */
		CalculationMethod?: OBBCAData1CreditInterestTierBandSetCalculationMethod | null;

		/** Describes whether accrued interest is payable only to the PCA or to another bank account */
		Destination?: OBBCAData1CreditInterestTierBandSetDestination | null;

		/** Optional additional notes to supplement the Tier Band Set details */
		Notes?: Array<string>;

		/**
		 * Tier Band Details
		 * Required
		 * Minimum items: 1
		 */
		OBPCAData1CreditInterestTierBandSetTierBand: Array<OBPCAData1CreditInterestTierBandSetTierBand>;

		/**
		 * The methodology of how credit interest is charged. It can be:-
		 * 1. Banded
		 * Interest rates are banded. i.e. Increasing rate on whole balance as balance increases.
		 * 2. Tiered
		 * Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.
		 * 3. Whole
		 * The same interest rate is applied irrespective of the PCA balance
		 * Required
		 */
		TierBandMethod: OBPCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage;
	}
	export interface OBPCAData1CreditInterestTierBandSetFormProperties {

		/** Methods of calculating interest */
		CalculationMethod: FormControl<OBBCAData1CreditInterestTierBandSetCalculationMethod | null | undefined>,

		/** Describes whether accrued interest is payable only to the PCA or to another bank account */
		Destination: FormControl<OBBCAData1CreditInterestTierBandSetDestination | null | undefined>,

		/**
		 * The methodology of how credit interest is charged. It can be:-
		 * 1. Banded
		 * Interest rates are banded. i.e. Increasing rate on whole balance as balance increases.
		 * 2. Tiered
		 * Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.
		 * 3. Whole
		 * The same interest rate is applied irrespective of the PCA balance
		 * Required
		 */
		TierBandMethod: FormControl<OBPCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>,
	}
	export function CreateOBPCAData1CreditInterestTierBandSetFormGroup() {
		return new FormGroup<OBPCAData1CreditInterestTierBandSetFormProperties>({
			CalculationMethod: new FormControl<OBBCAData1CreditInterestTierBandSetCalculationMethod | null | undefined>(undefined),
			Destination: new FormControl<OBBCAData1CreditInterestTierBandSetDestination | null | undefined>(undefined),
			TierBandMethod: new FormControl<OBPCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBPCAData1CreditInterestTierBandSetTierBand {

		/**
		 * The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.
		 * Read more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A
		 * Required
		 */
		AER: string;

		/**
		 * How often is interest applied to the PCA for this tier/band i.e. how often the financial institution pays accumulated interest to the customer's PCA.
		 * Required
		 */
		ApplicationFrequency: OBPCAData1CreditInterestTierBandSetTierBandApplicationFrequency;

		/** Bank Interest for the PCA product */
		BankInterestRate?: string | null;

		/** Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the PCA. */
		BankInterestRateType?: OBPCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null;

		/** How often is credit interest calculated for the account. */
		CalculationFrequency?: OBPCAData1CreditInterestTierBandSetTierBandApplicationFrequency | null;

		/** Amount on which Interest applied. */
		DepositInterestAppliedCoverage?: OBPCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null;

		/**
		 * Type of interest rate, Fixed or Variable
		 * Required
		 */
		FixedVariableInterestRateType: OBBCAData1CreditInterestTierBandSetTierBandFixedVariableInterestRateType;

		/**
		 * Unique and unambiguous identification of a  Tier Band for a PCA.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/** Optional additional notes to supplement the Tier Band details */
		Notes?: Array<string>;

		/** Other application frequencies that are not available in the standard code list */
		OtherApplicationFrequency?: OBPCAData1CreditInterestTierBandSetTierBandOtherApplicationFrequency;

		/** Other interest rate types which are not available in the standard code list */
		OtherBankInterestType?: OBPCAData1CreditInterestTierBandSetTierBandOtherBankInterestType;

		/** Other calculation frequency which is not available in the standard code set. */
		OtherCalculationFrequency?: OBPCAData1CreditInterestTierBandSetTierBandOtherCalculationFrequency;

		/** Maximum deposit value for which the credit interest tier applies. */
		TierValueMaximum?: string | null;

		/**
		 * Minimum deposit value for which the credit interest tier applies.
		 * Required
		 */
		TierValueMinimum: string;
	}
	export interface OBPCAData1CreditInterestTierBandSetTierBandFormProperties {

		/**
		 * The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.
		 * Read more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A
		 * Required
		 */
		AER: FormControl<string | null | undefined>,

		/**
		 * How often is interest applied to the PCA for this tier/band i.e. how often the financial institution pays accumulated interest to the customer's PCA.
		 * Required
		 */
		ApplicationFrequency: FormControl<OBPCAData1CreditInterestTierBandSetTierBandApplicationFrequency | null | undefined>,

		/** Bank Interest for the PCA product */
		BankInterestRate: FormControl<string | null | undefined>,

		/** Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the PCA. */
		BankInterestRateType: FormControl<OBPCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/** How often is credit interest calculated for the account. */
		CalculationFrequency: FormControl<OBPCAData1CreditInterestTierBandSetTierBandApplicationFrequency | null | undefined>,

		/** Amount on which Interest applied. */
		DepositInterestAppliedCoverage: FormControl<OBPCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>,

		/**
		 * Type of interest rate, Fixed or Variable
		 * Required
		 */
		FixedVariableInterestRateType: FormControl<OBBCAData1CreditInterestTierBandSetTierBandFixedVariableInterestRateType | null | undefined>,

		/**
		 * Unique and unambiguous identification of a  Tier Band for a PCA.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/** Maximum deposit value for which the credit interest tier applies. */
		TierValueMaximum: FormControl<string | null | undefined>,

		/**
		 * Minimum deposit value for which the credit interest tier applies.
		 * Required
		 */
		TierValueMinimum: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1CreditInterestTierBandSetTierBandFormGroup() {
		return new FormGroup<OBPCAData1CreditInterestTierBandSetTierBandFormProperties>({
			AER: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			ApplicationFrequency: new FormControl<OBPCAData1CreditInterestTierBandSetTierBandApplicationFrequency | null | undefined>(undefined, [Validators.required]),
			BankInterestRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			BankInterestRateType: new FormControl<OBPCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			CalculationFrequency: new FormControl<OBPCAData1CreditInterestTierBandSetTierBandApplicationFrequency | null | undefined>(undefined),
			DepositInterestAppliedCoverage: new FormControl<OBPCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>(undefined),
			FixedVariableInterestRateType: new FormControl<OBBCAData1CreditInterestTierBandSetTierBandFixedVariableInterestRateType | null | undefined>(undefined, [Validators.required]),
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			TierValueMaximum: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			TierValueMinimum: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
		});

	}

	export enum OBPCAData1CreditInterestTierBandSetTierBandApplicationFrequency { PerAcademicTerm = 0, Daily = 1, HalfYearly = 2, Monthly = 3, Other = 4, Quarterly = 5, PerStatementDate = 6, Weekly = 7, Yearly = 8 }

	export enum OBPCAData1CreditInterestTierBandSetTierBandBankInterestRateType { LinkedBaseRate = 0, Gross = 1, Net = 2, Other = 3 }

	export enum OBPCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage { Tiered = 0, Whole = 1 }

	export interface OBPCAData1CreditInterestTierBandSetTierBandOtherApplicationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1CreditInterestTierBandSetTierBandOtherApplicationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1CreditInterestTierBandSetTierBandOtherApplicationFrequencyFormGroup() {
		return new FormGroup<OBPCAData1CreditInterestTierBandSetTierBandOtherApplicationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1CreditInterestTierBandSetTierBandOtherBankInterestType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1CreditInterestTierBandSetTierBandOtherBankInterestTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1CreditInterestTierBandSetTierBandOtherBankInterestTypeFormGroup() {
		return new FormGroup<OBPCAData1CreditInterestTierBandSetTierBandOtherBankInterestTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1CreditInterestTierBandSetTierBandOtherCalculationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1CreditInterestTierBandSetTierBandOtherCalculationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1CreditInterestTierBandSetTierBandOtherCalculationFrequencyFormGroup() {
		return new FormGroup<OBPCAData1CreditInterestTierBandSetTierBandOtherCalculationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OtherFeesCharges {

		/** Details about any caps (maximum charges) that apply to a particular fee/charge */
		OBPCAData1OtherFeesChargesFeeChargeCap?: Array<OBPCAData1OtherFeesChargesFeeChargeCap>;

		/**
		 * Other fees/charges details
		 * Required
		 * Minimum items: 1
		 */
		OBPCAData1OtherFeesChargesFeeChargeDetail: Array<OBPCAData1OtherFeesChargesFeeChargeDetail>;
	}
	export interface OBPCAData1OtherFeesChargesFormProperties {
	}
	export function CreateOBPCAData1OtherFeesChargesFormGroup() {
		return new FormGroup<OBPCAData1OtherFeesChargesFormProperties>({
		});

	}

	export interface OBPCAData1OtherFeesChargesFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null;

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount?: string | null;

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence?: number | null;

		/**
		 * Fee/charge type which is being capped
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<string>;

		/**
		 * Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution
		 * Required
		 */
		MinMaxType: OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType;

		/** Free text for adding  extra details for fee charge cap */
		Notes?: Array<string>;

		/** Other fee type code which is not available in the standard code set */
		OBPCAData1OtherFeesChargesFeeChargeCapOtherFeeType?: Array<OBPCAData1OtherFeesChargesFeeChargeCapOtherFeeType>;
	}
	export interface OBPCAData1OtherFeesChargesFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution
		 * Required
		 */
		MinMaxType: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBPCAData1OtherFeesChargesFeeChargeCapFormGroup() {
		return new FormGroup<OBPCAData1OtherFeesChargesFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod { AcademicTerm = 0, Day = 1, 'Half Year' = 2, Month = 3, Quarter = 4, Week = 5, Year = 6 }

	export interface OBPCAData1OtherFeesChargesFeeChargeCapOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OtherFeesChargesFeeChargeCapOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OtherFeesChargesFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBPCAData1OtherFeesChargesFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OtherFeesChargesFeeChargeDetail {

		/**
		 * How frequently the fee/charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency;

		/** How frequently the fee/charge is calculated */
		CalculationFrequency?: OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null;

		/** Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount?: string | null;

		/** Range or amounts or rates for which the fee/charge applies */
		FeeApplicableRange?: OBPCAData1OtherFeesChargesFeeChargeDetailFeeApplicableRange;

		/**
		 * Categorisation of fees and charges into standard categories.
		 * Required
		 */
		FeeCategory: OBBCAData1OtherFeesChargesFeeChargeDetailFeeCategory;

		/** Details about any caps (maximum charges) that apply to a particular fee/charge */
		OBPCAData1OtherFeesChargesFeeChargeDetailFeeChargeCap?: Array<OBPCAData1OtherFeesChargesFeeChargeDetailFeeChargeCap>;

		/** Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate?: string | null;

		/** Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType?: OBPCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null;

		/**
		 * Fee/Charge Type
		 * Required
		 */
		FeeType: OBPCAData1OtherFeesChargesFeeChargeDetailFeeType;

		/** Optional additional notes to supplement the fee/charge details. */
		Notes?: Array<string>;

		/** Other application frequencies not covered in the standard code list */
		OtherApplicationFrequency?: OBPCAData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency;

		/** Other calculation frequency which is not available in standard code set. */
		OtherCalculationFrequency?: OBPCAData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency;
		OtherFeeCategoryType?: OBPCAData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType;

		/** Other fee rate type which is not available in the standard code set */
		OtherFeeRateType?: OBPCAData1OtherFeesChargesFeeChargeDetailOtherFeeRateType;

		/** Other Fee/charge type which is not available in the standard code set */
		OtherFeeType?: OBPCAData1OtherFeesChargesFeeChargeDetailOtherFeeType;
	}
	export interface OBPCAData1OtherFeesChargesFeeChargeDetailFormProperties {

		/**
		 * How frequently the fee/charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: FormControl<OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>,

		/** How frequently the fee/charge is calculated */
		CalculationFrequency: FormControl<OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>,

		/** Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount: FormControl<string | null | undefined>,

		/**
		 * Categorisation of fees and charges into standard categories.
		 * Required
		 */
		FeeCategory: FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailFeeCategory | null | undefined>,

		/** Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate: FormControl<string | null | undefined>,

		/** Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType: FormControl<OBPCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/**
		 * Fee/Charge Type
		 * Required
		 */
		FeeType: FormControl<OBPCAData1OtherFeesChargesFeeChargeDetailFeeType | null | undefined>,
	}
	export function CreateOBPCAData1OtherFeesChargesFeeChargeDetailFormGroup() {
		return new FormGroup<OBPCAData1OtherFeesChargesFeeChargeDetailFormProperties>({
			ApplicationFrequency: new FormControl<OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>(undefined, [Validators.required]),
			CalculationFrequency: new FormControl<OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>(undefined),
			FeeAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCategory: new FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailFeeCategory | null | undefined>(undefined, [Validators.required]),
			FeeRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			FeeRateType: new FormControl<OBPCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			FeeType: new FormControl<OBPCAData1OtherFeesChargesFeeChargeDetailFeeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency { AccountClosing = 0, AccountOpening = 1, AcademicTerm = 2, ChargingPeriod = 3, Daily = 4, PerItem = 5, Monthly = 6, OnAccountAnniversary = 7, Other = 8, PerHour = 9, PerOccurrence = 10, PerSheet = 11, PerTransaction = 12, PerTransactionAmount = 13, PerTransactionPercentage = 14, Quarterly = 15, SixMonthly = 16, StatementMonthly = 17, Weekly = 18, Yearly = 19 }

	export interface OBPCAData1OtherFeesChargesFeeChargeDetailFeeApplicableRange {

		/** Maximum Amount on which fee is applicable (where it is expressed as an amount) */
		MaximumAmount?: string | null;

		/** Maximum rate on which fee/charge is applicable(where it is expressed as an rate) */
		MaximumRate?: string | null;

		/** Minimum Amount on which fee/charge is applicable (where it is expressed as an amount) */
		MinimumAmount?: string | null;

		/** Minimum rate on which fee/charge is applicable(where it is expressed as an rate) */
		MinimumRate?: string | null;
	}
	export interface OBPCAData1OtherFeesChargesFeeChargeDetailFeeApplicableRangeFormProperties {

		/** Maximum Amount on which fee is applicable (where it is expressed as an amount) */
		MaximumAmount: FormControl<string | null | undefined>,

		/** Maximum rate on which fee/charge is applicable(where it is expressed as an rate) */
		MaximumRate: FormControl<string | null | undefined>,

		/** Minimum Amount on which fee/charge is applicable (where it is expressed as an amount) */
		MinimumAmount: FormControl<string | null | undefined>,

		/** Minimum rate on which fee/charge is applicable(where it is expressed as an rate) */
		MinimumRate: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OtherFeesChargesFeeChargeDetailFeeApplicableRangeFormGroup() {
		return new FormGroup<OBPCAData1OtherFeesChargesFeeChargeDetailFeeApplicableRangeFormProperties>({
			MaximumAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			MaximumRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			MinimumAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			MinimumRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
		});

	}

	export interface OBPCAData1OtherFeesChargesFeeChargeDetailFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null;

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount?: string | null;

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence?: number | null;

		/**
		 * Fee/charge type which is being capped
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<string>;

		/**
		 * Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution
		 * Required
		 */
		MinMaxType: OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType;

		/** Free text for adding  extra details for fee charge cap */
		Notes?: Array<string>;

		/** Other fee type code which is not available in the standard code set */
		OBPCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType?: Array<OBPCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType>;
	}
	export interface OBPCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution
		 * Required
		 */
		MinMaxType: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBPCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapFormGroup() {
		return new FormGroup<OBPCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBPCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBPCAData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export enum OBPCAData1OtherFeesChargesFeeChargeDetailFeeType { ServiceCAccountFee = 0, ServiceCAccountFeeMonthly = 1, ServiceCOther = 2, Other = 3 }

	export interface OBPCAData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequencyFormGroup() {
		return new FormGroup<OBPCAData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequencyFormGroup() {
		return new FormGroup<OBPCAData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryTypeFormGroup() {
		return new FormGroup<OBPCAData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OtherFeesChargesFeeChargeDetailOtherFeeRateType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OtherFeesChargesFeeChargeDetailOtherFeeRateTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OtherFeesChargesFeeChargeDetailOtherFeeRateTypeFormGroup() {
		return new FormGroup<OBPCAData1OtherFeesChargesFeeChargeDetailOtherFeeRateTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OtherFeesChargesFeeChargeDetailOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Categorisation of fees and charges into standard categories.
		 * Required
		 */
		FeeCategory: OBBCAData1OtherFeesChargesFeeChargeDetailFeeCategory;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Categorisation of fees and charges into standard categories.
		 * Required
		 */
		FeeCategory: FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailFeeCategory | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFormGroup() {
		return new FormGroup<OBPCAData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			FeeCategory: new FormControl<OBBCAData1OtherFeesChargesFeeChargeDetailFeeCategory | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1Overdraft {

		/** Associated Notes about the overdraft rates */
		Notes?: Array<string>;

		/**
		 * Tier band set details
		 * Required
		 * Minimum items: 1
		 */
		OBPCAData1OverdraftOverdraftTierBandSet: Array<OBPCAData1OverdraftOverdraftTierBandSet>;
	}
	export interface OBPCAData1OverdraftFormProperties {
	}
	export function CreateOBPCAData1OverdraftFormGroup() {
		return new FormGroup<OBPCAData1OverdraftFormProperties>({
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSet {

		/** Indicates if the Overdraft is authorised (Y) or unauthorised (N) */
		AuthorisedIndicator?: boolean | null;

		/** When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply. */
		BufferAmount?: string | null;

		/**
		 * Unique and unambiguous identification of a  Tier Band for a overdraft product.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/** Optional additional notes to supplement the overdraft Tier Band Set details */
		Notes?: Array<string>;

		/** Overdraft fees and charges details */
		OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesCharges?: Array<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesCharges>;

		/**
		 * Provides overdraft details for a specific tier or band
		 * Required
		 * Minimum items: 1
		 */
		OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBand: Array<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBand>;

		/** An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time. */
		OverdraftType?: OBPCAData1OverdraftOverdraftTierBandSetOverdraftType | null;

		/**
		 * The methodology of how overdraft is charged. It can be:
		 * 'Whole'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable).
		 * 'Tiered' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation
		 * 'Banded' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.
		 * Required
		 */
		TierBandMethod: OBPCAData1OverdraftOverdraftTierBandSetTierBandMethod;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetFormProperties {

		/** Indicates if the Overdraft is authorised (Y) or unauthorised (N) */
		AuthorisedIndicator: FormControl<boolean | null | undefined>,

		/** When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply. */
		BufferAmount: FormControl<string | null | undefined>,

		/**
		 * Unique and unambiguous identification of a  Tier Band for a overdraft product.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/** An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time. */
		OverdraftType: FormControl<OBPCAData1OverdraftOverdraftTierBandSetOverdraftType | null | undefined>,

		/**
		 * The methodology of how overdraft is charged. It can be:
		 * 'Whole'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable).
		 * 'Tiered' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation
		 * 'Banded' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.
		 * Required
		 */
		TierBandMethod: FormControl<OBPCAData1OverdraftOverdraftTierBandSetTierBandMethod | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetFormProperties>({
			AuthorisedIndicator: new FormControl<boolean | null | undefined>(undefined),
			BufferAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			OverdraftType: new FormControl<OBPCAData1OverdraftOverdraftTierBandSetOverdraftType | null | undefined>(undefined),
			TierBandMethod: new FormControl<OBPCAData1OverdraftOverdraftTierBandSetTierBandMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesCharges {

		/** Details about any caps (maximum charges) that apply to a particular fee/charge */
		OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap?: Array<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap>;

		/**
		 * Details about the fees/charges
		 * Required
		 * Minimum items: 1
		 */
		OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail: Array<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail>;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesFormProperties {
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesFormProperties>({
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null;

		/** Cap amount charged for a fee/charge */
		FeeCapAmount?: string | null;

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence?: number | null;

		/**
		 * Fee/charge type which is being capped
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<string>;

		/**
		 * Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution
		 * Required
		 */
		MinMaxType: OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType;

		/** Notes related to Overdraft fee charge cap */
		Notes?: Array<string>;

		/** Other fee type code which is not available in the standard code set */
		OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType?: Array<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType>;

		/** Specifies for the overdraft control feature/benefit */
		OverdraftControlIndicator?: boolean | null;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution
		 * Required
		 */
		MinMaxType: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>,

		/** Specifies for the overdraft control feature/benefit */
		OverdraftControlIndicator: FormControl<boolean | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
			OverdraftControlIndicator: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail {

		/**
		 * Frequency at which the overdraft charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency;

		/** How often is the overdraft fee/charge calculated for the account. */
		CalculationFrequency?: OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null;

		/** Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount?: string | null;

		/** Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate?: string | null;

		/** Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType?: OBPCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null;

		/**
		 * Overdraft fee type
		 * Required
		 */
		FeeType: OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType;

		/** Every additional tranche of an overdraft balance to which an overdraft fee is applied */
		IncrementalBorrowingAmount?: string | null;

		/** Free text for capturing any other info related to Overdraft Fees Charge Details */
		Notes?: Array<string>;

		/** Other application frequencies that are not available in the standard code list */
		OtherApplicationFrequency?: OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;

		/** Other calculation frequency which is not available in the standard code set. */
		OtherCalculationFrequency?: OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;

		/** Other fee rate type code which is not available in the standard code set */
		OtherFeeRateType?: OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;

		/** Other Fee type which is not available in the standard code set */
		OtherFeeType?: OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;

		/** Specifies for the overdraft control feature/benefit */
		OverdraftControlIndicator?: boolean | null;

		/** Details about any caps (maximum charges) that apply to a particular fee/charge */
		OverdraftFeeChargeCap?: OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFormProperties {

		/**
		 * Frequency at which the overdraft charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: FormControl<OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>,

		/** How often is the overdraft fee/charge calculated for the account. */
		CalculationFrequency: FormControl<OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>,

		/** Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount: FormControl<string | null | undefined>,

		/** Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate: FormControl<string | null | undefined>,

		/** Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType: FormControl<OBPCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/**
		 * Overdraft fee type
		 * Required
		 */
		FeeType: FormControl<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType | null | undefined>,

		/** Every additional tranche of an overdraft balance to which an overdraft fee is applied */
		IncrementalBorrowingAmount: FormControl<string | null | undefined>,

		/** Specifies for the overdraft control feature/benefit */
		OverdraftControlIndicator: FormControl<boolean | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFormProperties>({
			ApplicationFrequency: new FormControl<OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>(undefined, [Validators.required]),
			CalculationFrequency: new FormControl<OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>(undefined),
			FeeAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			FeeRateType: new FormControl<OBPCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			FeeType: new FormControl<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType | null | undefined>(undefined, [Validators.required]),
			IncrementalBorrowingAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			OverdraftControlIndicator: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType { ArrangedOverdraft = 0, EmergencyBorrowing = 1, BorrowingItem = 2, OverdraftRenewal = 3, AnnualReview = 4, OverdraftSetup = 5, Surcharge = 6, TempOverdraft = 7, UnauthorisedBorrowing = 8, UnauthorisedPaidTrans = 9, Other = 10, UnauthorisedUnpaidTrans = 11 }

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null;

		/** Cap amount charged for a fee/charge */
		FeeCapAmount?: string | null;

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence?: number | null;

		/**
		 * Fee/charge type which is being capped
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType>;

		/**
		 * Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution
		 * Required
		 */
		MinMaxType: OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType;

		/** Notes related to Overdraft fee charge cap */
		Notes?: Array<string>;

		/** Other fee type code which is not available in the standard code set */
		OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType?: Array<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType>;

		/** Specifies for the overdraft control feature/benefit */
		OverdraftControlIndicator?: boolean | null;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution
		 * Required
		 */
		MinMaxType: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>,

		/** Specifies for the overdraft control feature/benefit */
		OverdraftControlIndicator: FormControl<boolean | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
			OverdraftControlIndicator: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBand {

		/** Indicates that a bank provides the overdraft limit up to TierValueMIn to all customers automatically */
		BankGuaranteedIndicator?: boolean | null;

		/**
		 * EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently
		 * used interchangeably), being the actual annual interest rate of an Overdraft.
		 */
		EAR?: string | null;

		/**
		 * Unique and unambiguous identification of a  Tier Band for a overdraft.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;

		/** Optional additional notes to supplement the Tier/band details */
		Notes?: Array<string>;

		/** Overdraft fees and charges */
		OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges?: Array<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges>;

		/** Interest charged on whole amount or tiered/banded */
		OverdraftInterestChargingCoverage?: OBPCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null;

		/** An annual percentage rate (APR) is the annual rate charged for borrowing or earned through an investment. APR is expressed as a percentage that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction but does not take compounding into account. */
		RepresentativeAPR?: string | null;

		/** Maximum value of Overdraft Tier/Band */
		TierValueMax?: string | null;

		/**
		 * Minimum value of Overdraft Tier/Band
		 * Required
		 */
		TierValueMin: string;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandFormProperties {

		/** Indicates that a bank provides the overdraft limit up to TierValueMIn to all customers automatically */
		BankGuaranteedIndicator: FormControl<boolean | null | undefined>,

		/**
		 * EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently
		 * used interchangeably), being the actual annual interest rate of an Overdraft.
		 */
		EAR: FormControl<string | null | undefined>,

		/**
		 * Unique and unambiguous identification of a  Tier Band for a overdraft.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/** Interest charged on whole amount or tiered/banded */
		OverdraftInterestChargingCoverage: FormControl<OBPCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>,

		/** An annual percentage rate (APR) is the annual rate charged for borrowing or earned through an investment. APR is expressed as a percentage that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction but does not take compounding into account. */
		RepresentativeAPR: FormControl<string | null | undefined>,

		/** Maximum value of Overdraft Tier/Band */
		TierValueMax: FormControl<string | null | undefined>,

		/**
		 * Minimum value of Overdraft Tier/Band
		 * Required
		 */
		TierValueMin: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandFormProperties>({
			BankGuaranteedIndicator: new FormControl<boolean | null | undefined>(undefined),
			EAR: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			OverdraftInterestChargingCoverage: new FormControl<OBPCAData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>(undefined),
			RepresentativeAPR: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			TierValueMax: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			TierValueMin: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges {

		/** Details about any caps (maximum charges) that apply to a particular fee/charge */
		OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap?: Array<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap>;

		/**
		 * Details about the fees/charges
		 * Required
		 * Minimum items: 1
		 */
		OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail: Array<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail>;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesFormProperties {
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesFormProperties>({
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null;

		/** Cap amount charged for a fee/charge */
		FeeCapAmount?: string | null;

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence?: number | null;

		/**
		 * Fee/charge type which is being capped
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType>;

		/**
		 * Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution
		 * Required
		 */
		MinMaxType: OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType;

		/** Notes related to Overdraft fee charge cap */
		Notes?: Array<string>;

		/** Other fee type code which is not available in the standard code set */
		OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType?: Array<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType>;

		/** Specifies for the overdraft control feature/benefit */
		OverdraftControlIndicator?: boolean | null;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution
		 * Required
		 */
		MinMaxType: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>,

		/** Specifies for the overdraft control feature/benefit */
		OverdraftControlIndicator: FormControl<boolean | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
			OverdraftControlIndicator: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail {

		/**
		 * Frequency at which the overdraft charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency;

		/** How often is the overdraft fee/charge calculated for the account. */
		CalculationFrequency?: OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null;

		/** Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount?: string | null;

		/** Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate?: string | null;

		/** Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType?: OBPCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null;

		/**
		 * Overdraft fee type
		 * Required
		 */
		FeeType: OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType;

		/** Every additional tranche of an overdraft balance to which an overdraft fee is applied */
		IncrementalBorrowingAmount?: string | null;

		/** Free text for capturing any other info related to Overdraft Fees Charge Details */
		Notes?: Array<string>;

		/** Other application frequencies that are not available in the standard code list */
		OtherApplicationFrequency?: OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;

		/** Other calculation frequency which is not available in the standard code set. */
		OtherCalculationFrequency?: OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;

		/** Other fee rate type code which is not available in the standard code set */
		OtherFeeRateType?: OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;

		/** Other Fee type which is not available in the standard code set */
		OtherFeeType?: OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;

		/** Specifies for the overdraft control feature/benefit */
		OverdraftControlIndicator?: boolean | null;

		/** Details about any caps (maximum charges) that apply to a particular fee/charge */
		OverdraftFeeChargeCap?: OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFormProperties {

		/**
		 * Frequency at which the overdraft charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: FormControl<OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>,

		/** How often is the overdraft fee/charge calculated for the account. */
		CalculationFrequency: FormControl<OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>,

		/** Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount: FormControl<string | null | undefined>,

		/** Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate: FormControl<string | null | undefined>,

		/** Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType: FormControl<OBPCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/**
		 * Overdraft fee type
		 * Required
		 */
		FeeType: FormControl<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType | null | undefined>,

		/** Every additional tranche of an overdraft balance to which an overdraft fee is applied */
		IncrementalBorrowingAmount: FormControl<string | null | undefined>,

		/** Specifies for the overdraft control feature/benefit */
		OverdraftControlIndicator: FormControl<boolean | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFormProperties>({
			ApplicationFrequency: new FormControl<OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>(undefined, [Validators.required]),
			CalculationFrequency: new FormControl<OBPCAData1OtherFeesChargesFeeChargeDetailApplicationFrequency | null | undefined>(undefined),
			FeeAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			FeeRateType: new FormControl<OBPCAData1CreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			FeeType: new FormControl<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType | null | undefined>(undefined, [Validators.required]),
			IncrementalBorrowingAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			OverdraftControlIndicator: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null;

		/** Cap amount charged for a fee/charge */
		FeeCapAmount?: string | null;

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence?: number | null;

		/**
		 * Fee/charge type which is being capped
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<OBPCAData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType>;

		/**
		 * Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution
		 * Required
		 */
		MinMaxType: OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType;

		/** Notes related to Overdraft fee charge cap */
		Notes?: Array<string>;

		/** Other fee type code which is not available in the standard code set */
		OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType?: Array<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType>;

		/** Specifies for the overdraft control feature/benefit */
		OverdraftControlIndicator?: boolean | null;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Indicates that this is the minimum/ maximum fee/charge that can be applied by the financial institution
		 * Required
		 */
		MinMaxType: FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>,

		/** Specifies for the overdraft control feature/benefit */
		OverdraftControlIndicator: FormControl<boolean | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBPCAData1OtherFeesChargesFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBBCAData1OtherFeesChargesFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
			OverdraftControlIndicator: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormProperties {

		/**
		 * The four letter Mnemonic used within an XML file to identify a code
		 * Max length: 4
		 * Min length: 0
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBPCAData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(4), Validators.pattern('^\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export enum OBPCAData1OverdraftOverdraftTierBandSetOverdraftType { Committed = 0, OnDemand = 1, Other = 2 }

	export enum OBPCAData1OverdraftOverdraftTierBandSetTierBandMethod { Tiered = 0, Whole = 1, Banded = 2 }

	export interface OBPCAData1ProductDetails {

		/** The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order */
		MonthlyMaximumCharge?: string | null;

		/** Optional additional notes to supplement the Core product details */
		Notes?: Array<string>;

		/**
		 * Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.
		 * Read more: Market Segmentation http://www.investopedia.com/terms/m/marketsegmentation.asp#ixzz4gfEEalTd
		 * With respect to PCA products, they are segmented in relation to different markets that they wish to focus on.
		 */
		Segment?: Array<string>;
	}
	export interface OBPCAData1ProductDetailsFormProperties {

		/** The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order */
		MonthlyMaximumCharge: FormControl<string | null | undefined>,
	}
	export function CreateOBPCAData1ProductDetailsFormGroup() {
		return new FormGroup<OBPCAData1ProductDetailsFormProperties>({
			MonthlyMaximumCharge: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
		});

	}

	export interface OBParty2 {

		/** A party’s role with respect to the related account. */
		AccountRole?: string | null;
		OBParty2Address?: Array<OBParty2Address>;
		BeneficialOwnership?: boolean | null;

		/**
		 * Address for electronic mail (e-mail).
		 * Max length: 256
		 * Min length: 1
		 */
		EmailAddress?: string | null;

		/**
		 * Specifies a character string with a maximum length of 350 characters.
		 * Max length: 350
		 * Min length: 1
		 */
		FullLegalName?: string | null;

		/** Legal standing of the party. */
		LegalStructure?: string | null;

		/** Collection of information that identifies a mobile phone number, as defined by telecom services. */
		Mobile?: string | null;

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 350
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		PartyId: string;

		/**
		 * Number assigned by an agent to identify its customer.
		 * Max length: 35
		 * Min length: 1
		 */
		PartyNumber?: string | null;

		/** Party type, in a coded form. */
		PartyType?: OBExternalPartyType1Code | null;

		/** Collection of information that identifies a phone number, as defined by telecom services. */
		Phone?: string | null;

		/** The Party's relationships with other resources. */
		Relationships?: OBPartyRelationships1;
	}
	export interface OBParty2FormProperties {

		/** A party’s role with respect to the related account. */
		AccountRole: FormControl<string | null | undefined>,
		BeneficialOwnership: FormControl<boolean | null | undefined>,

		/**
		 * Address for electronic mail (e-mail).
		 * Max length: 256
		 * Min length: 1
		 */
		EmailAddress: FormControl<string | null | undefined>,

		/**
		 * Specifies a character string with a maximum length of 350 characters.
		 * Max length: 350
		 * Min length: 1
		 */
		FullLegalName: FormControl<string | null | undefined>,

		/** Legal standing of the party. */
		LegalStructure: FormControl<string | null | undefined>,

		/** Collection of information that identifies a mobile phone number, as defined by telecom services. */
		Mobile: FormControl<string | null | undefined>,

		/**
		 * Name by which a party is known and which is usually used to identify that party.
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		PartyId: FormControl<string | null | undefined>,

		/**
		 * Number assigned by an agent to identify its customer.
		 * Max length: 35
		 * Min length: 1
		 */
		PartyNumber: FormControl<string | null | undefined>,

		/** Party type, in a coded form. */
		PartyType: FormControl<OBExternalPartyType1Code | null | undefined>,

		/** Collection of information that identifies a phone number, as defined by telecom services. */
		Phone: FormControl<string | null | undefined>,
	}
	export function CreateOBParty2FormGroup() {
		return new FormGroup<OBParty2FormProperties>({
			AccountRole: new FormControl<string | null | undefined>(undefined),
			BeneficialOwnership: new FormControl<boolean | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			FullLegalName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			LegalStructure: new FormControl<string | null | undefined>(undefined),
			Mobile: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\+[0-9]{1,3}-[0-9()+\-]{1,30}')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			PartyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			PartyNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			PartyType: new FormControl<OBExternalPartyType1Code | null | undefined>(undefined),
			Phone: new FormControl<string | null | undefined>(undefined, [Validators.pattern('\+[0-9]{1,3}-[0-9()+\-]{1,30}')]),
		});

	}

	export interface OBParty2Address {

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		AddressLine?: Array<string>;

		/** Identifies the nature of the postal address. */
		AddressType?: OBAddressTypeCode | null;

		/**
		 * Number that identifies the position of a building on a street.
		 * Max length: 16
		 * Min length: 1
		 */
		BuildingNumber?: string | null;

		/**
		 * Nation with its own government, occupying a particular territory.
		 * Required
		 */
		Country: string;

		/**
		 * Identifies a subdivision of a country eg, state, region, county.
		 * Max length: 35
		 * Min length: 1
		 */
		CountrySubDivision?: string | null;

		/**
		 * Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.
		 * Max length: 16
		 * Min length: 1
		 */
		PostCode?: string | null;

		/**
		 * Name of a street or thoroughfare.
		 * Max length: 70
		 * Min length: 1
		 */
		StreetName?: string | null;

		/**
		 * Name of a built-up area, with defined boundaries, and a local government.
		 * Max length: 35
		 * Min length: 1
		 */
		TownName?: string | null;
	}
	export interface OBParty2AddressFormProperties {

		/** Identifies the nature of the postal address. */
		AddressType: FormControl<OBAddressTypeCode | null | undefined>,

		/**
		 * Number that identifies the position of a building on a street.
		 * Max length: 16
		 * Min length: 1
		 */
		BuildingNumber: FormControl<string | null | undefined>,

		/**
		 * Nation with its own government, occupying a particular territory.
		 * Required
		 */
		Country: FormControl<string | null | undefined>,

		/**
		 * Identifies a subdivision of a country eg, state, region, county.
		 * Max length: 35
		 * Min length: 1
		 */
		CountrySubDivision: FormControl<string | null | undefined>,

		/**
		 * Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.
		 * Max length: 16
		 * Min length: 1
		 */
		PostCode: FormControl<string | null | undefined>,

		/**
		 * Name of a street or thoroughfare.
		 * Max length: 70
		 * Min length: 1
		 */
		StreetName: FormControl<string | null | undefined>,

		/**
		 * Name of a built-up area, with defined boundaries, and a local government.
		 * Max length: 35
		 * Min length: 1
		 */
		TownName: FormControl<string | null | undefined>,
	}
	export function CreateOBParty2AddressFormGroup() {
		return new FormGroup<OBParty2AddressFormProperties>({
			AddressType: new FormControl<OBAddressTypeCode | null | undefined>(undefined),
			BuildingNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16)]),
			Country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{2,2}$')]),
			CountrySubDivision: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			PostCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16)]),
			StreetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			TownName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}


	/** The Party's relationships with other resources. */
	export interface OBPartyRelationships1 {

		/** Relationship to the Account resource. */
		Account?: OBPartyRelationships1Account;
	}

	/** The Party's relationships with other resources. */
	export interface OBPartyRelationships1FormProperties {
	}
	export function CreateOBPartyRelationships1FormGroup() {
		return new FormGroup<OBPartyRelationships1FormProperties>({
		});

	}

	export interface OBPartyRelationships1Account {

		/**
		 * Unique identification as assigned by the ASPSP to uniquely identify the related resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Id: string;

		/**
		 * Absolute URI to the related resource.
		 * Required
		 */
		Related: string;
	}
	export interface OBPartyRelationships1AccountFormProperties {

		/**
		 * Unique identification as assigned by the ASPSP to uniquely identify the related resource.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Absolute URI to the related resource.
		 * Required
		 */
		Related: FormControl<string | null | undefined>,
	}
	export function CreateOBPartyRelationships1AccountFormGroup() {
		return new FormGroup<OBPartyRelationships1AccountFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			Related: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBReadAccount6 {

		/** Required */
		Data: OBReadAccount6Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadAccount6FormProperties {
	}
	export function CreateOBReadAccount6FormGroup() {
		return new FormGroup<OBReadAccount6FormProperties>({
		});

	}

	export interface OBReadAccount6Data {
		Account?: Array<OBAccount6>;
	}
	export interface OBReadAccount6DataFormProperties {
	}
	export function CreateOBReadAccount6DataFormGroup() {
		return new FormGroup<OBReadAccount6DataFormProperties>({
		});

	}

	export interface OBReadBalance1 {

		/** Required */
		Data: OBReadBalance1Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadBalance1FormProperties {
	}
	export function CreateOBReadBalance1FormGroup() {
		return new FormGroup<OBReadBalance1FormProperties>({
		});

	}

	export interface OBReadBalance1Data {

		/**
		 * Required
		 * Minimum items: 1
		 */
		OBReadBalance1DataBalance: Array<OBReadBalance1DataBalance>;
	}
	export interface OBReadBalance1DataFormProperties {
	}
	export function CreateOBReadBalance1DataFormGroup() {
		return new FormGroup<OBReadBalance1DataFormProperties>({
		});

	}

	export interface OBReadBalance1DataBalance {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * Amount of money of the cash balance.
		 * Required
		 */
		Amount: OBReadBalance1DataBalanceAmount;

		/**
		 * Indicates whether the balance is a credit or a debit balance.
		 * Usage: A zero balance is considered to be a credit balance.
		 * Required
		 */
		CreditDebitIndicator: OBCreditDebitCode_0;
		OBReadBalance1DataBalanceCreditLine?: Array<OBReadBalance1DataBalanceCreditLine>;

		/**
		 * Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		DateTime: Date;

		/**
		 * Balance type, in a coded form.
		 * Required
		 */
		Type: OBBalanceType1Code;
	}
	export interface OBReadBalance1DataBalanceFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Indicates whether the balance is a credit or a debit balance.
		 * Usage: A zero balance is considered to be a credit balance.
		 * Required
		 */
		CreditDebitIndicator: FormControl<OBCreditDebitCode_0 | null | undefined>,

		/**
		 * Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		DateTime: FormControl<Date | null | undefined>,

		/**
		 * Balance type, in a coded form.
		 * Required
		 */
		Type: FormControl<OBBalanceType1Code | null | undefined>,
	}
	export function CreateOBReadBalance1DataBalanceFormGroup() {
		return new FormGroup<OBReadBalance1DataBalanceFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			CreditDebitIndicator: new FormControl<OBCreditDebitCode_0 | null | undefined>(undefined, [Validators.required]),
			DateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<OBBalanceType1Code | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBReadBalance1DataBalanceAmount {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}
	export interface OBReadBalance1DataBalanceAmountFormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBReadBalance1DataBalanceAmountFormGroup() {
		return new FormGroup<OBReadBalance1DataBalanceAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBReadBalance1DataBalanceCreditLine {

		/** Amount of money of the credit line. */
		Amount?: OBReadBalance1DataBalanceCreditLineAmount;

		/**
		 * Indicates whether or not the credit line is included in the balance of the account.
		 * Usage: If not present, credit line is not included in the balance amount of the account.
		 * Required
		 */
		Included: boolean;

		/** Limit type, in a coded form. */
		Type?: OBReadBalance1DataBalanceCreditLineType | null;
	}
	export interface OBReadBalance1DataBalanceCreditLineFormProperties {

		/**
		 * Indicates whether or not the credit line is included in the balance of the account.
		 * Usage: If not present, credit line is not included in the balance amount of the account.
		 * Required
		 */
		Included: FormControl<boolean | null | undefined>,

		/** Limit type, in a coded form. */
		Type: FormControl<OBReadBalance1DataBalanceCreditLineType | null | undefined>,
	}
	export function CreateOBReadBalance1DataBalanceCreditLineFormGroup() {
		return new FormGroup<OBReadBalance1DataBalanceCreditLineFormProperties>({
			Included: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<OBReadBalance1DataBalanceCreditLineType | null | undefined>(undefined),
		});

	}

	export interface OBReadBalance1DataBalanceCreditLineAmount {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}
	export interface OBReadBalance1DataBalanceCreditLineAmountFormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBReadBalance1DataBalanceCreditLineAmountFormGroup() {
		return new FormGroup<OBReadBalance1DataBalanceCreditLineAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export enum OBReadBalance1DataBalanceCreditLineType { Available = 0, Credit = 1, Emergency = 2, 'Pre-Agreed' = 3, Temporary = 4 }

	export interface OBReadBeneficiary5 {

		/** Required */
		Data: OBReadBeneficiary5Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadBeneficiary5FormProperties {
	}
	export function CreateOBReadBeneficiary5FormGroup() {
		return new FormGroup<OBReadBeneficiary5FormProperties>({
		});

	}

	export interface OBReadBeneficiary5Data {
		Beneficiary?: Array<OBBeneficiary5>;
	}
	export interface OBReadBeneficiary5DataFormProperties {
	}
	export function CreateOBReadBeneficiary5DataFormGroup() {
		return new FormGroup<OBReadBeneficiary5DataFormProperties>({
		});

	}

	export interface OBReadConsent1 {

		/** Required */
		Data: OBReadConsent1Data;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.
		 * Required
		 */
		Risk: OBRisk2;
	}
	export interface OBReadConsent1FormProperties {
	}
	export function CreateOBReadConsent1FormGroup() {
		return new FormGroup<OBReadConsent1FormProperties>({
		});

	}

	export interface OBReadConsent1Data {

		/**
		 * Specified date and time the permissions will expire.
		 * If this is not populated, the permissions will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime?: Date | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Permissions: Array<string>;

		/**
		 * Specified start date and time for the transaction query period.
		 * If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		TransactionFromDateTime?: Date | null;

		/**
		 * Specified end date and time for the transaction query period.
		 * If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		TransactionToDateTime?: Date | null;
	}
	export interface OBReadConsent1DataFormProperties {

		/**
		 * Specified date and time the permissions will expire.
		 * If this is not populated, the permissions will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specified start date and time for the transaction query period.
		 * If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		TransactionFromDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specified end date and time for the transaction query period.
		 * If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		TransactionToDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBReadConsent1DataFormGroup() {
		return new FormGroup<OBReadConsent1DataFormProperties>({
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			TransactionFromDateTime: new FormControl<Date | null | undefined>(undefined),
			TransactionToDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info. */
	export interface OBRisk2 {
	}

	/** The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info. */
	export interface OBRisk2FormProperties {
	}
	export function CreateOBRisk2FormGroup() {
		return new FormGroup<OBRisk2FormProperties>({
		});

	}

	export interface OBReadConsentResponse1 {

		/** Required */
		Data: OBReadConsentResponse1Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;

		/**
		 * The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.
		 * Required
		 */
		Risk: OBRisk2;
	}
	export interface OBReadConsentResponse1FormProperties {
	}
	export function CreateOBReadConsentResponse1FormGroup() {
		return new FormGroup<OBReadConsentResponse1FormProperties>({
		});

	}

	export interface OBReadConsentResponse1Data {

		/**
		 * Unique identification as assigned to identify the account access consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: string;

		/**
		 * Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: Date;

		/**
		 * Specified date and time the permissions will expire.
		 * If this is not populated, the permissions will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime?: Date | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Permissions: Array<string>;

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: OBReadConsentResponse1DataStatus;

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: Date;

		/**
		 * Specified start date and time for the transaction query period.
		 * If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		TransactionFromDateTime?: Date | null;

		/**
		 * Specified end date and time for the transaction query period.
		 * If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		TransactionToDateTime?: Date | null;
	}
	export interface OBReadConsentResponse1DataFormProperties {

		/**
		 * Unique identification as assigned to identify the account access consent resource.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ConsentId: FormControl<string | null | undefined>,

		/**
		 * Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specified date and time the permissions will expire.
		 * If this is not populated, the permissions will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ExpirationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specifies the status of consent resource in code form.
		 * Required
		 */
		Status: FormControl<OBReadConsentResponse1DataStatus | null | undefined>,

		/**
		 * Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StatusUpdateDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specified start date and time for the transaction query period.
		 * If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		TransactionFromDateTime: FormControl<Date | null | undefined>,

		/**
		 * Specified end date and time for the transaction query period.
		 * If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		TransactionToDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBReadConsentResponse1DataFormGroup() {
		return new FormGroup<OBReadConsentResponse1DataFormProperties>({
			ConsentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ExpirationDateTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<OBReadConsentResponse1DataStatus | null | undefined>(undefined, [Validators.required]),
			StatusUpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			TransactionFromDateTime: new FormControl<Date | null | undefined>(undefined),
			TransactionToDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OBReadConsentResponse1DataStatus { Authorised = 0, AwaitingAuthorisation = 1, Rejected = 2, Revoked = 3 }

	export interface OBReadDataStatement2 {
		Statement?: Array<OBStatement2>;
	}
	export interface OBReadDataStatement2FormProperties {
	}
	export function CreateOBReadDataStatement2FormGroup() {
		return new FormGroup<OBReadDataStatement2FormProperties>({
		});

	}


	/** Provides further details on a statement resource. */
	export interface OBStatement2 {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: Date;

		/**
		 * Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		EndDateTime: Date;

		/**
		 * Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StartDateTime: Date;
		OBStatement2StatementAmount?: Array<OBStatement2StatementAmount>;
		OBStatement2StatementBenefit?: Array<OBStatement2StatementBenefit>;
		OBStatement2StatementDateTime?: Array<OBStatement2StatementDateTime>;
		StatementDescription?: Array<string>;
		OBStatement2StatementFee?: Array<OBStatement2StatementFee>;

		/**
		 * Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.
		 * Max length: 40
		 * Min length: 1
		 */
		StatementId?: string | null;
		OBStatement2StatementInterest?: Array<OBStatement2StatementInterest>;
		OBStatement2StatementRate?: Array<OBStatement2StatementRate>;

		/**
		 * Unique reference for the statement. This reference may be optionally populated if available.
		 * Max length: 35
		 * Min length: 1
		 */
		StatementReference?: string | null;
		OBStatement2StatementValue?: Array<OBStatement2StatementValue>;

		/**
		 * Statement type, in a coded form.
		 * Required
		 */
		Type: OBExternalStatementType1Code;
	}

	/** Provides further details on a statement resource. */
	export interface OBStatement2FormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		EndDateTime: FormControl<Date | null | undefined>,

		/**
		 * Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StartDateTime: FormControl<Date | null | undefined>,

		/**
		 * Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.
		 * Max length: 40
		 * Min length: 1
		 */
		StatementId: FormControl<string | null | undefined>,

		/**
		 * Unique reference for the statement. This reference may be optionally populated if available.
		 * Max length: 35
		 * Min length: 1
		 */
		StatementReference: FormControl<string | null | undefined>,

		/**
		 * Statement type, in a coded form.
		 * Required
		 */
		Type: FormControl<OBExternalStatementType1Code | null | undefined>,
	}
	export function CreateOBStatement2FormGroup() {
		return new FormGroup<OBStatement2FormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StartDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StatementId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			StatementReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Type: new FormControl<OBExternalStatementType1Code | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2StatementAmount {

		/**
		 * Amount of money associated with the amount type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount_8;

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: OBCreditDebitCode_0;

		/**
		 * Amount type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2StatementAmountFormProperties {

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: FormControl<OBCreditDebitCode_0 | null | undefined>,

		/**
		 * Amount type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2StatementAmountFormGroup() {
		return new FormGroup<OBStatement2StatementAmountFormProperties>({
			CreditDebitIndicator: new FormControl<OBCreditDebitCode_0 | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2StatementBenefit {

		/**
		 * Amount of money associated with the statement benefit type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount_5;

		/**
		 * Benefit type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2StatementBenefitFormProperties {

		/**
		 * Benefit type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2StatementBenefitFormGroup() {
		return new FormGroup<OBStatement2StatementBenefitFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2StatementDateTime {

		/**
		 * Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		DateTime: Date;

		/**
		 * Date time type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2StatementDateTimeFormProperties {

		/**
		 * Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		DateTime: FormControl<Date | null | undefined>,

		/**
		 * Date time type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2StatementDateTimeFormGroup() {
		return new FormGroup<OBStatement2StatementDateTimeFormProperties>({
			DateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2StatementFee {

		/**
		 * Amount of money associated with the statement fee type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount_6;

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: OBCreditDebitCode_0;

		/**
		 * Description that may be available for the statement fee.
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;

		/** How frequently the fee is applied to the Account. */
		Frequency?: string | null;

		/** Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount) */
		Rate?: number | null;

		/** Description that may be available for the statement fee rate type. */
		RateType?: string | null;

		/**
		 * Fee type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2StatementFeeFormProperties {

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: FormControl<OBCreditDebitCode_0 | null | undefined>,

		/**
		 * Description that may be available for the statement fee.
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/** How frequently the fee is applied to the Account. */
		Frequency: FormControl<string | null | undefined>,

		/** Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount) */
		Rate: FormControl<number | null | undefined>,

		/** Description that may be available for the statement fee rate type. */
		RateType: FormControl<string | null | undefined>,

		/**
		 * Fee type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2StatementFeeFormGroup() {
		return new FormGroup<OBStatement2StatementFeeFormProperties>({
			CreditDebitIndicator: new FormControl<OBCreditDebitCode_0 | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Frequency: new FormControl<string | null | undefined>(undefined),
			Rate: new FormControl<number | null | undefined>(undefined),
			RateType: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2StatementInterest {

		/**
		 * Amount of money associated with the statement interest amount type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount_7;

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: OBCreditDebitCode_0;

		/**
		 * Description that may be available for the statement interest.
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;

		/** Specifies the statement fee type requested */
		Frequency?: string | null;

		/** field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary. */
		Rate?: number | null;

		/** Description that may be available for the statement Interest rate type. */
		RateType?: string | null;

		/**
		 * Interest amount type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2StatementInterestFormProperties {

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: FormControl<OBCreditDebitCode_0 | null | undefined>,

		/**
		 * Description that may be available for the statement interest.
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/** Specifies the statement fee type requested */
		Frequency: FormControl<string | null | undefined>,

		/** field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary. */
		Rate: FormControl<number | null | undefined>,

		/** Description that may be available for the statement Interest rate type. */
		RateType: FormControl<string | null | undefined>,

		/**
		 * Interest amount type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2StatementInterestFormGroup() {
		return new FormGroup<OBStatement2StatementInterestFormProperties>({
			CreditDebitIndicator: new FormControl<OBCreditDebitCode_0 | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Frequency: new FormControl<string | null | undefined>(undefined),
			Rate: new FormControl<number | null | undefined>(undefined),
			RateType: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2StatementRate {

		/**
		 * Rate associated with the statement rate type.
		 * Required
		 */
		Rate: string;

		/**
		 * Statement rate type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2StatementRateFormProperties {

		/**
		 * Rate associated with the statement rate type.
		 * Required
		 */
		Rate: FormControl<string | null | undefined>,

		/**
		 * Statement rate type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2StatementRateFormGroup() {
		return new FormGroup<OBStatement2StatementRateFormProperties>({
			Rate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2StatementValue {

		/**
		 * Statement value type, in a coded form.
		 * Required
		 */
		Type: string;

		/**
		 * Value associated with the statement value type.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Value: string;
	}
	export interface OBStatement2StatementValueFormProperties {

		/**
		 * Statement value type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,

		/**
		 * Value associated with the statement value type.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2StatementValueFormGroup() {
		return new FormGroup<OBStatement2StatementValueFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
		});

	}

	export interface OBReadDataTransaction6 {
		Transaction?: Array<OBTransaction6>;
	}
	export interface OBReadDataTransaction6FormProperties {
	}
	export function CreateOBReadDataTransaction6FormGroup() {
		return new FormGroup<OBReadDataTransaction6FormProperties>({
		});

	}


	/** Provides further details on an entry in the report. */
	export interface OBTransaction6 {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.
		 * Max length: 70
		 * Min length: 1
		 */
		AddressLine?: string | null;

		/**
		 * Amount of money in the cash transaction entry.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount_9;

		/** Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account. */
		Balance?: OBTransactionCashBalance;

		/** Set of elements used to fully identify the type of underlying transaction resulting in an entry. */
		BankTransactionCode?: OBBankTransactionCodeStructure1;

		/**
		 * Date and time when a transaction entry is posted to an account on the account servicer's books.
		 * Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		BookingDateTime: Date;

		/** Set of elements to describe the card instrument used in the transaction. */
		CardInstrument?: OBTransactionCardInstrument1;

		/** Transaction charges to be paid by the charge bearer. */
		ChargeAmount?: OBActiveOrHistoricCurrencyAndAmount_10;

		/**
		 * Indicates whether the transaction is a credit or a debit entry.
		 * Required
		 */
		CreditDebitIndicator: OBCreditDebitCode_0;

		/** Unambiguous identification of the account of the creditor, in the case of a debit transaction. */
		CreditorAccount?: OBCashAccount6_0;

		/** Financial institution servicing an account for the creditor. */
		CreditorAgent?: OBBranchAndFinancialInstitutionIdentification6_1;

		/** Set of elements used to provide details on the currency exchange. */
		CurrencyExchange?: OBCurrencyExchange5;

		/** Unambiguous identification of the account of the debtor, in the case of a crebit transaction. */
		DebtorAccount?: OBCashAccount6_1;

		/** Financial institution servicing an account for the debtor. */
		DebtorAgent?: OBBranchAndFinancialInstitutionIdentification6_2;

		/** Details of the merchant involved in the transaction. */
		MerchantDetails?: OBMerchantDetails1;

		/** Set of elements to fully identify a proprietary bank transaction code. */
		ProprietaryBankTransactionCode?: ProprietaryBankTransactionCodeStructure1;
		StatementReference?: Array<string>;

		/**
		 * Status of a transaction entry on the books of the account servicer.
		 * Required
		 */
		Status: OBEntryStatus1Code;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;

		/**
		 * Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.
		 * Max length: 210
		 * Min length: 1
		 */
		TransactionId?: string | null;

		/**
		 * Further details of the transaction.
		 * This is the transaction narrative, which is unstructured text.
		 * Max length: 500
		 * Min length: 1
		 */
		TransactionInformation?: string | null;

		/** Specifies the Mutability of the Transaction record. */
		TransactionMutability?: OBTransaction6TransactionMutability | null;

		/**
		 * Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.
		 * Max length: 210
		 * Min length: 1
		 */
		TransactionReference?: string | null;

		/**
		 * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.
		 * Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.
		 * For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ValueDateTime?: Date | null;
	}

	/** Provides further details on an entry in the report. */
	export interface OBTransaction6FormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.
		 * Max length: 70
		 * Min length: 1
		 */
		AddressLine: FormControl<string | null | undefined>,

		/**
		 * Date and time when a transaction entry is posted to an account on the account servicer's books.
		 * Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		BookingDateTime: FormControl<Date | null | undefined>,

		/**
		 * Indicates whether the transaction is a credit or a debit entry.
		 * Required
		 */
		CreditDebitIndicator: FormControl<OBCreditDebitCode_0 | null | undefined>,

		/**
		 * Status of a transaction entry on the books of the account servicer.
		 * Required
		 */
		Status: FormControl<OBEntryStatus1Code | null | undefined>,

		/**
		 * Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.
		 * Max length: 210
		 * Min length: 1
		 */
		TransactionId: FormControl<string | null | undefined>,

		/**
		 * Further details of the transaction.
		 * This is the transaction narrative, which is unstructured text.
		 * Max length: 500
		 * Min length: 1
		 */
		TransactionInformation: FormControl<string | null | undefined>,

		/** Specifies the Mutability of the Transaction record. */
		TransactionMutability: FormControl<OBTransaction6TransactionMutability | null | undefined>,

		/**
		 * Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.
		 * Max length: 210
		 * Min length: 1
		 */
		TransactionReference: FormControl<string | null | undefined>,

		/**
		 * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.
		 * Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.
		 * For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ValueDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBTransaction6FormGroup() {
		return new FormGroup<OBTransaction6FormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			AddressLine: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			BookingDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CreditDebitIndicator: new FormControl<OBCreditDebitCode_0 | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<OBEntryStatus1Code | null | undefined>(undefined, [Validators.required]),
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(210)]),
			TransactionInformation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
			TransactionMutability: new FormControl<OBTransaction6TransactionMutability | null | undefined>(undefined),
			TransactionReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(210)]),
			ValueDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account. */
	export interface OBTransactionCashBalance {

		/**
		 * Amount of money of the cash balance after a transaction entry is applied to the account..
		 * Required
		 */
		Amount: OBTransactionCashBalanceAmount;

		/**
		 * Indicates whether the balance is a credit or a debit balance.
		 * Usage: A zero balance is considered to be a credit balance.
		 * Required
		 */
		CreditDebitIndicator: OBCreditDebitCode_0;

		/**
		 * Balance type, in a coded form.
		 * Required
		 */
		Type: OBBalanceType1Code;
	}

	/** Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account. */
	export interface OBTransactionCashBalanceFormProperties {

		/**
		 * Indicates whether the balance is a credit or a debit balance.
		 * Usage: A zero balance is considered to be a credit balance.
		 * Required
		 */
		CreditDebitIndicator: FormControl<OBCreditDebitCode_0 | null | undefined>,

		/**
		 * Balance type, in a coded form.
		 * Required
		 */
		Type: FormControl<OBBalanceType1Code | null | undefined>,
	}
	export function CreateOBTransactionCashBalanceFormGroup() {
		return new FormGroup<OBTransactionCashBalanceFormProperties>({
			CreditDebitIndicator: new FormControl<OBCreditDebitCode_0 | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<OBBalanceType1Code | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBTransactionCashBalanceAmount {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}
	export interface OBTransactionCashBalanceAmountFormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBTransactionCashBalanceAmountFormGroup() {
		return new FormGroup<OBTransactionCashBalanceAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}


	/** Set of elements to describe the card instrument used in the transaction. */
	export interface OBTransactionCardInstrument1 {

		/** The card authorisation type. */
		AuthorisationType?: OBTransactionCardInstrument1AuthorisationType | null;

		/**
		 * Name of the card scheme.
		 * Required
		 */
		CardSchemeName: OBTransactionCardInstrument1CardSchemeName;

		/**
		 * Identification assigned by an institution to identify the card instrument used in the transaction. This identification is known by the account owner, and may be masked.
		 * Max length: 34
		 * Min length: 1
		 */
		Identification?: string | null;

		/**
		 * Name of the cardholder using the card instrument.
		 * Max length: 70
		 * Min length: 1
		 */
		Name?: string | null;
	}

	/** Set of elements to describe the card instrument used in the transaction. */
	export interface OBTransactionCardInstrument1FormProperties {

		/** The card authorisation type. */
		AuthorisationType: FormControl<OBTransactionCardInstrument1AuthorisationType | null | undefined>,

		/**
		 * Name of the card scheme.
		 * Required
		 */
		CardSchemeName: FormControl<OBTransactionCardInstrument1CardSchemeName | null | undefined>,

		/**
		 * Identification assigned by an institution to identify the card instrument used in the transaction. This identification is known by the account owner, and may be masked.
		 * Max length: 34
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * Name of the cardholder using the card instrument.
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBTransactionCardInstrument1FormGroup() {
		return new FormGroup<OBTransactionCardInstrument1FormProperties>({
			AuthorisationType: new FormControl<OBTransactionCardInstrument1AuthorisationType | null | undefined>(undefined),
			CardSchemeName: new FormControl<OBTransactionCardInstrument1CardSchemeName | null | undefined>(undefined, [Validators.required]),
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(34)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export enum OBTransactionCardInstrument1AuthorisationType { ConsumerDevice = 0, Contactless = 1, None = 2, PIN = 3 }

	export enum OBTransactionCardInstrument1CardSchemeName { AmericanExpress = 0, Diners = 1, Discover = 2, MasterCard = 3, VISA = 4 }


	/** Set of elements to fully identify a proprietary bank transaction code. */
	export interface ProprietaryBankTransactionCodeStructure1 {

		/**
		 * Proprietary bank transaction code to identify the underlying transaction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		Code: string;

		/**
		 * Identification of the issuer of the proprietary bank transaction code.
		 * Max length: 35
		 * Min length: 1
		 */
		Issuer?: string | null;
	}

	/** Set of elements to fully identify a proprietary bank transaction code. */
	export interface ProprietaryBankTransactionCodeStructure1FormProperties {

		/**
		 * Proprietary bank transaction code to identify the underlying transaction.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		Code: FormControl<string | null | undefined>,

		/**
		 * Identification of the issuer of the proprietary bank transaction code.
		 * Max length: 35
		 * Min length: 1
		 */
		Issuer: FormControl<string | null | undefined>,
	}
	export function CreateProprietaryBankTransactionCodeStructure1FormGroup() {
		return new FormGroup<ProprietaryBankTransactionCodeStructure1FormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			Issuer: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
		});

	}

	export enum OBTransaction6TransactionMutability { Mutable = 0, Immutable = 1 }

	export interface OBReadDirectDebit2 {

		/** Required */
		Data: OBReadDirectDebit2Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadDirectDebit2FormProperties {
	}
	export function CreateOBReadDirectDebit2FormGroup() {
		return new FormGroup<OBReadDirectDebit2FormProperties>({
		});

	}

	export interface OBReadDirectDebit2Data {
		OBReadDirectDebit2DataDirectDebit?: Array<OBReadDirectDebit2DataDirectDebit>;
	}
	export interface OBReadDirectDebit2DataFormProperties {
	}
	export function CreateOBReadDirectDebit2DataFormGroup() {
		return new FormGroup<OBReadDirectDebit2DataFormProperties>({
		});

	}

	export interface OBReadDirectDebit2DataDirectDebit {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * A unique and immutable identifier used to identify the direct debit resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		DirectDebitId?: string | null;

		/** Specifies the status of the direct debit in code form. */
		DirectDebitStatusCode?: OBExternalDirectDebitStatus1Code | null;

		/** Regularity with which direct debit instructions are to be created and processed. */
		Frequency?: string | null;

		/**
		 * Direct Debit reference. For AUDDIS service users provide Core Reference. For non AUDDIS service users provide Core reference if possible or last used reference.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		MandateIdentification: string;

		/**
		 * Name of Service User.
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;

		/** The amount of the most recent direct debit collection. */
		PreviousPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_0;

		/**
		 * Date of most recent direct debit collection.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		PreviousPaymentDateTime?: Date | null;
	}
	export interface OBReadDirectDebit2DataDirectDebitFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A unique and immutable identifier used to identify the direct debit resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		DirectDebitId: FormControl<string | null | undefined>,

		/** Specifies the status of the direct debit in code form. */
		DirectDebitStatusCode: FormControl<OBExternalDirectDebitStatus1Code | null | undefined>,

		/** Regularity with which direct debit instructions are to be created and processed. */
		Frequency: FormControl<string | null | undefined>,

		/**
		 * Direct Debit reference. For AUDDIS service users provide Core Reference. For non AUDDIS service users provide Core reference if possible or last used reference.
		 * Required
		 * Max length: 35
		 * Min length: 1
		 */
		MandateIdentification: FormControl<string | null | undefined>,

		/**
		 * Name of Service User.
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Date of most recent direct debit collection.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		PreviousPaymentDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBReadDirectDebit2DataDirectDebitFormGroup() {
		return new FormGroup<OBReadDirectDebit2DataDirectDebitFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			DirectDebitId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			DirectDebitStatusCode: new FormControl<OBExternalDirectDebitStatus1Code | null | undefined>(undefined),
			Frequency: new FormControl<string | null | undefined>(undefined),
			MandateIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(35)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
			PreviousPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OBReadOffer1 {

		/** Required */
		Data: OBReadOffer1Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadOffer1FormProperties {
	}
	export function CreateOBReadOffer1FormGroup() {
		return new FormGroup<OBReadOffer1FormProperties>({
		});

	}

	export interface OBReadOffer1Data {
		OBReadOffer1DataOffer?: Array<OBReadOffer1DataOffer>;
	}
	export interface OBReadOffer1DataFormProperties {
	}
	export function CreateOBReadOffer1DataFormGroup() {
		return new FormGroup<OBReadOffer1DataFormProperties>({
		});

	}

	export interface OBReadOffer1DataOffer {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/** Amount of money associated with the offer type. */
		Amount?: OBReadOffer1DataOfferAmount;

		/**
		 * Further details of the offer.
		 * Max length: 500
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * Date and time at which the offer ends.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		EndDateTime?: Date | null;

		/** Fee associated with the offer type. */
		Fee?: OBReadOffer1DataOfferFee;

		/**
		 * A unique and immutable identifier used to identify the offer resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		OfferId?: string | null;

		/** Offer type, in a coded form. */
		OfferType?: OBReadOffer1DataOfferOfferType | null;

		/** Rate associated with the offer type. */
		Rate?: string | null;

		/**
		 * Date and time at which the offer starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		StartDateTime?: Date | null;

		/**
		 * Further details of the term of the offer.
		 * Max length: 500
		 * Min length: 1
		 */
		Term?: string | null;

		/**
		 * URL (Uniform Resource Locator) where documentation on the offer can be found
		 * Max length: 256
		 * Min length: 1
		 */
		URL?: string | null;

		/** Value associated with the offer type. */
		Value?: number | null;
	}
	export interface OBReadOffer1DataOfferFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Further details of the offer.
		 * Max length: 500
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Date and time at which the offer ends.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		EndDateTime: FormControl<Date | null | undefined>,

		/**
		 * A unique and immutable identifier used to identify the offer resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		OfferId: FormControl<string | null | undefined>,

		/** Offer type, in a coded form. */
		OfferType: FormControl<OBReadOffer1DataOfferOfferType | null | undefined>,

		/** Rate associated with the offer type. */
		Rate: FormControl<string | null | undefined>,

		/**
		 * Date and time at which the offer starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		StartDateTime: FormControl<Date | null | undefined>,

		/**
		 * Further details of the term of the offer.
		 * Max length: 500
		 * Min length: 1
		 */
		Term: FormControl<string | null | undefined>,

		/**
		 * URL (Uniform Resource Locator) where documentation on the offer can be found
		 * Max length: 256
		 * Min length: 1
		 */
		URL: FormControl<string | null | undefined>,

		/** Value associated with the offer type. */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateOBReadOffer1DataOfferFormGroup() {
		return new FormGroup<OBReadOffer1DataOfferFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
			EndDateTime: new FormControl<Date | null | undefined>(undefined),
			OfferId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			OfferType: new FormControl<OBReadOffer1DataOfferOfferType | null | undefined>(undefined),
			Rate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			StartDateTime: new FormControl<Date | null | undefined>(undefined),
			Term: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
			URL: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OBReadOffer1DataOfferAmount {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}
	export interface OBReadOffer1DataOfferAmountFormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBReadOffer1DataOfferAmountFormGroup() {
		return new FormGroup<OBReadOffer1DataOfferAmountFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export interface OBReadOffer1DataOfferFee {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: string;

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: string;
	}
	export interface OBReadOffer1DataOfferFeeFormProperties {

		/**
		 * A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.
		 * Required
		 */
		Amount: FormControl<string | null | undefined>,

		/**
		 * A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".
		 * Required
		 */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateOBReadOffer1DataOfferFeeFormGroup() {
		return new FormGroup<OBReadOffer1DataOfferFeeFormProperties>({
			Amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\d{1,13}$|^\d{1,13}\.\d{1,5}$')]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Z]{3,3}$')]),
		});

	}

	export enum OBReadOffer1DataOfferOfferType { BalanceTransfer = 0, LimitIncrease = 1, MoneyTransfer = 2, Other = 3, PromotionalRate = 4 }

	export interface OBReadParty2 {

		/** Required */
		Data: OBReadParty2Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadParty2FormProperties {
	}
	export function CreateOBReadParty2FormGroup() {
		return new FormGroup<OBReadParty2FormProperties>({
		});

	}

	export interface OBReadParty2Data {
		Party?: OBParty2;
	}
	export interface OBReadParty2DataFormProperties {
	}
	export function CreateOBReadParty2DataFormGroup() {
		return new FormGroup<OBReadParty2DataFormProperties>({
		});

	}

	export interface OBReadParty3 {

		/** Required */
		Data: OBReadParty3Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadParty3FormProperties {
	}
	export function CreateOBReadParty3FormGroup() {
		return new FormGroup<OBReadParty3FormProperties>({
		});

	}

	export interface OBReadParty3Data {
		Party?: Array<OBParty2>;
	}
	export interface OBReadParty3DataFormProperties {
	}
	export function CreateOBReadParty3DataFormGroup() {
		return new FormGroup<OBReadParty3DataFormProperties>({
		});

	}


	/** Product details of Other Product which is not avaiable in the standard list */
	export interface OBReadProduct2 {

		/**
		 * Aligning with the read write specs structure.
		 * Required
		 */
		Data: OBReadProduct2Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}

	/** Product details of Other Product which is not avaiable in the standard list */
	export interface OBReadProduct2FormProperties {
	}
	export function CreateOBReadProduct2FormGroup() {
		return new FormGroup<OBReadProduct2FormProperties>({
		});

	}

	export interface OBReadProduct2Data {
		OBReadProduct2DataProduct?: Array<OBReadProduct2DataProduct>;
	}
	export interface OBReadProduct2DataFormProperties {
	}
	export function CreateOBReadProduct2DataFormGroup() {
		return new FormGroup<OBReadProduct2DataFormProperties>({
		});

	}

	export interface OBReadProduct2DataProduct {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;
		BCA?: OBBCAData1;

		/**
		 * Unique and unambiguous identification of a  Product Marketing State.
		 * Max length: 35
		 * Min length: 1
		 */
		MarketingStateId?: string | null;

		/** Other product type details associated with the account. */
		OtherProductType?: OBReadProduct2DataProductOtherProductType;
		PCA?: OBPCAData1;

		/**
		 * The unique ID that has been internally assigned by the financial institution to each of the current account banking products they market to their retail and/or small to medium enterprise (SME) customers.
		 * Max length: 40
		 * Min length: 1
		 */
		ProductId?: string | null;

		/**
		 * The name of the Product used for marketing purposes from a customer perspective. I.e. what the customer would recognise.
		 * Max length: 350
		 * Min length: 1
		 */
		ProductName?: string | null;

		/**
		 * Product type : Personal Current Account, Business Current Account
		 * Required
		 */
		ProductType: OBReadProduct2DataProductProductType;

		/**
		 * Any secondary Identification which  supports Product Identifier to uniquely identify the current account banking products.
		 * Max length: 70
		 * Min length: 1
		 */
		SecondaryProductId?: string | null;
	}
	export interface OBReadProduct2DataProductFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Unique and unambiguous identification of a  Product Marketing State.
		 * Max length: 35
		 * Min length: 1
		 */
		MarketingStateId: FormControl<string | null | undefined>,

		/**
		 * The unique ID that has been internally assigned by the financial institution to each of the current account banking products they market to their retail and/or small to medium enterprise (SME) customers.
		 * Max length: 40
		 * Min length: 1
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * The name of the Product used for marketing purposes from a customer perspective. I.e. what the customer would recognise.
		 * Max length: 350
		 * Min length: 1
		 */
		ProductName: FormControl<string | null | undefined>,

		/**
		 * Product type : Personal Current Account, Business Current Account
		 * Required
		 */
		ProductType: FormControl<OBReadProduct2DataProductProductType | null | undefined>,

		/**
		 * Any secondary Identification which  supports Product Identifier to uniquely identify the current account banking products.
		 * Max length: 70
		 * Min length: 1
		 */
		SecondaryProductId: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductFormGroup() {
		return new FormGroup<OBReadProduct2DataProductFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			MarketingStateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			ProductName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			ProductType: new FormControl<OBReadProduct2DataProductProductType | null | undefined>(undefined, [Validators.required]),
			SecondaryProductId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductType {

		/** Details about the interest that may be payable to the Account holders */
		CreditInterest?: OBReadProduct2DataProductOtherProductTypeCreditInterest;

		/**
		 * Description of the Product associated with the account
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/** Details about the interest that may be payable to the SME Loan holders */
		LoanInterest?: OBReadProduct2DataProductOtherProductTypeLoanInterest;

		/**
		 * Long name associated with the product
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: string;
		OBReadProduct2DataProductOtherProductTypeOtherFeesCharges?: Array<OBReadProduct2DataProductOtherProductTypeOtherFeesCharges>;

		/** Borrowing details */
		Overdraft?: OBReadProduct2DataProductOtherProductTypeOverdraft;
		ProductDetails?: OBReadProduct2DataProductOtherProductTypeProductDetails;

		/** Repayment details of the Loan product */
		Repayment?: OBReadProduct2DataProductOtherProductTypeRepayment;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBReadProduct2DataProductOtherProductTypeFormProperties {

		/**
		 * Description of the Product associated with the account
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the product
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeCreditInterest {

		/**
		 * Required
		 * Minimum items: 1
		 */
		OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet: Array<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeCreditInterestFormProperties {
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeCreditInterestFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeCreditInterestFormProperties>({
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet {

		/** Methods of calculating interest */
		CalculationMethod?: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetCalculationMethod | null;

		/**
		 * Describes whether accrued interest is payable only to the BCA or to another bank account
		 * Required
		 */
		Destination: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestination;
		Notes?: Array<string>;
		OtherCalculationMethod?: OB_OtherCodeType1_0;
		OtherDestination?: OB_OtherCodeType1_0;

		/**
		 * Required
		 * Minimum items: 1
		 */
		OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand: Array<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand>;

		/**
		 * The methodology of how credit interest is paid/applied. It can be:-
		 * 1. Banded
		 * Interest rates are banded. i.e. Increasing rate on whole balance as balance increases.
		 * 2. Tiered
		 * Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.
		 * 3. Whole
		 * The same interest rate is applied irrespective of the product holder's account balance
		 * Required
		 */
		TierBandMethod: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage;
	}
	export interface OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetFormProperties {

		/** Methods of calculating interest */
		CalculationMethod: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetCalculationMethod | null | undefined>,

		/**
		 * Describes whether accrued interest is payable only to the BCA or to another bank account
		 * Required
		 */
		Destination: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestination | null | undefined>,

		/**
		 * The methodology of how credit interest is paid/applied. It can be:-
		 * 1. Banded
		 * Interest rates are banded. i.e. Increasing rate on whole balance as balance increases.
		 * 2. Tiered
		 * Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.
		 * 3. Whole
		 * The same interest rate is applied irrespective of the product holder's account balance
		 * Required
		 */
		TierBandMethod: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetFormProperties>({
			CalculationMethod: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetCalculationMethod | null | undefined>(undefined),
			Destination: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestination | null | undefined>(undefined, [Validators.required]),
			TierBandMethod: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetCalculationMethod { ITCO = 0, ITOT = 1, ITSI = 2 }

	export enum OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestination { INOT = 0, INPA = 1, INSC = 2 }

	export interface OB_OtherCodeType1_0 {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OB_OtherCodeType1_0FormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOB_OtherCodeType1_0FormGroup() {
		return new FormGroup<OB_OtherCodeType1_0FormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand {

		/**
		 * The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.
		 * Read more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A
		 * Required
		 */
		AER: string;

		/**
		 * How often is interest applied to the Product for this tier/band i.e. how often the financial institution pays accumulated interest to the customer's account.
		 * Required
		 */
		ApplicationFrequency: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequency;

		/** Bank Interest for the product */
		BankInterestRate?: string | null;

		/** Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the account holder's account. */
		BankInterestRateType?: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null;

		/** How often is credit interest calculated for the account. */
		CalculationFrequency?: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequency | null;

		/** Amount on which Interest applied. */
		DepositInterestAppliedCoverage?: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null;

		/**
		 * Type of interest rate, Fixed or Variable
		 * Required
		 */
		FixedVariableInterestRateType: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandFixedVariableInterestRateType;

		/**
		 * Unique and unambiguous identification of a  Tier Band for the Product.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;
		Notes?: Array<string>;

		/** Other application frequencies that are not available in the standard code list */
		OtherApplicationFrequency?: OB_OtherCodeType1_1;

		/** Other interest rate types which are not available in the standard code list */
		OtherBankInterestType?: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType;

		/** Other calculation frequency which is not available in the standard code set. */
		OtherCalculationFrequency?: OB_OtherCodeType1_2;

		/** Maximum deposit value for which the credit interest tier applies. */
		TierValueMaximum?: string | null;

		/**
		 * Minimum deposit value for which the credit interest tier applies.
		 * Required
		 */
		TierValueMinimum: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandFormProperties {

		/**
		 * The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.
		 * Read more: Annual Equivalent Rate (AER) http://www.investopedia.com/terms/a/aer.asp#ixzz4gfR7IO1A
		 * Required
		 */
		AER: FormControl<string | null | undefined>,

		/**
		 * How often is interest applied to the Product for this tier/band i.e. how often the financial institution pays accumulated interest to the customer's account.
		 * Required
		 */
		ApplicationFrequency: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequency | null | undefined>,

		/** Bank Interest for the product */
		BankInterestRate: FormControl<string | null | undefined>,

		/** Interest rate types, other than AER, which financial institutions may use to describe the annual interest rate payable to the account holder's account. */
		BankInterestRateType: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/** How often is credit interest calculated for the account. */
		CalculationFrequency: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequency | null | undefined>,

		/** Amount on which Interest applied. */
		DepositInterestAppliedCoverage: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>,

		/**
		 * Type of interest rate, Fixed or Variable
		 * Required
		 */
		FixedVariableInterestRateType: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandFixedVariableInterestRateType | null | undefined>,

		/**
		 * Unique and unambiguous identification of a  Tier Band for the Product.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/** Maximum deposit value for which the credit interest tier applies. */
		TierValueMaximum: FormControl<string | null | undefined>,

		/**
		 * Minimum deposit value for which the credit interest tier applies.
		 * Required
		 */
		TierValueMinimum: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandFormProperties>({
			AER: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			ApplicationFrequency: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequency | null | undefined>(undefined, [Validators.required]),
			BankInterestRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			BankInterestRateType: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			CalculationFrequency: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequency | null | undefined>(undefined),
			DepositInterestAppliedCoverage: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>(undefined),
			FixedVariableInterestRateType: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandFixedVariableInterestRateType | null | undefined>(undefined, [Validators.required]),
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			TierValueMaximum: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			TierValueMinimum: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
		});

	}

	export enum OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequency { FQAT = 0, FQDY = 1, FQHY = 2, FQMY = 3, FQOT = 4, FQQY = 5, FQSD = 6, FQWY = 7, FQYY = 8 }

	export enum OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType { INBB = 0, INFR = 1, INGR = 2, INLR = 3, INNE = 4, INOT = 5 }

	export enum OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage { INBA = 0, INTI = 1, INWH = 2 }

	export enum OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandFixedVariableInterestRateType { INFI = 0, INVA = 1 }


	/** Other application frequencies that are not available in the standard code list */
	export interface OB_OtherCodeType1_1 {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}

	/** Other application frequencies that are not available in the standard code list */
	export interface OB_OtherCodeType1_1FormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOB_OtherCodeType1_1FormGroup() {
		return new FormGroup<OB_OtherCodeType1_1FormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestTypeFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestTypeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}


	/** Other calculation frequency which is not available in the standard code set. */
	export interface OB_OtherCodeType1_2 {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}

	/** Other calculation frequency which is not available in the standard code set. */
	export interface OB_OtherCodeType1_2FormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOB_OtherCodeType1_2FormGroup() {
		return new FormGroup<OB_OtherCodeType1_2FormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeLoanInterest {

		/**
		 * Required
		 * Minimum items: 1
		 */
		OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet: Array<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet>;
		Notes?: Array<string>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestFormProperties {
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeLoanInterestFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeLoanInterestFormProperties>({
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet {

		/**
		 * Methods of calculating interest
		 * Required
		 */
		CalculationMethod: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetCalculationMethod;

		/**
		 * Loan interest tierbandset identification. Used by  loan providers for internal use purpose.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;
		OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges?: Array<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand: Array<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand>;
		Notes?: Array<string>;
		OtherCalculationMethod?: OB_OtherCodeType1_0;

		/**
		 * The methodology of how credit interest is charged. It can be:-
		 * 1. Banded
		 * Interest rates are banded. i.e. Increasing rate on whole balance as balance increases.
		 * 2. Tiered
		 * Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.
		 * 3. Whole
		 * The same interest rate is applied irrespective of the SME Loan balance
		 * Required
		 */
		TierBandMethod: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage;
	}
	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetFormProperties {

		/**
		 * Methods of calculating interest
		 * Required
		 */
		CalculationMethod: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetCalculationMethod | null | undefined>,

		/**
		 * Loan interest tierbandset identification. Used by  loan providers for internal use purpose.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/**
		 * The methodology of how credit interest is charged. It can be:-
		 * 1. Banded
		 * Interest rates are banded. i.e. Increasing rate on whole balance as balance increases.
		 * 2. Tiered
		 * Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.
		 * 3. Whole
		 * The same interest rate is applied irrespective of the SME Loan balance
		 * Required
		 */
		TierBandMethod: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetFormProperties>({
			CalculationMethod: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetCalculationMethod | null | undefined>(undefined, [Validators.required]),
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			TierBandMethod: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges {
		OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap?: Array<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail: Array<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesFormProperties {
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesFormProperties>({
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null;

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount?: string | null;

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<string>;

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType;
		Notes?: Array<string>;
		OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType?: Array<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod { FEAC = 0, FEAO = 1, FECP = 2, FEDA = 3, FEHO = 4, FEI = 5, FEMO = 6, FEOA = 7, FEOT = 8, FEPC = 9, FEPH = 10, FEPO = 11, FEPS = 12, FEPT = 13, FEPTA = 14, FEPTP = 15, FEQU = 16, FESM = 17, FEST = 18, FEWE = 19, FEYE = 20 }

	export enum OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType { FMMN = 0, FMMX = 1 }

	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeTypeFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail {

		/**
		 * How frequently the fee/charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod;

		/**
		 * How frequently the fee/charge is calculated
		 * Required
		 */
		CalculationFrequency: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod;

		/** Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount?: string | null;

		/** Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate?: string | null;

		/** Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType?: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null;

		/**
		 * Fee/Charge Type
		 * Required
		 */
		FeeType: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType;

		/** Fee/charge which is usually negotiable rather than a fixed amount */
		NegotiableIndicator?: boolean | null;
		Notes?: Array<string>;

		/** Other application frequencies not covered in the standard code list */
		OtherApplicationFrequency?: OB_OtherCodeType1_6;

		/** Other calculation frequency which is not available in standard code set. */
		OtherCalculationFrequency?: OB_OtherCodeType1_7;

		/** Other fee rate type which is not in the standard rate type list */
		OtherFeeRateType?: OB_OtherCodeType1_5;

		/** Other Fee/charge type which is not available in the standard code set */
		OtherFeeType?: OB_OtherFeeChargeDetailType;
	}
	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFormProperties {

		/**
		 * How frequently the fee/charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>,

		/**
		 * How frequently the fee/charge is calculated
		 * Required
		 */
		CalculationFrequency: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>,

		/** Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount: FormControl<string | null | undefined>,

		/** Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate: FormControl<string | null | undefined>,

		/** Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/**
		 * Fee/Charge Type
		 * Required
		 */
		FeeType: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType | null | undefined>,

		/** Fee/charge which is usually negotiable rather than a fixed amount */
		NegotiableIndicator: FormControl<boolean | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFormProperties>({
			ApplicationFrequency: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>(undefined, [Validators.required]),
			CalculationFrequency: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>(undefined, [Validators.required]),
			FeeAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			FeeRateType: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			FeeType: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType | null | undefined>(undefined, [Validators.required]),
			NegotiableIndicator: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType { FEPF = 0, FTOT = 1, FYAF = 2, FYAM = 3, FYAQ = 4, FYCP = 5, FYDB = 6, FYMI = 7, FYXX = 8 }


	/** Other application frequencies not covered in the standard code list */
	export interface OB_OtherCodeType1_6 {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}

	/** Other application frequencies not covered in the standard code list */
	export interface OB_OtherCodeType1_6FormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOB_OtherCodeType1_6FormGroup() {
		return new FormGroup<OB_OtherCodeType1_6FormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}


	/** Other calculation frequency which is not available in standard code set. */
	export interface OB_OtherCodeType1_7 {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}

	/** Other calculation frequency which is not available in standard code set. */
	export interface OB_OtherCodeType1_7FormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOB_OtherCodeType1_7FormGroup() {
		return new FormGroup<OB_OtherCodeType1_7FormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}


	/** Other fee rate type which is not in the standard rate type list */
	export interface OB_OtherCodeType1_5 {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}

	/** Other fee rate type which is not in the standard rate type list */
	export interface OB_OtherCodeType1_5FormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOB_OtherCodeType1_5FormGroup() {
		return new FormGroup<OB_OtherCodeType1_5FormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}


	/** Other Fee/charge type which is not available in the standard code set */
	export interface OB_OtherFeeChargeDetailType {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Categorisation of fees and charges into standard categories.
		 * Required
		 */
		FeeCategory: OB_OtherFeeChargeDetailTypeFeeCategory;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}

	/** Other Fee/charge type which is not available in the standard code set */
	export interface OB_OtherFeeChargeDetailTypeFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Categorisation of fees and charges into standard categories.
		 * Required
		 */
		FeeCategory: FormControl<OB_OtherFeeChargeDetailTypeFeeCategory | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOB_OtherFeeChargeDetailTypeFormGroup() {
		return new FormGroup<OB_OtherFeeChargeDetailTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			FeeCategory: new FormControl<OB_OtherFeeChargeDetailTypeFeeCategory | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export enum OB_OtherFeeChargeDetailTypeFeeCategory { FCOT = 0, FCRE = 1, FCSV = 2 }

	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand {

		/**
		 * Type of interest rate, Fixed or Variable
		 * Required
		 */
		FixedVariableInterestRateType: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandFixedVariableInterestRateType;

		/**
		 * Unique and unambiguous identification of a  Tier Band for a SME Loan.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;
		OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges?: Array<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges>;

		/** Loan provider Interest for the SME Loan product */
		LoanProviderInterestRate?: string | null;

		/** Interest rate types, other than APR, which financial institutions may use to describe the annual interest rate payable for the SME Loan. */
		LoanProviderInterestRateType?: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null;

		/** The unit of period (days, weeks, months etc.) of the Maximum Term */
		MaxTermPeriod?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null;

		/**
		 * The unit of period (days, weeks, months etc.) of the Minimum Term
		 * Required
		 */
		MinTermPeriod: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod;
		Notes?: Array<string>;

		/** Other loan interest rate types which are not available in the standard code list */
		OtherLoanProviderInterestRateType?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType;

		/**
		 * The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.
		 * For SME Loan, this APR is the representative APR which includes any account fees.
		 * Required
		 */
		RepAPR: string;

		/** Maximum loan term for which the loan interest tier applies. */
		TierValueMaxTerm?: number | null;

		/** Maximum loan value for which the loan interest tier applies. */
		TierValueMaximum?: string | null;

		/**
		 * Minimum loan term for which the loan interest tier applies.
		 * Required
		 */
		TierValueMinTerm: number;

		/**
		 * Minimum loan value for which the loan interest tier applies.
		 * Required
		 */
		TierValueMinimum: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandFormProperties {

		/**
		 * Type of interest rate, Fixed or Variable
		 * Required
		 */
		FixedVariableInterestRateType: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandFixedVariableInterestRateType | null | undefined>,

		/**
		 * Unique and unambiguous identification of a  Tier Band for a SME Loan.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/** Loan provider Interest for the SME Loan product */
		LoanProviderInterestRate: FormControl<string | null | undefined>,

		/** Interest rate types, other than APR, which financial institutions may use to describe the annual interest rate payable for the SME Loan. */
		LoanProviderInterestRateType: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/** The unit of period (days, weeks, months etc.) of the Maximum Term */
		MaxTermPeriod: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>,

		/**
		 * The unit of period (days, weeks, months etc.) of the Minimum Term
		 * Required
		 */
		MinTermPeriod: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>,

		/**
		 * The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.
		 * For SME Loan, this APR is the representative APR which includes any account fees.
		 * Required
		 */
		RepAPR: FormControl<string | null | undefined>,

		/** Maximum loan term for which the loan interest tier applies. */
		TierValueMaxTerm: FormControl<number | null | undefined>,

		/** Maximum loan value for which the loan interest tier applies. */
		TierValueMaximum: FormControl<string | null | undefined>,

		/**
		 * Minimum loan term for which the loan interest tier applies.
		 * Required
		 */
		TierValueMinTerm: FormControl<number | null | undefined>,

		/**
		 * Minimum loan value for which the loan interest tier applies.
		 * Required
		 */
		TierValueMinimum: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandFormProperties>({
			FixedVariableInterestRateType: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandFixedVariableInterestRateType | null | undefined>(undefined, [Validators.required]),
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			LoanProviderInterestRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			LoanProviderInterestRateType: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			MaxTermPeriod: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>(undefined),
			MinTermPeriod: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>(undefined, [Validators.required]),
			RepAPR: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			TierValueMaxTerm: new FormControl<number | null | undefined>(undefined),
			TierValueMaximum: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			TierValueMinTerm: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TierValueMinimum: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges {
		OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap?: Array<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail: Array<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesFormProperties {
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesFormProperties>({
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null;

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount?: string | null;

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType>;

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType;
		Notes?: Array<string>;
		OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType?: Array<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeTypeFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail {

		/**
		 * How frequently the fee/charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod;

		/**
		 * How frequently the fee/charge is calculated
		 * Required
		 */
		CalculationFrequency: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod;

		/** Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount?: string | null;

		/** Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate?: string | null;

		/** Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType?: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null;

		/**
		 * Fee/Charge Type
		 * Required
		 */
		FeeType: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType;

		/** Fee/charge which is usually negotiable rather than a fixed amount */
		NegotiableIndicator?: boolean | null;
		Notes?: Array<string>;

		/** Other application frequencies not covered in the standard code list */
		OtherApplicationFrequency?: OB_OtherCodeType1_6;

		/** Other calculation frequency which is not available in standard code set. */
		OtherCalculationFrequency?: OB_OtherCodeType1_7;

		/** Other fee rate type which is not in the standard rate type list */
		OtherFeeRateType?: OB_OtherCodeType1_5;

		/** Other Fee/charge type which is not available in the standard code set */
		OtherFeeType?: OB_OtherFeeChargeDetailType;
	}
	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetailFormProperties {

		/**
		 * How frequently the fee/charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>,

		/**
		 * How frequently the fee/charge is calculated
		 * Required
		 */
		CalculationFrequency: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>,

		/** Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount: FormControl<string | null | undefined>,

		/** Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate: FormControl<string | null | undefined>,

		/** Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/**
		 * Fee/Charge Type
		 * Required
		 */
		FeeType: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType | null | undefined>,

		/** Fee/charge which is usually negotiable rather than a fixed amount */
		NegotiableIndicator: FormControl<boolean | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetailFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetailFormProperties>({
			ApplicationFrequency: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>(undefined, [Validators.required]),
			CalculationFrequency: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>(undefined, [Validators.required]),
			FeeAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			FeeRateType: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			FeeType: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType | null | undefined>(undefined, [Validators.required]),
			NegotiableIndicator: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod { PACT = 0, PDAY = 1, PHYR = 2, PMTH = 3, PQTR = 4, PWEK = 5, PYER = 6 }

	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateTypeFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateTypeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesCharges {
		OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap?: Array<OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail: Array<OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail>;

		/** Other tariff type which is not in the standard list. */
		OtherTariffType?: OBReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType;

		/**
		 * Name of the tariff
		 * Max length: 350
		 * Min length: 1
		 */
		TariffName?: string | null;

		/** TariffType which defines the fee and charges. */
		TariffType?: OBReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffType | null;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFormProperties {

		/**
		 * Name of the tariff
		 * Max length: 350
		 * Min length: 1
		 */
		TariffName: FormControl<string | null | undefined>,

		/** TariffType which defines the fee and charges. */
		TariffType: FormControl<OBReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffType | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOtherFeesChargesFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFormProperties>({
			TariffName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(350)]),
			TariffType: new FormControl<OBReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffType | null | undefined>(undefined),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null;

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount?: string | null;

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType>;

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType;
		Notes?: Array<string>;
		OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType?: Array<OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeTypeFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail {

		/**
		 * How frequently the fee/charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod;

		/** How frequently the fee/charge is calculated */
		CalculationFrequency?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null;

		/** Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount?: string | null;

		/** Range or amounts or rates for which the fee/charge applies */
		FeeApplicableRange?: OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange;

		/**
		 * Categorisation of fees and charges into standard categories.
		 * Required
		 */
		FeeCategory: OB_OtherFeeChargeDetailTypeFeeCategory;
		OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap?: Array<OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap>;

		/** Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate?: string | null;

		/** Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType?: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null;

		/**
		 * Fee/Charge Type
		 * Required
		 */
		FeeType: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType;

		/** Fee/charge which is usually negotiable rather than a fixed amount */
		NegotiableIndicator?: boolean | null;
		Notes?: Array<string>;

		/** Other application frequencies not covered in the standard code list */
		OtherApplicationFrequency?: OB_OtherCodeType1_6;

		/** Other calculation frequency which is not available in standard code set. */
		OtherCalculationFrequency?: OB_OtherCodeType1_7;
		OtherFeeCategoryType?: OB_OtherCodeType1_0;

		/** Other fee rate type which is not available in the standard code set */
		OtherFeeRateType?: OB_OtherCodeType1_8;

		/** Other Fee/charge type which is not available in the standard code set */
		OtherFeeType?: OB_OtherFeeChargeDetailType;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFormProperties {

		/**
		 * How frequently the fee/charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>,

		/** How frequently the fee/charge is calculated */
		CalculationFrequency: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>,

		/** Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount: FormControl<string | null | undefined>,

		/**
		 * Categorisation of fees and charges into standard categories.
		 * Required
		 */
		FeeCategory: FormControl<OB_OtherFeeChargeDetailTypeFeeCategory | null | undefined>,

		/** Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate: FormControl<string | null | undefined>,

		/** Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/**
		 * Fee/Charge Type
		 * Required
		 */
		FeeType: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType | null | undefined>,

		/** Fee/charge which is usually negotiable rather than a fixed amount */
		NegotiableIndicator: FormControl<boolean | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFormProperties>({
			ApplicationFrequency: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>(undefined, [Validators.required]),
			CalculationFrequency: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCategory: new FormControl<OB_OtherFeeChargeDetailTypeFeeCategory | null | undefined>(undefined, [Validators.required]),
			FeeRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			FeeRateType: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			FeeType: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType | null | undefined>(undefined, [Validators.required]),
			NegotiableIndicator: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange {

		/** Maximum Amount on which fee is applicable (where it is expressed as an amount) */
		MaximumAmount?: string | null;

		/** Maximum rate on which fee/charge is applicable(where it is expressed as an rate) */
		MaximumRate?: string | null;

		/** Minimum Amount on which fee/charge is applicable (where it is expressed as an amount) */
		MinimumAmount?: string | null;

		/** Minimum rate on which fee/charge is applicable(where it is expressed as an rate) */
		MinimumRate?: string | null;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRangeFormProperties {

		/** Maximum Amount on which fee is applicable (where it is expressed as an amount) */
		MaximumAmount: FormControl<string | null | undefined>,

		/** Maximum rate on which fee/charge is applicable(where it is expressed as an rate) */
		MaximumRate: FormControl<string | null | undefined>,

		/** Minimum Amount on which fee/charge is applicable (where it is expressed as an amount) */
		MinimumAmount: FormControl<string | null | undefined>,

		/** Minimum rate on which fee/charge is applicable(where it is expressed as an rate) */
		MinimumRate: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRangeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRangeFormProperties>({
			MaximumAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			MaximumRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			MinimumAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			MinimumRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null;

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount?: string | null;

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType>;

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType;
		Notes?: Array<string>;
		OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType?: Array<OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeTypeFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}


	/** Other fee rate type which is not available in the standard code set */
	export interface OB_OtherCodeType1_8 {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}

	/** Other fee rate type which is not available in the standard code set */
	export interface OB_OtherCodeType1_8FormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOB_OtherCodeType1_8FormGroup() {
		return new FormGroup<OB_OtherCodeType1_8FormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffTypeFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffTypeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export enum OBReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffType { TTEL = 0, TTMX = 1, TTOT = 2 }

	export interface OBReadProduct2DataProductOtherProductTypeOverdraft {
		Notes?: Array<string>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOverdraftFormProperties {
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOverdraftFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOverdraftFormProperties>({
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet {

		/** Indicates if the Overdraft is authorised (Y) or unauthorised (N) */
		AuthorisedIndicator?: boolean | null;

		/** When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply. */
		BufferAmount?: string | null;

		/**
		 * Unique and unambiguous identification of a  Tier Band for a overdraft product.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;
		Notes?: Array<string>;
		OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges?: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand>;

		/** An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time. */
		OverdraftType?: OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftType | null;

		/**
		 * The methodology of how overdraft is charged. It can be:
		 * 'Whole'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable).
		 * 'Tiered' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation
		 * 'Banded' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.
		 * Required
		 */
		TierBandMethod: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetFormProperties {

		/** Indicates if the Overdraft is authorised (Y) or unauthorised (N) */
		AuthorisedIndicator: FormControl<boolean | null | undefined>,

		/** When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply. */
		BufferAmount: FormControl<string | null | undefined>,

		/**
		 * Unique and unambiguous identification of a  Tier Band for a overdraft product.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/** An overdraft can either be 'committed' which means that the facility cannot be withdrawn without reasonable notification before it's agreed end date, or 'on demand' which means that the financial institution can demand repayment at any point in time. */
		OverdraftType: FormControl<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftType | null | undefined>,

		/**
		 * The methodology of how overdraft is charged. It can be:
		 * 'Whole'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable).
		 * 'Tiered' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation
		 * 'Banded' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.
		 * Required
		 */
		TierBandMethod: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetFormProperties>({
			AuthorisedIndicator: new FormControl<boolean | null | undefined>(undefined),
			BufferAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			OverdraftType: new FormControl<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftType | null | undefined>(undefined),
			TierBandMethod: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges {
		OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap?: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesFormProperties {
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesFormProperties>({
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null;

		/** Cap amount charged for a fee/charge */
		FeeCapAmount?: string | null;

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances. */
		FeeCapOccurrence?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<string>;

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType;
		Notes?: Array<string>;
		OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType?: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances. */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail {

		/**
		 * Frequency at which the overdraft charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod;

		/** How often is the overdraft fee/charge calculated for the account. */
		CalculationFrequency?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null;

		/** Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount?: string | null;

		/** Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate?: string | null;

		/** Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType?: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null;

		/**
		 * Overdraft fee type
		 * Required
		 */
		FeeType: OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType;

		/** Every additional tranche of an overdraft balance to which an overdraft fee is applied */
		IncrementalBorrowingAmount?: string | null;

		/** Indicates whether fee and charges are negotiable */
		NegotiableIndicator?: boolean | null;
		Notes?: Array<string>;

		/** Other application frequencies that are not available in the standard code list */
		OtherApplicationFrequency?: OB_OtherCodeType1_1;

		/** Other calculation frequency which is not available in the standard code set. */
		OtherCalculationFrequency?: OB_OtherCodeType1_2;

		/** Other fee rate type code which is not available in the standard code set */
		OtherFeeRateType?: OB_OtherCodeType1_4;

		/** Other Fee type which is not available in the standard code set */
		OtherFeeType?: OB_OtherCodeType1_3;

		/** Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not. */
		OverdraftControlIndicator?: boolean | null;
		OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap?: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFormProperties {

		/**
		 * Frequency at which the overdraft charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>,

		/** How often is the overdraft fee/charge calculated for the account. */
		CalculationFrequency: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>,

		/** Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount: FormControl<string | null | undefined>,

		/** Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate: FormControl<string | null | undefined>,

		/** Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/**
		 * Overdraft fee type
		 * Required
		 */
		FeeType: FormControl<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType | null | undefined>,

		/** Every additional tranche of an overdraft balance to which an overdraft fee is applied */
		IncrementalBorrowingAmount: FormControl<string | null | undefined>,

		/** Indicates whether fee and charges are negotiable */
		NegotiableIndicator: FormControl<boolean | null | undefined>,

		/** Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not. */
		OverdraftControlIndicator: FormControl<boolean | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFormProperties>({
			ApplicationFrequency: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>(undefined, [Validators.required]),
			CalculationFrequency: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			FeeRateType: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			FeeType: new FormControl<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType | null | undefined>(undefined, [Validators.required]),
			IncrementalBorrowingAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			NegotiableIndicator: new FormControl<boolean | null | undefined>(undefined),
			OverdraftControlIndicator: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType { FBAO = 0, FBAR = 1, FBEB = 2, FBIT = 3, FBOR = 4, FBOS = 5, FBSC = 6, FBTO = 7, FBUB = 8, FBUT = 9, FTOT = 10, FTUT = 11 }


	/** Other fee rate type code which is not available in the standard code set */
	export interface OB_OtherCodeType1_4 {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}

	/** Other fee rate type code which is not available in the standard code set */
	export interface OB_OtherCodeType1_4FormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOB_OtherCodeType1_4FormGroup() {
		return new FormGroup<OB_OtherCodeType1_4FormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}


	/** Other Fee type which is not available in the standard code set */
	export interface OB_OtherCodeType1_3 {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}

	/** Other Fee type which is not available in the standard code set */
	export interface OB_OtherCodeType1_3FormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOB_OtherCodeType1_3FormGroup() {
		return new FormGroup<OB_OtherCodeType1_3FormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null;

		/** Cap amount charged for a fee/charge */
		FeeCapAmount?: string | null;

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances. */
		FeeCapOccurrence?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType>;

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType;
		Notes?: Array<string>;
		OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType?: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances. */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand {

		/** Specifies the maximum length of a band for a fixed overdraft agreement */
		AgreementLengthMax?: number | null;

		/** Specifies the minimum length of a band for a fixed overdraft agreement */
		AgreementLengthMin?: number | null;

		/** Specifies the period of a fixed length overdraft agreement */
		AgreementPeriod?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null;

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances. */
		BankGuaranteedIndicator?: boolean | null;

		/**
		 * EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently
		 * used interchangeably), being the actual annual interest rate of an Overdraft.
		 */
		EAR?: string | null;

		/**
		 * Unique and unambiguous identification of a  Tier Band for a overdraft.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification?: string | null;
		Notes?: Array<string>;
		OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges?: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges>;

		/** Refers to which interest rate is applied when interests are tiered. For example, if an overdraft balance is �2k and the interest tiers are:- 0-�500 0.1%, 500-1000 0.2%, 1000-10000 0.5%, then the applicable interest rate could either be 0.5% of the entire balance (since the account balance sits in the top interest tier) or (0.1%*500)+(0.2%*500)+(0.5%*1000). In the 1st situation, we say the interest is applied to the �Whole� of the account balance,  and in the 2nd that it is �Tiered�. */
		OverdraftInterestChargingCoverage?: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null;

		/** Maximum value of Overdraft Tier/Band */
		TierValueMax?: string | null;

		/**
		 * Minimum value of Overdraft Tier/Band
		 * Required
		 */
		TierValueMin: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandFormProperties {

		/** Specifies the maximum length of a band for a fixed overdraft agreement */
		AgreementLengthMax: FormControl<number | null | undefined>,

		/** Specifies the minimum length of a band for a fixed overdraft agreement */
		AgreementLengthMin: FormControl<number | null | undefined>,

		/** Specifies the period of a fixed length overdraft agreement */
		AgreementPeriod: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>,

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances. */
		BankGuaranteedIndicator: FormControl<boolean | null | undefined>,

		/**
		 * EAR means Effective Annual Rate and/or Equivalent Annual Rate (frequently
		 * used interchangeably), being the actual annual interest rate of an Overdraft.
		 */
		EAR: FormControl<string | null | undefined>,

		/**
		 * Unique and unambiguous identification of a  Tier Band for a overdraft.
		 * Max length: 35
		 * Min length: 1
		 */
		Identification: FormControl<string | null | undefined>,

		/** Refers to which interest rate is applied when interests are tiered. For example, if an overdraft balance is �2k and the interest tiers are:- 0-�500 0.1%, 500-1000 0.2%, 1000-10000 0.5%, then the applicable interest rate could either be 0.5% of the entire balance (since the account balance sits in the top interest tier) or (0.1%*500)+(0.2%*500)+(0.5%*1000). In the 1st situation, we say the interest is applied to the �Whole� of the account balance,  and in the 2nd that it is �Tiered�. */
		OverdraftInterestChargingCoverage: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>,

		/** Maximum value of Overdraft Tier/Band */
		TierValueMax: FormControl<string | null | undefined>,

		/**
		 * Minimum value of Overdraft Tier/Band
		 * Required
		 */
		TierValueMin: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandFormProperties>({
			AgreementLengthMax: new FormControl<number | null | undefined>(undefined),
			AgreementLengthMin: new FormControl<number | null | undefined>(undefined),
			AgreementPeriod: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>(undefined),
			BankGuaranteedIndicator: new FormControl<boolean | null | undefined>(undefined),
			EAR: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			Identification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			OverdraftInterestChargingCoverage: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverage | null | undefined>(undefined),
			TierValueMax: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			TierValueMin: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges {
		OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap?: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesFormProperties {
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesFormProperties>({
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null;

		/** Cap amount charged for a fee/charge */
		FeeCapAmount?: string | null;

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances. */
		FeeCapOccurrence?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType>;

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType;
		Notes?: Array<string>;
		OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType?: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances. */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail {

		/**
		 * Frequency at which the overdraft charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod;

		/** How often is the overdraft fee/charge calculated for the account. */
		CalculationFrequency?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null;

		/** Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount?: string | null;

		/** Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate?: string | null;

		/** Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType?: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null;

		/**
		 * Overdraft fee type
		 * Required
		 */
		FeeType: OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType;

		/** Every additional tranche of an overdraft balance to which an overdraft fee is applied */
		IncrementalBorrowingAmount?: string | null;

		/** Indicates whether fee and charges are negotiable */
		NegotiableIndicator?: boolean | null;
		Notes?: Array<string>;

		/** Other application frequencies that are not available in the standard code list */
		OtherApplicationFrequency?: OB_OtherCodeType1_1;

		/** Other calculation frequency which is not available in the standard code set. */
		OtherCalculationFrequency?: OB_OtherCodeType1_2;

		/** Other fee rate type code which is not available in the standard code set */
		OtherFeeRateType?: OB_OtherCodeType1_4;

		/** Other Fee type which is not available in the standard code set */
		OtherFeeType?: OB_OtherCodeType1_3;

		/** Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not. */
		OverdraftControlIndicator?: boolean | null;
		OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap?: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFormProperties {

		/**
		 * Frequency at which the overdraft charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>,

		/** How often is the overdraft fee/charge calculated for the account. */
		CalculationFrequency: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>,

		/** Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount: FormControl<string | null | undefined>,

		/** Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate: FormControl<string | null | undefined>,

		/** Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/**
		 * Overdraft fee type
		 * Required
		 */
		FeeType: FormControl<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType | null | undefined>,

		/** Every additional tranche of an overdraft balance to which an overdraft fee is applied */
		IncrementalBorrowingAmount: FormControl<string | null | undefined>,

		/** Indicates whether fee and charges are negotiable */
		NegotiableIndicator: FormControl<boolean | null | undefined>,

		/** Indicates if the fee/charge is already covered by an 'Overdraft Control' fee or not. */
		OverdraftControlIndicator: FormControl<boolean | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFormProperties>({
			ApplicationFrequency: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>(undefined, [Validators.required]),
			CalculationFrequency: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>(undefined),
			FeeAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			FeeRateType: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			FeeType: new FormControl<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType | null | undefined>(undefined, [Validators.required]),
			IncrementalBorrowingAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			NegotiableIndicator: new FormControl<boolean | null | undefined>(undefined),
			OverdraftControlIndicator: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null;

		/** Cap amount charged for a fee/charge */
		FeeCapAmount?: string | null;

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances. */
		FeeCapOccurrence?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeType>;

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType;
		Notes?: Array<string>;
		OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType?: Array<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances. */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export enum OBReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftType { OVCO = 0, OVOD = 1, OVOT = 2 }

	export interface OBReadProduct2DataProductOtherProductTypeProductDetails {

		/** The length/duration of the fee free period */
		FeeFreeLength?: number | null;

		/** The unit of period (days, weeks, months etc.) of the promotional length */
		FeeFreeLengthPeriod?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null;

		/** The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order */
		MonthlyMaximumCharge?: string | null;
		Notes?: Array<string>;
		OtherSegment?: OB_OtherCodeType1_0;
		Segment?: Array<string>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeProductDetailsFormProperties {

		/** The length/duration of the fee free period */
		FeeFreeLength: FormControl<number | null | undefined>,

		/** The unit of period (days, weeks, months etc.) of the promotional length */
		FeeFreeLengthPeriod: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>,

		/** The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order */
		MonthlyMaximumCharge: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeProductDetailsFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeProductDetailsFormProperties>({
			FeeFreeLength: new FormControl<number | null | undefined>(undefined),
			FeeFreeLengthPeriod: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>(undefined),
			MonthlyMaximumCharge: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeRepayment {

		/** The repayment is for paying just the interest only or both interest and capital or bullet amount or balance to date etc */
		AmountType?: OBReadProduct2DataProductOtherProductTypeRepaymentAmountType | null;
		Notes?: Array<string>;

		/** Other amount type which is not in the standard code list */
		OtherAmountType?: OBReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType;

		/** Other repayment frequency which is not in the standard code list */
		OtherRepaymentFrequency?: OBReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency;

		/** Other repayment type which is not in the standard code list */
		OtherRepaymentType?: OBReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType;

		/** Applicable fee/charges for repayment such as prepayment, full early repayment or non repayment. */
		RepaymentFeeCharges?: OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges;

		/** Repayment frequency */
		RepaymentFrequency?: OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequency | null;
		OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday?: Array<OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday>;

		/** Repayment type */
		RepaymentType?: OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentType | null;
	}
	export interface OBReadProduct2DataProductOtherProductTypeRepaymentFormProperties {

		/** The repayment is for paying just the interest only or both interest and capital or bullet amount or balance to date etc */
		AmountType: FormControl<OBReadProduct2DataProductOtherProductTypeRepaymentAmountType | null | undefined>,

		/** Repayment frequency */
		RepaymentFrequency: FormControl<OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequency | null | undefined>,

		/** Repayment type */
		RepaymentType: FormControl<OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentType | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeRepaymentFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeRepaymentFormProperties>({
			AmountType: new FormControl<OBReadProduct2DataProductOtherProductTypeRepaymentAmountType | null | undefined>(undefined),
			RepaymentFrequency: new FormControl<OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequency | null | undefined>(undefined),
			RepaymentType: new FormControl<OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentType | null | undefined>(undefined),
		});

	}

	export enum OBReadProduct2DataProductOtherProductTypeRepaymentAmountType { RABD = 0, RABL = 1, RACI = 2, RAFC = 3, RAIO = 4, RALT = 5, USOT = 6 }

	export interface OBReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeRepaymentOtherAmountTypeFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeRepaymentOtherAmountTypeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeRepaymentOtherAmountTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequencyFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequencyFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequencyFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentTypeFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentTypeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges {
		OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap?: Array<OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap>;

		/**
		 * Required
		 * Minimum items: 1
		 */
		OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail: Array<OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesFormProperties {
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesFormProperties>({
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null;

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount?: string | null;

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence?: number | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		FeeType: Array<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType>;

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType;
		Notes?: Array<string>;
		OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType?: Array<OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFormProperties {

		/** Period e.g. day, week, month etc. for which the fee/charge is capped */
		CappingPeriod: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>,

		/** Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeCapAmount: FormControl<string | null | undefined>,

		/** fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount */
		FeeCapOccurrence: FormControl<number | null | undefined>,

		/**
		 * Min Max type
		 * Required
		 */
		MinMaxType: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFormProperties>({
			CappingPeriod: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>(undefined),
			FeeCapAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeCapOccurrence: new FormControl<number | null | undefined>(undefined),
			MinMaxType: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code?: string | null;

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: string;

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: string;
	}
	export interface OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeTypeFormProperties {

		/** The four letter Mnemonic used within an XML file to identify a code */
		Code: FormControl<string | null | undefined>,

		/**
		 * Description to describe the purpose of the code
		 * Required
		 * Max length: 350
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Long name associated with the code
		 * Required
		 * Max length: 70
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeTypeFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeTypeFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\\w{0,4}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(350)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(70)]),
		});

	}

	export interface OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail {

		/**
		 * How frequently the fee/charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod;

		/**
		 * How frequently the fee/charge is calculated
		 * Required
		 */
		CalculationFrequency: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod;

		/** Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount?: string | null;

		/** Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate?: string | null;

		/** Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType?: OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null;

		/**
		 * Fee/Charge Type
		 * Required
		 */
		FeeType: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType;

		/** Fee/charge which is usually negotiable rather than a fixed amount */
		NegotiableIndicator?: boolean | null;
		Notes?: Array<string>;

		/** Other application frequencies not covered in the standard code list */
		OtherApplicationFrequency?: OB_OtherCodeType1_6;

		/** Other calculation frequency which is not available in standard code set. */
		OtherCalculationFrequency?: OB_OtherCodeType1_7;

		/** Other fee rate type which is not available in the standard code set */
		OtherFeeRateType?: OB_OtherCodeType1_8;

		/** Other Fee/charge type which is not available in the standard code set */
		OtherFeeType?: OB_OtherFeeChargeDetailType;
	}
	export interface OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetailFormProperties {

		/**
		 * How frequently the fee/charge is applied to the account
		 * Required
		 */
		ApplicationFrequency: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>,

		/**
		 * How frequently the fee/charge is calculated
		 * Required
		 */
		CalculationFrequency: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>,

		/** Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate) */
		FeeAmount: FormControl<string | null | undefined>,

		/** Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRate: FormControl<string | null | undefined>,

		/** Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
		FeeRateType: FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>,

		/**
		 * Fee/Charge Type
		 * Required
		 */
		FeeType: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType | null | undefined>,

		/** Fee/charge which is usually negotiable rather than a fixed amount */
		NegotiableIndicator: FormControl<boolean | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetailFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetailFormProperties>({
			ApplicationFrequency: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>(undefined, [Validators.required]),
			CalculationFrequency: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapCappingPeriod | null | undefined>(undefined, [Validators.required]),
			FeeAmount: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,14}){1}(\.\d{1,4}){0,1}$')]),
			FeeRate: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			FeeRateType: new FormControl<OBReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateType | null | undefined>(undefined),
			FeeType: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetailFeeType | null | undefined>(undefined, [Validators.required]),
			NegotiableIndicator: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequency { SMDA = 0, SMFL = 1, SMFO = 2, SMHY = 3, SMMO = 4, SMOT = 5, SMQU = 6, SMWE = 7, SMYE = 8 }

	export interface OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday {

		/** The maximum length/duration of a Repayment Holiday */
		MaxHolidayLength?: number | null;

		/** The unit of period (days, weeks, months etc.) of the repayment holiday */
		MaxHolidayPeriod?: OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null;
		Notes?: Array<string>;
	}
	export interface OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayFormProperties {

		/** The maximum length/duration of a Repayment Holiday */
		MaxHolidayLength: FormControl<number | null | undefined>,

		/** The unit of period (days, weeks, months etc.) of the repayment holiday */
		MaxHolidayPeriod: FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>,
	}
	export function CreateOBReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayFormGroup() {
		return new FormGroup<OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayFormProperties>({
			MaxHolidayLength: new FormControl<number | null | undefined>(undefined),
			MaxHolidayPeriod: new FormControl<OBReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriod | null | undefined>(undefined),
		});

	}

	export enum OBReadProduct2DataProductOtherProductTypeRepaymentRepaymentType { USBA = 0, USBU = 1, USCI = 2, USCS = 3, USER = 4, USFA = 5, USFB = 6, USFI = 7, USIO = 8, USOT = 9, USPF = 10, USRW = 11, USSL = 12 }

	export enum OBReadProduct2DataProductProductType { BusinessCurrentAccount = 0, CommercialCreditCard = 1, Other = 2, PersonalCurrentAccount = 3, SMELoan = 4 }

	export interface OBReadScheduledPayment3 {

		/** Required */
		Data: OBReadScheduledPayment3Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadScheduledPayment3FormProperties {
	}
	export function CreateOBReadScheduledPayment3FormGroup() {
		return new FormGroup<OBReadScheduledPayment3FormProperties>({
		});

	}

	export interface OBReadScheduledPayment3Data {
		ScheduledPayment?: Array<OBScheduledPayment3>;
	}
	export interface OBReadScheduledPayment3DataFormProperties {
	}
	export function CreateOBReadScheduledPayment3DataFormGroup() {
		return new FormGroup<OBReadScheduledPayment3DataFormProperties>({
		});

	}

	export interface OBScheduledPayment3 {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/** Provides the details to identify the beneficiary account. */
		CreditorAccount?: OBCashAccount5_1;

		/**
		 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
		 * This is the servicer of the beneficiary account.
		 */
		CreditorAgent?: OBBranchAndFinancialInstitutionIdentification5_1;

		/**
		 * A reference value provided by the PSU to the PISP while setting up the scheduled payment.
		 * Max length: 35
		 * Min length: 1
		 */
		DebtorReference?: string | null;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBActiveOrHistoricCurrencyAndAmount_1;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		ScheduledPaymentDateTime: Date;

		/**
		 * A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		ScheduledPaymentId?: string | null;

		/**
		 * Specifies the scheduled payment date type requested
		 * Required
		 */
		ScheduledType: OBExternalScheduleType1Code;
	}
	export interface OBScheduledPayment3FormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A reference value provided by the PSU to the PISP while setting up the scheduled payment.
		 * Max length: 35
		 * Min length: 1
		 */
		DebtorReference: FormControl<string | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		ScheduledPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		ScheduledPaymentId: FormControl<string | null | undefined>,

		/**
		 * Specifies the scheduled payment date type requested
		 * Required
		 */
		ScheduledType: FormControl<OBExternalScheduleType1Code | null | undefined>,
	}
	export function CreateOBScheduledPayment3FormGroup() {
		return new FormGroup<OBScheduledPayment3FormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			DebtorReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			ScheduledPaymentDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ScheduledPaymentId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			ScheduledType: new FormControl<OBExternalScheduleType1Code | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBReadStandingOrder6 {

		/** Required */
		Data: OBReadStandingOrder6Data;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadStandingOrder6FormProperties {
	}
	export function CreateOBReadStandingOrder6FormGroup() {
		return new FormGroup<OBReadStandingOrder6FormProperties>({
		});

	}

	export interface OBReadStandingOrder6Data {
		StandingOrder?: Array<OBStandingOrder6>;
	}
	export interface OBReadStandingOrder6DataFormProperties {
	}
	export function CreateOBReadStandingOrder6DataFormGroup() {
		return new FormGroup<OBReadStandingOrder6DataFormProperties>({
		});

	}

	export interface OBStandingOrder6 {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/** Provides the details to identify the beneficiary account. */
		CreditorAccount?: OBCashAccount5_1;

		/**
		 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
		 * This is the servicer of the beneficiary account.
		 */
		CreditorAgent?: OBBranchAndFinancialInstitutionIdentification5_1;

		/** The amount of the final Standing Order */
		FinalPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_4;

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime?: Date | null;

		/** The amount of the first Standing Order */
		FirstPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_2;

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FirstPaymentDateTime?: Date | null;

		/**
		 * Individual Definitions:
		 * NotKnown - Not Known
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlDay - An interval specified in number of calendar days (02 to 31)
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * NotKnown (ScheduleCode)
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlDay:NoOfDay (ScheduleCode + NoOfDay)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * NotKnown
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1])
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: string;

		/** The amount of the last (most recent) Standing Order instruction. */
		LastPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_11;

		/**
		 * The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastPaymentDateTime?: Date | null;

		/** The amount of the next Standing Order. */
		NextPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_3;

		/**
		 * The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		NextPaymentDateTime?: Date | null;

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments?: string | null;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		StandingOrderId?: string | null;

		/** Specifies the status of the standing order in code form. */
		StandingOrderStatusCode?: OBExternalDirectDebitStatus1Code | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBStandingOrder6FormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FirstPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Individual Definitions:
		 * NotKnown - Not Known
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlDay - An interval specified in number of calendar days (02 to 31)
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * NotKnown (ScheduleCode)
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlDay:NoOfDay (ScheduleCode + NoOfDay)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * NotKnown
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1])
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: FormControl<string | null | undefined>,

		/**
		 * The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		NextPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments: FormControl<string | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		StandingOrderId: FormControl<string | null | undefined>,

		/** Specifies the status of the standing order in code form. */
		StandingOrderStatusCode: FormControl<OBExternalDirectDebitStatus1Code | null | undefined>,
	}
	export function CreateOBStandingOrder6FormGroup() {
		return new FormGroup<OBStandingOrder6FormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			FinalPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			FirstPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			Frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$')]),
			LastPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			NextPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			NumberOfPayments: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			StandingOrderId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			StandingOrderStatusCode: new FormControl<OBExternalDirectDebitStatus1Code | null | undefined>(undefined),
		});

	}

	export interface OBReadStatement2 {

		/** Required */
		Data: OBReadDataStatement2;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadStatement2FormProperties {
	}
	export function CreateOBReadStatement2FormGroup() {
		return new FormGroup<OBReadStatement2FormProperties>({
		});

	}

	export interface OBReadTransaction6 {

		/** Required */
		Data: OBReadDataTransaction6;

		/** Links relevant to the payload */
		Links?: Links;

		/** Meta Data relevant to the payload */
		Meta?: Meta;
	}
	export interface OBReadTransaction6FormProperties {
	}
	export function CreateOBReadTransaction6FormGroup() {
		return new FormGroup<OBReadTransaction6FormProperties>({
		});

	}

	export interface OBScheduledPayment3Basic {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * A reference value provided by the PSU to the PISP while setting up the scheduled payment.
		 * Max length: 35
		 * Min length: 1
		 */
		DebtorReference?: string | null;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBActiveOrHistoricCurrencyAndAmount_1;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		ScheduledPaymentDateTime: Date;

		/**
		 * A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		ScheduledPaymentId?: string | null;

		/**
		 * Specifies the scheduled payment date type requested
		 * Required
		 */
		ScheduledType: OBExternalScheduleType1Code;
	}
	export interface OBScheduledPayment3BasicFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A reference value provided by the PSU to the PISP while setting up the scheduled payment.
		 * Max length: 35
		 * Min length: 1
		 */
		DebtorReference: FormControl<string | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		ScheduledPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		ScheduledPaymentId: FormControl<string | null | undefined>,

		/**
		 * Specifies the scheduled payment date type requested
		 * Required
		 */
		ScheduledType: FormControl<OBExternalScheduleType1Code | null | undefined>,
	}
	export function CreateOBScheduledPayment3BasicFormGroup() {
		return new FormGroup<OBScheduledPayment3BasicFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			DebtorReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			ScheduledPaymentDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ScheduledPaymentId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			ScheduledType: new FormControl<OBExternalScheduleType1Code | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBScheduledPayment3Detail {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * Provides the details to identify the beneficiary account.
		 * Required
		 */
		CreditorAccount: OBCashAccount5_1;

		/**
		 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
		 * This is the servicer of the beneficiary account.
		 */
		CreditorAgent?: OBBranchAndFinancialInstitutionIdentification5_1;

		/**
		 * A reference value provided by the PSU to the PISP while setting up the scheduled payment.
		 * Max length: 35
		 * Min length: 1
		 */
		DebtorReference?: string | null;

		/**
		 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
		 * Usage: This amount has to be transported unchanged through the transaction chain.
		 * Required
		 */
		InstructedAmount: OBActiveOrHistoricCurrencyAndAmount_1;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		ScheduledPaymentDateTime: Date;

		/**
		 * A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		ScheduledPaymentId?: string | null;

		/**
		 * Specifies the scheduled payment date type requested
		 * Required
		 */
		ScheduledType: OBExternalScheduleType1Code;
	}
	export interface OBScheduledPayment3DetailFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * A reference value provided by the PSU to the PISP while setting up the scheduled payment.
		 * Max length: 35
		 * Min length: 1
		 */
		DebtorReference: FormControl<string | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		ScheduledPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		ScheduledPaymentId: FormControl<string | null | undefined>,

		/**
		 * Specifies the scheduled payment date type requested
		 * Required
		 */
		ScheduledType: FormControl<OBExternalScheduleType1Code | null | undefined>,
	}
	export function CreateOBScheduledPayment3DetailFormGroup() {
		return new FormGroup<OBScheduledPayment3DetailFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			DebtorReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			ScheduledPaymentDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ScheduledPaymentId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			ScheduledType: new FormControl<OBExternalScheduleType1Code | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStandingOrder6Basic {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/** The amount of the final Standing Order */
		FinalPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_4;

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime?: Date | null;

		/** The amount of the first Standing Order */
		FirstPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_2;

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FirstPaymentDateTime?: Date | null;

		/**
		 * Individual Definitions:
		 * NotKnown - Not Known
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlDay - An interval specified in number of calendar days (02 to 31)
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * NotKnown (ScheduleCode)
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlDay:NoOfDay (ScheduleCode + NoOfDay)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * NotKnown
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1])
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: string;

		/** The amount of the last (most recent) Standing Order instruction. */
		LastPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_11;

		/**
		 * The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastPaymentDateTime?: Date | null;

		/** The amount of the next Standing Order. */
		NextPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_3;

		/**
		 * The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		NextPaymentDateTime?: Date | null;

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments?: string | null;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		StandingOrderId?: string | null;

		/** Specifies the status of the standing order in code form. */
		StandingOrderStatusCode?: OBExternalDirectDebitStatus1Code | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBStandingOrder6BasicFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FirstPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Individual Definitions:
		 * NotKnown - Not Known
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlDay - An interval specified in number of calendar days (02 to 31)
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * NotKnown (ScheduleCode)
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlDay:NoOfDay (ScheduleCode + NoOfDay)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * NotKnown
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1])
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: FormControl<string | null | undefined>,

		/**
		 * The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		NextPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments: FormControl<string | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		StandingOrderId: FormControl<string | null | undefined>,

		/** Specifies the status of the standing order in code form. */
		StandingOrderStatusCode: FormControl<OBExternalDirectDebitStatus1Code | null | undefined>,
	}
	export function CreateOBStandingOrder6BasicFormGroup() {
		return new FormGroup<OBStandingOrder6BasicFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			FinalPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			FirstPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			Frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$')]),
			LastPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			NextPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			NumberOfPayments: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			StandingOrderId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			StandingOrderStatusCode: new FormControl<OBExternalDirectDebitStatus1Code | null | undefined>(undefined),
		});

	}

	export interface OBStandingOrder6Detail {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * Provides the details to identify the beneficiary account.
		 * Required
		 */
		CreditorAccount: OBCashAccount5_1;

		/**
		 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
		 * This is the servicer of the beneficiary account.
		 */
		CreditorAgent?: OBBranchAndFinancialInstitutionIdentification5_1;

		/** The amount of the final Standing Order */
		FinalPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_4;

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime?: Date | null;

		/** The amount of the first Standing Order */
		FirstPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_2;

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FirstPaymentDateTime?: Date | null;

		/**
		 * Individual Definitions:
		 * NotKnown - Not Known
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlDay - An interval specified in number of calendar days (02 to 31)
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * NotKnown (ScheduleCode)
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlDay:NoOfDay (ScheduleCode + NoOfDay)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * NotKnown
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1])
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: string;

		/** The amount of the last (most recent) Standing Order instruction. */
		LastPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_11;

		/**
		 * The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastPaymentDateTime?: Date | null;

		/** The amount of the next Standing Order. */
		NextPaymentAmount?: OBActiveOrHistoricCurrencyAndAmount_3;

		/**
		 * The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		NextPaymentDateTime?: Date | null;

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments?: string | null;

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference?: string | null;

		/**
		 * A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		StandingOrderId?: string | null;

		/** Specifies the status of the standing order in code form. */
		StandingOrderStatusCode?: OBExternalDirectDebitStatus1Code | null;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;
	}
	export interface OBStandingOrder6DetailFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FinalPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		FirstPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Individual Definitions:
		 * NotKnown - Not Known
		 * EvryDay - Every day
		 * EvryWorkgDay - Every working day
		 * IntrvlDay - An interval specified in number of calendar days (02 to 31)
		 * IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
		 * WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
		 * IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)
		 * QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)
		 * ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
		 * SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
		 * RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
		 * Individual Patterns:
		 * NotKnown (ScheduleCode)
		 * EvryDay (ScheduleCode)
		 * EvryWorkgDay (ScheduleCode)
		 * IntrvlDay:NoOfDay (ScheduleCode + NoOfDay)
		 * IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
		 * WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
		 * IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
		 * QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
		 * The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
		 * NotKnown
		 * EvryDay
		 * EvryWorkgDay
		 * IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1])
		 * IntrvlWkDay:0[1-9]:0[1-7]
		 * WkInMnthDay:0[1-5]:0[1-7]
		 * IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
		 * QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
		 * Full Regular Expression:
		 * ^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$
		 * Required
		 */
		Frequency: FormControl<string | null | undefined>,

		/**
		 * The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		LastPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		NextPaymentDateTime: FormControl<Date | null | undefined>,

		/**
		 * Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.
		 * Max length: 35
		 * Min length: 1
		 */
		NumberOfPayments: FormControl<string | null | undefined>,

		/**
		 * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
		 * Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
		 * If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.
		 * Max length: 35
		 * Min length: 1
		 */
		Reference: FormControl<string | null | undefined>,

		/**
		 * A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.
		 * Max length: 40
		 * Min length: 1
		 */
		StandingOrderId: FormControl<string | null | undefined>,

		/** Specifies the status of the standing order in code form. */
		StandingOrderStatusCode: FormControl<OBExternalDirectDebitStatus1Code | null | undefined>,
	}
	export function CreateOBStandingOrder6DetailFormGroup() {
		return new FormGroup<OBStandingOrder6DetailFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			FinalPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			FirstPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			Frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$')]),
			LastPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			NextPaymentDateTime: new FormControl<Date | null | undefined>(undefined),
			NumberOfPayments: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Reference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			StandingOrderId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			StandingOrderStatusCode: new FormControl<OBExternalDirectDebitStatus1Code | null | undefined>(undefined),
		});

	}


	/** Provides further details on a statement resource. */
	export interface OBStatement2Basic {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: Date;

		/**
		 * Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		EndDateTime: Date;

		/**
		 * Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StartDateTime: Date;
		OBStatement2BasicStatementBenefit?: Array<OBStatement2BasicStatementBenefit>;
		OBStatement2BasicStatementDateTime?: Array<OBStatement2BasicStatementDateTime>;
		StatementDescription?: Array<string>;
		OBStatement2BasicStatementFee?: Array<OBStatement2BasicStatementFee>;

		/**
		 * Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.
		 * Max length: 40
		 * Min length: 1
		 */
		StatementId?: string | null;
		OBStatement2BasicStatementInterest?: Array<OBStatement2BasicStatementInterest>;
		OBStatement2BasicStatementRate?: Array<OBStatement2BasicStatementRate>;

		/**
		 * Unique reference for the statement. This reference may be optionally populated if available.
		 * Max length: 35
		 * Min length: 1
		 */
		StatementReference?: string | null;
		OBStatement2BasicStatementValue?: Array<OBStatement2BasicStatementValue>;

		/**
		 * Statement type, in a coded form.
		 * Required
		 */
		Type: OBExternalStatementType1Code;
	}

	/** Provides further details on a statement resource. */
	export interface OBStatement2BasicFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		EndDateTime: FormControl<Date | null | undefined>,

		/**
		 * Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StartDateTime: FormControl<Date | null | undefined>,

		/**
		 * Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.
		 * Max length: 40
		 * Min length: 1
		 */
		StatementId: FormControl<string | null | undefined>,

		/**
		 * Unique reference for the statement. This reference may be optionally populated if available.
		 * Max length: 35
		 * Min length: 1
		 */
		StatementReference: FormControl<string | null | undefined>,

		/**
		 * Statement type, in a coded form.
		 * Required
		 */
		Type: FormControl<OBExternalStatementType1Code | null | undefined>,
	}
	export function CreateOBStatement2BasicFormGroup() {
		return new FormGroup<OBStatement2BasicFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StartDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StatementId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			StatementReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Type: new FormControl<OBExternalStatementType1Code | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2BasicStatementBenefit {

		/**
		 * Amount of money associated with the statement benefit type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount_5;

		/**
		 * Benefit type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2BasicStatementBenefitFormProperties {

		/**
		 * Benefit type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2BasicStatementBenefitFormGroup() {
		return new FormGroup<OBStatement2BasicStatementBenefitFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2BasicStatementDateTime {

		/**
		 * Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		DateTime: Date;

		/**
		 * Date time type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2BasicStatementDateTimeFormProperties {

		/**
		 * Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		DateTime: FormControl<Date | null | undefined>,

		/**
		 * Date time type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2BasicStatementDateTimeFormGroup() {
		return new FormGroup<OBStatement2BasicStatementDateTimeFormProperties>({
			DateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2BasicStatementFee {

		/**
		 * Amount of money associated with the statement fee type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount_6;

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: OBCreditDebitCode_0;

		/**
		 * Description that may be available for the statement fee.
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;

		/** How frequently the fee is applied to the Account. */
		Frequency?: string | null;

		/** Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount) */
		Rate?: number | null;

		/** Description that may be available for the statement fee rate type. */
		RateType?: string | null;

		/**
		 * Fee type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2BasicStatementFeeFormProperties {

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: FormControl<OBCreditDebitCode_0 | null | undefined>,

		/**
		 * Description that may be available for the statement fee.
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/** How frequently the fee is applied to the Account. */
		Frequency: FormControl<string | null | undefined>,

		/** Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount) */
		Rate: FormControl<number | null | undefined>,

		/** Description that may be available for the statement fee rate type. */
		RateType: FormControl<string | null | undefined>,

		/**
		 * Fee type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2BasicStatementFeeFormGroup() {
		return new FormGroup<OBStatement2BasicStatementFeeFormProperties>({
			CreditDebitIndicator: new FormControl<OBCreditDebitCode_0 | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Frequency: new FormControl<string | null | undefined>(undefined),
			Rate: new FormControl<number | null | undefined>(undefined),
			RateType: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2BasicStatementInterest {

		/**
		 * Amount of money associated with the statement interest amount type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount_7;

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: OBCreditDebitCode_0;

		/**
		 * Description that may be available for the statement interest.
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;

		/** Specifies the statement fee type requested */
		Frequency?: string | null;

		/** field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary. */
		Rate?: number | null;

		/** Description that may be available for the statement Interest rate type. */
		RateType?: string | null;

		/**
		 * Interest amount type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2BasicStatementInterestFormProperties {

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: FormControl<OBCreditDebitCode_0 | null | undefined>,

		/**
		 * Description that may be available for the statement interest.
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/** Specifies the statement fee type requested */
		Frequency: FormControl<string | null | undefined>,

		/** field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary. */
		Rate: FormControl<number | null | undefined>,

		/** Description that may be available for the statement Interest rate type. */
		RateType: FormControl<string | null | undefined>,

		/**
		 * Interest amount type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2BasicStatementInterestFormGroup() {
		return new FormGroup<OBStatement2BasicStatementInterestFormProperties>({
			CreditDebitIndicator: new FormControl<OBCreditDebitCode_0 | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Frequency: new FormControl<string | null | undefined>(undefined),
			Rate: new FormControl<number | null | undefined>(undefined),
			RateType: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2BasicStatementRate {

		/**
		 * Rate associated with the statement rate type.
		 * Required
		 */
		Rate: string;

		/**
		 * Statement rate type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2BasicStatementRateFormProperties {

		/**
		 * Rate associated with the statement rate type.
		 * Required
		 */
		Rate: FormControl<string | null | undefined>,

		/**
		 * Statement rate type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2BasicStatementRateFormGroup() {
		return new FormGroup<OBStatement2BasicStatementRateFormProperties>({
			Rate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2BasicStatementValue {

		/**
		 * Statement value type, in a coded form.
		 * Required
		 */
		Type: string;

		/**
		 * Value associated with the statement value type.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Value: string;
	}
	export interface OBStatement2BasicStatementValueFormProperties {

		/**
		 * Statement value type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,

		/**
		 * Value associated with the statement value type.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2BasicStatementValueFormGroup() {
		return new FormGroup<OBStatement2BasicStatementValueFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
		});

	}


	/** Provides further details on a statement resource. */
	export interface OBStatement2Detail {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: Date;

		/**
		 * Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		EndDateTime: Date;

		/**
		 * Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StartDateTime: Date;
		OBStatement2DetailStatementAmount?: Array<OBStatement2DetailStatementAmount>;
		OBStatement2DetailStatementBenefit?: Array<OBStatement2DetailStatementBenefit>;
		OBStatement2DetailStatementDateTime?: Array<OBStatement2DetailStatementDateTime>;
		StatementDescription?: Array<string>;
		OBStatement2DetailStatementFee?: Array<OBStatement2DetailStatementFee>;

		/**
		 * Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.
		 * Max length: 40
		 * Min length: 1
		 */
		StatementId?: string | null;
		OBStatement2DetailStatementInterest?: Array<OBStatement2DetailStatementInterest>;
		OBStatement2DetailStatementRate?: Array<OBStatement2DetailStatementRate>;

		/**
		 * Unique reference for the statement. This reference may be optionally populated if available.
		 * Max length: 35
		 * Min length: 1
		 */
		StatementReference?: string | null;
		OBStatement2DetailStatementValue?: Array<OBStatement2DetailStatementValue>;

		/**
		 * Statement type, in a coded form.
		 * Required
		 */
		Type: OBExternalStatementType1Code;
	}

	/** Provides further details on a statement resource. */
	export interface OBStatement2DetailFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		CreationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		EndDateTime: FormControl<Date | null | undefined>,

		/**
		 * Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		StartDateTime: FormControl<Date | null | undefined>,

		/**
		 * Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.
		 * Max length: 40
		 * Min length: 1
		 */
		StatementId: FormControl<string | null | undefined>,

		/**
		 * Unique reference for the statement. This reference may be optionally populated if available.
		 * Max length: 35
		 * Min length: 1
		 */
		StatementReference: FormControl<string | null | undefined>,

		/**
		 * Statement type, in a coded form.
		 * Required
		 */
		Type: FormControl<OBExternalStatementType1Code | null | undefined>,
	}
	export function CreateOBStatement2DetailFormGroup() {
		return new FormGroup<OBStatement2DetailFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			CreationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StartDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			StatementId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			StatementReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(35)]),
			Type: new FormControl<OBExternalStatementType1Code | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2DetailStatementAmount {

		/**
		 * Amount of money associated with the amount type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount_8;

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: OBCreditDebitCode_0;

		/**
		 * Amount type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2DetailStatementAmountFormProperties {

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: FormControl<OBCreditDebitCode_0 | null | undefined>,

		/**
		 * Amount type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2DetailStatementAmountFormGroup() {
		return new FormGroup<OBStatement2DetailStatementAmountFormProperties>({
			CreditDebitIndicator: new FormControl<OBCreditDebitCode_0 | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2DetailStatementBenefit {

		/**
		 * Amount of money associated with the statement benefit type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount_5;

		/**
		 * Benefit type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2DetailStatementBenefitFormProperties {

		/**
		 * Benefit type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2DetailStatementBenefitFormGroup() {
		return new FormGroup<OBStatement2DetailStatementBenefitFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2DetailStatementDateTime {

		/**
		 * Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		DateTime: Date;

		/**
		 * Date time type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2DetailStatementDateTimeFormProperties {

		/**
		 * Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		DateTime: FormControl<Date | null | undefined>,

		/**
		 * Date time type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2DetailStatementDateTimeFormGroup() {
		return new FormGroup<OBStatement2DetailStatementDateTimeFormProperties>({
			DateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2DetailStatementFee {

		/**
		 * Amount of money associated with the statement fee type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount_6;

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: OBCreditDebitCode_0;

		/**
		 * Description that may be available for the statement fee.
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;

		/** How frequently the fee is applied to the Account. */
		Frequency?: string | null;

		/** Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount) */
		Rate?: number | null;

		/** Description that may be available for the statement fee rate type. */
		RateType?: string | null;

		/**
		 * Fee type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2DetailStatementFeeFormProperties {

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: FormControl<OBCreditDebitCode_0 | null | undefined>,

		/**
		 * Description that may be available for the statement fee.
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/** How frequently the fee is applied to the Account. */
		Frequency: FormControl<string | null | undefined>,

		/** Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount) */
		Rate: FormControl<number | null | undefined>,

		/** Description that may be available for the statement fee rate type. */
		RateType: FormControl<string | null | undefined>,

		/**
		 * Fee type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2DetailStatementFeeFormGroup() {
		return new FormGroup<OBStatement2DetailStatementFeeFormProperties>({
			CreditDebitIndicator: new FormControl<OBCreditDebitCode_0 | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Frequency: new FormControl<string | null | undefined>(undefined),
			Rate: new FormControl<number | null | undefined>(undefined),
			RateType: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2DetailStatementInterest {

		/**
		 * Amount of money associated with the statement interest amount type.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount_7;

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: OBCreditDebitCode_0;

		/**
		 * Description that may be available for the statement interest.
		 * Max length: 128
		 * Min length: 1
		 */
		Description?: string | null;

		/** Specifies the statement fee type requested */
		Frequency?: string | null;

		/** field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary. */
		Rate?: number | null;

		/** Description that may be available for the statement Interest rate type. */
		RateType?: string | null;

		/**
		 * Interest amount type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2DetailStatementInterestFormProperties {

		/**
		 * Indicates whether the amount is a credit or a debit.
		 * Usage: A zero amount is considered to be a credit amount.
		 * Required
		 */
		CreditDebitIndicator: FormControl<OBCreditDebitCode_0 | null | undefined>,

		/**
		 * Description that may be available for the statement interest.
		 * Max length: 128
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/** Specifies the statement fee type requested */
		Frequency: FormControl<string | null | undefined>,

		/** field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary. */
		Rate: FormControl<number | null | undefined>,

		/** Description that may be available for the statement Interest rate type. */
		RateType: FormControl<string | null | undefined>,

		/**
		 * Interest amount type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2DetailStatementInterestFormGroup() {
		return new FormGroup<OBStatement2DetailStatementInterestFormProperties>({
			CreditDebitIndicator: new FormControl<OBCreditDebitCode_0 | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Frequency: new FormControl<string | null | undefined>(undefined),
			Rate: new FormControl<number | null | undefined>(undefined),
			RateType: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2DetailStatementRate {

		/**
		 * Rate associated with the statement rate type.
		 * Required
		 */
		Rate: string;

		/**
		 * Statement rate type, in a coded form.
		 * Required
		 */
		Type: string;
	}
	export interface OBStatement2DetailStatementRateFormProperties {

		/**
		 * Rate associated with the statement rate type.
		 * Required
		 */
		Rate: FormControl<string | null | undefined>,

		/**
		 * Statement rate type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2DetailStatementRateFormGroup() {
		return new FormGroup<OBStatement2DetailStatementRateFormProperties>({
			Rate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(-?\d{1,3}){1}(\.\d{1,4}){0,1}$')]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OBStatement2DetailStatementValue {

		/**
		 * Statement value type, in a coded form.
		 * Required
		 */
		Type: string;

		/**
		 * Value associated with the statement value type.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Value: string;
	}
	export interface OBStatement2DetailStatementValueFormProperties {

		/**
		 * Statement value type, in a coded form.
		 * Required
		 */
		Type: FormControl<string | null | undefined>,

		/**
		 * Value associated with the statement value type.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateOBStatement2DetailStatementValueFormGroup() {
		return new FormGroup<OBStatement2DetailStatementValueFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
		});

	}


	/** Provides further details on an entry in the report. */
	export interface OBTransaction6Basic {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.
		 * Max length: 70
		 * Min length: 1
		 */
		AddressLine?: string | null;

		/**
		 * Amount of money in the cash transaction entry.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount_9;

		/** Set of elements used to fully identify the type of underlying transaction resulting in an entry. */
		BankTransactionCode?: OBBankTransactionCodeStructure1;

		/**
		 * Date and time when a transaction entry is posted to an account on the account servicer's books.
		 * Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		BookingDateTime: Date;

		/** Set of elements to describe the card instrument used in the transaction. */
		CardInstrument?: OBTransactionCardInstrument1;

		/** Transaction charges to be paid by the charge bearer. */
		ChargeAmount?: OBActiveOrHistoricCurrencyAndAmount_10;

		/**
		 * Indicates whether the transaction is a credit or a debit entry.
		 * Required
		 */
		CreditDebitIndicator: OBCreditDebitCode_0;

		/** Set of elements used to provide details on the currency exchange. */
		CurrencyExchange?: OBCurrencyExchange5;

		/** Set of elements to fully identify a proprietary bank transaction code. */
		ProprietaryBankTransactionCode?: ProprietaryBankTransactionCodeStructure1;
		StatementReference?: Array<string>;

		/**
		 * Status of a transaction entry on the books of the account servicer.
		 * Required
		 */
		Status: OBEntryStatus1Code;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;

		/**
		 * Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.
		 * Max length: 210
		 * Min length: 1
		 */
		TransactionId?: string | null;

		/** Specifies the Mutability of the Transaction record. */
		TransactionMutability?: OBTransaction6TransactionMutability | null;

		/**
		 * Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.
		 * Max length: 210
		 * Min length: 1
		 */
		TransactionReference?: string | null;

		/**
		 * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.
		 * Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.
		 * For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ValueDateTime?: Date | null;
	}

	/** Provides further details on an entry in the report. */
	export interface OBTransaction6BasicFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.
		 * Max length: 70
		 * Min length: 1
		 */
		AddressLine: FormControl<string | null | undefined>,

		/**
		 * Date and time when a transaction entry is posted to an account on the account servicer's books.
		 * Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		BookingDateTime: FormControl<Date | null | undefined>,

		/**
		 * Indicates whether the transaction is a credit or a debit entry.
		 * Required
		 */
		CreditDebitIndicator: FormControl<OBCreditDebitCode_0 | null | undefined>,

		/**
		 * Status of a transaction entry on the books of the account servicer.
		 * Required
		 */
		Status: FormControl<OBEntryStatus1Code | null | undefined>,

		/**
		 * Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.
		 * Max length: 210
		 * Min length: 1
		 */
		TransactionId: FormControl<string | null | undefined>,

		/** Specifies the Mutability of the Transaction record. */
		TransactionMutability: FormControl<OBTransaction6TransactionMutability | null | undefined>,

		/**
		 * Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.
		 * Max length: 210
		 * Min length: 1
		 */
		TransactionReference: FormControl<string | null | undefined>,

		/**
		 * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.
		 * Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.
		 * For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ValueDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBTransaction6BasicFormGroup() {
		return new FormGroup<OBTransaction6BasicFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			AddressLine: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			BookingDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CreditDebitIndicator: new FormControl<OBCreditDebitCode_0 | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<OBEntryStatus1Code | null | undefined>(undefined, [Validators.required]),
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(210)]),
			TransactionMutability: new FormControl<OBTransaction6TransactionMutability | null | undefined>(undefined),
			TransactionReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(210)]),
			ValueDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Provides further details on an entry in the report. */
	export interface OBTransaction6Detail {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: string;

		/**
		 * Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.
		 * Max length: 70
		 * Min length: 1
		 */
		AddressLine?: string | null;

		/**
		 * Amount of money in the cash transaction entry.
		 * Required
		 */
		Amount: OBActiveOrHistoricCurrencyAndAmount_9;

		/** Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account. */
		Balance?: OBTransactionCashBalance;

		/** Set of elements used to fully identify the type of underlying transaction resulting in an entry. */
		BankTransactionCode?: OBBankTransactionCodeStructure1;

		/**
		 * Date and time when a transaction entry is posted to an account on the account servicer's books.
		 * Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		BookingDateTime: Date;

		/** Set of elements to describe the card instrument used in the transaction. */
		CardInstrument?: OBTransactionCardInstrument1;

		/** Transaction charges to be paid by the charge bearer. */
		ChargeAmount?: OBActiveOrHistoricCurrencyAndAmount_10;

		/**
		 * Indicates whether the transaction is a credit or a debit entry.
		 * Required
		 */
		CreditDebitIndicator: OBCreditDebitCode_0;

		/** Unambiguous identification of the account of the creditor, in the case of a debit transaction. */
		CreditorAccount?: OBCashAccount6_0;

		/** Financial institution servicing an account for the creditor. */
		CreditorAgent?: OBBranchAndFinancialInstitutionIdentification6_1;

		/** Set of elements used to provide details on the currency exchange. */
		CurrencyExchange?: OBCurrencyExchange5;

		/** Unambiguous identification of the account of the debtor, in the case of a crebit transaction. */
		DebtorAccount?: OBCashAccount6_1;

		/** Financial institution servicing an account for the debtor. */
		DebtorAgent?: OBBranchAndFinancialInstitutionIdentification6_2;

		/** Details of the merchant involved in the transaction. */
		MerchantDetails?: OBMerchantDetails1;

		/** Set of elements to fully identify a proprietary bank transaction code. */
		ProprietaryBankTransactionCode?: ProprietaryBankTransactionCodeStructure1;
		StatementReference?: Array<string>;

		/**
		 * Status of a transaction entry on the books of the account servicer.
		 * Required
		 */
		Status: OBEntryStatus1Code;

		/** Additional information that can not be captured in the structured fields and/or any other specific block. */
		SupplementaryData?: OBSupplementaryData1;

		/**
		 * Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.
		 * Max length: 210
		 * Min length: 1
		 */
		TransactionId?: string | null;

		/**
		 * Further details of the transaction.
		 * This is the transaction narrative, which is unstructured text.
		 * Max length: 500
		 * Min length: 1
		 */
		TransactionInformation?: string | null;

		/** Specifies the Mutability of the Transaction record. */
		TransactionMutability?: OBTransaction6TransactionMutability | null;

		/**
		 * Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.
		 * Max length: 210
		 * Min length: 1
		 */
		TransactionReference?: string | null;

		/**
		 * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.
		 * Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.
		 * For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ValueDateTime?: Date | null;
	}

	/** Provides further details on an entry in the report. */
	export interface OBTransaction6DetailFormProperties {

		/**
		 * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
		 * Required
		 * Max length: 40
		 * Min length: 1
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.
		 * Max length: 70
		 * Min length: 1
		 */
		AddressLine: FormControl<string | null | undefined>,

		/**
		 * Date and time when a transaction entry is posted to an account on the account servicer's books.
		 * Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 * Required
		 */
		BookingDateTime: FormControl<Date | null | undefined>,

		/**
		 * Indicates whether the transaction is a credit or a debit entry.
		 * Required
		 */
		CreditDebitIndicator: FormControl<OBCreditDebitCode_0 | null | undefined>,

		/**
		 * Status of a transaction entry on the books of the account servicer.
		 * Required
		 */
		Status: FormControl<OBEntryStatus1Code | null | undefined>,

		/**
		 * Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.
		 * Max length: 210
		 * Min length: 1
		 */
		TransactionId: FormControl<string | null | undefined>,

		/**
		 * Further details of the transaction.
		 * This is the transaction narrative, which is unstructured text.
		 * Max length: 500
		 * Min length: 1
		 */
		TransactionInformation: FormControl<string | null | undefined>,

		/** Specifies the Mutability of the Transaction record. */
		TransactionMutability: FormControl<OBTransaction6TransactionMutability | null | undefined>,

		/**
		 * Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.
		 * Max length: 210
		 * Min length: 1
		 */
		TransactionReference: FormControl<string | null | undefined>,

		/**
		 * Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.
		 * Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.
		 * For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format.
		 * All date-time fields in responses must include the timezone. An example is below:
		 * 2017-04-05T10:43:07+00:00
		 */
		ValueDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOBTransaction6DetailFormGroup() {
		return new FormGroup<OBTransaction6DetailFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			AddressLine: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(70)]),
			BookingDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CreditDebitIndicator: new FormControl<OBCreditDebitCode_0 | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<OBEntryStatus1Code | null | undefined>(undefined, [Validators.required]),
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(210)]),
			TransactionInformation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
			TransactionMutability: new FormControl<OBTransaction6TransactionMutability | null | undefined>(undefined),
			TransactionReference: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(210)]),
			ValueDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Specifies the Mutability of the Transaction record. */
	export enum OBTransactionMutability1Code { Mutable = 0, Immutable = 1 }


	/** Categorisation of fees and charges into standard categories. */
	export enum OB_FeeCategory1Code { FCOT = 0, FCRE = 1, FCSV = 2 }


	/** Frequency at which the overdraft charge is applied to the account */
	export enum OB_FeeFrequency1Code_0 { FEAC = 0, FEAO = 1, FECP = 2, FEDA = 3, FEHO = 4, FEI = 5, FEMO = 6, FEOA = 7, FEOT = 8, FEPC = 9, FEPH = 10, FEPO = 11, FEPS = 12, FEPT = 13, FEPTA = 14, FEPTP = 15, FEQU = 16, FESM = 17, FEST = 18, FEWE = 19, FEYE = 20 }


	/** How often is the overdraft fee/charge calculated for the account. */
	export enum OB_FeeFrequency1Code_1 { FEAC = 0, FEAO = 1, FECP = 2, FEDA = 3, FEHO = 4, FEI = 5, FEMO = 6, FEOA = 7, FEOT = 8, FEPC = 9, FEPH = 10, FEPO = 11, FEPS = 12, FEPT = 13, FEPTA = 14, FEPTP = 15, FEQU = 16, FESM = 17, FEST = 18, FEWE = 19, FEYE = 20 }


	/** How frequently the fee/charge is applied to the account */
	export enum OB_FeeFrequency1Code_2 { FEAC = 0, FEAO = 1, FECP = 2, FEDA = 3, FEHO = 4, FEI = 5, FEMO = 6, FEOA = 7, FEOT = 8, FEPC = 9, FEPH = 10, FEPO = 11, FEPS = 12, FEPT = 13, FEPTA = 14, FEPTP = 15, FEQU = 16, FESM = 17, FEST = 18, FEWE = 19, FEYE = 20 }


	/** How frequently the fee/charge is calculated */
	export enum OB_FeeFrequency1Code_3 { FEAC = 0, FEAO = 1, FECP = 2, FEDA = 3, FEHO = 4, FEI = 5, FEMO = 6, FEOA = 7, FEOT = 8, FEPC = 9, FEPH = 10, FEPO = 11, FEPS = 12, FEPT = 13, FEPTA = 14, FEPTP = 15, FEQU = 16, FESM = 17, FEST = 18, FEWE = 19, FEYE = 20 }


	/** Period e.g. day, week, month etc. for which the fee/charge is capped */
	export enum OB_FeeFrequency1Code_4 { FEAC = 0, FEAO = 1, FECP = 2, FEDA = 3, FEHO = 4, FEI = 5, FEMO = 6, FEOA = 7, FEOT = 8, FEPC = 9, FEPH = 10, FEPO = 11, FEPS = 12, FEPT = 13, FEPTA = 14, FEPTP = 15, FEQU = 16, FESM = 17, FEST = 18, FEWE = 19, FEYE = 20 }


	/** Fee/Charge Type */
	export enum OB_FeeType1Code { FEPF = 0, FTOT = 1, FYAF = 2, FYAM = 3, FYAQ = 4, FYCP = 5, FYDB = 6, FYMI = 7, FYXX = 8 }


	/** Methods of calculating interest */
	export enum OB_InterestCalculationMethod1Code { ITCO = 0, ITOT = 1, ITSI = 2 }


	/** Type of interest rate, Fixed or Variable */
	export enum OB_InterestFixedVariableType1Code { INFI = 0, INVA = 1 }


	/** Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount) */
	export enum OB_InterestRateType1Code_0 { INBB = 0, INFR = 1, INGR = 2, INLR = 3, INNE = 4, INOT = 5 }


	/** Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount) */
	export enum OB_InterestRateType1Code_1 { INBB = 0, INFR = 1, INGR = 2, INLR = 3, INNE = 4, INOT = 5 }


	/** Min Max type */
	export enum OB_MinMaxType1Code { FMMN = 0, FMMX = 1 }


	/** Overdraft fee type */
	export enum OB_OverdraftFeeType1Code { FBAO = 0, FBAR = 1, FBEB = 2, FBIT = 3, FBOR = 4, FBOS = 5, FBSC = 6, FBTO = 7, FBUB = 8, FBUT = 9, FTOT = 10, FTUT = 11 }


	/** Period e.g. day, week, month etc. for which the fee/charge is capped */
	export enum OB_Period1Code { PACT = 0, PDAY = 1, PHYR = 2, PMTH = 3, PQTR = 4, PWEK = 5, PYER = 6 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create Account Access Consents
		 * Post account-access-consents
		 * @param {OBReadConsent1} requestBody Default
		 * @return {void} 
		 */
		CreateAccountAccessConsents(requestBody: OBReadConsent1): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account-access-consents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Account Access Consents
		 * Delete account-access-consents/{ConsentId}
		 * @param {string} ConsentId ConsentId
		 * @return {void} 
		 */
		DeleteAccountAccessConsentsConsentId(ConsentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account-access-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Account Access Consents
		 * Get account-access-consents/{ConsentId}
		 * @param {string} ConsentId ConsentId
		 * @return {OBReadConsentResponse1} Account Access Consents Read
		 */
		GetAccountAccessConsentsConsentId(ConsentId: string): Observable<OBReadConsentResponse1> {
			return this.http.get<OBReadConsentResponse1>(this.baseUri + 'account-access-consents/' + (ConsentId == null ? '' : encodeURIComponent(ConsentId)), {});
		}

		/**
		 * Get Accounts
		 * Get accounts
		 * @return {OBReadAccount6} Accounts Read
		 */
		GetAccounts(): Observable<OBReadAccount6> {
			return this.http.get<OBReadAccount6>(this.baseUri + 'accounts', {});
		}

		/**
		 * Get Accounts
		 * Get accounts/{AccountId}
		 * @param {string} AccountId AccountId
		 * @return {OBReadAccount6} Accounts Read
		 */
		GetAccountsAccountId(AccountId: string): Observable<OBReadAccount6> {
			return this.http.get<OBReadAccount6>(this.baseUri + 'accounts/' + (AccountId == null ? '' : encodeURIComponent(AccountId)), {});
		}

		/**
		 * Get Balances
		 * Get accounts/{AccountId}/balances
		 * @param {string} AccountId AccountId
		 * @return {OBReadBalance1} Balances Read
		 */
		GetAccountsAccountIdBalances(AccountId: string): Observable<OBReadBalance1> {
			return this.http.get<OBReadBalance1>(this.baseUri + 'accounts/' + (AccountId == null ? '' : encodeURIComponent(AccountId)) + '/balances', {});
		}

		/**
		 * Get Beneficiaries
		 * Get accounts/{AccountId}/beneficiaries
		 * @param {string} AccountId AccountId
		 * @return {OBReadBeneficiary5} Beneficiaries Read
		 */
		GetAccountsAccountIdBeneficiaries(AccountId: string): Observable<OBReadBeneficiary5> {
			return this.http.get<OBReadBeneficiary5>(this.baseUri + 'accounts/' + (AccountId == null ? '' : encodeURIComponent(AccountId)) + '/beneficiaries', {});
		}

		/**
		 * Get Direct Debits
		 * Get accounts/{AccountId}/direct-debits
		 * @param {string} AccountId AccountId
		 * @return {OBReadDirectDebit2} Direct Debits Read
		 */
		GetAccountsAccountIdDirectDebits(AccountId: string): Observable<OBReadDirectDebit2> {
			return this.http.get<OBReadDirectDebit2>(this.baseUri + 'accounts/' + (AccountId == null ? '' : encodeURIComponent(AccountId)) + '/direct-debits', {});
		}

		/**
		 * Get Offers
		 * Get accounts/{AccountId}/offers
		 * @param {string} AccountId AccountId
		 * @return {OBReadOffer1} Offers Read
		 */
		GetAccountsAccountIdOffers(AccountId: string): Observable<OBReadOffer1> {
			return this.http.get<OBReadOffer1>(this.baseUri + 'accounts/' + (AccountId == null ? '' : encodeURIComponent(AccountId)) + '/offers', {});
		}

		/**
		 * Get Parties
		 * Get accounts/{AccountId}/parties
		 * @param {string} AccountId AccountId
		 * @return {OBReadParty3} Parties Read
		 */
		GetAccountsAccountIdParties(AccountId: string): Observable<OBReadParty3> {
			return this.http.get<OBReadParty3>(this.baseUri + 'accounts/' + (AccountId == null ? '' : encodeURIComponent(AccountId)) + '/parties', {});
		}

		/**
		 * Get Parties
		 * Get accounts/{AccountId}/party
		 * @param {string} AccountId AccountId
		 * @return {OBReadParty2} Parties Read
		 */
		GetAccountsAccountIdParty(AccountId: string): Observable<OBReadParty2> {
			return this.http.get<OBReadParty2>(this.baseUri + 'accounts/' + (AccountId == null ? '' : encodeURIComponent(AccountId)) + '/party', {});
		}

		/**
		 * Get Products
		 * Get accounts/{AccountId}/product
		 * @param {string} AccountId AccountId
		 * @return {OBReadProduct2} Products Read
		 */
		GetAccountsAccountIdProduct(AccountId: string): Observable<OBReadProduct2> {
			return this.http.get<OBReadProduct2>(this.baseUri + 'accounts/' + (AccountId == null ? '' : encodeURIComponent(AccountId)) + '/product', {});
		}

		/**
		 * Get Scheduled Payments
		 * Get accounts/{AccountId}/scheduled-payments
		 * @param {string} AccountId AccountId
		 * @return {OBReadScheduledPayment3} Scheduled Payments Read
		 */
		GetAccountsAccountIdScheduledPayments(AccountId: string): Observable<OBReadScheduledPayment3> {
			return this.http.get<OBReadScheduledPayment3>(this.baseUri + 'accounts/' + (AccountId == null ? '' : encodeURIComponent(AccountId)) + '/scheduled-payments', {});
		}

		/**
		 * Get Standing Orders
		 * Get accounts/{AccountId}/standing-orders
		 * @param {string} AccountId AccountId
		 * @return {OBReadStandingOrder6} Standing Orders Read
		 */
		GetAccountsAccountIdStandingOrders(AccountId: string): Observable<OBReadStandingOrder6> {
			return this.http.get<OBReadStandingOrder6>(this.baseUri + 'accounts/' + (AccountId == null ? '' : encodeURIComponent(AccountId)) + '/standing-orders', {});
		}

		/**
		 * Get Statements
		 * Get accounts/{AccountId}/statements
		 * @param {string} AccountId AccountId
		 * @param {Date} fromStatementDateTime The UTC ISO 8601 Date Time to filter statements FROM
		 * NB Time component is optional - set to 00:00:00 for just Date.
		 * If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
		 * @param {Date} toStatementDateTime The UTC ISO 8601 Date Time to filter statements TO
		 * NB Time component is optional - set to 00:00:00 for just Date.
		 * If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
		 * @return {OBReadStatement2} Statements Read
		 */
		GetAccountsAccountIdStatements(AccountId: string, fromStatementDateTime: Date | null | undefined, toStatementDateTime: Date | null | undefined): Observable<OBReadStatement2> {
			return this.http.get<OBReadStatement2>(this.baseUri + 'accounts/' + (AccountId == null ? '' : encodeURIComponent(AccountId)) + '/statements&fromStatementDateTime=' + fromStatementDateTime?.toISOString() + '&toStatementDateTime=' + toStatementDateTime?.toISOString(), {});
		}

		/**
		 * Get Statements
		 * Get accounts/{AccountId}/statements/{StatementId}
		 * @param {string} StatementId StatementId
		 * @param {string} AccountId AccountId
		 * @return {OBReadStatement2} Statements Read
		 */
		GetAccountsAccountIdStatementsStatementId(StatementId: string, AccountId: string): Observable<OBReadStatement2> {
			return this.http.get<OBReadStatement2>(this.baseUri + 'accounts/' + (AccountId == null ? '' : encodeURIComponent(AccountId)) + '/statements/' + (StatementId == null ? '' : encodeURIComponent(StatementId)), {});
		}

		/**
		 * Get Statements
		 * Get accounts/{AccountId}/statements/{StatementId}/file
		 * @param {string} StatementId StatementId
		 * @param {string} AccountId AccountId
		 * @return {File} Statements Read
		 */
		GetAccountsAccountIdStatementsStatementIdFile(StatementId: string, AccountId: string): Observable<File> {
			return this.http.get<File>(this.baseUri + 'accounts/' + (AccountId == null ? '' : encodeURIComponent(AccountId)) + '/statements/' + (StatementId == null ? '' : encodeURIComponent(StatementId)) + '/file', {});
		}

		/**
		 * Get Transactions
		 * Get accounts/{AccountId}/statements/{StatementId}/transactions
		 * @param {string} StatementId StatementId
		 * @param {string} AccountId AccountId
		 * @return {OBReadTransaction6} Transactions Read
		 */
		GetAccountsAccountIdStatementsStatementIdTransactions(StatementId: string, AccountId: string): Observable<OBReadTransaction6> {
			return this.http.get<OBReadTransaction6>(this.baseUri + 'accounts/' + (AccountId == null ? '' : encodeURIComponent(AccountId)) + '/statements/' + (StatementId == null ? '' : encodeURIComponent(StatementId)) + '/transactions', {});
		}

		/**
		 * Get Transactions
		 * Get accounts/{AccountId}/transactions
		 * @param {string} AccountId AccountId
		 * @param {Date} fromBookingDateTime The UTC ISO 8601 Date Time to filter transactions FROM
		 * NB Time component is optional - set to 00:00:00 for just Date.
		 * If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
		 * @param {Date} toBookingDateTime The UTC ISO 8601 Date Time to filter transactions TO
		 * NB Time component is optional - set to 00:00:00 for just Date.
		 * If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
		 * @return {OBReadTransaction6} Transactions Read
		 */
		GetAccountsAccountIdTransactions(AccountId: string, fromBookingDateTime: Date | null | undefined, toBookingDateTime: Date | null | undefined): Observable<OBReadTransaction6> {
			return this.http.get<OBReadTransaction6>(this.baseUri + 'accounts/' + (AccountId == null ? '' : encodeURIComponent(AccountId)) + '/transactions&fromBookingDateTime=' + fromBookingDateTime?.toISOString() + '&toBookingDateTime=' + toBookingDateTime?.toISOString(), {});
		}

		/**
		 * Get Balances
		 * Get balances
		 * @return {OBReadBalance1} Balances Read
		 */
		GetBalances(): Observable<OBReadBalance1> {
			return this.http.get<OBReadBalance1>(this.baseUri + 'balances', {});
		}

		/**
		 * Get Beneficiaries
		 * Get beneficiaries
		 * @return {OBReadBeneficiary5} Beneficiaries Read
		 */
		GetBeneficiaries(): Observable<OBReadBeneficiary5> {
			return this.http.get<OBReadBeneficiary5>(this.baseUri + 'beneficiaries', {});
		}

		/**
		 * Get Direct Debits
		 * Get direct-debits
		 * @return {OBReadDirectDebit2} Direct Debits Read
		 */
		GetDirectDebits(): Observable<OBReadDirectDebit2> {
			return this.http.get<OBReadDirectDebit2>(this.baseUri + 'direct-debits', {});
		}

		/**
		 * Get Offers
		 * Get offers
		 * @return {OBReadOffer1} Offers Read
		 */
		GetOffers(): Observable<OBReadOffer1> {
			return this.http.get<OBReadOffer1>(this.baseUri + 'offers', {});
		}

		/**
		 * Get Parties
		 * Get party
		 * @return {OBReadParty2} Parties Read
		 */
		GetParty(): Observable<OBReadParty2> {
			return this.http.get<OBReadParty2>(this.baseUri + 'party', {});
		}

		/**
		 * Get Products
		 * Get products
		 * @return {OBReadProduct2} Products Read
		 */
		GetProducts(): Observable<OBReadProduct2> {
			return this.http.get<OBReadProduct2>(this.baseUri + 'products', {});
		}

		/**
		 * Get Scheduled Payments
		 * Get scheduled-payments
		 * @return {OBReadScheduledPayment3} Scheduled Payments Read
		 */
		GetScheduledPayments(): Observable<OBReadScheduledPayment3> {
			return this.http.get<OBReadScheduledPayment3>(this.baseUri + 'scheduled-payments', {});
		}

		/**
		 * Get Standing Orders
		 * Get standing-orders
		 * @return {OBReadStandingOrder6} Standing Orders Read
		 */
		GetStandingOrders(): Observable<OBReadStandingOrder6> {
			return this.http.get<OBReadStandingOrder6>(this.baseUri + 'standing-orders', {});
		}

		/**
		 * Get Statements
		 * Get statements
		 * @param {Date} fromStatementDateTime The UTC ISO 8601 Date Time to filter statements FROM
		 * NB Time component is optional - set to 00:00:00 for just Date.
		 * If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
		 * @param {Date} toStatementDateTime The UTC ISO 8601 Date Time to filter statements TO
		 * NB Time component is optional - set to 00:00:00 for just Date.
		 * If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
		 * @return {OBReadStatement2} Statements Read
		 */
		GetStatements(fromStatementDateTime: Date | null | undefined, toStatementDateTime: Date | null | undefined): Observable<OBReadStatement2> {
			return this.http.get<OBReadStatement2>(this.baseUri + 'statements?fromStatementDateTime=' + fromStatementDateTime?.toISOString() + '&toStatementDateTime=' + toStatementDateTime?.toISOString(), {});
		}

		/**
		 * Get Transactions
		 * Get transactions
		 * @param {Date} fromBookingDateTime The UTC ISO 8601 Date Time to filter transactions FROM
		 * NB Time component is optional - set to 00:00:00 for just Date.
		 * If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
		 * @param {Date} toBookingDateTime The UTC ISO 8601 Date Time to filter transactions TO
		 * NB Time component is optional - set to 00:00:00 for just Date.
		 * If the Date Time contains a timezone, the ASPSP must ignore the timezone component.
		 * @return {OBReadTransaction6} Transactions Read
		 */
		GetTransactions(fromBookingDateTime: Date | null | undefined, toBookingDateTime: Date | null | undefined): Observable<OBReadTransaction6> {
			return this.http.get<OBReadTransaction6>(this.baseUri + 'transactions?fromBookingDateTime=' + fromBookingDateTime?.toISOString() + '&toBookingDateTime=' + toBookingDateTime?.toISOString(), {});
		}
	}

}

