import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Error {

		/** Required */
		code: number;

		/** Required */
		message: string;
	}
	export interface ErrorFormProperties {

		/** Required */
		code: FormControl<number | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Pet {

		/** Required */
		id: number;

		/** Required */
		name: string;
		tag?: string | null;
	}
	export interface PetFormProperties {

		/** Required */
		id: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		tag: FormControl<string | null | undefined>,
	}
	export function CreatePetFormGroup() {
		return new FormGroup<PetFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all pets
		 * Get pets
		 * @param {number} limit How many items to return at one time (max 100)
		 * @return {Array<Pet>} An paged array of pets
		 */
		ListPets(limit: number | null | undefined): Observable<Array<Pet>> {
			return this.http.get<Array<Pet>>(this.baseUri + 'pets?limit=' + limit, {});
		}

		/**
		 * Create a pet
		 * Post pets
		 * @return {void} 
		 */
		CreatePets(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pets', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Info for a specific pet
		 * Get pets/{petId}
		 * @param {string} petId The id of the pet to retrieve
		 * @return {Array<Pet>} Expected response to a valid request
		 */
		ShowPetById(petId: string): Observable<Array<Pet>> {
			return this.http.get<Array<Pet>>(this.baseUri + 'pets/' + (petId == null ? '' : encodeURIComponent(petId)), {});
		}
	}

}

