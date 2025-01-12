export namespace My_Pet_Client {
	export interface ApiResponse {
		code?: number | null;
		type?: string | null;
		message?: string | null;
	}


	/** A representation of a cat */
	export interface Cat extends Pet {

		/**
		 * The measured skill for hunting
		 * Required
		 */
		huntingSkill: CatHuntingSkill;
	}

	export enum CatHuntingSkill { clueless = 0, lazy = 1, adventurous = 2, aggressive = 3 }

	export interface Category {

		/** Category ID */
		id?: number | null;

		/**
		 * Category name
		 * Min length: 1
		 */
		name?: string | null;

		/** Test Sub Category */
		sub?: CategorySub | null;
	}

	export interface CategorySub {

		/** Dumb Property */
		prop1?: string | null;
	}


	/** A representation of a dog */
	export interface Dog extends Pet {

		/**
		 * The size of the pack the dog is from
		 * Required
		 * Minimum: 1
		 */
		packSize: number;
	}


	/** A representation of a honey bee */
	export interface HoneyBee extends Pet {

		/**
		 * Average amount of honey produced per day in ounces
		 * Required
		 */
		honeyPerDay: number;
	}

	export interface Order {

		/** Order ID */
		id?: number | null;

		/** Pet ID */
		petId?: number | null;
		quantity?: number | null;

		/** Estimated ship date */
		shipDate?: Date | null;

		/** Order Status */
		status?: OrderStatus | null;

		/** Indicates whenever order was completed or not */
		complete?: boolean | null;

		/** Unique Request Id */
		requestId?: string | null;
	}

	export enum OrderStatus { placed = 0, approved = 1, delivered = 2 }

	export interface Pet {

		/** Pet ID */
		id?: number | null;

		/** Categories this pet belongs to */
		category?: Category | null;

		/**
		 * The name given to a pet
		 * Required
		 */
		name: string;

		/**
		 * The list of URL to a cute photos featuring pet
		 * Required
		 * Maximum items: 20
		 */
		photoUrls: Array<string>;
		friend?: Pet | null;

		/**
		 * Tags attached to the pet
		 * Minimum items: 1
		 */
		tags?: Array<Tag> | null;

		/** Pet status in the store */
		status?: PetStatus | null;

		/** Type of a pet */
		petType?: string | null;
	}

	export interface Tag {

		/** Tag ID */
		id?: number | null;

		/**
		 * Tag name
		 * Min length: 1
		 */
		name?: string | null;
	}

	export enum PetStatus { available = 0, pending = 1, sold = 2 }

	export interface User {
		id?: number | null;
		pet?: Pet | null;

		/**
		 * User supplied username
		 * Min length: 4
		 */
		username?: string | null;

		/**
		 * User first name
		 * Min length: 1
		 */
		firstName?: string | null;

		/**
		 * User last name
		 * Min length: 1
		 */
		lastName?: string | null;

		/** User email address */
		email?: string | null;

		/**
		 * User password, MUST contain a mix of upper and lower case letters, as well as digits
		 * Min length: 8
		 * Pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
		 */
		password?: string | null;

		/**
		 * User phone number in international format
		 * Pattern: /^\+(?:[0-9]-?){6,14}[0-9]$/
		 */
		phone?: string | null;

		/** User status */
		userStatus?: number | null;
	}

	export class PetClient {
		constructor(private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/') {
		}

		/**
		 * Add a new pet to the store
		 * Add new pet to the store inventory.
		 * Post pet
		 * @param {Pet} requestBody Pet object that needs to be added to the store
		 * @return {void} 
		 */
		AddPet(requestBody: Pet, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'pet', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Update an existing pet
		 * Put pet
		 * @param {Pet} requestBody Pet object that needs to be added to the store
		 * @return {void} 
		 */
		UpdatePet(requestBody: Pet, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'pet', { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Find pet by ID
		 * Returns a single pet
		 * Get pet/{petId}
		 * @param {number} petId ID of pet to return
		 * @return {Pet} successful operation
		 */
		GetPetById(petId: number, headersHandler?: () => {[header: string]: string}): Promise<Pet> {
			return fetch(this.baseUri + 'pet/' + petId, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Deletes a pet
		 * Delete pet/{petId}
		 * @param {number} petId Pet id to delete
		 * @return {void} 
		 */
		DeletePet(petId: number, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'pet/' + petId, { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Finds Pets by status
		 * Multiple status values can be provided with comma separated strings
		 * Get pet/findByStatus
		 * @param {Array<PetStatus>} status Status values that need to be considered for filter
		 * @return {Array<Pet>} successful operation
		 */
		FindPetsByStatus(status: Array<PetStatus>, headersHandler?: () => {[header: string]: string}): Promise<Array<Pet>> {
			return fetch(this.baseUri + 'pet/findByStatus?' + status.map(z => `status=${z}`).join('&'), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Finds Pets by tags
		 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
		 * Get pet/findByTags
		 * @param {Array<string>} tags Tags to filter by
		 * @return {Array<Pet>} successful operation
		 */
		FindPetsByTags(tags: Array<string>, headersHandler?: () => {[header: string]: string}): Promise<Array<Pet>> {
			return fetch(this.baseUri + 'pet/findByTags?' + tags.map(z => `tags=${encodeURIComponent(z)}`).join('&'), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Returns pet inventories by status
		 * Returns a map of status codes to quantities
		 * Get store/inventory
		 * @return {{[id: string]: number }} successful operation
		 */
		GetInventory(headersHandler?: () => {[header: string]: string}): Promise<{[id: string]: number }> {
			return fetch(this.baseUri + 'store/inventory', { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Place an order for a pet
		 * Post store/order
		 * @param {Order} requestBody order placed for purchasing the pet
		 * @return {Order} successful operation
		 */
		PlaceOrder(requestBody: Order, headersHandler?: () => {[header: string]: string}): Promise<Order> {
			return fetch(this.baseUri + 'store/order', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) }).then(d => d.json());
		}

		/**
		 * Find purchase order by ID
		 * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
		 * Get store/order/{orderId}
		 * @param {number} orderId ID of pet that needs to be fetched
		 * @return {Order} successful operation
		 */
		GetOrderById(orderId: number, headersHandler?: () => {[header: string]: string}): Promise<Order> {
			return fetch(this.baseUri + 'store/order/' + orderId, { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Delete purchase order by ID
		 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
		 * Delete store/order/{orderId}
		 * @param {string} orderId ID of the order that needs to be deleted
		 * @return {void} 
		 */
		DeleteOrder(orderId: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'store/order/' + (orderId == null ? '' : encodeURIComponent(orderId)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create user
		 * This can only be done by the logged in user.
		 * Post user
		 * @param {User} requestBody Created user object
		 * @return {void} 
		 */
		CreateUser(requestBody: User, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Get user by user name
		 * Get user/{username}
		 * @param {string} username The name that needs to be fetched. Use user1 for testing. 
		 * @return {User} successful operation
		 */
		GetUserByName(username: string, headersHandler?: () => {[header: string]: string}): Promise<User> {
			return fetch(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.json());
		}

		/**
		 * Updated user
		 * This can only be done by the logged in user.
		 * Put user/{username}
		 * @param {string} username name that need to be deleted
		 * @param {User} requestBody Updated user object
		 * @return {void} 
		 */
		UpdateUser(username: string, requestBody: User, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)), { method: 'put', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Delete user
		 * This can only be done by the logged in user.
		 * Delete user/{username}
		 * @param {string} username The name that needs to be deleted
		 * @return {void} 
		 */
		DeleteUser(username: string, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)), { method: 'delete', headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates list of users with given input array
		 * Post user/createWithArray
		 * @param {Array<User>} requestBody List of user object
		 * @return {void} 
		 */
		CreateUsersWithArrayInput(requestBody: Array<User>, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/createWithArray', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Creates list of users with given input array
		 * Post user/createWithList
		 * @param {Array<User>} requestBody List of user object
		 * @return {void} 
		 */
		CreateUsersWithListInput(requestBody: Array<User>, headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/createWithList', { method: 'post', headers: headersHandler ? Object.assign(headersHandler(), { 'Content-Type': 'application/json;charset=UTF-8' }): { 'Content-Type': 'application/json;charset=UTF-8' }, body: JSON.stringify(requestBody) });
		}

		/**
		 * Logs user into the system
		 * Get user/login
		 * @param {string} username The user name for login
		 * @param {string} password The password for login in clear text
		 * @return {string} successful operation
		 */
		LoginUser(username: string, password: string, headersHandler?: () => {[header: string]: string}): Promise<string> {
			return fetch(this.baseUri + 'user/login?username=' + (username == null ? '' : encodeURIComponent(username)) + '&password=' + (password == null ? '' : encodeURIComponent(password)), { method: 'get', headers: headersHandler ? headersHandler() : undefined }).then(d => d.text());
		}

		/**
		 * Logs out current logged in user session
		 * Get user/logout
		 * @return {void} 
		 */
		LogoutUser(headersHandler?: () => {[header: string]: string}): Promise<Response> {
			return fetch(this.baseUri + 'user/logout', { method: 'get', headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

