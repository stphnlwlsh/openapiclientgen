import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ExecAPI {
		ExecAPIMarketstat?: Array<ExecAPIMarketstat>;
		method?: string | null;
		version?: string | null;
	}
	export interface ExecAPIFormProperties {
		method: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateExecAPIFormGroup() {
		return new FormGroup<ExecAPIFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExecAPIMarketstat {
		buy?: TypeStatXML;
		sell?: TypeStatXML;
	}
	export interface ExecAPIMarketstatFormProperties {
	}
	export function CreateExecAPIMarketstatFormGroup() {
		return new FormGroup<ExecAPIMarketstatFormProperties>({
		});

	}

	export interface TypeStatXML {

		/** Weighted Average Price */
		avg?: number | null;

		/** Maximum Price */
		max?: number | null;

		/** Median Price */
		median?: number | null;

		/** Minimum Price */
		min?: number | null;

		/** 5% Price */
		percentile?: number | null;

		/** Standard Deviation */
		stddev?: number | null;

		/** Order Volume */
		volume?: number | null;
	}
	export interface TypeStatXMLFormProperties {

		/** Weighted Average Price */
		avg: FormControl<number | null | undefined>,

		/** Maximum Price */
		max: FormControl<number | null | undefined>,

		/** Median Price */
		median: FormControl<number | null | undefined>,

		/** Minimum Price */
		min: FormControl<number | null | undefined>,

		/** 5% Price */
		percentile: FormControl<number | null | undefined>,

		/** Standard Deviation */
		stddev: FormControl<number | null | undefined>,

		/** Order Volume */
		volume: FormControl<number | null | undefined>,
	}
	export function CreateTypeStatXMLFormGroup() {
		return new FormGroup<TypeStatXMLFormProperties>({
			avg: new FormControl<number | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined),
			median: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
			percentile: new FormControl<number | null | undefined>(undefined),
			stddev: new FormControl<number | null | undefined>(undefined),
			volume: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ForQuery {

		/** is buy? */
		bid?: boolean | null;

		/** always 0 */
		hours?: number | null;

		/** always 0 */
		minq?: number | null;

		/** Region IDs */
		regions?: Array<number>;

		/** System IDs */
		systems?: Array<number>;

		/** Type IDs */
		types?: Array<number>;
	}
	export interface ForQueryFormProperties {

		/** is buy? */
		bid: FormControl<boolean | null | undefined>,

		/** always 0 */
		hours: FormControl<number | null | undefined>,

		/** always 0 */
		minq: FormControl<number | null | undefined>,
	}
	export function CreateForQueryFormGroup() {
		return new FormGroup<ForQueryFormProperties>({
			bid: new FormControl<boolean | null | undefined>(undefined),
			hours: new FormControl<number | null | undefined>(undefined),
			minq: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MarketStatXMLElement {
		buy?: TypeStatXML;
		sell?: TypeStatXML;
	}
	export interface MarketStatXMLElementFormProperties {
	}
	export function CreateMarketStatXMLElementFormGroup() {
		return new FormGroup<MarketStatXMLElementFormProperties>({
		});

	}

	export interface Type {
		buy?: TypeStat;
		sell?: TypeStat;
	}
	export interface TypeFormProperties {
	}
	export function CreateTypeFormGroup() {
		return new FormGroup<TypeFormProperties>({
		});

	}

	export interface TypeStat {

		/** Average Price */
		avg?: number | null;
		fivePercent?: number | null;
		forQuery?: ForQuery;

		/** Generated at (UNIX Timestamp msec) */
		generated?: number | null;
		highToLow?: boolean | null;
		max?: number | null;

		/** Median Price */
		median?: number | null;
		min?: number | null;

		/** Standard Deviation */
		stdDev?: number | null;
		variance?: number | null;

		/** Order Volume */
		volume?: number | null;

		/** Weighted Average Price */
		wavg?: number | null;
	}
	export interface TypeStatFormProperties {

		/** Average Price */
		avg: FormControl<number | null | undefined>,
		fivePercent: FormControl<number | null | undefined>,

		/** Generated at (UNIX Timestamp msec) */
		generated: FormControl<number | null | undefined>,
		highToLow: FormControl<boolean | null | undefined>,
		max: FormControl<number | null | undefined>,

		/** Median Price */
		median: FormControl<number | null | undefined>,
		min: FormControl<number | null | undefined>,

		/** Standard Deviation */
		stdDev: FormControl<number | null | undefined>,
		variance: FormControl<number | null | undefined>,

		/** Order Volume */
		volume: FormControl<number | null | undefined>,

		/** Weighted Average Price */
		wavg: FormControl<number | null | undefined>,
	}
	export function CreateTypeStatFormGroup() {
		return new FormGroup<TypeStatFormProperties>({
			avg: new FormControl<number | null | undefined>(undefined),
			fivePercent: new FormControl<number | null | undefined>(undefined),
			generated: new FormControl<number | null | undefined>(undefined),
			highToLow: new FormControl<boolean | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined),
			median: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
			stdDev: new FormControl<number | null | undefined>(undefined),
			variance: new FormControl<number | null | undefined>(undefined),
			volume: new FormControl<number | null | undefined>(undefined),
			wavg: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * XML Marketstat
		 * Get marketstat
		 * @param {Array<number>} typeid TypeID. Multiple TypeIDs can be specified in the following format (up to 200 TypeIDs per request):
		 * typeid=34&typeid=35 or typeid=34,35
		 * @param {number} regionlimit Limit the statistics to a single region.
		 * @param {number} usesystem Limit the statistics to a single solar system.
		 * @return {void} Successful Request
		 */
		MarketstatGetByTypeidAndRegionlimitAndUsesystem(typeid: Array<number>, regionlimit: number | null | undefined, usesystem: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'marketstat?' + typeid.map(z => `typeid=${z}`).join('&') + '&regionlimit=' + regionlimit + '&usesystem=' + usesystem, { observe: 'response', responseType: 'text' });
		}

		/**
		 * JSON Marketstat
		 * Get marketstat/json
		 * @return {Array<Type>} Successful Request
		 */
		MarketstatGet(): Observable<Array<Type>> {
			return this.http.get<Array<Type>>(this.baseUri + 'marketstat/json', {});
		}

		/**
		 * JSON Marketstat
		 * Post marketstat/json
		 * @param {Array<number>} typeid TypeID. Multiple TypeIDs can be specified in the following format (up to 200 TypeIDs per request):
		 * typeid=34&typeid=35 or typeid=34,35
		 * @param {number} regionlimit Limit the statistics to a single region.
		 * @param {number} usesystem Limit the statistics to a single region.
		 * @return {Array<Type>} Successful Request
		 */
		MarketstatPostByTypeidAndRegionlimitAndUsesystem(typeid: Array<number>, regionlimit: number | null | undefined, usesystem: number | null | undefined): Observable<Array<Type>> {
			return this.http.post<Array<Type>>(this.baseUri + 'marketstat/json?' + typeid.map(z => `typeid=${z}`).join('&') + '&regionlimit=' + regionlimit + '&usesystem=' + usesystem, null, {});
		}
	}

}

