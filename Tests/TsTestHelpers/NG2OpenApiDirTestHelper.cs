﻿using Fonlow.OpenApiClientGen.ClientTypes;
using System;
using System.IO;
using TestHelpers;
using Xunit.Abstractions;

namespace SwagTests
{
	/// <summary>
	/// For integrations for large amount of OpenAPI files. In such tests, whether the generated codes are the same which those generated in the past is no a concern.
	/// As long as the codes generated could be ng built, things are OK.
	/// </summary>
	public class NG2OpenApiDirTestHelper: NG2TestHelper, IOpenApiDirTestHelper
	{
		const string resultsDir = "Results";

		/// <summary>
		/// 
		/// </summary>
		/// <param name="genType"></param>
		/// <param name="output"></param>
		/// <param name="defaultDefFile">default is openapi.yaml</param>
		public NG2OpenApiDirTestHelper(Type genType, ITestOutputHelper output, string defaultDefFile="openapi.yaml") : base(genType, output, 
			new CasualTestingSettings(TestHelpers.TestingSettings.Instance.Build, TestHelpers.TestingSettings.Instance.UpdateGenerated))
		{
			this.defaultDefFile = defaultDefFile;
		}

		readonly string defaultDefFile;

		/// <summary>
		/// Just generate and build, not assertion for comparing previous. Ignore the settings in appsettings.json
		/// </summary>
		/// <param name="openapiDir"></param>
		/// <param name="mySettings"></param>
		public void GenerateFromOpenApiAndBuild(string openapiDir, ISettings mySettings = null)
		{
			var m = (new System.Diagnostics.StackTrace()).GetFrame(1).GetMethod();
			var targetFilePath = CreateUniqueFileName(openapiDir);
			var filePath = Path.Combine(openapiDir, defaultDefFile);
			GenerateAndAssertAndBuild(filePath, targetFilePath, mySettings);
		}


		static string CreateUniqueFileName(string defDirName)
		{
			var idx = defDirName.IndexOf("\\APIs\\");
			var whatAfter = defDirName.Substring(idx + 6);
			return $"{resultsDir}\\{RefinePropertyName(whatAfter)}.ts";
		}

		static string RefinePropertyName(string s)
		{
			if (String.IsNullOrEmpty(s))
			{
				return s;
			}

			return s.Replace("\\", "_").Replace("$", "").Replace(':', '_').Replace('-', '_').Replace('.', '_')
				.Replace('[', '_').Replace(']', '_').Replace('(', '_').Replace(')', '_').Replace('/', '_').Replace('#', '_')
				.Replace(' ', '_').Replace('+', '_').Replace('~', '_');
		}
	}
}
