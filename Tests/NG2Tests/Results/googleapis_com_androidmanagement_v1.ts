import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Security policies set to the most secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values. */
	export interface AdvancedSecurityOverrides {

		/** The policy for untrusted apps (apps from unknown sources) enforced on the device. Replaces install_unknown_sources_allowed (deprecated). */
		untrustedAppsPolicy?: AdvancedSecurityOverridesUntrustedAppsPolicy | null;
	}

	/** Security policies set to the most secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values. */
	export interface AdvancedSecurityOverridesFormProperties {

		/** The policy for untrusted apps (apps from unknown sources) enforced on the device. Replaces install_unknown_sources_allowed (deprecated). */
		untrustedAppsPolicy: FormControl<AdvancedSecurityOverridesUntrustedAppsPolicy | null | undefined>,
	}
	export function CreateAdvancedSecurityOverridesFormGroup() {
		return new FormGroup<AdvancedSecurityOverridesFormProperties>({
			untrustedAppsPolicy: new FormControl<AdvancedSecurityOverridesUntrustedAppsPolicy | null | undefined>(undefined),
		});

	}

	export enum AdvancedSecurityOverridesUntrustedAppsPolicy { UNTRUSTED_APPS_POLICY_UNSPECIFIED = 0, DISALLOW_INSTALL = 1, ALLOW_INSTALL_IN_PERSONAL_PROFILE_ONLY = 2, ALLOW_INSTALL_DEVICE_WIDE = 3 }


	/** Configuration for an always-on VPN connection. */
	export interface AlwaysOnVpnPackage {

		/** Disallows networking when the VPN is not connected. */
		lockdownEnabled?: boolean | null;

		/** The package name of the VPN app. */
		packageName?: string | null;
	}

	/** Configuration for an always-on VPN connection. */
	export interface AlwaysOnVpnPackageFormProperties {

		/** Disallows networking when the VPN is not connected. */
		lockdownEnabled: FormControl<boolean | null | undefined>,

		/** The package name of the VPN app. */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateAlwaysOnVpnPackageFormGroup() {
		return new FormGroup<AlwaysOnVpnPackageFormProperties>({
			lockdownEnabled: new FormControl<boolean | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy. */
	export interface ApiLevelCondition {

		/** The minimum desired Android Framework API level. If the device doesn't meet the minimum requirement, this condition is satisfied. Must be greater than zero. */
		minApiLevel?: number | null;
	}

	/** A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy. */
	export interface ApiLevelConditionFormProperties {

		/** The minimum desired Android Framework API level. If the device doesn't meet the minimum requirement, this condition is satisfied. Must be greater than zero. */
		minApiLevel: FormControl<number | null | undefined>,
	}
	export function CreateApiLevelConditionFormGroup() {
		return new FormGroup<ApiLevelConditionFormProperties>({
			minApiLevel: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Id to name association of a app track. */
	export interface AppTrackInfo {

		/** The track name associated with the trackId, set in the Play Console. The name is modifiable from Play Console. */
		trackAlias?: string | null;

		/** The unmodifiable unique track identifier, taken from the releaseTrackId in the URL of the Play Console page that displays the app’s track information. */
		trackId?: string | null;
	}

	/** Id to name association of a app track. */
	export interface AppTrackInfoFormProperties {

		/** The track name associated with the trackId, set in the Play Console. The name is modifiable from Play Console. */
		trackAlias: FormControl<string | null | undefined>,

		/** The unmodifiable unique track identifier, taken from the releaseTrackId in the URL of the Play Console page that displays the app’s track information. */
		trackId: FormControl<string | null | undefined>,
	}
	export function CreateAppTrackInfoFormGroup() {
		return new FormGroup<AppTrackInfoFormProperties>({
			trackAlias: new FormControl<string | null | undefined>(undefined),
			trackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an app. */
	export interface Application {

		/** Application tracks visible to the enterprise. */
		appTracks?: Array<AppTrackInfo>;

		/** The set of managed properties available to be pre-configured for the app. */
		managedProperties?: Array<ManagedProperty>;

		/** The name of the app in the form enterprises/{enterpriseId}/applications/{package_name}. */
		name?: string | null;

		/** The permissions required by the app. */
		permissions?: Array<ApplicationPermission>;

		/** The title of the app. Localized. */
		title?: string | null;
	}

	/** Information about an app. */
	export interface ApplicationFormProperties {

		/** The name of the app in the form enterprises/{enterpriseId}/applications/{package_name}. */
		name: FormControl<string | null | undefined>,

		/** The title of the app. Localized. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Managed property. */
	export interface ManagedProperty {

		/** The default value of the property. BUNDLE_ARRAY properties don't have a default value. */
		defaultValue?: any;

		/** A longer description of the property, providing more detail of what it affects. Localized. */
		description?: string | null;

		/** For CHOICE or MULTISELECT properties, the list of possible entries. */
		entries?: Array<ManagedPropertyEntry>;

		/** The unique key that the app uses to identify the property, e.g. "com.google.android.gm.fieldname". */
		key?: string | null;

		/** For BUNDLE_ARRAY properties, the list of nested properties. A BUNDLE_ARRAY property is at most two levels deep. */
		nestedProperties?: Array<ManagedProperty>;

		/** The name of the property. Localized. */
		title?: string | null;

		/** The type of the property. */
		type?: ManagedPropertyType | null;
	}

	/** Managed property. */
	export interface ManagedPropertyFormProperties {

		/** The default value of the property. BUNDLE_ARRAY properties don't have a default value. */
		defaultValue: FormControl<any | null | undefined>,

		/** A longer description of the property, providing more detail of what it affects. Localized. */
		description: FormControl<string | null | undefined>,

		/** The unique key that the app uses to identify the property, e.g. "com.google.android.gm.fieldname". */
		key: FormControl<string | null | undefined>,

		/** The name of the property. Localized. */
		title: FormControl<string | null | undefined>,

		/** The type of the property. */
		type: FormControl<ManagedPropertyType | null | undefined>,
	}
	export function CreateManagedPropertyFormGroup() {
		return new FormGroup<ManagedPropertyFormProperties>({
			defaultValue: new FormControl<any | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ManagedPropertyType | null | undefined>(undefined),
		});

	}


	/** An entry of a managed property. */
	export interface ManagedPropertyEntry {

		/** The human-readable name of the value. Localized. */
		name?: string | null;

		/** The machine-readable value of the entry, which should be used in the configuration. Not localized. */
		value?: string | null;
	}

	/** An entry of a managed property. */
	export interface ManagedPropertyEntryFormProperties {

		/** The human-readable name of the value. Localized. */
		name: FormControl<string | null | undefined>,

		/** The machine-readable value of the entry, which should be used in the configuration. Not localized. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateManagedPropertyEntryFormGroup() {
		return new FormGroup<ManagedPropertyEntryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManagedPropertyType { MANAGED_PROPERTY_TYPE_UNSPECIFIED = 0, BOOL = 1, STRING = 2, INTEGER = 3, CHOICE = 4, MULTISELECT = 5, HIDDEN = 6, BUNDLE = 7, BUNDLE_ARRAY = 8 }


	/** A permission required by the app. */
	export interface ApplicationPermission {

		/** A longer description of the permission, providing more detail on what it affects. Localized. */
		description?: string | null;

		/** The name of the permission. Localized. */
		name?: string | null;

		/** An opaque string uniquely identifying the permission. Not localized. */
		permissionId?: string | null;
	}

	/** A permission required by the app. */
	export interface ApplicationPermissionFormProperties {

		/** A longer description of the permission, providing more detail on what it affects. Localized. */
		description: FormControl<string | null | undefined>,

		/** The name of the permission. Localized. */
		name: FormControl<string | null | undefined>,

		/** An opaque string uniquely identifying the permission. Not localized. */
		permissionId: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPermissionFormGroup() {
		return new FormGroup<ApplicationPermissionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			permissionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An app-related event. */
	export interface ApplicationEvent {

		/** The creation time of the event. */
		createTime?: string | null;

		/** App event type. */
		eventType?: ApplicationEventEventType | null;
	}

	/** An app-related event. */
	export interface ApplicationEventFormProperties {

		/** The creation time of the event. */
		createTime: FormControl<string | null | undefined>,

		/** App event type. */
		eventType: FormControl<ApplicationEventEventType | null | undefined>,
	}
	export function CreateApplicationEventFormGroup() {
		return new FormGroup<ApplicationEventFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<ApplicationEventEventType | null | undefined>(undefined),
		});

	}

	export enum ApplicationEventEventType { APPLICATION_EVENT_TYPE_UNSPECIFIED = 0, INSTALLED = 1, CHANGED = 2, DATA_CLEARED = 3, REMOVED = 4, REPLACED = 5, RESTARTED = 6, PINNED = 7, UNPINNED = 8 }


	/** Policy for an individual app. */
	export interface ApplicationPolicy {

		/** List of the app’s track IDs that a device belonging to the enterprise can access. If the list contains multiple track IDs, devices receive the latest version among all accessible tracks. If the list contains no track IDs, devices only have access to the app’s production track. More details about each track are available in AppTrackInfo. */
		accessibleTrackIds?: Array<string>;

		/** The default policy for all permissions requested by the app. If specified, this overrides the policy-level default_permission_policy which applies to all apps. It does not override the permission_grants which applies to all apps. */
		defaultPermissionPolicy?: ApplicationPolicyDefaultPermissionPolicy | null;

		/** The scopes delegated to the app from Android Device Policy. */
		delegatedScopes?: Array<string>;

		/** Whether the app is disabled. When disabled, the app data is still preserved. */
		disabled?: boolean | null;

		/** The type of installation to perform. */
		installType?: ApplicationPolicyInstallType | null;

		/** Whether the app is allowed to lock itself in full-screen mode. DEPRECATED. Use InstallType KIOSK or kioskCustomLauncherEnabled to to configure a dedicated device. */
		lockTaskAllowed?: boolean | null;

		/** Managed configuration applied to the app. The format for the configuration is dictated by the ManagedProperty values supported by the app. Each field name in the managed configuration must match the key field of the ManagedProperty. The field value must be compatible with the type of the ManagedProperty: <table> <tr><td><i>type</i></td><td><i>JSON value</i></td></tr> <tr><td>BOOL</td><td>true or false</td></tr> <tr><td>STRING</td><td>string</td></tr> <tr><td>INTEGER</td><td>number</td></tr> <tr><td>CHOICE</td><td>string</td></tr> <tr><td>MULTISELECT</td><td>array of strings</td></tr> <tr><td>HIDDEN</td><td>string</td></tr> <tr><td>BUNDLE_ARRAY</td><td>array of objects</td></tr> </table> */
		managedConfiguration?: {[id: string]: any };

		/** The managed configurations template for the app, saved from the managed configurations iframe. */
		managedConfigurationTemplate?: ManagedConfigurationTemplate;

		/** The minimum version of the app that runs on the device. If set, the device attempts to update the app to at least this version code. If the app is not up-to-date, the device will contain a NonComplianceDetail with non_compliance_reason set to APP_NOT_UPDATED. The app must already be published to Google Play with a version code greater than or equal to this value. At most 20 apps may specify a minimum version code per policy. */
		minimumVersionCode?: number | null;

		/** The package name of the app. For example, com.google.android.youtube for the YouTube app. */
		packageName?: string | null;

		/** Explicit permission grants or denials for the app. These values override the default_permission_policy and permission_grants which apply to all apps. */
		permissionGrants?: Array<PermissionGrant>;
	}

	/** Policy for an individual app. */
	export interface ApplicationPolicyFormProperties {

		/** The default policy for all permissions requested by the app. If specified, this overrides the policy-level default_permission_policy which applies to all apps. It does not override the permission_grants which applies to all apps. */
		defaultPermissionPolicy: FormControl<ApplicationPolicyDefaultPermissionPolicy | null | undefined>,

		/** Whether the app is disabled. When disabled, the app data is still preserved. */
		disabled: FormControl<boolean | null | undefined>,

		/** The type of installation to perform. */
		installType: FormControl<ApplicationPolicyInstallType | null | undefined>,

		/** Whether the app is allowed to lock itself in full-screen mode. DEPRECATED. Use InstallType KIOSK or kioskCustomLauncherEnabled to to configure a dedicated device. */
		lockTaskAllowed: FormControl<boolean | null | undefined>,

		/** Managed configuration applied to the app. The format for the configuration is dictated by the ManagedProperty values supported by the app. Each field name in the managed configuration must match the key field of the ManagedProperty. The field value must be compatible with the type of the ManagedProperty: <table> <tr><td><i>type</i></td><td><i>JSON value</i></td></tr> <tr><td>BOOL</td><td>true or false</td></tr> <tr><td>STRING</td><td>string</td></tr> <tr><td>INTEGER</td><td>number</td></tr> <tr><td>CHOICE</td><td>string</td></tr> <tr><td>MULTISELECT</td><td>array of strings</td></tr> <tr><td>HIDDEN</td><td>string</td></tr> <tr><td>BUNDLE_ARRAY</td><td>array of objects</td></tr> </table> */
		managedConfiguration: FormControl<{[id: string]: any } | null | undefined>,

		/** The minimum version of the app that runs on the device. If set, the device attempts to update the app to at least this version code. If the app is not up-to-date, the device will contain a NonComplianceDetail with non_compliance_reason set to APP_NOT_UPDATED. The app must already be published to Google Play with a version code greater than or equal to this value. At most 20 apps may specify a minimum version code per policy. */
		minimumVersionCode: FormControl<number | null | undefined>,

		/** The package name of the app. For example, com.google.android.youtube for the YouTube app. */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPolicyFormGroup() {
		return new FormGroup<ApplicationPolicyFormProperties>({
			defaultPermissionPolicy: new FormControl<ApplicationPolicyDefaultPermissionPolicy | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			installType: new FormControl<ApplicationPolicyInstallType | null | undefined>(undefined),
			lockTaskAllowed: new FormControl<boolean | null | undefined>(undefined),
			managedConfiguration: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			minimumVersionCode: new FormControl<number | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationPolicyDefaultPermissionPolicy { PERMISSION_POLICY_UNSPECIFIED = 0, PROMPT = 1, GRANT = 2, DENY = 3 }

	export enum ApplicationPolicyInstallType { INSTALL_TYPE_UNSPECIFIED = 0, PREINSTALLED = 1, FORCE_INSTALLED = 2, BLOCKED = 3, AVAILABLE = 4, REQUIRED_FOR_SETUP = 5, KIOSK = 6 }


	/** The managed configurations template for the app, saved from the managed configurations iframe. */
	export interface ManagedConfigurationTemplate {

		/** Optional, a map containing <key, value> configuration variables defined for the configuration. */
		configurationVariables?: {[id: string]: string };

		/** The ID of the managed configurations template. */
		templateId?: string | null;
	}

	/** The managed configurations template for the app, saved from the managed configurations iframe. */
	export interface ManagedConfigurationTemplateFormProperties {

		/** Optional, a map containing <key, value> configuration variables defined for the configuration. */
		configurationVariables: FormControl<{[id: string]: string } | null | undefined>,

		/** The ID of the managed configurations template. */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateManagedConfigurationTemplateFormGroup() {
		return new FormGroup<ManagedConfigurationTemplateFormProperties>({
			configurationVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for an Android permission and its grant state. */
	export interface PermissionGrant {

		/** The Android permission or group, e.g. android.permission.READ_CALENDAR or android.permission_group.CALENDAR. */
		permission?: string | null;

		/** The policy for granting the permission. */
		policy?: ApplicationPolicyDefaultPermissionPolicy | null;
	}

	/** Configuration for an Android permission and its grant state. */
	export interface PermissionGrantFormProperties {

		/** The Android permission or group, e.g. android.permission.READ_CALENDAR or android.permission_group.CALENDAR. */
		permission: FormControl<string | null | undefined>,

		/** The policy for granting the permission. */
		policy: FormControl<ApplicationPolicyDefaultPermissionPolicy | null | undefined>,
	}
	export function CreatePermissionGrantFormGroup() {
		return new FormGroup<PermissionGrantFormProperties>({
			permission: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<ApplicationPolicyDefaultPermissionPolicy | null | undefined>(undefined),
		});

	}


	/** Information reported about an installed app. */
	export interface ApplicationReport {

		/** The source of the package. */
		applicationSource?: ApplicationReportApplicationSource | null;

		/** The display name of the app. */
		displayName?: string | null;

		/** List of app events. The most recent 20 events are stored in the list. */
		events?: Array<ApplicationEvent>;

		/** The package name of the app that installed this app. */
		installerPackageName?: string | null;

		/** List of keyed app states reported by the app. */
		keyedAppStates?: Array<KeyedAppState>;

		/** Package name of the app. */
		packageName?: string | null;

		/** The SHA-256 hash of the app's APK file, which can be used to verify the app hasn't been modified. Each byte of the hash value is represented as a two-digit hexadecimal number. */
		packageSha256Hash?: string | null;

		/** The SHA-1 hash of each android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the app package. Each byte of each hash value is represented as a two-digit hexadecimal number. */
		signingKeyCertFingerprints?: Array<string>;

		/** Application state. */
		state?: ApplicationReportState | null;

		/** The app version code, which can be used to determine whether one version is more recent than another. */
		versionCode?: number | null;

		/** The app version as displayed to the user. */
		versionName?: string | null;
	}

	/** Information reported about an installed app. */
	export interface ApplicationReportFormProperties {

		/** The source of the package. */
		applicationSource: FormControl<ApplicationReportApplicationSource | null | undefined>,

		/** The display name of the app. */
		displayName: FormControl<string | null | undefined>,

		/** The package name of the app that installed this app. */
		installerPackageName: FormControl<string | null | undefined>,

		/** Package name of the app. */
		packageName: FormControl<string | null | undefined>,

		/** The SHA-256 hash of the app's APK file, which can be used to verify the app hasn't been modified. Each byte of the hash value is represented as a two-digit hexadecimal number. */
		packageSha256Hash: FormControl<string | null | undefined>,

		/** Application state. */
		state: FormControl<ApplicationReportState | null | undefined>,

		/** The app version code, which can be used to determine whether one version is more recent than another. */
		versionCode: FormControl<number | null | undefined>,

		/** The app version as displayed to the user. */
		versionName: FormControl<string | null | undefined>,
	}
	export function CreateApplicationReportFormGroup() {
		return new FormGroup<ApplicationReportFormProperties>({
			applicationSource: new FormControl<ApplicationReportApplicationSource | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			installerPackageName: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			packageSha256Hash: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ApplicationReportState | null | undefined>(undefined),
			versionCode: new FormControl<number | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationReportApplicationSource { APPLICATION_SOURCE_UNSPECIFIED = 0, SYSTEM_APP_FACTORY_VERSION = 1, SYSTEM_APP_UPDATED_VERSION = 2, INSTALLED_FROM_PLAY_STORE = 3 }


	/** Keyed app state reported by the app. */
	export interface KeyedAppState {

		/** The creation time of the app state on the device. */
		createTime?: string | null;

		/** Optionally, a machine-readable value to be read by the EMM. For example, setting values that the admin can choose to query against in the EMM console (e.g. “notify me if the battery_warning data < 10”). */
		data?: string | null;

		/** The key for the app state. Acts as a point of reference for what the app is providing state for. For example, when providing managed configuration feedback, this key could be the managed configuration key. */
		key?: string | null;

		/** The time the app state was most recently updated. */
		lastUpdateTime?: string | null;

		/** Optionally, a free-form message string to explain the app state. If the state was triggered by a particular value (e.g. a managed configuration value), it should be included in the message. */
		message?: string | null;

		/** The severity of the app state. */
		severity?: KeyedAppStateSeverity | null;
	}

	/** Keyed app state reported by the app. */
	export interface KeyedAppStateFormProperties {

		/** The creation time of the app state on the device. */
		createTime: FormControl<string | null | undefined>,

		/** Optionally, a machine-readable value to be read by the EMM. For example, setting values that the admin can choose to query against in the EMM console (e.g. “notify me if the battery_warning data < 10”). */
		data: FormControl<string | null | undefined>,

		/** The key for the app state. Acts as a point of reference for what the app is providing state for. For example, when providing managed configuration feedback, this key could be the managed configuration key. */
		key: FormControl<string | null | undefined>,

		/** The time the app state was most recently updated. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** Optionally, a free-form message string to explain the app state. If the state was triggered by a particular value (e.g. a managed configuration value), it should be included in the message. */
		message: FormControl<string | null | undefined>,

		/** The severity of the app state. */
		severity: FormControl<KeyedAppStateSeverity | null | undefined>,
	}
	export function CreateKeyedAppStateFormGroup() {
		return new FormGroup<KeyedAppStateFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<KeyedAppStateSeverity | null | undefined>(undefined),
		});

	}

	export enum KeyedAppStateSeverity { SEVERITY_UNSPECIFIED = 0, INFO = 1, ERROR = 2 }

	export enum ApplicationReportState { APPLICATION_STATE_UNSPECIFIED = 0, REMOVED = 1, INSTALLED = 2 }


	/** Settings controlling the behavior of application reports. */
	export interface ApplicationReportingSettings {

		/** Whether removed apps are included in application reports. */
		includeRemovedApps?: boolean | null;
	}

	/** Settings controlling the behavior of application reports. */
	export interface ApplicationReportingSettingsFormProperties {

		/** Whether removed apps are included in application reports. */
		includeRemovedApps: FormControl<boolean | null | undefined>,
	}
	export function CreateApplicationReportingSettingsFormGroup() {
		return new FormGroup<ApplicationReportingSettingsFormProperties>({
			includeRemovedApps: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified. */
	export interface BlockAction {

		/** Number of days the policy is non-compliant before the device or work profile is blocked. To block access immediately, set to 0. blockAfterDays must be less than wipeAfterDays. */
		blockAfterDays?: number | null;
	}

	/** An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified. */
	export interface BlockActionFormProperties {

		/** Number of days the policy is non-compliant before the device or work profile is blocked. To block access immediately, set to 0. blockAfterDays must be less than wipeAfterDays. */
		blockAfterDays: FormControl<number | null | undefined>,
	}
	export function CreateBlockActionFormGroup() {
		return new FormGroup<BlockActionFormProperties>({
			blockAfterDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A rule for automatically choosing a private key and certificate to authenticate the device to a server. */
	export interface ChoosePrivateKeyRule {

		/** The package names for which outgoing requests are subject to this rule. If no package names are specified, then the rule applies to all packages. For each package name listed, the rule applies to that package and all other packages that shared the same Android UID. The SHA256 hash of the signing key signatures of each package_name will be verified against those provided by Play */
		packageNames?: Array<string>;

		/** The alias of the private key to be used. */
		privateKeyAlias?: string | null;

		/** The URL pattern to match against the URL of the outgoing request. The pattern may contain asterisk (*) wildcards. Any URL is matched if unspecified. */
		urlPattern?: string | null;
	}

	/** A rule for automatically choosing a private key and certificate to authenticate the device to a server. */
	export interface ChoosePrivateKeyRuleFormProperties {

		/** The alias of the private key to be used. */
		privateKeyAlias: FormControl<string | null | undefined>,

		/** The URL pattern to match against the URL of the outgoing request. The pattern may contain asterisk (*) wildcards. Any URL is matched if unspecified. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function CreateChoosePrivateKeyRuleFormGroup() {
		return new FormGroup<ChoosePrivateKeyRuleFormProperties>({
			privateKeyAlias: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A command. */
	export interface Command {

		/** The timestamp at which the command was created. The timestamp is automatically generated by the server. */
		createTime?: string | null;

		/** The duration for which the command is valid. The command will expire if not executed by the device during this time. The default duration if unspecified is ten minutes. There is no maximum duration. */
		duration?: string | null;

		/** If the command failed, an error code explaining the failure. This is not set when the command is cancelled by the caller. */
		errorCode?: CommandErrorCode | null;

		/** For commands of type RESET_PASSWORD, optionally specifies the new password. */
		newPassword?: string | null;

		/** For commands of type RESET_PASSWORD, optionally specifies flags. */
		resetPasswordFlags?: Array<string>;

		/** The type of the command. */
		type?: CommandType | null;

		/** The resource name of the user that owns the device in the form enterprises/{enterpriseId}/users/{userId}. This is automatically generated by the server based on the device the command is sent to. */
		userName?: string | null;
	}

	/** A command. */
	export interface CommandFormProperties {

		/** The timestamp at which the command was created. The timestamp is automatically generated by the server. */
		createTime: FormControl<string | null | undefined>,

		/** The duration for which the command is valid. The command will expire if not executed by the device during this time. The default duration if unspecified is ten minutes. There is no maximum duration. */
		duration: FormControl<string | null | undefined>,

		/** If the command failed, an error code explaining the failure. This is not set when the command is cancelled by the caller. */
		errorCode: FormControl<CommandErrorCode | null | undefined>,

		/** For commands of type RESET_PASSWORD, optionally specifies the new password. */
		newPassword: FormControl<string | null | undefined>,

		/** The type of the command. */
		type: FormControl<CommandType | null | undefined>,

		/** The resource name of the user that owns the device in the form enterprises/{enterpriseId}/users/{userId}. This is automatically generated by the server based on the device the command is sent to. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateCommandFormGroup() {
		return new FormGroup<CommandFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<CommandErrorCode | null | undefined>(undefined),
			newPassword: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CommandType | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CommandErrorCode { COMMAND_ERROR_CODE_UNSPECIFIED = 0, UNKNOWN = 1, API_LEVEL = 2, MANAGEMENT_MODE = 3, INVALID_VALUE = 4, UNSUPPORTED = 5 }

	export enum CommandType { COMMAND_TYPE_UNSPECIFIED = 0, LOCK = 1, RESET_PASSWORD = 2, REBOOT = 3 }


	/** A rule declaring which mitigating actions to take when a device is not compliant with its policy. For every rule, there is always an implicit mitigating action to set policy_compliant to false for the Device resource, and display a message on the device indicating that the device is not compliant with its policy. Other mitigating actions may optionally be taken as well, depending on the field values in the rule. */
	export interface ComplianceRule {

		/** A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy. */
		apiLevelCondition?: ApiLevelCondition;

		/** If set to true, the rule includes a mitigating action to disable apps so that the device is effectively disabled, but app data is preserved. If the device is running an app in locked task mode, the app will be closed and a UI showing the reason for non-compliance will be displayed. */
		disableApps?: boolean | null;

		/** A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields. */
		nonComplianceDetailCondition?: NonComplianceDetailCondition;

		/** If set, the rule includes a mitigating action to disable apps specified in the list, but app data is preserved. */
		packageNamesToDisable?: Array<string>;
	}

	/** A rule declaring which mitigating actions to take when a device is not compliant with its policy. For every rule, there is always an implicit mitigating action to set policy_compliant to false for the Device resource, and display a message on the device indicating that the device is not compliant with its policy. Other mitigating actions may optionally be taken as well, depending on the field values in the rule. */
	export interface ComplianceRuleFormProperties {

		/** If set to true, the rule includes a mitigating action to disable apps so that the device is effectively disabled, but app data is preserved. If the device is running an app in locked task mode, the app will be closed and a UI showing the reason for non-compliance will be displayed. */
		disableApps: FormControl<boolean | null | undefined>,
	}
	export function CreateComplianceRuleFormGroup() {
		return new FormGroup<ComplianceRuleFormProperties>({
			disableApps: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields. */
	export interface NonComplianceDetailCondition {

		/** The reason the device is not in compliance with the setting. If not set, then this condition matches any reason. */
		nonComplianceReason?: NonComplianceDetailConditionNonComplianceReason | null;

		/** The package name of the app that's out of compliance. If not set, then this condition matches any package name. */
		packageName?: string | null;

		/** The name of the policy setting. This is the JSON field name of a top-level Policy field. If not set, then this condition matches any setting name. */
		settingName?: string | null;
	}

	/** A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields. */
	export interface NonComplianceDetailConditionFormProperties {

		/** The reason the device is not in compliance with the setting. If not set, then this condition matches any reason. */
		nonComplianceReason: FormControl<NonComplianceDetailConditionNonComplianceReason | null | undefined>,

		/** The package name of the app that's out of compliance. If not set, then this condition matches any package name. */
		packageName: FormControl<string | null | undefined>,

		/** The name of the policy setting. This is the JSON field name of a top-level Policy field. If not set, then this condition matches any setting name. */
		settingName: FormControl<string | null | undefined>,
	}
	export function CreateNonComplianceDetailConditionFormGroup() {
		return new FormGroup<NonComplianceDetailConditionFormProperties>({
			nonComplianceReason: new FormControl<NonComplianceDetailConditionNonComplianceReason | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			settingName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NonComplianceDetailConditionNonComplianceReason { NON_COMPLIANCE_REASON_UNSPECIFIED = 0, API_LEVEL = 1, MANAGEMENT_MODE = 2, USER_ACTION = 3, INVALID_VALUE = 4, APP_NOT_INSTALLED = 5, UNSUPPORTED = 6, APP_INSTALLED = 7, PENDING = 8, APP_INCOMPATIBLE = 9, APP_NOT_UPDATED = 10 }


	/**
	 * Represents a whole or partial calendar date, e.g. a birthday. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the Proleptic Gregorian Calendar. This can represent:
	 * A full date, with non-zero year, month and day values
	 * A month and day value, with a zero year, e.g. an anniversary
	 * A year on its own, with zero month and day values
	 * A year and month value, with a zero day, e.g. a credit card expiration dateRelated types are google.type.TimeOfDay and google.protobuf.Timestamp.
	 */
	export interface Date {

		/** Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year by itself or a year and month where the day is not significant. */
		day?: number | null;

		/** Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day. */
		month?: number | null;

		/** Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year. */
		year?: number | null;
	}

	/**
	 * Represents a whole or partial calendar date, e.g. a birthday. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the Proleptic Gregorian Calendar. This can represent:
	 * A full date, with non-zero year, month and day values
	 * A month and day value, with a zero year, e.g. an anniversary
	 * A year on its own, with zero month and day values
	 * A year and month value, with a zero day, e.g. a credit card expiration dateRelated types are google.type.TimeOfDay and google.protobuf.Timestamp.
	 */
	export interface DateFormProperties {

		/** Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year by itself or a year and month where the day is not significant. */
		day: FormControl<number | null | undefined>,

		/** Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch. */
	export interface Device {

		/** The API level of the Android platform version running on the device. */
		apiLevel?: number | null;

		/** Reports for apps installed on the device. This information is only available when application_reports_enabled is true in the device's policy. */
		applicationReports?: Array<ApplicationReport>;

		/** The name of the policy currently applied to the device. */
		appliedPolicyName?: string | null;

		/** The version of the policy currently applied to the device. */
		appliedPolicyVersion?: string | null;

		/** The state currently applied to the device. */
		appliedState?: DeviceAppliedState | null;

		/** Information about security related device settings on device. */
		deviceSettings?: DeviceSettings;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		disabledReason?: UserFacingMessage;

		/** Detailed information about displays on the device. This information is only available if displayInfoEnabled is true in the device's policy. */
		displays?: Array<Display>;

		/** The time of device enrollment. */
		enrollmentTime?: string | null;

		/** If the device was enrolled with an enrollment token with additional data provided, this field contains that data. */
		enrollmentTokenData?: string | null;

		/** If the device was enrolled with an enrollment token, this field contains the name of the token. */
		enrollmentTokenName?: string | null;

		/** Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy. */
		hardwareInfo?: HardwareInfo;

		/** Hardware status samples in chronological order. This information is only available if hardwareStatusEnabled is true in the device's policy. */
		hardwareStatusSamples?: Array<HardwareStatus>;

		/** Deprecated. */
		lastPolicyComplianceReportTime?: string | null;

		/** The last time the device fetched its policy. */
		lastPolicySyncTime?: string | null;

		/** The last time the device sent a status report. */
		lastStatusReportTime?: string | null;

		/** The type of management mode Android Device Policy takes on the device. This influences which policy settings are supported. */
		managementMode?: DeviceManagementMode | null;

		/** Events related to memory and storage measurements in chronological order. This information is only available if memoryInfoEnabled is true in the device's policy. */
		memoryEvents?: Array<MemoryEvent>;

		/** Information about device memory and storage. */
		memoryInfo?: MemoryInfo;

		/** The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}. */
		name?: string | null;

		/** Device network info. */
		networkInfo?: NetworkInfo;

		/** Details about policy settings that the device is not compliant with. */
		nonComplianceDetails?: Array<NonComplianceDetail>;

		/** Whether the device is compliant with its policy. */
		policyCompliant?: boolean | null;

		/** The name of the policy applied to the device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device's user is applied. This field can be modified by a patch request. You can specify only the policyId when calling enterprises.devices.patch, as long as the policyId doesn’t contain any slashes. The rest of the policy name is inferred. */
		policyName?: string | null;

		/** Power management events on the device in chronological order. This information is only available if powerManagementEventsEnabled is true in the device's policy. */
		powerManagementEvents?: Array<PowerManagementEvent>;

		/** If the same physical device has been enrolled multiple times, this field contains its previous device names. The serial number is used as the unique identifier to determine if the same physical device has enrolled previously. The names are in chronological order. */
		previousDeviceNames?: Array<string>;

		/** The security posture of the device, as determined by the current device state and the policies applied. */
		securityPosture?: SecurityPosture;

		/** Information about device software. */
		softwareInfo?: SoftwareInfo;

		/** The state to be applied to the device. This field can be modified by a patch request. Note that when calling enterprises.devices.patch, ACTIVE and DISABLED are the only allowable values. To enter the device into a DELETED state, call enterprises.devices.delete. */
		state?: DeviceAppliedState | null;

		/** Map of selected system properties name and value related to the device. This information is only available if systemPropertiesEnabled is true in the device's policy. */
		systemProperties?: {[id: string]: string };

		/** A user belonging to an enterprise. */
		user?: User;

		/** The resource name of the user that owns this device in the form enterprises/{enterpriseId}/users/{userId}. */
		userName?: string | null;
	}

	/** A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch. */
	export interface DeviceFormProperties {

		/** The API level of the Android platform version running on the device. */
		apiLevel: FormControl<number | null | undefined>,

		/** The name of the policy currently applied to the device. */
		appliedPolicyName: FormControl<string | null | undefined>,

		/** The version of the policy currently applied to the device. */
		appliedPolicyVersion: FormControl<string | null | undefined>,

		/** The state currently applied to the device. */
		appliedState: FormControl<DeviceAppliedState | null | undefined>,

		/** The time of device enrollment. */
		enrollmentTime: FormControl<string | null | undefined>,

		/** If the device was enrolled with an enrollment token with additional data provided, this field contains that data. */
		enrollmentTokenData: FormControl<string | null | undefined>,

		/** If the device was enrolled with an enrollment token, this field contains the name of the token. */
		enrollmentTokenName: FormControl<string | null | undefined>,

		/** Deprecated. */
		lastPolicyComplianceReportTime: FormControl<string | null | undefined>,

		/** The last time the device fetched its policy. */
		lastPolicySyncTime: FormControl<string | null | undefined>,

		/** The last time the device sent a status report. */
		lastStatusReportTime: FormControl<string | null | undefined>,

		/** The type of management mode Android Device Policy takes on the device. This influences which policy settings are supported. */
		managementMode: FormControl<DeviceManagementMode | null | undefined>,

		/** The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}. */
		name: FormControl<string | null | undefined>,

		/** Whether the device is compliant with its policy. */
		policyCompliant: FormControl<boolean | null | undefined>,

		/** The name of the policy applied to the device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device's user is applied. This field can be modified by a patch request. You can specify only the policyId when calling enterprises.devices.patch, as long as the policyId doesn’t contain any slashes. The rest of the policy name is inferred. */
		policyName: FormControl<string | null | undefined>,

		/** The state to be applied to the device. This field can be modified by a patch request. Note that when calling enterprises.devices.patch, ACTIVE and DISABLED are the only allowable values. To enter the device into a DELETED state, call enterprises.devices.delete. */
		state: FormControl<DeviceAppliedState | null | undefined>,

		/** Map of selected system properties name and value related to the device. This information is only available if systemPropertiesEnabled is true in the device's policy. */
		systemProperties: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource name of the user that owns this device in the form enterprises/{enterpriseId}/users/{userId}. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			apiLevel: new FormControl<number | null | undefined>(undefined),
			appliedPolicyName: new FormControl<string | null | undefined>(undefined),
			appliedPolicyVersion: new FormControl<string | null | undefined>(undefined),
			appliedState: new FormControl<DeviceAppliedState | null | undefined>(undefined),
			enrollmentTime: new FormControl<string | null | undefined>(undefined),
			enrollmentTokenData: new FormControl<string | null | undefined>(undefined),
			enrollmentTokenName: new FormControl<string | null | undefined>(undefined),
			lastPolicyComplianceReportTime: new FormControl<string | null | undefined>(undefined),
			lastPolicySyncTime: new FormControl<string | null | undefined>(undefined),
			lastStatusReportTime: new FormControl<string | null | undefined>(undefined),
			managementMode: new FormControl<DeviceManagementMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			policyCompliant: new FormControl<boolean | null | undefined>(undefined),
			policyName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DeviceAppliedState | null | undefined>(undefined),
			systemProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceAppliedState { DEVICE_STATE_UNSPECIFIED = 0, ACTIVE = 1, DISABLED = 2, DELETED = 3, PROVISIONING = 4 }


	/** Information about security related device settings on device. */
	export interface DeviceSettings {

		/** Whether ADB (https://developer.android.com/studio/command-line/adb.html) is enabled on the device. */
		adbEnabled?: boolean | null;

		/** Whether developer mode is enabled on the device. */
		developmentSettingsEnabled?: boolean | null;

		/** Encryption status from DevicePolicyManager. */
		encryptionStatus?: DeviceSettingsEncryptionStatus | null;

		/** Whether the device is secured with PIN/password. */
		isDeviceSecure?: boolean | null;

		/** Whether the storage encryption is enabled. */
		isEncrypted?: boolean | null;

		/** Whether installing apps from unknown sources is enabled. */
		unknownSourcesEnabled?: boolean | null;

		/** Whether Verify Apps (Google Play Protect (https://support.google.com/googleplay/answer/2812853)) is enabled on the device. */
		verifyAppsEnabled?: boolean | null;
	}

	/** Information about security related device settings on device. */
	export interface DeviceSettingsFormProperties {

		/** Whether ADB (https://developer.android.com/studio/command-line/adb.html) is enabled on the device. */
		adbEnabled: FormControl<boolean | null | undefined>,

		/** Whether developer mode is enabled on the device. */
		developmentSettingsEnabled: FormControl<boolean | null | undefined>,

		/** Encryption status from DevicePolicyManager. */
		encryptionStatus: FormControl<DeviceSettingsEncryptionStatus | null | undefined>,

		/** Whether the device is secured with PIN/password. */
		isDeviceSecure: FormControl<boolean | null | undefined>,

		/** Whether the storage encryption is enabled. */
		isEncrypted: FormControl<boolean | null | undefined>,

		/** Whether installing apps from unknown sources is enabled. */
		unknownSourcesEnabled: FormControl<boolean | null | undefined>,

		/** Whether Verify Apps (Google Play Protect (https://support.google.com/googleplay/answer/2812853)) is enabled on the device. */
		verifyAppsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDeviceSettingsFormGroup() {
		return new FormGroup<DeviceSettingsFormProperties>({
			adbEnabled: new FormControl<boolean | null | undefined>(undefined),
			developmentSettingsEnabled: new FormControl<boolean | null | undefined>(undefined),
			encryptionStatus: new FormControl<DeviceSettingsEncryptionStatus | null | undefined>(undefined),
			isDeviceSecure: new FormControl<boolean | null | undefined>(undefined),
			isEncrypted: new FormControl<boolean | null | undefined>(undefined),
			unknownSourcesEnabled: new FormControl<boolean | null | undefined>(undefined),
			verifyAppsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DeviceSettingsEncryptionStatus { ENCRYPTION_STATUS_UNSPECIFIED = 0, UNSUPPORTED = 1, INACTIVE = 2, ACTIVATING = 3, ACTIVE = 4, ACTIVE_DEFAULT_KEY = 5, ACTIVE_PER_USER = 6 }


	/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
	export interface UserFacingMessage {

		/** The default message displayed if no localized message is specified or the user's locale doesn't match with any of the localized messages. A default message must be provided if any localized messages are provided. */
		defaultMessage?: string | null;

		/** A map containing <locale, message> pairs, where locale is a well-formed BCP 47 language (https://www.w3.org/International/articles/language-tags/) code, such as en-US, es-ES, or fr. */
		localizedMessages?: {[id: string]: string };
	}

	/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
	export interface UserFacingMessageFormProperties {

		/** The default message displayed if no localized message is specified or the user's locale doesn't match with any of the localized messages. A default message must be provided if any localized messages are provided. */
		defaultMessage: FormControl<string | null | undefined>,

		/** A map containing <locale, message> pairs, where locale is a well-formed BCP 47 language (https://www.w3.org/International/articles/language-tags/) code, such as en-US, es-ES, or fr. */
		localizedMessages: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUserFacingMessageFormGroup() {
		return new FormGroup<UserFacingMessageFormProperties>({
			defaultMessage: new FormControl<string | null | undefined>(undefined),
			localizedMessages: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Device display information. */
	export interface Display {

		/** Display density expressed as dots-per-inch. */
		density?: number | null;

		/** Unique display id. */
		displayId?: number | null;

		/** Display height in pixels. */
		height?: number | null;

		/** Name of the display. */
		name?: string | null;

		/** Refresh rate of the display in frames per second. */
		refreshRate?: number | null;

		/** State of the display. */
		state?: DisplayState | null;

		/** Display width in pixels. */
		width?: number | null;
	}

	/** Device display information. */
	export interface DisplayFormProperties {

		/** Display density expressed as dots-per-inch. */
		density: FormControl<number | null | undefined>,

		/** Unique display id. */
		displayId: FormControl<number | null | undefined>,

		/** Display height in pixels. */
		height: FormControl<number | null | undefined>,

		/** Name of the display. */
		name: FormControl<string | null | undefined>,

		/** Refresh rate of the display in frames per second. */
		refreshRate: FormControl<number | null | undefined>,

		/** State of the display. */
		state: FormControl<DisplayState | null | undefined>,

		/** Display width in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateDisplayFormGroup() {
		return new FormGroup<DisplayFormProperties>({
			density: new FormControl<number | null | undefined>(undefined),
			displayId: new FormControl<number | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			refreshRate: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<DisplayState | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DisplayState { DISPLAY_STATE_UNSPECIFIED = 0, OFF = 1, ON = 2, DOZE = 3, SUSPENDED = 4 }


	/** Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy. */
	export interface HardwareInfo {

		/** Battery shutdown temperature thresholds in Celsius for each battery on the device. */
		batteryShutdownTemperatures?: Array<number>;

		/** Battery throttling temperature thresholds in Celsius for each battery on the device. */
		batteryThrottlingTemperatures?: Array<number>;

		/** Brand of the device. For example, Google. */
		brand?: string | null;

		/** CPU shutdown temperature thresholds in Celsius for each CPU on the device. */
		cpuShutdownTemperatures?: Array<number>;

		/** CPU throttling temperature thresholds in Celsius for each CPU on the device. */
		cpuThrottlingTemperatures?: Array<number>;

		/** Baseband version. For example, MDM9625_104662.22.05.34p. */
		deviceBasebandVersion?: string | null;

		/** GPU shutdown temperature thresholds in Celsius for each GPU on the device. */
		gpuShutdownTemperatures?: Array<number>;

		/** GPU throttling temperature thresholds in Celsius for each GPU on the device. */
		gpuThrottlingTemperatures?: Array<number>;

		/** Name of the hardware. For example, Angler. */
		hardware?: string | null;

		/** Manufacturer. For example, Motorola. */
		manufacturer?: string | null;

		/** The model of the device. For example, Asus Nexus 7. */
		model?: string | null;

		/** The device serial number. */
		serialNumber?: string | null;

		/** Device skin shutdown temperature thresholds in Celsius. */
		skinShutdownTemperatures?: Array<number>;

		/** Device skin throttling temperature thresholds in Celsius. */
		skinThrottlingTemperatures?: Array<number>;
	}

	/** Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy. */
	export interface HardwareInfoFormProperties {

		/** Brand of the device. For example, Google. */
		brand: FormControl<string | null | undefined>,

		/** Baseband version. For example, MDM9625_104662.22.05.34p. */
		deviceBasebandVersion: FormControl<string | null | undefined>,

		/** Name of the hardware. For example, Angler. */
		hardware: FormControl<string | null | undefined>,

		/** Manufacturer. For example, Motorola. */
		manufacturer: FormControl<string | null | undefined>,

		/** The model of the device. For example, Asus Nexus 7. */
		model: FormControl<string | null | undefined>,

		/** The device serial number. */
		serialNumber: FormControl<string | null | undefined>,
	}
	export function CreateHardwareInfoFormGroup() {
		return new FormGroup<HardwareInfoFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined),
			deviceBasebandVersion: new FormControl<string | null | undefined>(undefined),
			hardware: new FormControl<string | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health. */
	export interface HardwareStatus {

		/** Current battery temperatures in Celsius for each battery on the device. */
		batteryTemperatures?: Array<number>;

		/** Current CPU temperatures in Celsius for each CPU on the device. */
		cpuTemperatures?: Array<number>;

		/** CPU usages in percentage for each core available on the device. Usage is 0 for each unplugged core. Empty array implies that CPU usage is not supported in the system. */
		cpuUsages?: Array<number>;

		/** The time the measurements were taken. */
		createTime?: string | null;

		/** Fan speeds in RPM for each fan on the device. Empty array means that there are no fans or fan speed is not supported on the system. */
		fanSpeeds?: Array<number>;

		/** Current GPU temperatures in Celsius for each GPU on the device. */
		gpuTemperatures?: Array<number>;

		/** Current device skin temperatures in Celsius. */
		skinTemperatures?: Array<number>;
	}

	/** Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health. */
	export interface HardwareStatusFormProperties {

		/** The time the measurements were taken. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateHardwareStatusFormGroup() {
		return new FormGroup<HardwareStatusFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceManagementMode { MANAGEMENT_MODE_UNSPECIFIED = 0, DEVICE_OWNER = 1, PROFILE_OWNER = 2 }


	/** An event related to memory and storage measurements. */
	export interface MemoryEvent {

		/** The number of free bytes in the medium, or for EXTERNAL_STORAGE_DETECTED, the total capacity in bytes of the storage medium. */
		byteCount?: string | null;

		/** The creation time of the event. */
		createTime?: string | null;

		/** Event type. */
		eventType?: MemoryEventEventType | null;
	}

	/** An event related to memory and storage measurements. */
	export interface MemoryEventFormProperties {

		/** The number of free bytes in the medium, or for EXTERNAL_STORAGE_DETECTED, the total capacity in bytes of the storage medium. */
		byteCount: FormControl<string | null | undefined>,

		/** The creation time of the event. */
		createTime: FormControl<string | null | undefined>,

		/** Event type. */
		eventType: FormControl<MemoryEventEventType | null | undefined>,
	}
	export function CreateMemoryEventFormGroup() {
		return new FormGroup<MemoryEventFormProperties>({
			byteCount: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<MemoryEventEventType | null | undefined>(undefined),
		});

	}

	export enum MemoryEventEventType { MEMORY_EVENT_TYPE_UNSPECIFIED = 0, RAM_MEASURED = 1, INTERNAL_STORAGE_MEASURED = 2, EXTERNAL_STORAGE_DETECTED = 3, EXTERNAL_STORAGE_REMOVED = 4, EXTERNAL_STORAGE_MEASURED = 5 }


	/** Information about device memory and storage. */
	export interface MemoryInfo {

		/** Total internal storage on device in bytes. */
		totalInternalStorage?: string | null;

		/** Total RAM on device in bytes. */
		totalRam?: string | null;
	}

	/** Information about device memory and storage. */
	export interface MemoryInfoFormProperties {

		/** Total internal storage on device in bytes. */
		totalInternalStorage: FormControl<string | null | undefined>,

		/** Total RAM on device in bytes. */
		totalRam: FormControl<string | null | undefined>,
	}
	export function CreateMemoryInfoFormGroup() {
		return new FormGroup<MemoryInfoFormProperties>({
			totalInternalStorage: new FormControl<string | null | undefined>(undefined),
			totalRam: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Device network info. */
	export interface NetworkInfo {

		/** IMEI number of the GSM device. For example, A1000031212. */
		imei?: string | null;

		/** MEID number of the CDMA device. For example, A00000292788E1. */
		meid?: string | null;

		/** Alphabetic name of current registered operator. For example, Vodafone. */
		networkOperatorName?: string | null;

		/** Wi-Fi MAC address of the device. For example, 7c:11:11:11:11:11. */
		wifiMacAddress?: string | null;
	}

	/** Device network info. */
	export interface NetworkInfoFormProperties {

		/** IMEI number of the GSM device. For example, A1000031212. */
		imei: FormControl<string | null | undefined>,

		/** MEID number of the CDMA device. For example, A00000292788E1. */
		meid: FormControl<string | null | undefined>,

		/** Alphabetic name of current registered operator. For example, Vodafone. */
		networkOperatorName: FormControl<string | null | undefined>,

		/** Wi-Fi MAC address of the device. For example, 7c:11:11:11:11:11. */
		wifiMacAddress: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInfoFormGroup() {
		return new FormGroup<NetworkInfoFormProperties>({
			imei: new FormControl<string | null | undefined>(undefined),
			meid: new FormControl<string | null | undefined>(undefined),
			networkOperatorName: new FormControl<string | null | undefined>(undefined),
			wifiMacAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides detail about non-compliance with a policy setting. */
	export interface NonComplianceDetail {

		/** If the policy setting could not be applied, the current value of the setting on the device. */
		currentValue?: any;

		/** For settings with nested fields, if a particular nested field is out of compliance, this specifies the full path to the offending field. The path is formatted in the same way the policy JSON field would be referenced in JavaScript, that is: 1) For object-typed fields, the field name is followed by a dot then by a  subfield name. 2) For array-typed fields, the field name is followed by the array index  enclosed in brackets. For example, to indicate a problem with the url field in the externalData field in the 3rd application, the path would be applications[2].externalData.url */
		fieldPath?: string | null;

		/** If package_name is set and the non-compliance reason is APP_NOT_INSTALLED or APP_NOT_UPDATED, the detailed reason the app can't be installed or updated. */
		installationFailureReason?: NonComplianceDetailInstallationFailureReason | null;

		/** The reason the device is not in compliance with the setting. */
		nonComplianceReason?: NonComplianceDetailConditionNonComplianceReason | null;

		/** The package name indicating which app is out of compliance, if applicable. */
		packageName?: string | null;

		/** The name of the policy setting. This is the JSON field name of a top-level Policy  field. */
		settingName?: string | null;
	}

	/** Provides detail about non-compliance with a policy setting. */
	export interface NonComplianceDetailFormProperties {

		/** If the policy setting could not be applied, the current value of the setting on the device. */
		currentValue: FormControl<any | null | undefined>,

		/** For settings with nested fields, if a particular nested field is out of compliance, this specifies the full path to the offending field. The path is formatted in the same way the policy JSON field would be referenced in JavaScript, that is: 1) For object-typed fields, the field name is followed by a dot then by a  subfield name. 2) For array-typed fields, the field name is followed by the array index  enclosed in brackets. For example, to indicate a problem with the url field in the externalData field in the 3rd application, the path would be applications[2].externalData.url */
		fieldPath: FormControl<string | null | undefined>,

		/** If package_name is set and the non-compliance reason is APP_NOT_INSTALLED or APP_NOT_UPDATED, the detailed reason the app can't be installed or updated. */
		installationFailureReason: FormControl<NonComplianceDetailInstallationFailureReason | null | undefined>,

		/** The reason the device is not in compliance with the setting. */
		nonComplianceReason: FormControl<NonComplianceDetailConditionNonComplianceReason | null | undefined>,

		/** The package name indicating which app is out of compliance, if applicable. */
		packageName: FormControl<string | null | undefined>,

		/** The name of the policy setting. This is the JSON field name of a top-level Policy  field. */
		settingName: FormControl<string | null | undefined>,
	}
	export function CreateNonComplianceDetailFormGroup() {
		return new FormGroup<NonComplianceDetailFormProperties>({
			currentValue: new FormControl<any | null | undefined>(undefined),
			fieldPath: new FormControl<string | null | undefined>(undefined),
			installationFailureReason: new FormControl<NonComplianceDetailInstallationFailureReason | null | undefined>(undefined),
			nonComplianceReason: new FormControl<NonComplianceDetailConditionNonComplianceReason | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			settingName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NonComplianceDetailInstallationFailureReason { INSTALLATION_FAILURE_REASON_UNSPECIFIED = 0, INSTALLATION_FAILURE_REASON_UNKNOWN = 1, IN_PROGRESS = 2, NOT_FOUND = 3, NOT_COMPATIBLE_WITH_DEVICE = 4, NOT_APPROVED = 5, PERMISSIONS_NOT_ACCEPTED = 6, NOT_AVAILABLE_IN_COUNTRY = 7, NO_LICENSES_REMAINING = 8, NOT_ENROLLED = 9, USER_INVALID = 10 }


	/** A power management event. */
	export interface PowerManagementEvent {

		/** For BATTERY_LEVEL_COLLECTED events, the battery level as a percentage. */
		batteryLevel?: number | null;

		/** The creation time of the event. */
		createTime?: string | null;

		/** Event type. */
		eventType?: PowerManagementEventEventType | null;
	}

	/** A power management event. */
	export interface PowerManagementEventFormProperties {

		/** For BATTERY_LEVEL_COLLECTED events, the battery level as a percentage. */
		batteryLevel: FormControl<number | null | undefined>,

		/** The creation time of the event. */
		createTime: FormControl<string | null | undefined>,

		/** Event type. */
		eventType: FormControl<PowerManagementEventEventType | null | undefined>,
	}
	export function CreatePowerManagementEventFormGroup() {
		return new FormGroup<PowerManagementEventFormProperties>({
			batteryLevel: new FormControl<number | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<PowerManagementEventEventType | null | undefined>(undefined),
		});

	}

	export enum PowerManagementEventEventType { POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED = 0, BATTERY_LEVEL_COLLECTED = 1, POWER_CONNECTED = 2, POWER_DISCONNECTED = 3, BATTERY_LOW = 4, BATTERY_OKAY = 5, BOOT_COMPLETED = 6, SHUTDOWN = 7 }


	/** The security posture of the device, as determined by the current device state and the policies applied. */
	export interface SecurityPosture {

		/** Device's security posture value. */
		devicePosture?: SecurityPostureDevicePosture | null;

		/** Additional details regarding the security posture of the device. */
		postureDetails?: Array<PostureDetail>;
	}

	/** The security posture of the device, as determined by the current device state and the policies applied. */
	export interface SecurityPostureFormProperties {

		/** Device's security posture value. */
		devicePosture: FormControl<SecurityPostureDevicePosture | null | undefined>,
	}
	export function CreateSecurityPostureFormGroup() {
		return new FormGroup<SecurityPostureFormProperties>({
			devicePosture: new FormControl<SecurityPostureDevicePosture | null | undefined>(undefined),
		});

	}

	export enum SecurityPostureDevicePosture { POSTURE_UNSPECIFIED = 0, SECURE = 1, AT_RISK = 2, POTENTIALLY_COMPROMISED = 3 }


	/** Additional details regarding the security posture of the device. */
	export interface PostureDetail {

		/** Corresponding admin-facing advice to mitigate this security risk and improve the security posture of the device. */
		advice?: Array<UserFacingMessage>;

		/** A specific security risk that negatively affects the security posture of the device. */
		securityRisk?: PostureDetailSecurityRisk | null;
	}

	/** Additional details regarding the security posture of the device. */
	export interface PostureDetailFormProperties {

		/** A specific security risk that negatively affects the security posture of the device. */
		securityRisk: FormControl<PostureDetailSecurityRisk | null | undefined>,
	}
	export function CreatePostureDetailFormGroup() {
		return new FormGroup<PostureDetailFormProperties>({
			securityRisk: new FormControl<PostureDetailSecurityRisk | null | undefined>(undefined),
		});

	}

	export enum PostureDetailSecurityRisk { SECURITY_RISK_UNSPECIFIED = 0, UNKNOWN_OS = 1, COMPROMISED_OS = 2 }


	/** Information about device software. */
	export interface SoftwareInfo {

		/** Android build ID string meant for displaying to the user. For example, shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys. */
		androidBuildNumber?: string | null;

		/** Build time. */
		androidBuildTime?: string | null;

		/** The Android Device Policy app version code. */
		androidDevicePolicyVersionCode?: number | null;

		/** The Android Device Policy app version as displayed to the user. */
		androidDevicePolicyVersionName?: string | null;

		/** The user-visible Android version string. For example, 6.0.1. */
		androidVersion?: string | null;

		/** The system bootloader version number, e.g. 0.6.7. */
		bootloaderVersion?: string | null;

		/** SHA-256 hash of android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the system package, which can be used to verify that the system build hasn't been modified. */
		deviceBuildSignature?: string | null;

		/** Kernel version, for example, 2.6.32.9-g103d848. */
		deviceKernelVersion?: string | null;

		/** An IETF BCP 47 language code for the primary locale on the device. */
		primaryLanguageCode?: string | null;

		/** Security patch level, e.g. 2016-05-01. */
		securityPatchLevel?: string | null;
	}

	/** Information about device software. */
	export interface SoftwareInfoFormProperties {

		/** Android build ID string meant for displaying to the user. For example, shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys. */
		androidBuildNumber: FormControl<string | null | undefined>,

		/** Build time. */
		androidBuildTime: FormControl<string | null | undefined>,

		/** The Android Device Policy app version code. */
		androidDevicePolicyVersionCode: FormControl<number | null | undefined>,

		/** The Android Device Policy app version as displayed to the user. */
		androidDevicePolicyVersionName: FormControl<string | null | undefined>,

		/** The user-visible Android version string. For example, 6.0.1. */
		androidVersion: FormControl<string | null | undefined>,

		/** The system bootloader version number, e.g. 0.6.7. */
		bootloaderVersion: FormControl<string | null | undefined>,

		/** SHA-256 hash of android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the system package, which can be used to verify that the system build hasn't been modified. */
		deviceBuildSignature: FormControl<string | null | undefined>,

		/** Kernel version, for example, 2.6.32.9-g103d848. */
		deviceKernelVersion: FormControl<string | null | undefined>,

		/** An IETF BCP 47 language code for the primary locale on the device. */
		primaryLanguageCode: FormControl<string | null | undefined>,

		/** Security patch level, e.g. 2016-05-01. */
		securityPatchLevel: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareInfoFormGroup() {
		return new FormGroup<SoftwareInfoFormProperties>({
			androidBuildNumber: new FormControl<string | null | undefined>(undefined),
			androidBuildTime: new FormControl<string | null | undefined>(undefined),
			androidDevicePolicyVersionCode: new FormControl<number | null | undefined>(undefined),
			androidDevicePolicyVersionName: new FormControl<string | null | undefined>(undefined),
			androidVersion: new FormControl<string | null | undefined>(undefined),
			bootloaderVersion: new FormControl<string | null | undefined>(undefined),
			deviceBuildSignature: new FormControl<string | null | undefined>(undefined),
			deviceKernelVersion: new FormControl<string | null | undefined>(undefined),
			primaryLanguageCode: new FormControl<string | null | undefined>(undefined),
			securityPatchLevel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A user belonging to an enterprise. */
	export interface User {

		/** A unique identifier you create for this user, such as user342 or asset#44418. This field must be set when the user is created and can't be updated. This field must not contain personally identifiable information (PII). This identifier must be 1024 characters or less; otherwise, the update policy request will fail. */
		accountIdentifier?: string | null;
	}

	/** A user belonging to an enterprise. */
	export interface UserFormProperties {

		/** A unique identifier you create for this user, such as user342 or asset#44418. This field must be set when the user is created and can't be updated. This field must not contain personally identifiable information (PII). This identifier must be 1024 characters or less; otherwise, the update policy request will fail. */
		accountIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			accountIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:
	 * service Foo {
	 *   rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 * }
	 * The JSON representation for Empty is empty JSON object {}.
	 */
	export interface Empty {
	}

	/**
	 * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:
	 * service Foo {
	 *   rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 * }
	 * The JSON representation for Empty is empty JSON object {}.
	 */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** An enrollment token. */
	export interface EnrollmentToken {

		/** Optional, arbitrary data associated with the enrollment token. This could contain, for example, the ID of an org unit the device is assigned to after enrollment. After a device enrolls with the token, this data will be exposed in the enrollment_token_data field of the Device resource. The data must be 1024 characters or less; otherwise, the creation request will fail. */
		additionalData?: string | null;

		/** The length of time the enrollment token is valid, ranging from 1 minute to 30 days. If not specified, the default duration is 1 hour. */
		duration?: string | null;

		/** The expiration time of the token. This is a read-only field generated by the server. */
		expirationTimestamp?: string | null;

		/** The name of the enrollment token, which is generated by the server during creation, in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}. */
		name?: string | null;

		/** Whether the enrollment token is for one time use only. If the flag is set to true, only one device can use it for registration. */
		oneTimeOnly?: boolean | null;

		/** The name of the policy initially applied to the enrolled device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device’s user is applied. If user_name is also not specified, enterprises/{enterpriseId}/policies/default is applied by default. When updating this field, you can specify only the policyId as long as the policyId doesn’t contain any slashes. The rest of the policy name will be inferred. */
		policyName?: string | null;

		/** A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON. */
		qrCode?: string | null;

		/** A user belonging to an enterprise. */
		user?: User;

		/** The token value that's passed to the device and authorizes the device to enroll. This is a read-only field generated by the server. */
		value?: string | null;
	}

	/** An enrollment token. */
	export interface EnrollmentTokenFormProperties {

		/** Optional, arbitrary data associated with the enrollment token. This could contain, for example, the ID of an org unit the device is assigned to after enrollment. After a device enrolls with the token, this data will be exposed in the enrollment_token_data field of the Device resource. The data must be 1024 characters or less; otherwise, the creation request will fail. */
		additionalData: FormControl<string | null | undefined>,

		/** The length of time the enrollment token is valid, ranging from 1 minute to 30 days. If not specified, the default duration is 1 hour. */
		duration: FormControl<string | null | undefined>,

		/** The expiration time of the token. This is a read-only field generated by the server. */
		expirationTimestamp: FormControl<string | null | undefined>,

		/** The name of the enrollment token, which is generated by the server during creation, in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}. */
		name: FormControl<string | null | undefined>,

		/** Whether the enrollment token is for one time use only. If the flag is set to true, only one device can use it for registration. */
		oneTimeOnly: FormControl<boolean | null | undefined>,

		/** The name of the policy initially applied to the enrolled device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device’s user is applied. If user_name is also not specified, enterprises/{enterpriseId}/policies/default is applied by default. When updating this field, you can specify only the policyId as long as the policyId doesn’t contain any slashes. The rest of the policy name will be inferred. */
		policyName: FormControl<string | null | undefined>,

		/** A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON. */
		qrCode: FormControl<string | null | undefined>,

		/** The token value that's passed to the device and authorizes the device to enroll. This is a read-only field generated by the server. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnrollmentTokenFormGroup() {
		return new FormGroup<EnrollmentTokenFormProperties>({
			additionalData: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			expirationTimestamp: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			oneTimeOnly: new FormControl<boolean | null | undefined>(undefined),
			policyName: new FormControl<string | null | undefined>(undefined),
			qrCode: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration applied to an enterprise. */
	export interface Enterprise {

		/** Deprecated and unused. */
		appAutoApprovalEnabled?: boolean | null;

		/** The types of Google Pub/Sub notifications enabled for the enterprise. */
		enabledNotificationTypes?: Array<string>;

		/** The name of the enterprise displayed to users. */
		enterpriseDisplayName?: string | null;

		/** Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash. */
		logo?: ExternalData;

		/** The name of the enterprise which is generated by the server during creation, in the form enterprises/{enterpriseId}. */
		name?: string | null;

		/** A color in RGB format that indicates the predominant color to display in the device management app UI. The color components are stored as follows: (red << 16) | (green << 8) | blue, where the value of each component is between 0 and 255, inclusive. */
		primaryColor?: number | null;

		/** The topic that Cloud Pub/Sub notifications are published to, in the form projects/{project}/topics/{topic}. This field is only required if Pub/Sub notifications are enabled. */
		pubsubTopic?: string | null;

		/** Sign-in details of the enterprise. */
		signinDetails?: Array<SigninDetail>;

		/** Terms and conditions that must be accepted when provisioning a device for this enterprise. A page of terms is generated for each value in this list. */
		termsAndConditions?: Array<TermsAndConditions>;
	}

	/** The configuration applied to an enterprise. */
	export interface EnterpriseFormProperties {

		/** Deprecated and unused. */
		appAutoApprovalEnabled: FormControl<boolean | null | undefined>,

		/** The name of the enterprise displayed to users. */
		enterpriseDisplayName: FormControl<string | null | undefined>,

		/** The name of the enterprise which is generated by the server during creation, in the form enterprises/{enterpriseId}. */
		name: FormControl<string | null | undefined>,

		/** A color in RGB format that indicates the predominant color to display in the device management app UI. The color components are stored as follows: (red << 16) | (green << 8) | blue, where the value of each component is between 0 and 255, inclusive. */
		primaryColor: FormControl<number | null | undefined>,

		/** The topic that Cloud Pub/Sub notifications are published to, in the form projects/{project}/topics/{topic}. This field is only required if Pub/Sub notifications are enabled. */
		pubsubTopic: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseFormGroup() {
		return new FormGroup<EnterpriseFormProperties>({
			appAutoApprovalEnabled: new FormControl<boolean | null | undefined>(undefined),
			enterpriseDisplayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primaryColor: new FormControl<number | null | undefined>(undefined),
			pubsubTopic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash. */
	export interface ExternalData {

		/** The base-64 encoded SHA-256 hash of the content hosted at url. If the content doesn't match this hash, Android Device Policy won't use the data. */
		sha256Hash?: string | null;

		/** The absolute URL to the data, which must use either the http or https scheme. Android Device Policy doesn't provide any credentials in the GET request, so the URL must be publicly accessible. Including a long, random component in the URL may be used to prevent attackers from discovering the URL. */
		url?: string | null;
	}

	/** Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash. */
	export interface ExternalDataFormProperties {

		/** The base-64 encoded SHA-256 hash of the content hosted at url. If the content doesn't match this hash, Android Device Policy won't use the data. */
		sha256Hash: FormControl<string | null | undefined>,

		/** The absolute URL to the data, which must use either the http or https scheme. Android Device Policy doesn't provide any credentials in the GET request, so the URL must be publicly accessible. Including a long, random component in the URL may be used to prevent attackers from discovering the URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateExternalDataFormGroup() {
		return new FormGroup<ExternalDataFormProperties>({
			sha256Hash: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource containing sign in details for an enterprise. */
	export interface SigninDetail {

		/** A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON. This is a read-only field generated by the server. */
		qrCode?: string | null;

		/** An enterprise wide enrollment token used to trigger custom sign-in flow. This is a read-only field generated by the server. */
		signinEnrollmentToken?: string | null;

		/** Sign-in URL for authentication when device is provisioned with a sign-in enrollment token. The sign-in endpoint should finish authentication flow with a URL in the form of https://enterprise.google.com/android/enroll?et=<token> for a successful login, or https://enterprise.google.com/android/enroll/invalid for a failed login. */
		signinUrl?: string | null;
	}

	/** A resource containing sign in details for an enterprise. */
	export interface SigninDetailFormProperties {

		/** A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON. This is a read-only field generated by the server. */
		qrCode: FormControl<string | null | undefined>,

		/** An enterprise wide enrollment token used to trigger custom sign-in flow. This is a read-only field generated by the server. */
		signinEnrollmentToken: FormControl<string | null | undefined>,

		/** Sign-in URL for authentication when device is provisioned with a sign-in enrollment token. The sign-in endpoint should finish authentication flow with a URL in the form of https://enterprise.google.com/android/enroll?et=<token> for a successful login, or https://enterprise.google.com/android/enroll/invalid for a failed login. */
		signinUrl: FormControl<string | null | undefined>,
	}
	export function CreateSigninDetailFormGroup() {
		return new FormGroup<SigninDetailFormProperties>({
			qrCode: new FormControl<string | null | undefined>(undefined),
			signinEnrollmentToken: new FormControl<string | null | undefined>(undefined),
			signinUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A terms and conditions page to be accepted during provisioning. */
	export interface TermsAndConditions {

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		content?: UserFacingMessage;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		header?: UserFacingMessage;
	}

	/** A terms and conditions page to be accepted during provisioning. */
	export interface TermsAndConditionsFormProperties {
	}
	export function CreateTermsAndConditionsFormGroup() {
		return new FormGroup<TermsAndConditionsFormProperties>({
		});

	}


	/** A system freeze period. When a device’s clock is within the freeze period, all incoming system updates (including security patches) are blocked and won’t be installed. When a device is outside the freeze period, normal update behavior applies. Leap years are ignored in freeze period calculations, in particular: * If Feb. 29th is set as the start or end date of a freeze period, the freeze period will start or end on Feb. 28th instead. * When a device’s system clock reads Feb. 29th, it’s treated as Feb. 28th. * When calculating the number of days in a freeze period or the time between two freeze periods, Feb. 29th is ignored and not counted as a day. */
	export interface FreezePeriod {

		/**
		 * Represents a whole or partial calendar date, e.g. a birthday. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the Proleptic Gregorian Calendar. This can represent:
		 * A full date, with non-zero year, month and day values
		 * A month and day value, with a zero year, e.g. an anniversary
		 * A year on its own, with zero month and day values
		 * A year and month value, with a zero day, e.g. a credit card expiration dateRelated types are google.type.TimeOfDay and google.protobuf.Timestamp.
		 */
		endDate?: Date;

		/**
		 * Represents a whole or partial calendar date, e.g. a birthday. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the Proleptic Gregorian Calendar. This can represent:
		 * A full date, with non-zero year, month and day values
		 * A month and day value, with a zero year, e.g. an anniversary
		 * A year on its own, with zero month and day values
		 * A year and month value, with a zero day, e.g. a credit card expiration dateRelated types are google.type.TimeOfDay and google.protobuf.Timestamp.
		 */
		startDate?: Date;
	}

	/** A system freeze period. When a device’s clock is within the freeze period, all incoming system updates (including security patches) are blocked and won’t be installed. When a device is outside the freeze period, normal update behavior applies. Leap years are ignored in freeze period calculations, in particular: * If Feb. 29th is set as the start or end date of a freeze period, the freeze period will start or end on Feb. 28th instead. * When a device’s system clock reads Feb. 29th, it’s treated as Feb. 28th. * When calculating the number of days in a freeze period or the time between two freeze periods, Feb. 29th is ignored and not counted as a day. */
	export interface FreezePeriodFormProperties {
	}
	export function CreateFreezePeriodFormGroup() {
		return new FormGroup<FreezePeriodFormProperties>({
		});

	}


	/** Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK. */
	export interface KioskCustomization {

		/** Specifies whether the Settings app is allowed in kiosk mode. */
		deviceSettings?: KioskCustomizationDeviceSettings | null;

		/** Sets the behavior of a device in kiosk mode when a user presses and holds (long-presses) the Power button. */
		powerButtonActions?: KioskCustomizationPowerButtonActions | null;

		/** Specifies whether system info and notifications are disabled in kiosk mode. */
		statusBar?: KioskCustomizationStatusBar | null;

		/** Specifies whether system error dialogs for crashed or unresponsive apps are blocked in kiosk mode. When blocked, the system will force-stop the app as if the user chooses the "close app" option on the UI. */
		systemErrorWarnings?: KioskCustomizationSystemErrorWarnings | null;

		/** Specifies which navigation features are enabled (e.g. Home, Overview buttons) in kiosk mode. */
		systemNavigation?: KioskCustomizationSystemNavigation | null;
	}

	/** Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK. */
	export interface KioskCustomizationFormProperties {

		/** Specifies whether the Settings app is allowed in kiosk mode. */
		deviceSettings: FormControl<KioskCustomizationDeviceSettings | null | undefined>,

		/** Sets the behavior of a device in kiosk mode when a user presses and holds (long-presses) the Power button. */
		powerButtonActions: FormControl<KioskCustomizationPowerButtonActions | null | undefined>,

		/** Specifies whether system info and notifications are disabled in kiosk mode. */
		statusBar: FormControl<KioskCustomizationStatusBar | null | undefined>,

		/** Specifies whether system error dialogs for crashed or unresponsive apps are blocked in kiosk mode. When blocked, the system will force-stop the app as if the user chooses the "close app" option on the UI. */
		systemErrorWarnings: FormControl<KioskCustomizationSystemErrorWarnings | null | undefined>,

		/** Specifies which navigation features are enabled (e.g. Home, Overview buttons) in kiosk mode. */
		systemNavigation: FormControl<KioskCustomizationSystemNavigation | null | undefined>,
	}
	export function CreateKioskCustomizationFormGroup() {
		return new FormGroup<KioskCustomizationFormProperties>({
			deviceSettings: new FormControl<KioskCustomizationDeviceSettings | null | undefined>(undefined),
			powerButtonActions: new FormControl<KioskCustomizationPowerButtonActions | null | undefined>(undefined),
			statusBar: new FormControl<KioskCustomizationStatusBar | null | undefined>(undefined),
			systemErrorWarnings: new FormControl<KioskCustomizationSystemErrorWarnings | null | undefined>(undefined),
			systemNavigation: new FormControl<KioskCustomizationSystemNavigation | null | undefined>(undefined),
		});

	}

	export enum KioskCustomizationDeviceSettings { DEVICE_SETTINGS_UNSPECIFIED = 0, SETTINGS_ACCESS_ALLOWED = 1, SETTINGS_ACCESS_BLOCKED = 2 }

	export enum KioskCustomizationPowerButtonActions { POWER_BUTTON_ACTIONS_UNSPECIFIED = 0, POWER_BUTTON_AVAILABLE = 1, POWER_BUTTON_BLOCKED = 2 }

	export enum KioskCustomizationStatusBar { STATUS_BAR_UNSPECIFIED = 0, NOTIFICATIONS_AND_SYSTEM_INFO_ENABLED = 1, NOTIFICATIONS_AND_SYSTEM_INFO_DISABLED = 2, SYSTEM_INFO_ONLY = 3 }

	export enum KioskCustomizationSystemErrorWarnings { SYSTEM_ERROR_WARNINGS_UNSPECIFIED = 0, ERROR_AND_WARNINGS_ENABLED = 1, ERROR_AND_WARNINGS_MUTED = 2 }

	export enum KioskCustomizationSystemNavigation { SYSTEM_NAVIGATION_UNSPECIFIED = 0, NAVIGATION_ENABLED = 1, NAVIGATION_DISABLED = 2, HOME_BUTTON_ONLY = 3 }


	/** An action to launch an app. */
	export interface LaunchAppAction {

		/** Package name of app to be launched */
		packageName?: string | null;
	}

	/** An action to launch an app. */
	export interface LaunchAppActionFormProperties {

		/** Package name of app to be launched */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateLaunchAppActionFormGroup() {
		return new FormGroup<LaunchAppActionFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a request to list devices for a given enterprise. */
	export interface ListDevicesResponse {

		/** The list of devices. */
		devices?: Array<Device>;

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken?: string | null;
	}

	/** Response to a request to list devices for a given enterprise. */
	export interface ListDevicesResponseFormProperties {

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesResponseFormGroup() {
		return new FormGroup<ListDevicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done?: boolean | null;

		/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name?: string | null;

		/** The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name: FormControl<string | null | undefined>,

		/** The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a request to list policies for a given enterprise. */
	export interface ListPoliciesResponse {

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken?: string | null;

		/** The list of policies. */
		policies?: Array<Policy>;
	}

	/** Response to a request to list policies for a given enterprise. */
	export interface ListPoliciesResponseFormProperties {

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPoliciesResponseFormGroup() {
		return new FormGroup<ListPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A policy resource represents a group of settings that govern the behavior of a managed device and the apps installed on it. */
	export interface Policy {

		/** Account types that can't be managed by the user. */
		accountTypesWithManagementDisabled?: Array<string>;

		/** Whether adding new users and profiles is disabled. */
		addUserDisabled?: boolean | null;

		/** Whether adjusting the master volume is disabled. */
		adjustVolumeDisabled?: boolean | null;

		/** Security policies set to the most secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values. */
		advancedSecurityOverrides?: AdvancedSecurityOverrides;

		/** Configuration for an always-on VPN connection. */
		alwaysOnVpnPackage?: AlwaysOnVpnPackage;

		/** The app tracks for Android Device Policy the device can access. The device receives the latest version among all accessible tracks. If no tracks are specified, then the device only uses the production track. */
		androidDevicePolicyTracks?: Array<string>;

		/** The app auto update policy, which controls when automatic app updates can be applied. */
		appAutoUpdatePolicy?: PolicyAppAutoUpdatePolicy | null;

		/** Policy applied to apps. */
		applications?: Array<ApplicationPolicy>;

		/** Whether auto time is required, which prevents the user from manually setting the date and time. */
		autoTimeRequired?: boolean | null;

		/** Whether applications other than the ones configured in applications are blocked from being installed. When set, applications that were installed under a previous policy but no longer appear in the policy are automatically uninstalled. */
		blockApplicationsEnabled?: boolean | null;

		/** Whether configuring bluetooth is disabled. */
		bluetoothConfigDisabled?: boolean | null;

		/** Whether bluetooth contact sharing is disabled. */
		bluetoothContactSharingDisabled?: boolean | null;

		/** Whether bluetooth is disabled. Prefer this setting over bluetooth_config_disabled because bluetooth_config_disabled can be bypassed by the user. */
		bluetoothDisabled?: boolean | null;

		/** Whether all cameras on the device are disabled. */
		cameraDisabled?: boolean | null;

		/** Whether configuring cell broadcast is disabled. */
		cellBroadcastsConfigDisabled?: boolean | null;

		/** Rules for automatically choosing a private key and certificate to authenticate the device to a server. The rules are ordered by increasing precedence, so if an outgoing request matches more than one rule, the last rule defines which private key to use. */
		choosePrivateKeyRules?: Array<ChoosePrivateKeyRule>;

		/** Rules declaring which mitigating actions to take when a device is not compliant with its policy. When the conditions for multiple rules are satisfied, all of the mitigating actions for the rules are taken. There is a maximum limit of 100 rules. Use policy enforcement rules instead. */
		complianceRules?: Array<ComplianceRule>;

		/** Whether creating windows besides app windows is disabled. */
		createWindowsDisabled?: boolean | null;

		/** Whether configuring user credentials is disabled. */
		credentialsConfigDisabled?: boolean | null;

		/** Whether roaming data services are disabled. */
		dataRoamingDisabled?: boolean | null;

		/** Whether the user is allowed to enable debugging features. */
		debuggingFeaturesAllowed?: boolean | null;

		/** The default permission policy for runtime permission requests. */
		defaultPermissionPolicy?: ApplicationPolicyDefaultPermissionPolicy | null;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		deviceOwnerLockScreenInfo?: UserFacingMessage;

		/** Whether encryption is enabled */
		encryptionPolicy?: PolicyEncryptionPolicy | null;

		/** Whether app verification is force-enabled. */
		ensureVerifyAppsEnabled?: boolean | null;

		/** Whether factory resetting from settings is disabled. */
		factoryResetDisabled?: boolean | null;

		/** Email addresses of device administrators for factory reset protection. When the device is factory reset, it will require one of these admins to log in with the Google account email and password to unlock the device. If no admins are specified, the device won't provide factory reset protection. */
		frpAdminEmails?: Array<string>;

		/** Whether the user is allowed to have fun. Controls whether the Easter egg game in Settings is disabled. */
		funDisabled?: boolean | null;

		/** Whether user installation of apps is disabled. */
		installAppsDisabled?: boolean | null;

		/** Whether the user is allowed to enable the "Unknown Sources" setting, which allows installation of apps from unknown sources. */
		installUnknownSourcesAllowed?: boolean | null;

		/** Whether the keyguard is disabled. */
		keyguardDisabled?: boolean | null;

		/** Disabled keyguard customizations, such as widgets. */
		keyguardDisabledFeatures?: Array<string>;

		/** Whether the kiosk custom launcher is enabled. This replaces the home screen with a launcher that locks down the device to the apps installed via the applications setting. Apps appear on a single page in alphabetical order. Use kioskCustomization to further configure the kiosk device behavior. */
		kioskCustomLauncherEnabled?: boolean | null;

		/** Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK. */
		kioskCustomization?: KioskCustomization;

		/** The degree of location detection enabled. The user may change the value unless the user is otherwise blocked from accessing device settings. */
		locationMode?: PolicyLocationMode | null;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		longSupportMessage?: UserFacingMessage;

		/** Maximum time in milliseconds for user activity until the device locks. A value of 0 means there is no restriction. */
		maximumTimeToLock?: string | null;

		/** The minimum allowed Android API level. */
		minimumApiLevel?: number | null;

		/** Whether configuring mobile networks is disabled. */
		mobileNetworksConfigDisabled?: boolean | null;

		/** Whether adding or removing accounts is disabled. */
		modifyAccountsDisabled?: boolean | null;

		/** Whether the user mounting physical external media is disabled. */
		mountPhysicalMediaDisabled?: boolean | null;

		/** The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}. */
		name?: string | null;

		/** Whether the network escape hatch is enabled. If a network connection can't be made at boot time, the escape hatch prompts the user to temporarily connect to a network in order to refresh the device policy. After applying policy, the temporary network will be forgotten and the device will continue booting. This prevents being unable to connect to a network if there is no suitable network in the last policy and the device boots into an app in lock task mode, or the user is otherwise unable to reach device settings. */
		networkEscapeHatchEnabled?: boolean | null;

		/** Whether resetting network settings is disabled. */
		networkResetDisabled?: boolean | null;

		/** Network configuration for the device. See configure networks for more information. */
		openNetworkConfiguration?: {[id: string]: any };

		/** Whether using NFC to beam data from apps is disabled. */
		outgoingBeamDisabled?: boolean | null;

		/** Whether outgoing calls are disabled. */
		outgoingCallsDisabled?: boolean | null;

		/** Password requirement policies. Different policies can be set for work profile or fully managed devices by setting the password_scope field in the policy. */
		passwordPolicies?: Array<PasswordRequirements>;

		/** Requirements for the password used to unlock a device. */
		passwordRequirements?: PasswordRequirements;

		/** Explicit permission or group grants or denials for all apps. These values override the default_permission_policy. */
		permissionGrants?: Array<PermissionGrant>;

		/** A list of package names. */
		permittedAccessibilityServices?: PackageNameList;

		/** A list of package names. */
		permittedInputMethods?: PackageNameList;

		/** Default intent handler activities. */
		persistentPreferredActivities?: Array<PersistentPreferredActivity>;

		/** This mode controls which apps are available to the user in the Play Store and the behavior on the device when apps are removed from the policy. */
		playStoreMode?: PolicyPlayStoreMode | null;

		/** Rules that define the behavior when a particular policy can not be applied on device */
		policyEnforcementRules?: Array<PolicyEnforcementRule>;

		/** Allows showing UI on a device for a user to choose a private key alias if there are no matching rules in ChoosePrivateKeyRules. For devices below Android P, setting this may leave enterprise keys vulnerable. */
		privateKeySelectionEnabled?: boolean | null;

		/** Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field. */
		recommendedGlobalProxy?: ProxyInfo;

		/** Whether removing other users is disabled. */
		removeUserDisabled?: boolean | null;

		/** Whether rebooting the device into safe boot is disabled. */
		safeBootDisabled?: boolean | null;

		/** Whether screen capture is disabled. */
		screenCaptureDisabled?: boolean | null;

		/** Whether changing the user icon is disabled. */
		setUserIconDisabled?: boolean | null;

		/** Whether changing the wallpaper is disabled. */
		setWallpaperDisabled?: boolean | null;

		/** Actions to take during the setup process. */
		setupActions?: Array<SetupAction>;

		/** Whether location sharing is disabled. */
		shareLocationDisabled?: boolean | null;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		shortSupportMessage?: UserFacingMessage;

		/** Flag to skip hints on the first use. Enterprise admin can enable the system recommendation for apps to skip their user tutorial and other introductory hints on first start-up. */
		skipFirstUseHintsEnabled?: boolean | null;

		/** Whether sending and receiving SMS messages is disabled. */
		smsDisabled?: boolean | null;

		/** Whether the status bar is disabled. This disables notifications, quick settings, and other screen overlays that allow escape from full-screen mode. DEPRECATED. To disable the status bar on a kiosk device, use InstallType KIOSK or kioskCustomLauncherEnabled. */
		statusBarDisabled?: boolean | null;

		/** Settings controlling the behavior of status reports. */
		statusReportingSettings?: StatusReportingSettings;

		/** The battery plugged in modes for which the device stays on. When using this setting, it is recommended to clear maximum_time_to_lock so that the device doesn't lock itself while it stays on. */
		stayOnPluggedModes?: Array<string>;

		/** Configuration for managing system updates */
		systemUpdate?: SystemUpdate;

		/** Whether configuring tethering and portable hotspots is disabled. */
		tetheringConfigDisabled?: boolean | null;

		/** Whether user uninstallation of applications is disabled. */
		uninstallAppsDisabled?: boolean | null;

		/** Whether the microphone is muted and adjusting microphone volume is disabled. */
		unmuteMicrophoneDisabled?: boolean | null;

		/** Whether transferring files over USB is disabled. */
		usbFileTransferDisabled?: boolean | null;

		/** Whether USB storage is enabled. Deprecated. */
		usbMassStorageEnabled?: boolean | null;

		/** The version of the policy. This is a read-only field. The version is incremented each time the policy is updated. */
		version?: string | null;

		/** Whether configuring VPN is disabled. */
		vpnConfigDisabled?: boolean | null;

		/** Whether configuring Wi-Fi access points is disabled. */
		wifiConfigDisabled?: boolean | null;

		/** DEPRECATED - Use wifi_config_disabled. */
		wifiConfigsLockdownEnabled?: boolean | null;
	}

	/** A policy resource represents a group of settings that govern the behavior of a managed device and the apps installed on it. */
	export interface PolicyFormProperties {

		/** Whether adding new users and profiles is disabled. */
		addUserDisabled: FormControl<boolean | null | undefined>,

		/** Whether adjusting the master volume is disabled. */
		adjustVolumeDisabled: FormControl<boolean | null | undefined>,

		/** The app auto update policy, which controls when automatic app updates can be applied. */
		appAutoUpdatePolicy: FormControl<PolicyAppAutoUpdatePolicy | null | undefined>,

		/** Whether auto time is required, which prevents the user from manually setting the date and time. */
		autoTimeRequired: FormControl<boolean | null | undefined>,

		/** Whether applications other than the ones configured in applications are blocked from being installed. When set, applications that were installed under a previous policy but no longer appear in the policy are automatically uninstalled. */
		blockApplicationsEnabled: FormControl<boolean | null | undefined>,

		/** Whether configuring bluetooth is disabled. */
		bluetoothConfigDisabled: FormControl<boolean | null | undefined>,

		/** Whether bluetooth contact sharing is disabled. */
		bluetoothContactSharingDisabled: FormControl<boolean | null | undefined>,

		/** Whether bluetooth is disabled. Prefer this setting over bluetooth_config_disabled because bluetooth_config_disabled can be bypassed by the user. */
		bluetoothDisabled: FormControl<boolean | null | undefined>,

		/** Whether all cameras on the device are disabled. */
		cameraDisabled: FormControl<boolean | null | undefined>,

		/** Whether configuring cell broadcast is disabled. */
		cellBroadcastsConfigDisabled: FormControl<boolean | null | undefined>,

		/** Whether creating windows besides app windows is disabled. */
		createWindowsDisabled: FormControl<boolean | null | undefined>,

		/** Whether configuring user credentials is disabled. */
		credentialsConfigDisabled: FormControl<boolean | null | undefined>,

		/** Whether roaming data services are disabled. */
		dataRoamingDisabled: FormControl<boolean | null | undefined>,

		/** Whether the user is allowed to enable debugging features. */
		debuggingFeaturesAllowed: FormControl<boolean | null | undefined>,

		/** The default permission policy for runtime permission requests. */
		defaultPermissionPolicy: FormControl<ApplicationPolicyDefaultPermissionPolicy | null | undefined>,

		/** Whether encryption is enabled */
		encryptionPolicy: FormControl<PolicyEncryptionPolicy | null | undefined>,

		/** Whether app verification is force-enabled. */
		ensureVerifyAppsEnabled: FormControl<boolean | null | undefined>,

		/** Whether factory resetting from settings is disabled. */
		factoryResetDisabled: FormControl<boolean | null | undefined>,

		/** Whether the user is allowed to have fun. Controls whether the Easter egg game in Settings is disabled. */
		funDisabled: FormControl<boolean | null | undefined>,

		/** Whether user installation of apps is disabled. */
		installAppsDisabled: FormControl<boolean | null | undefined>,

		/** Whether the user is allowed to enable the "Unknown Sources" setting, which allows installation of apps from unknown sources. */
		installUnknownSourcesAllowed: FormControl<boolean | null | undefined>,

		/** Whether the keyguard is disabled. */
		keyguardDisabled: FormControl<boolean | null | undefined>,

		/** Whether the kiosk custom launcher is enabled. This replaces the home screen with a launcher that locks down the device to the apps installed via the applications setting. Apps appear on a single page in alphabetical order. Use kioskCustomization to further configure the kiosk device behavior. */
		kioskCustomLauncherEnabled: FormControl<boolean | null | undefined>,

		/** The degree of location detection enabled. The user may change the value unless the user is otherwise blocked from accessing device settings. */
		locationMode: FormControl<PolicyLocationMode | null | undefined>,

		/** Maximum time in milliseconds for user activity until the device locks. A value of 0 means there is no restriction. */
		maximumTimeToLock: FormControl<string | null | undefined>,

		/** The minimum allowed Android API level. */
		minimumApiLevel: FormControl<number | null | undefined>,

		/** Whether configuring mobile networks is disabled. */
		mobileNetworksConfigDisabled: FormControl<boolean | null | undefined>,

		/** Whether adding or removing accounts is disabled. */
		modifyAccountsDisabled: FormControl<boolean | null | undefined>,

		/** Whether the user mounting physical external media is disabled. */
		mountPhysicalMediaDisabled: FormControl<boolean | null | undefined>,

		/** The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}. */
		name: FormControl<string | null | undefined>,

		/** Whether the network escape hatch is enabled. If a network connection can't be made at boot time, the escape hatch prompts the user to temporarily connect to a network in order to refresh the device policy. After applying policy, the temporary network will be forgotten and the device will continue booting. This prevents being unable to connect to a network if there is no suitable network in the last policy and the device boots into an app in lock task mode, or the user is otherwise unable to reach device settings. */
		networkEscapeHatchEnabled: FormControl<boolean | null | undefined>,

		/** Whether resetting network settings is disabled. */
		networkResetDisabled: FormControl<boolean | null | undefined>,

		/** Network configuration for the device. See configure networks for more information. */
		openNetworkConfiguration: FormControl<{[id: string]: any } | null | undefined>,

		/** Whether using NFC to beam data from apps is disabled. */
		outgoingBeamDisabled: FormControl<boolean | null | undefined>,

		/** Whether outgoing calls are disabled. */
		outgoingCallsDisabled: FormControl<boolean | null | undefined>,

		/** This mode controls which apps are available to the user in the Play Store and the behavior on the device when apps are removed from the policy. */
		playStoreMode: FormControl<PolicyPlayStoreMode | null | undefined>,

		/** Allows showing UI on a device for a user to choose a private key alias if there are no matching rules in ChoosePrivateKeyRules. For devices below Android P, setting this may leave enterprise keys vulnerable. */
		privateKeySelectionEnabled: FormControl<boolean | null | undefined>,

		/** Whether removing other users is disabled. */
		removeUserDisabled: FormControl<boolean | null | undefined>,

		/** Whether rebooting the device into safe boot is disabled. */
		safeBootDisabled: FormControl<boolean | null | undefined>,

		/** Whether screen capture is disabled. */
		screenCaptureDisabled: FormControl<boolean | null | undefined>,

		/** Whether changing the user icon is disabled. */
		setUserIconDisabled: FormControl<boolean | null | undefined>,

		/** Whether changing the wallpaper is disabled. */
		setWallpaperDisabled: FormControl<boolean | null | undefined>,

		/** Whether location sharing is disabled. */
		shareLocationDisabled: FormControl<boolean | null | undefined>,

		/** Flag to skip hints on the first use. Enterprise admin can enable the system recommendation for apps to skip their user tutorial and other introductory hints on first start-up. */
		skipFirstUseHintsEnabled: FormControl<boolean | null | undefined>,

		/** Whether sending and receiving SMS messages is disabled. */
		smsDisabled: FormControl<boolean | null | undefined>,

		/** Whether the status bar is disabled. This disables notifications, quick settings, and other screen overlays that allow escape from full-screen mode. DEPRECATED. To disable the status bar on a kiosk device, use InstallType KIOSK or kioskCustomLauncherEnabled. */
		statusBarDisabled: FormControl<boolean | null | undefined>,

		/** Whether configuring tethering and portable hotspots is disabled. */
		tetheringConfigDisabled: FormControl<boolean | null | undefined>,

		/** Whether user uninstallation of applications is disabled. */
		uninstallAppsDisabled: FormControl<boolean | null | undefined>,

		/** Whether the microphone is muted and adjusting microphone volume is disabled. */
		unmuteMicrophoneDisabled: FormControl<boolean | null | undefined>,

		/** Whether transferring files over USB is disabled. */
		usbFileTransferDisabled: FormControl<boolean | null | undefined>,

		/** Whether USB storage is enabled. Deprecated. */
		usbMassStorageEnabled: FormControl<boolean | null | undefined>,

		/** The version of the policy. This is a read-only field. The version is incremented each time the policy is updated. */
		version: FormControl<string | null | undefined>,

		/** Whether configuring VPN is disabled. */
		vpnConfigDisabled: FormControl<boolean | null | undefined>,

		/** Whether configuring Wi-Fi access points is disabled. */
		wifiConfigDisabled: FormControl<boolean | null | undefined>,

		/** DEPRECATED - Use wifi_config_disabled. */
		wifiConfigsLockdownEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			addUserDisabled: new FormControl<boolean | null | undefined>(undefined),
			adjustVolumeDisabled: new FormControl<boolean | null | undefined>(undefined),
			appAutoUpdatePolicy: new FormControl<PolicyAppAutoUpdatePolicy | null | undefined>(undefined),
			autoTimeRequired: new FormControl<boolean | null | undefined>(undefined),
			blockApplicationsEnabled: new FormControl<boolean | null | undefined>(undefined),
			bluetoothConfigDisabled: new FormControl<boolean | null | undefined>(undefined),
			bluetoothContactSharingDisabled: new FormControl<boolean | null | undefined>(undefined),
			bluetoothDisabled: new FormControl<boolean | null | undefined>(undefined),
			cameraDisabled: new FormControl<boolean | null | undefined>(undefined),
			cellBroadcastsConfigDisabled: new FormControl<boolean | null | undefined>(undefined),
			createWindowsDisabled: new FormControl<boolean | null | undefined>(undefined),
			credentialsConfigDisabled: new FormControl<boolean | null | undefined>(undefined),
			dataRoamingDisabled: new FormControl<boolean | null | undefined>(undefined),
			debuggingFeaturesAllowed: new FormControl<boolean | null | undefined>(undefined),
			defaultPermissionPolicy: new FormControl<ApplicationPolicyDefaultPermissionPolicy | null | undefined>(undefined),
			encryptionPolicy: new FormControl<PolicyEncryptionPolicy | null | undefined>(undefined),
			ensureVerifyAppsEnabled: new FormControl<boolean | null | undefined>(undefined),
			factoryResetDisabled: new FormControl<boolean | null | undefined>(undefined),
			funDisabled: new FormControl<boolean | null | undefined>(undefined),
			installAppsDisabled: new FormControl<boolean | null | undefined>(undefined),
			installUnknownSourcesAllowed: new FormControl<boolean | null | undefined>(undefined),
			keyguardDisabled: new FormControl<boolean | null | undefined>(undefined),
			kioskCustomLauncherEnabled: new FormControl<boolean | null | undefined>(undefined),
			locationMode: new FormControl<PolicyLocationMode | null | undefined>(undefined),
			maximumTimeToLock: new FormControl<string | null | undefined>(undefined),
			minimumApiLevel: new FormControl<number | null | undefined>(undefined),
			mobileNetworksConfigDisabled: new FormControl<boolean | null | undefined>(undefined),
			modifyAccountsDisabled: new FormControl<boolean | null | undefined>(undefined),
			mountPhysicalMediaDisabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			networkEscapeHatchEnabled: new FormControl<boolean | null | undefined>(undefined),
			networkResetDisabled: new FormControl<boolean | null | undefined>(undefined),
			openNetworkConfiguration: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			outgoingBeamDisabled: new FormControl<boolean | null | undefined>(undefined),
			outgoingCallsDisabled: new FormControl<boolean | null | undefined>(undefined),
			playStoreMode: new FormControl<PolicyPlayStoreMode | null | undefined>(undefined),
			privateKeySelectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			removeUserDisabled: new FormControl<boolean | null | undefined>(undefined),
			safeBootDisabled: new FormControl<boolean | null | undefined>(undefined),
			screenCaptureDisabled: new FormControl<boolean | null | undefined>(undefined),
			setUserIconDisabled: new FormControl<boolean | null | undefined>(undefined),
			setWallpaperDisabled: new FormControl<boolean | null | undefined>(undefined),
			shareLocationDisabled: new FormControl<boolean | null | undefined>(undefined),
			skipFirstUseHintsEnabled: new FormControl<boolean | null | undefined>(undefined),
			smsDisabled: new FormControl<boolean | null | undefined>(undefined),
			statusBarDisabled: new FormControl<boolean | null | undefined>(undefined),
			tetheringConfigDisabled: new FormControl<boolean | null | undefined>(undefined),
			uninstallAppsDisabled: new FormControl<boolean | null | undefined>(undefined),
			unmuteMicrophoneDisabled: new FormControl<boolean | null | undefined>(undefined),
			usbFileTransferDisabled: new FormControl<boolean | null | undefined>(undefined),
			usbMassStorageEnabled: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			vpnConfigDisabled: new FormControl<boolean | null | undefined>(undefined),
			wifiConfigDisabled: new FormControl<boolean | null | undefined>(undefined),
			wifiConfigsLockdownEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PolicyAppAutoUpdatePolicy { APP_AUTO_UPDATE_POLICY_UNSPECIFIED = 0, CHOICE_TO_THE_USER = 1, NEVER = 2, WIFI_ONLY = 3, ALWAYS = 4 }

	export enum PolicyEncryptionPolicy { ENCRYPTION_POLICY_UNSPECIFIED = 0, ENABLED_WITHOUT_PASSWORD = 1, ENABLED_WITH_PASSWORD = 2 }

	export enum PolicyLocationMode { LOCATION_MODE_UNSPECIFIED = 0, HIGH_ACCURACY = 1, SENSORS_ONLY = 2, BATTERY_SAVING = 3, OFF = 4 }


	/** Requirements for the password used to unlock a device. */
	export interface PasswordRequirements {

		/** Number of incorrect device-unlock passwords that can be entered before a device is wiped. A value of 0 means there is no restriction. */
		maximumFailedPasswordsForWipe?: number | null;

		/** Password expiration timeout. */
		passwordExpirationTimeout?: string | null;

		/** The length of the password history. After setting this field, the user won't be able to enter a new password that is the same as any password in the history. A value of 0 means there is no restriction. */
		passwordHistoryLength?: number | null;

		/** The minimum allowed password length. A value of 0 means there is no restriction. Only enforced when password_quality is NUMERIC, NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, or COMPLEX. */
		passwordMinimumLength?: number | null;

		/** Minimum number of letters required in the password. Only enforced when password_quality is COMPLEX. */
		passwordMinimumLetters?: number | null;

		/** Minimum number of lower case letters required in the password. Only enforced when password_quality is COMPLEX. */
		passwordMinimumLowerCase?: number | null;

		/** Minimum number of non-letter characters (numerical digits or symbols) required in the password. Only enforced when password_quality is COMPLEX. */
		passwordMinimumNonLetter?: number | null;

		/** Minimum number of numerical digits required in the password. Only enforced when password_quality is COMPLEX. */
		passwordMinimumNumeric?: number | null;

		/** Minimum number of symbols required in the password. Only enforced when password_quality is COMPLEX. */
		passwordMinimumSymbols?: number | null;

		/** Minimum number of upper case letters required in the password. Only enforced when password_quality is COMPLEX. */
		passwordMinimumUpperCase?: number | null;

		/** The required password quality. */
		passwordQuality?: PasswordRequirementsPasswordQuality | null;

		/** The scope that the password requirement applies to. */
		passwordScope?: PasswordRequirementsPasswordScope | null;

		/** The length of time after a device or work profile is unlocked using a strong form of authentication (password, PIN, pattern) that it can be unlocked using any other authentication method (e.g. fingerprint, trust agents, face). After the specified time period elapses, only strong forms of authentication can be used to unlock the device or work profile. */
		requirePasswordUnlock?: PasswordRequirementsRequirePasswordUnlock | null;
	}

	/** Requirements for the password used to unlock a device. */
	export interface PasswordRequirementsFormProperties {

		/** Number of incorrect device-unlock passwords that can be entered before a device is wiped. A value of 0 means there is no restriction. */
		maximumFailedPasswordsForWipe: FormControl<number | null | undefined>,

		/** Password expiration timeout. */
		passwordExpirationTimeout: FormControl<string | null | undefined>,

		/** The length of the password history. After setting this field, the user won't be able to enter a new password that is the same as any password in the history. A value of 0 means there is no restriction. */
		passwordHistoryLength: FormControl<number | null | undefined>,

		/** The minimum allowed password length. A value of 0 means there is no restriction. Only enforced when password_quality is NUMERIC, NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, or COMPLEX. */
		passwordMinimumLength: FormControl<number | null | undefined>,

		/** Minimum number of letters required in the password. Only enforced when password_quality is COMPLEX. */
		passwordMinimumLetters: FormControl<number | null | undefined>,

		/** Minimum number of lower case letters required in the password. Only enforced when password_quality is COMPLEX. */
		passwordMinimumLowerCase: FormControl<number | null | undefined>,

		/** Minimum number of non-letter characters (numerical digits or symbols) required in the password. Only enforced when password_quality is COMPLEX. */
		passwordMinimumNonLetter: FormControl<number | null | undefined>,

		/** Minimum number of numerical digits required in the password. Only enforced when password_quality is COMPLEX. */
		passwordMinimumNumeric: FormControl<number | null | undefined>,

		/** Minimum number of symbols required in the password. Only enforced when password_quality is COMPLEX. */
		passwordMinimumSymbols: FormControl<number | null | undefined>,

		/** Minimum number of upper case letters required in the password. Only enforced when password_quality is COMPLEX. */
		passwordMinimumUpperCase: FormControl<number | null | undefined>,

		/** The required password quality. */
		passwordQuality: FormControl<PasswordRequirementsPasswordQuality | null | undefined>,

		/** The scope that the password requirement applies to. */
		passwordScope: FormControl<PasswordRequirementsPasswordScope | null | undefined>,

		/** The length of time after a device or work profile is unlocked using a strong form of authentication (password, PIN, pattern) that it can be unlocked using any other authentication method (e.g. fingerprint, trust agents, face). After the specified time period elapses, only strong forms of authentication can be used to unlock the device or work profile. */
		requirePasswordUnlock: FormControl<PasswordRequirementsRequirePasswordUnlock | null | undefined>,
	}
	export function CreatePasswordRequirementsFormGroup() {
		return new FormGroup<PasswordRequirementsFormProperties>({
			maximumFailedPasswordsForWipe: new FormControl<number | null | undefined>(undefined),
			passwordExpirationTimeout: new FormControl<string | null | undefined>(undefined),
			passwordHistoryLength: new FormControl<number | null | undefined>(undefined),
			passwordMinimumLength: new FormControl<number | null | undefined>(undefined),
			passwordMinimumLetters: new FormControl<number | null | undefined>(undefined),
			passwordMinimumLowerCase: new FormControl<number | null | undefined>(undefined),
			passwordMinimumNonLetter: new FormControl<number | null | undefined>(undefined),
			passwordMinimumNumeric: new FormControl<number | null | undefined>(undefined),
			passwordMinimumSymbols: new FormControl<number | null | undefined>(undefined),
			passwordMinimumUpperCase: new FormControl<number | null | undefined>(undefined),
			passwordQuality: new FormControl<PasswordRequirementsPasswordQuality | null | undefined>(undefined),
			passwordScope: new FormControl<PasswordRequirementsPasswordScope | null | undefined>(undefined),
			requirePasswordUnlock: new FormControl<PasswordRequirementsRequirePasswordUnlock | null | undefined>(undefined),
		});

	}

	export enum PasswordRequirementsPasswordQuality { PASSWORD_QUALITY_UNSPECIFIED = 0, BIOMETRIC_WEAK = 1, SOMETHING = 2, NUMERIC = 3, NUMERIC_COMPLEX = 4, ALPHABETIC = 5, ALPHANUMERIC = 6, COMPLEX = 7 }

	export enum PasswordRequirementsPasswordScope { SCOPE_UNSPECIFIED = 0, SCOPE_DEVICE = 1, SCOPE_PROFILE = 2 }

	export enum PasswordRequirementsRequirePasswordUnlock { REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED = 0, USE_DEFAULT_DEVICE_TIMEOUT = 1, REQUIRE_EVERY_DAY = 2 }


	/** A list of package names. */
	export interface PackageNameList {

		/** A list of package names. */
		packageNames?: Array<string>;
	}

	/** A list of package names. */
	export interface PackageNameListFormProperties {
	}
	export function CreatePackageNameListFormGroup() {
		return new FormGroup<PackageNameListFormProperties>({
		});

	}


	/** A default activity for handling intents that match a particular intent filter. Note: To set up a kiosk, use InstallType to KIOSK rather than use persistent preferred activities. */
	export interface PersistentPreferredActivity {

		/** The intent actions to match in the filter. If any actions are included in the filter, then an intent's action must be one of those values for it to match. If no actions are included, the intent action is ignored. */
		actions?: Array<string>;

		/** The intent categories to match in the filter. An intent includes the categories that it requires, all of which must be included in the filter in order to match. In other words, adding a category to the filter has no impact on matching unless that category is specified in the intent. */
		categories?: Array<string>;

		/** The activity that should be the default intent handler. This should be an Android component name, e.g. com.android.enterprise.app/.MainActivity. Alternatively, the value may be the package name of an app, which causes Android Device Policy to choose an appropriate activity from the app to handle the intent. */
		receiverActivity?: string | null;
	}

	/** A default activity for handling intents that match a particular intent filter. Note: To set up a kiosk, use InstallType to KIOSK rather than use persistent preferred activities. */
	export interface PersistentPreferredActivityFormProperties {

		/** The activity that should be the default intent handler. This should be an Android component name, e.g. com.android.enterprise.app/.MainActivity. Alternatively, the value may be the package name of an app, which causes Android Device Policy to choose an appropriate activity from the app to handle the intent. */
		receiverActivity: FormControl<string | null | undefined>,
	}
	export function CreatePersistentPreferredActivityFormGroup() {
		return new FormGroup<PersistentPreferredActivityFormProperties>({
			receiverActivity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PolicyPlayStoreMode { PLAY_STORE_MODE_UNSPECIFIED = 0, WHITELIST = 1, BLACKLIST = 2 }


	/** A rule that defines the actions to take if a device or work profile is not compliant with the policy specified in settingName. */
	export interface PolicyEnforcementRule {

		/** An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified. */
		blockAction?: BlockAction;

		/** The top-level policy to enforce. For example, applications or passwordPolicies. */
		settingName?: string | null;

		/** An action to reset a fully managed device or delete a work profile. Note: blockAction must also be specified. */
		wipeAction?: WipeAction;
	}

	/** A rule that defines the actions to take if a device or work profile is not compliant with the policy specified in settingName. */
	export interface PolicyEnforcementRuleFormProperties {

		/** The top-level policy to enforce. For example, applications or passwordPolicies. */
		settingName: FormControl<string | null | undefined>,
	}
	export function CreatePolicyEnforcementRuleFormGroup() {
		return new FormGroup<PolicyEnforcementRuleFormProperties>({
			settingName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An action to reset a fully managed device or delete a work profile. Note: blockAction must also be specified. */
	export interface WipeAction {

		/** Whether the factory-reset protection data is preserved on the device. This setting doesn’t apply to work profiles. */
		preserveFrp?: boolean | null;

		/** Number of days the policy is non-compliant before the device or work profile is wiped. wipeAfterDays must be greater than blockAfterDays. */
		wipeAfterDays?: number | null;
	}

	/** An action to reset a fully managed device or delete a work profile. Note: blockAction must also be specified. */
	export interface WipeActionFormProperties {

		/** Whether the factory-reset protection data is preserved on the device. This setting doesn’t apply to work profiles. */
		preserveFrp: FormControl<boolean | null | undefined>,

		/** Number of days the policy is non-compliant before the device or work profile is wiped. wipeAfterDays must be greater than blockAfterDays. */
		wipeAfterDays: FormControl<number | null | undefined>,
	}
	export function CreateWipeActionFormGroup() {
		return new FormGroup<WipeActionFormProperties>({
			preserveFrp: new FormControl<boolean | null | undefined>(undefined),
			wipeAfterDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field. */
	export interface ProxyInfo {

		/** For a direct proxy, the hosts for which the proxy is bypassed. The host names may contain wildcards such as *.example.com. */
		excludedHosts?: Array<string>;

		/** The host of the direct proxy. */
		host?: string | null;

		/** The URI of the PAC script used to configure the proxy. */
		pacUri?: string | null;

		/** The port of the direct proxy. */
		port?: number | null;
	}

	/** Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field. */
	export interface ProxyInfoFormProperties {

		/** The host of the direct proxy. */
		host: FormControl<string | null | undefined>,

		/** The URI of the PAC script used to configure the proxy. */
		pacUri: FormControl<string | null | undefined>,

		/** The port of the direct proxy. */
		port: FormControl<number | null | undefined>,
	}
	export function CreateProxyInfoFormGroup() {
		return new FormGroup<ProxyInfoFormProperties>({
			host: new FormControl<string | null | undefined>(undefined),
			pacUri: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An action executed during setup. */
	export interface SetupAction {

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		description?: UserFacingMessage;

		/** An action to launch an app. */
		launchApp?: LaunchAppAction;

		/** Provides a user-facing message with locale info. The maximum message length is 4096 characters. */
		title?: UserFacingMessage;
	}

	/** An action executed during setup. */
	export interface SetupActionFormProperties {
	}
	export function CreateSetupActionFormGroup() {
		return new FormGroup<SetupActionFormProperties>({
		});

	}


	/** Settings controlling the behavior of status reports. */
	export interface StatusReportingSettings {

		/** Settings controlling the behavior of application reports. */
		applicationReportingSettings?: ApplicationReportingSettings;

		/** Whether app reports are enabled. */
		applicationReportsEnabled?: boolean | null;

		/** Whether device settings reporting is enabled. */
		deviceSettingsEnabled?: boolean | null;

		/** Whether displays reporting is enabled. Report data is not available for personally owned devices with work profiles. */
		displayInfoEnabled?: boolean | null;

		/** Whether hardware status reporting is enabled. Report data is not available for personally owned devices with work profiles. */
		hardwareStatusEnabled?: boolean | null;

		/** Whether memory reporting is enabled. */
		memoryInfoEnabled?: boolean | null;

		/** Whether network info reporting is enabled. */
		networkInfoEnabled?: boolean | null;

		/** Whether power management event reporting is enabled. Report data is not available for personally owned devices with work profiles. */
		powerManagementEventsEnabled?: boolean | null;

		/** Whether software info reporting is enabled. */
		softwareInfoEnabled?: boolean | null;

		/** Whether system properties reporting is enabled. */
		systemPropertiesEnabled?: boolean | null;
	}

	/** Settings controlling the behavior of status reports. */
	export interface StatusReportingSettingsFormProperties {

		/** Whether app reports are enabled. */
		applicationReportsEnabled: FormControl<boolean | null | undefined>,

		/** Whether device settings reporting is enabled. */
		deviceSettingsEnabled: FormControl<boolean | null | undefined>,

		/** Whether displays reporting is enabled. Report data is not available for personally owned devices with work profiles. */
		displayInfoEnabled: FormControl<boolean | null | undefined>,

		/** Whether hardware status reporting is enabled. Report data is not available for personally owned devices with work profiles. */
		hardwareStatusEnabled: FormControl<boolean | null | undefined>,

		/** Whether memory reporting is enabled. */
		memoryInfoEnabled: FormControl<boolean | null | undefined>,

		/** Whether network info reporting is enabled. */
		networkInfoEnabled: FormControl<boolean | null | undefined>,

		/** Whether power management event reporting is enabled. Report data is not available for personally owned devices with work profiles. */
		powerManagementEventsEnabled: FormControl<boolean | null | undefined>,

		/** Whether software info reporting is enabled. */
		softwareInfoEnabled: FormControl<boolean | null | undefined>,

		/** Whether system properties reporting is enabled. */
		systemPropertiesEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateStatusReportingSettingsFormGroup() {
		return new FormGroup<StatusReportingSettingsFormProperties>({
			applicationReportsEnabled: new FormControl<boolean | null | undefined>(undefined),
			deviceSettingsEnabled: new FormControl<boolean | null | undefined>(undefined),
			displayInfoEnabled: new FormControl<boolean | null | undefined>(undefined),
			hardwareStatusEnabled: new FormControl<boolean | null | undefined>(undefined),
			memoryInfoEnabled: new FormControl<boolean | null | undefined>(undefined),
			networkInfoEnabled: new FormControl<boolean | null | undefined>(undefined),
			powerManagementEventsEnabled: new FormControl<boolean | null | undefined>(undefined),
			softwareInfoEnabled: new FormControl<boolean | null | undefined>(undefined),
			systemPropertiesEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for managing system updates */
	export interface SystemUpdate {

		/** If the type is WINDOWED, the end of the maintenance window, measured as the number of minutes after midnight in device's local time. This value must be between 0 and 1439, inclusive. If this value is less than start_minutes, then the maintenance window spans midnight. If the maintenance window specified is smaller than 30 minutes, the actual window is extended to 30 minutes beyond the start time. */
		endMinutes?: number | null;

		/** An annually repeating time period in which over-the-air (OTA) system updates are postponed to freeze the OS version running on a device. To prevent freezing the device indefinitely, each freeze period must be separated by at least 60 days. */
		freezePeriods?: Array<FreezePeriod>;

		/** If the type is WINDOWED, the start of the maintenance window, measured as the number of minutes after midnight in the device's local time. This value must be between 0 and 1439, inclusive. */
		startMinutes?: number | null;

		/** The type of system update to configure. */
		type?: SystemUpdateType | null;
	}

	/** Configuration for managing system updates */
	export interface SystemUpdateFormProperties {

		/** If the type is WINDOWED, the end of the maintenance window, measured as the number of minutes after midnight in device's local time. This value must be between 0 and 1439, inclusive. If this value is less than start_minutes, then the maintenance window spans midnight. If the maintenance window specified is smaller than 30 minutes, the actual window is extended to 30 minutes beyond the start time. */
		endMinutes: FormControl<number | null | undefined>,

		/** If the type is WINDOWED, the start of the maintenance window, measured as the number of minutes after midnight in the device's local time. This value must be between 0 and 1439, inclusive. */
		startMinutes: FormControl<number | null | undefined>,

		/** The type of system update to configure. */
		type: FormControl<SystemUpdateType | null | undefined>,
	}
	export function CreateSystemUpdateFormGroup() {
		return new FormGroup<SystemUpdateFormProperties>({
			endMinutes: new FormControl<number | null | undefined>(undefined),
			startMinutes: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<SystemUpdateType | null | undefined>(undefined),
		});

	}

	export enum SystemUpdateType { SYSTEM_UPDATE_TYPE_UNSPECIFIED = 0, AUTOMATIC = 1, WINDOWED = 2, POSTPONE = 3 }


	/** Response to a request to list web apps for a given enterprise. */
	export interface ListWebAppsResponse {

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken?: string | null;

		/** The list of web apps. */
		webApps?: Array<WebApp>;
	}

	/** Response to a request to list web apps for a given enterprise. */
	export interface ListWebAppsResponseFormProperties {

		/** If there are more results, a token to retrieve next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWebAppsResponseFormGroup() {
		return new FormGroup<ListWebAppsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A web app. */
	export interface WebApp {

		/** The display mode of the web app. */
		displayMode?: WebAppDisplayMode | null;

		/** A list of icons for the web app. Must have at least one element. */
		icons?: Array<WebAppIcon>;

		/** The name of the web app, which is generated by the server during creation in the form enterprises/{enterpriseId}/webApps/{packageName}. */
		name?: string | null;

		/** The start URL, i.e. the URL that should load when the user opens the application. */
		startUrl?: string | null;

		/** The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon). */
		title?: string | null;

		/** The current version of the app.Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date. */
		versionCode?: string | null;
	}

	/** A web app. */
	export interface WebAppFormProperties {

		/** The display mode of the web app. */
		displayMode: FormControl<WebAppDisplayMode | null | undefined>,

		/** The name of the web app, which is generated by the server during creation in the form enterprises/{enterpriseId}/webApps/{packageName}. */
		name: FormControl<string | null | undefined>,

		/** The start URL, i.e. the URL that should load when the user opens the application. */
		startUrl: FormControl<string | null | undefined>,

		/** The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon). */
		title: FormControl<string | null | undefined>,

		/** The current version of the app.Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date. */
		versionCode: FormControl<string | null | undefined>,
	}
	export function CreateWebAppFormGroup() {
		return new FormGroup<WebAppFormProperties>({
			displayMode: new FormControl<WebAppDisplayMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			versionCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WebAppDisplayMode { DISPLAY_MODE_UNSPECIFIED = 0, MINIMAL_UI = 1, STANDALONE = 2, FULL_SCREEN = 3 }


	/** An icon for a web app. Supported formats are: png, jpg and webp. */
	export interface WebAppIcon {

		/** The actual bytes of the image in a base64url encoded string (c.f. RFC4648, section 5 "Base 64 Encoding with URL and Filename Safe Alphabet"). <ul> <li>The image type can be png or jpg. <li>The image should ideally be square. <li>The image should ideally have a size of 512x512. </ul> */
		imageData?: string | null;
	}

	/** An icon for a web app. Supported formats are: png, jpg and webp. */
	export interface WebAppIconFormProperties {

		/** The actual bytes of the image in a base64url encoded string (c.f. RFC4648, section 5 "Base 64 Encoding with URL and Filename Safe Alphabet"). <ul> <li>The image type can be png or jpg. <li>The image should ideally be square. <li>The image should ideally have a size of 512x512. </ul> */
		imageData: FormControl<string | null | undefined>,
	}
	export function CreateWebAppIconFormGroup() {
		return new FormGroup<WebAppIconFormProperties>({
			imageData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An enterprise signup URL. */
	export interface SignupUrl {

		/** The name of the resource. Use this value in the signupUrl field when calling enterprises.create to complete the enterprise signup flow. */
		name?: string | null;

		/** A URL where an enterprise admin can register their enterprise. The page can't be rendered in an iframe. */
		url?: string | null;
	}

	/** An enterprise signup URL. */
	export interface SignupUrlFormProperties {

		/** The name of the resource. Use this value in the signupUrl field when calling enterprises.create to complete the enterprise signup flow. */
		name: FormControl<string | null | undefined>,

		/** A URL where an enterprise admin can register their enterprise. The page can't be rendered in an iframe. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSignupUrlFormGroup() {
		return new FormGroup<SignupUrlFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A web token used to access the managed Google Play iframe. */
	export interface WebToken {

		/** The features to enable. Use this if you want to control exactly which feature(s) will be activated; leave empty to allow all features.Restrictions / things to note: <ul> <li> If no features are listed here, all features are enabled — this is the  default behavior where you give access to all features to your admins. <li> This must not contain any FEATURE_UNSPECIFIED values. <li> Repeated values are ignored </ul> */
		enabledFeatures?: Array<string>;

		/** The name of the web token, which is generated by the server during creation in the form enterprises/{enterpriseId}/webTokens/{webTokenId}. */
		name?: string | null;

		/** The URL of the parent frame hosting the iframe with the embedded UI. To prevent XSS, the iframe may not be hosted at other URLs. The URL must use the https scheme. */
		parentFrameUrl?: string | null;

		/** Permissions available to an admin in the embedded UI. An admin must have all of these permissions in order to view the UI. This field is deprecated. */
		permissions?: Array<string>;

		/** The token value which is used in the hosting page to generate the iframe with the embedded UI. This is a read-only field generated by the server. */
		value?: string | null;
	}

	/** A web token used to access the managed Google Play iframe. */
	export interface WebTokenFormProperties {

		/** The name of the web token, which is generated by the server during creation in the form enterprises/{enterpriseId}/webTokens/{webTokenId}. */
		name: FormControl<string | null | undefined>,

		/** The URL of the parent frame hosting the iframe with the embedded UI. To prevent XSS, the iframe may not be hosted at other URLs. The URL must use the https scheme. */
		parentFrameUrl: FormControl<string | null | undefined>,

		/** The token value which is used in the hosting page to generate the iframe with the embedded UI. This is a read-only field generated by the server. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateWebTokenFormGroup() {
		return new FormGroup<WebTokenFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			parentFrameUrl: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an enterprise. This is the last step in the enterprise signup flow.
		 * Post v1/enterprises
		 * @param {string} enterpriseToken The enterprise token appended to the callback URL.
		 * @param {string} projectId The ID of the Google Cloud Platform project which will own the enterprise.
		 * @param {string} signupUrlName The name of the SignupUrl used to sign up for the enterprise.
		 * @return {void} Successful response
		 */
		Androidmanagement_enterprises_create(enterpriseToken: string | null | undefined, projectId: string | null | undefined, signupUrlName: string | null | undefined, requestBody: Enterprise): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/enterprises?enterpriseToken=' + (enterpriseToken == null ? '' : encodeURIComponent(enterpriseToken)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&signupUrlName=' + (signupUrlName == null ? '' : encodeURIComponent(signupUrlName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an enterprise signup URL.
		 * Post v1/signupUrls
		 * @param {string} callbackUrl The callback URL that the admin will be redirected to after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes.
		 * @param {string} projectId The ID of the Google Cloud Platform project which will own the enterprise.
		 * @return {void} Successful response
		 */
		Androidmanagement_signupUrls_create(callbackUrl: string | null | undefined, projectId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/signupUrls?callbackUrl=' + (callbackUrl == null ? '' : encodeURIComponent(callbackUrl)) + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an enrollment token. This operation invalidates the token, preventing its future use.
		 * Delete v1/{name}
		 * @param {string} name The name of the enrollment token in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}.
		 * @param {Array<string>} wipeDataFlags Optional flags that control the device wiping behavior.
		 * @param {string} wipeReasonMessage Optional. A short message displayed to the user before wiping the work profile on personal devices. This has no effect on company owned devices. The maximum message length is 200 characters.
		 * @return {void} Successful response
		 */
		Androidmanagement_enterprises_enrollmentTokens_delete(name: string, wipeDataFlags: Array<string> | null | undefined, wipeReasonMessage: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&' + wipeDataFlags?.map(z => `wipeDataFlags=${encodeURIComponent(z)}`).join('&') + '&wipeReasonMessage=' + (wipeReasonMessage == null ? '' : encodeURIComponent(wipeReasonMessage)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a web app.
		 * Get v1/{name}
		 * @param {string} name The name of the web app in the form enterprises/{enterpriseId}/webApp/{packageName}.
		 * @param {string} languageCode The preferred language for localized application info, as a BCP47 tag (e.g. "en-US", "de"). If not specified the default language of the application will be used.
		 * @return {void} Successful response
		 */
		Androidmanagement_enterprises_webApps_get(name: string, languageCode: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a web app.
		 * Patch v1/{name}
		 * @param {string} name The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}.
		 * @param {string} updateMask The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
		 * @return {void} Successful response
		 */
		Androidmanagement_enterprises_webApps_patch(name: string, updateMask: string | null | undefined, requestBody: WebApp): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {void} Successful response
		 */
		Androidmanagement_enterprises_devices_operations_cancel(name: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
		 * Post v1/{name}:issueCommand
		 * @param {string} name The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.
		 * @return {void} Successful response
		 */
		Androidmanagement_enterprises_devices_issueCommand(name: string, requestBody: Command): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':issueCommand', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists devices for a given enterprise.
		 * Get v1/{parent}/devices
		 * @param {string} parent The name of the enterprise in the form enterprises/{enterpriseId}.
		 * @param {number} pageSize The requested page size. The actual page size may be fixed to a min or max value.
		 * @param {string} pageToken A token identifying a page of results returned by the server.
		 * @return {void} Successful response
		 */
		Androidmanagement_enterprises_devices_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an enrollment token for a given enterprise.
		 * Post v1/{parent}/enrollmentTokens
		 * @param {string} parent The name of the enterprise in the form enterprises/{enterpriseId}.
		 * @return {void} Successful response
		 */
		Androidmanagement_enterprises_enrollmentTokens_create(parent: string, requestBody: EnrollmentToken): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/enrollmentTokens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists policies for a given enterprise.
		 * Get v1/{parent}/policies
		 * @param {string} parent The name of the enterprise in the form enterprises/{enterpriseId}.
		 * @param {number} pageSize The requested page size. The actual page size may be fixed to a min or max value.
		 * @param {string} pageToken A token identifying a page of results returned by the server.
		 * @return {void} Successful response
		 */
		Androidmanagement_enterprises_policies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/policies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists web apps for a given enterprise.
		 * Get v1/{parent}/webApps
		 * @param {string} parent The name of the enterprise in the form enterprises/{enterpriseId}.
		 * @param {number} pageSize The requested page size. The actual page size may be fixed to a min or max value.
		 * @param {string} pageToken A token identifying a page of results returned by the server.
		 * @return {void} Successful response
		 */
		Androidmanagement_enterprises_webApps_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/webApps&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a web app.
		 * Post v1/{parent}/webApps
		 * @param {string} parent The name of the enterprise in the form enterprises/{enterpriseId}.
		 * @return {void} Successful response
		 */
		Androidmanagement_enterprises_webApps_create(parent: string, requestBody: WebApp): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/webApps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.
		 * Post v1/{parent}/webTokens
		 * @param {string} parent The name of the enterprise in the form enterprises/{enterpriseId}.
		 * @return {void} Successful response
		 */
		Androidmanagement_enterprises_webTokens_create(parent: string, requestBody: WebToken): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/webTokens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

