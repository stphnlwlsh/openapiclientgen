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
		 * Lists the geographical areas (e.g. districts) that can be used to filter events.
		 * Get areas
		 * @param {AreasGetByFormatFormat} format The format of the response
		 * @return {void} List of packages
		 */
		AreasGetByFormat(format: AreasGetByFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'areas?format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists road events
		 * The events resource provides information about road events (e.g. accidents, construction, special events). The response is a list of event elements matching the filtering parameters if any are provided.
		 * Get events
		 * @param {AreasGetByFormatFormat} format The format of the response
		 * @param {EventsGetByFormatAndStatusAndSeverityAndJurisdictionAndEvent_typeAndCreatedAndUpdatedAndRoad_nameAndArea_idAndBboxStatus} status Limits the response to events having a given status.
		 * @param {string} severity Limits the response to events tagged with one of the listed severity values. The possible values are: [MINOR, MODERATE, MAJOR].  Multiple values may be listed, and should be separated by a comma. The default is to return events of any severity.
		 * @param {string} jurisdiction Limits the response to events reported by a given jurisdiction. The value given must be specified as the ID of a jurisdiction returned by the /jurisdiction resource. The default is to return events from all jurisdictions.
		 * @param {EventsGetByFormatAndStatusAndSeverityAndJurisdictionAndEvent_typeAndCreatedAndUpdatedAndRoad_nameAndArea_idAndBboxEvent_type} event_type Limits the response to events tagged with one of the listed event types.  The possible values include: [CONSTRUCTION, INCIDENT, SPECIAL_EVENT, WEATHER_CONDITION].  Multiple values may be listed, and should be separated by a comma. The default is to return events of all types.
		 * @param {string} created Limits the response to events based on the date and time that the event was created (first recorded). The date/time must be specified in ISO 8601 format, and may be prefixed by one of the following operators [<, <=, >, >=] to indicate 'before', 'before or equal to', 'after' or 'after or equal to' respectively.  For example, >2013-12-01T12:00:00Z requests all events create after Dec. 1, 2015 at 12pm (noon) Coordinated Universal Time.  The default is to return events with any creation time.
		 * @param {string} updated Limits the response to events based on the date and time that the event was last updated. The date/time must be specified in ISO 8601 format, and may be prefixed by one of the following operators [<, <=, >, >=] to indicate 'before', 'before or equal to', 'after' or 'after or equal to' respectively.  For example, >2013-12-01T12:00:00Z requests all events updated after Dec. 1, 2015 at 12pm (noon) Coordinated Universal Time. The default is to return events with any update time
		 * @param {string} road_name Limits the response to events on a given road as specified by the road name.  An example of a valid road name is 'Highway 1'. The default is to return events on all roads.
		 * @param {string} area_id Limits the response to events within one of the specified areas.  An area must be specified as the ID of an item returned by the /areas resource. For example: an area_id of 'drivebc.ca/1' limits events to those within the Lower Mainland District.  The default is to return events in all areas.
		 * @param {string} bbox Limits the response to events that fall within the specified geographical bounding box.  The bbox format must be '[min longitude],[min latitude],[max longitude],[max latitude]' with WGS84 coordinates.  For example: -123.45,48.99,-122.45,49.49.  The default is to return events in all geographical locations.
		 * @return {void} List of packages
		 */
		EventsGetByFormatAndStatusAndSeverityAndJurisdictionAndEvent_typeAndCreatedAndUpdatedAndRoad_nameAndArea_idAndBbox(format: AreasGetByFormatFormat | null | undefined, status: EventsGetByFormatAndStatusAndSeverityAndJurisdictionAndEvent_typeAndCreatedAndUpdatedAndRoad_nameAndArea_idAndBboxStatus | null | undefined, severity: string | null | undefined, jurisdiction: string | null | undefined, event_type: EventsGetByFormatAndStatusAndSeverityAndJurisdictionAndEvent_typeAndCreatedAndUpdatedAndRoad_nameAndArea_idAndBboxEvent_type | null | undefined, created: string | null | undefined, updated: string | null | undefined, road_name: string | null | undefined, area_id: string | null | undefined, bbox: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'events?format=' + format + '&status=' + status + '&severity=' + (severity == null ? '' : encodeURIComponent(severity)) + '&jurisdiction=' + (jurisdiction == null ? '' : encodeURIComponent(jurisdiction)) + '&event_type=' + event_type + '&created=' + (created == null ? '' : encodeURIComponent(created)) + '&updated=' + (updated == null ? '' : encodeURIComponent(updated)) + '&road_name=' + (road_name == null ? '' : encodeURIComponent(road_name)) + '&area_id=' + (area_id == null ? '' : encodeURIComponent(area_id)) + '&bbox=' + (bbox == null ? '' : encodeURIComponent(bbox)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the jurisdictions publishing data through this Open511 API implementation
		 * Get jurisdiction
		 * @param {AreasGetByFormatFormat} format The format of the response
		 * @return {void} List of packages
		 */
		JurisdictionGetByFormat(format: AreasGetByFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'jurisdiction?format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Provides the geographical boundaries for all the jurisdictions.
		 * Get jurisdictiongeography
		 * @param {AreasGetByFormatFormat} format The format of the response
		 * @return {void} List of packages
		 */
		JurisdictiongeographyGetByFormat(format: AreasGetByFormatFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'jurisdictiongeography?format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum AreasGetByFormatFormat { json = 'json', xml = 'xml' }

	export enum EventsGetByFormatAndStatusAndSeverityAndJurisdictionAndEvent_typeAndCreatedAndUpdatedAndRoad_nameAndArea_idAndBboxStatus { ALL = 'ALL', ACTIVE = 'ACTIVE', ARCHIVED = 'ARCHIVED' }

	export enum EventsGetByFormatAndStatusAndSeverityAndJurisdictionAndEvent_typeAndCreatedAndUpdatedAndRoad_nameAndArea_idAndBboxEvent_type { CONSTRUCTION = 'CONSTRUCTION', SPECIAL_EVENT = 'SPECIAL_EVENT', INCIDENT = 'INCIDENT', WEATHER_CONDITION = 'WEATHER_CONDITION', ROAD_CONDITION = 'ROAD_CONDITION' }

}
