import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BoxScore {
		Game?: Game;
		Periods?: Array<Period>;
		PlayerGames?: Array<PlayerGame>;
		ShootoutPlays?: Array<Play>;
		TeamGames?: Array<TeamGame>;
	}
	export interface BoxScoreFormProperties {
	}
	export function CreateBoxScoreFormGroup() {
		return new FormGroup<BoxScoreFormProperties>({
		});

	}

	export interface Period {
		AwayScore?: number | null;
		GameID?: number | null;
		HomeScore?: number | null;
		Name?: string | null;
		Penalties?: Array<Penalty>;
		PeriodID?: number | null;
		ScoringPlays?: Array<ScoringPlay>;
	}
	export interface PeriodFormProperties {
		AwayScore: FormControl<number | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		HomeScore: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PeriodID: FormControl<number | null | undefined>,
	}
	export function CreatePeriodFormGroup() {
		return new FormGroup<PeriodFormProperties>({
			AwayScore: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			HomeScore: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PeriodID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Penalty {
		BenchPenaltyServedByPlayerID?: number | null;
		Description?: string | null;
		DrawnByPlayerID?: number | null;
		DrawnByTeamID?: number | null;
		IsBenchPenalty?: boolean | null;
		PenalizedPlayerID?: number | null;
		PenalizedTeamID?: number | null;
		PenaltyID?: number | null;
		PenaltyMinutes?: number | null;
		PeriodID?: number | null;
		Sequence?: number | null;
		TimeRemainingMinutes?: number | null;
		TimeRemainingSeconds?: number | null;
	}
	export interface PenaltyFormProperties {
		BenchPenaltyServedByPlayerID: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DrawnByPlayerID: FormControl<number | null | undefined>,
		DrawnByTeamID: FormControl<number | null | undefined>,
		IsBenchPenalty: FormControl<boolean | null | undefined>,
		PenalizedPlayerID: FormControl<number | null | undefined>,
		PenalizedTeamID: FormControl<number | null | undefined>,
		PenaltyID: FormControl<number | null | undefined>,
		PenaltyMinutes: FormControl<number | null | undefined>,
		PeriodID: FormControl<number | null | undefined>,
		Sequence: FormControl<number | null | undefined>,
		TimeRemainingMinutes: FormControl<number | null | undefined>,
		TimeRemainingSeconds: FormControl<number | null | undefined>,
	}
	export function CreatePenaltyFormGroup() {
		return new FormGroup<PenaltyFormProperties>({
			BenchPenaltyServedByPlayerID: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DrawnByPlayerID: new FormControl<number | null | undefined>(undefined),
			DrawnByTeamID: new FormControl<number | null | undefined>(undefined),
			IsBenchPenalty: new FormControl<boolean | null | undefined>(undefined),
			PenalizedPlayerID: new FormControl<number | null | undefined>(undefined),
			PenalizedTeamID: new FormControl<number | null | undefined>(undefined),
			PenaltyID: new FormControl<number | null | undefined>(undefined),
			PenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			PeriodID: new FormControl<number | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScoringPlay {
		AllowedByTeamID?: number | null;
		AssistedByPlayerID1?: number | null;
		AssistedByPlayerID2?: number | null;
		AwayTeamScore?: number | null;
		EmptyNet?: boolean | null;
		HomeTeamScore?: number | null;
		PeriodID?: number | null;
		PowerPlay?: boolean | null;
		ScoredByPlayerID?: number | null;
		ScoredByTeamID?: number | null;
		ScoringPlayID?: number | null;
		Sequence?: number | null;
		ShortHanded?: boolean | null;
		TimeRemainingMinutes?: number | null;
		TimeRemainingSeconds?: number | null;
	}
	export interface ScoringPlayFormProperties {
		AllowedByTeamID: FormControl<number | null | undefined>,
		AssistedByPlayerID1: FormControl<number | null | undefined>,
		AssistedByPlayerID2: FormControl<number | null | undefined>,
		AwayTeamScore: FormControl<number | null | undefined>,
		EmptyNet: FormControl<boolean | null | undefined>,
		HomeTeamScore: FormControl<number | null | undefined>,
		PeriodID: FormControl<number | null | undefined>,
		PowerPlay: FormControl<boolean | null | undefined>,
		ScoredByPlayerID: FormControl<number | null | undefined>,
		ScoredByTeamID: FormControl<number | null | undefined>,
		ScoringPlayID: FormControl<number | null | undefined>,
		Sequence: FormControl<number | null | undefined>,
		ShortHanded: FormControl<boolean | null | undefined>,
		TimeRemainingMinutes: FormControl<number | null | undefined>,
		TimeRemainingSeconds: FormControl<number | null | undefined>,
	}
	export function CreateScoringPlayFormGroup() {
		return new FormGroup<ScoringPlayFormProperties>({
			AllowedByTeamID: new FormControl<number | null | undefined>(undefined),
			AssistedByPlayerID1: new FormControl<number | null | undefined>(undefined),
			AssistedByPlayerID2: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			EmptyNet: new FormControl<boolean | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			PeriodID: new FormControl<number | null | undefined>(undefined),
			PowerPlay: new FormControl<boolean | null | undefined>(undefined),
			ScoredByPlayerID: new FormControl<number | null | undefined>(undefined),
			ScoredByTeamID: new FormControl<number | null | undefined>(undefined),
			ScoringPlayID: new FormControl<number | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			ShortHanded: new FormControl<boolean | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerGame {
		Assists?: number | null;
		BenchPenaltyMinutes?: number | null;
		Blocks?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		DraftKingsPosition?: string | null;
		DraftKingsSalary?: number | null;
		EmptyNetGoals?: number | null;
		FaceoffsLost?: number | null;
		FaceoffsWon?: number | null;
		FanDuelPosition?: string | null;
		FanDuelSalary?: number | null;
		FantasyDataSalary?: number | null;
		FantasyDraftPosition?: string | null;
		FantasyDraftSalary?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsYahoo?: number | null;
		GameID?: number | null;
		Games?: number | null;
		Giveaways?: number | null;
		GlobalGameID?: number | null;
		GlobalOpponentID?: number | null;
		GlobalTeamID?: number | null;
		Goals?: number | null;
		GoaltendingGoalsAgainst?: number | null;
		GoaltendingLosses?: number | null;
		GoaltendingMinutes?: number | null;
		GoaltendingOvertimeLosses?: number | null;
		GoaltendingSaves?: number | null;
		GoaltendingSeconds?: number | null;
		GoaltendingShotsAgainst?: number | null;
		GoaltendingShutouts?: number | null;
		GoaltendingWins?: number | null;
		HatTricks?: number | null;
		Hits?: number | null;
		HomeOrAway?: string | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		IsGameOver?: boolean | null;
		Minutes?: number | null;
		Name?: string | null;
		Opponent?: string | null;
		OpponentID?: number | null;
		OpponentPositionRank?: number | null;
		OpponentRank?: number | null;
		PenaltyMinutes?: number | null;
		PlayerID?: number | null;
		PlusMinus?: number | null;
		Position?: string | null;
		PowerPlayAssists?: number | null;
		PowerPlayGoals?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Seconds?: number | null;
		Shifts?: number | null;
		ShootoutGoals?: number | null;
		ShortHandedAssists?: number | null;
		ShortHandedGoals?: number | null;
		ShotsOnGoal?: number | null;
		Started?: number | null;
		StatID?: number | null;
		Takeaways?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		Updated?: string | null;
		YahooPosition?: string | null;
		YahooSalary?: number | null;
	}
	export interface PlayerGameFormProperties {
		Assists: FormControl<number | null | undefined>,
		BenchPenaltyMinutes: FormControl<number | null | undefined>,
		Blocks: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		DraftKingsPosition: FormControl<string | null | undefined>,
		DraftKingsSalary: FormControl<number | null | undefined>,
		EmptyNetGoals: FormControl<number | null | undefined>,
		FaceoffsLost: FormControl<number | null | undefined>,
		FaceoffsWon: FormControl<number | null | undefined>,
		FanDuelPosition: FormControl<string | null | undefined>,
		FanDuelSalary: FormControl<number | null | undefined>,
		FantasyDataSalary: FormControl<number | null | undefined>,
		FantasyDraftPosition: FormControl<string | null | undefined>,
		FantasyDraftSalary: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		Giveaways: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalOpponentID: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Goals: FormControl<number | null | undefined>,
		GoaltendingGoalsAgainst: FormControl<number | null | undefined>,
		GoaltendingLosses: FormControl<number | null | undefined>,
		GoaltendingMinutes: FormControl<number | null | undefined>,
		GoaltendingOvertimeLosses: FormControl<number | null | undefined>,
		GoaltendingSaves: FormControl<number | null | undefined>,
		GoaltendingSeconds: FormControl<number | null | undefined>,
		GoaltendingShotsAgainst: FormControl<number | null | undefined>,
		GoaltendingShutouts: FormControl<number | null | undefined>,
		GoaltendingWins: FormControl<number | null | undefined>,
		HatTricks: FormControl<number | null | undefined>,
		Hits: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentID: FormControl<number | null | undefined>,
		OpponentPositionRank: FormControl<number | null | undefined>,
		OpponentRank: FormControl<number | null | undefined>,
		PenaltyMinutes: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PlusMinus: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PowerPlayAssists: FormControl<number | null | undefined>,
		PowerPlayGoals: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Seconds: FormControl<number | null | undefined>,
		Shifts: FormControl<number | null | undefined>,
		ShootoutGoals: FormControl<number | null | undefined>,
		ShortHandedAssists: FormControl<number | null | undefined>,
		ShortHandedGoals: FormControl<number | null | undefined>,
		ShotsOnGoal: FormControl<number | null | undefined>,
		Started: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Takeaways: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		YahooPosition: FormControl<string | null | undefined>,
		YahooSalary: FormControl<number | null | undefined>,
	}
	export function CreatePlayerGameFormGroup() {
		return new FormGroup<PlayerGameFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			BenchPenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			Blocks: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			DraftKingsPosition: new FormControl<string | null | undefined>(undefined),
			DraftKingsSalary: new FormControl<number | null | undefined>(undefined),
			EmptyNetGoals: new FormControl<number | null | undefined>(undefined),
			FaceoffsLost: new FormControl<number | null | undefined>(undefined),
			FaceoffsWon: new FormControl<number | null | undefined>(undefined),
			FanDuelPosition: new FormControl<string | null | undefined>(undefined),
			FanDuelSalary: new FormControl<number | null | undefined>(undefined),
			FantasyDataSalary: new FormControl<number | null | undefined>(undefined),
			FantasyDraftPosition: new FormControl<string | null | undefined>(undefined),
			FantasyDraftSalary: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			Giveaways: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalOpponentID: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Goals: new FormControl<number | null | undefined>(undefined),
			GoaltendingGoalsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingMinutes: new FormControl<number | null | undefined>(undefined),
			GoaltendingOvertimeLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingSaves: new FormControl<number | null | undefined>(undefined),
			GoaltendingSeconds: new FormControl<number | null | undefined>(undefined),
			GoaltendingShotsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingShutouts: new FormControl<number | null | undefined>(undefined),
			GoaltendingWins: new FormControl<number | null | undefined>(undefined),
			HatTricks: new FormControl<number | null | undefined>(undefined),
			Hits: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			OpponentPositionRank: new FormControl<number | null | undefined>(undefined),
			OpponentRank: new FormControl<number | null | undefined>(undefined),
			PenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PlusMinus: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PowerPlayAssists: new FormControl<number | null | undefined>(undefined),
			PowerPlayGoals: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Seconds: new FormControl<number | null | undefined>(undefined),
			Shifts: new FormControl<number | null | undefined>(undefined),
			ShootoutGoals: new FormControl<number | null | undefined>(undefined),
			ShortHandedAssists: new FormControl<number | null | undefined>(undefined),
			ShortHandedGoals: new FormControl<number | null | undefined>(undefined),
			ShotsOnGoal: new FormControl<number | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Takeaways: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			YahooPosition: new FormControl<string | null | undefined>(undefined),
			YahooSalary: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Play {
		AwayTeamScore?: number | null;
		Category?: string | null;
		ClockMinutes?: number | null;
		ClockSeconds?: number | null;
		Created?: string | null;
		Description?: string | null;
		FirstAssistedByPlayerID?: number | null;
		HomeTeamScore?: number | null;
		Opponent?: string | null;
		OpponentID?: number | null;
		OpposingPlayerID?: number | null;
		PeriodID?: number | null;
		PeriodName?: string | null;
		PlayID?: number | null;
		PlayerID?: number | null;
		PowerPlayTeam?: string | null;
		PowerPlayTeamID?: number | null;
		SecondAssistedByPlayerID?: number | null;
		Sequence?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		Type?: string | null;
		Updated?: string | null;
	}
	export interface PlayFormProperties {
		AwayTeamScore: FormControl<number | null | undefined>,
		Category: FormControl<string | null | undefined>,
		ClockMinutes: FormControl<number | null | undefined>,
		ClockSeconds: FormControl<number | null | undefined>,
		Created: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		FirstAssistedByPlayerID: FormControl<number | null | undefined>,
		HomeTeamScore: FormControl<number | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentID: FormControl<number | null | undefined>,
		OpposingPlayerID: FormControl<number | null | undefined>,
		PeriodID: FormControl<number | null | undefined>,
		PeriodName: FormControl<string | null | undefined>,
		PlayID: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PowerPlayTeam: FormControl<string | null | undefined>,
		PowerPlayTeamID: FormControl<number | null | undefined>,
		SecondAssistedByPlayerID: FormControl<number | null | undefined>,
		Sequence: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreatePlayFormGroup() {
		return new FormGroup<PlayFormProperties>({
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			ClockMinutes: new FormControl<number | null | undefined>(undefined),
			ClockSeconds: new FormControl<number | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			FirstAssistedByPlayerID: new FormControl<number | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			OpposingPlayerID: new FormControl<number | null | undefined>(undefined),
			PeriodID: new FormControl<number | null | undefined>(undefined),
			PeriodName: new FormControl<string | null | undefined>(undefined),
			PlayID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PowerPlayTeam: new FormControl<string | null | undefined>(undefined),
			PowerPlayTeamID: new FormControl<number | null | undefined>(undefined),
			SecondAssistedByPlayerID: new FormControl<number | null | undefined>(undefined),
			Sequence: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamGame {
		Assists?: number | null;
		BenchPenaltyMinutes?: number | null;
		Blocks?: number | null;
		DateTime?: string | null;
		Day?: string | null;
		EmptyNetGoals?: number | null;
		FaceoffsLost?: number | null;
		FaceoffsWon?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsYahoo?: number | null;
		GameID?: number | null;
		Games?: number | null;
		Giveaways?: number | null;
		GlobalGameID?: number | null;
		GlobalOpponentID?: number | null;
		GlobalTeamID?: number | null;
		Goals?: number | null;
		GoaltendingGoalsAgainst?: number | null;
		GoaltendingLosses?: number | null;
		GoaltendingMinutes?: number | null;
		GoaltendingOvertimeLosses?: number | null;
		GoaltendingSaves?: number | null;
		GoaltendingSeconds?: number | null;
		GoaltendingShotsAgainst?: number | null;
		GoaltendingShutouts?: number | null;
		GoaltendingWins?: number | null;
		HatTricks?: number | null;
		Hits?: number | null;
		HomeOrAway?: string | null;
		IsGameOver?: boolean | null;
		Losses?: number | null;
		Minutes?: number | null;
		Name?: string | null;
		Opponent?: string | null;
		OpponentID?: number | null;
		OvertimeLosses?: number | null;
		PenaltyMinutes?: number | null;
		PlusMinus?: number | null;
		PowerPlayAssists?: number | null;
		PowerPlayGoals?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Seconds?: number | null;
		Shifts?: number | null;
		ShootoutGoals?: number | null;
		ShortHandedAssists?: number | null;
		ShortHandedGoals?: number | null;
		ShotsOnGoal?: number | null;
		Started?: number | null;
		StatID?: number | null;
		Takeaways?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		Updated?: string | null;
		Wins?: number | null;
	}
	export interface TeamGameFormProperties {
		Assists: FormControl<number | null | undefined>,
		BenchPenaltyMinutes: FormControl<number | null | undefined>,
		Blocks: FormControl<number | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		EmptyNetGoals: FormControl<number | null | undefined>,
		FaceoffsLost: FormControl<number | null | undefined>,
		FaceoffsWon: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		Giveaways: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalOpponentID: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Goals: FormControl<number | null | undefined>,
		GoaltendingGoalsAgainst: FormControl<number | null | undefined>,
		GoaltendingLosses: FormControl<number | null | undefined>,
		GoaltendingMinutes: FormControl<number | null | undefined>,
		GoaltendingOvertimeLosses: FormControl<number | null | undefined>,
		GoaltendingSaves: FormControl<number | null | undefined>,
		GoaltendingSeconds: FormControl<number | null | undefined>,
		GoaltendingShotsAgainst: FormControl<number | null | undefined>,
		GoaltendingShutouts: FormControl<number | null | undefined>,
		GoaltendingWins: FormControl<number | null | undefined>,
		HatTricks: FormControl<number | null | undefined>,
		Hits: FormControl<number | null | undefined>,
		HomeOrAway: FormControl<string | null | undefined>,
		IsGameOver: FormControl<boolean | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Opponent: FormControl<string | null | undefined>,
		OpponentID: FormControl<number | null | undefined>,
		OvertimeLosses: FormControl<number | null | undefined>,
		PenaltyMinutes: FormControl<number | null | undefined>,
		PlusMinus: FormControl<number | null | undefined>,
		PowerPlayAssists: FormControl<number | null | undefined>,
		PowerPlayGoals: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Seconds: FormControl<number | null | undefined>,
		Shifts: FormControl<number | null | undefined>,
		ShootoutGoals: FormControl<number | null | undefined>,
		ShortHandedAssists: FormControl<number | null | undefined>,
		ShortHandedGoals: FormControl<number | null | undefined>,
		ShotsOnGoal: FormControl<number | null | undefined>,
		Started: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Takeaways: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamGameFormGroup() {
		return new FormGroup<TeamGameFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			BenchPenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			Blocks: new FormControl<number | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			EmptyNetGoals: new FormControl<number | null | undefined>(undefined),
			FaceoffsLost: new FormControl<number | null | undefined>(undefined),
			FaceoffsWon: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			Giveaways: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalOpponentID: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Goals: new FormControl<number | null | undefined>(undefined),
			GoaltendingGoalsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingMinutes: new FormControl<number | null | undefined>(undefined),
			GoaltendingOvertimeLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingSaves: new FormControl<number | null | undefined>(undefined),
			GoaltendingSeconds: new FormControl<number | null | undefined>(undefined),
			GoaltendingShotsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingShutouts: new FormControl<number | null | undefined>(undefined),
			GoaltendingWins: new FormControl<number | null | undefined>(undefined),
			HatTricks: new FormControl<number | null | undefined>(undefined),
			Hits: new FormControl<number | null | undefined>(undefined),
			HomeOrAway: new FormControl<string | null | undefined>(undefined),
			IsGameOver: new FormControl<boolean | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Opponent: new FormControl<string | null | undefined>(undefined),
			OpponentID: new FormControl<number | null | undefined>(undefined),
			OvertimeLosses: new FormControl<number | null | undefined>(undefined),
			PenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			PlusMinus: new FormControl<number | null | undefined>(undefined),
			PowerPlayAssists: new FormControl<number | null | undefined>(undefined),
			PowerPlayGoals: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Seconds: new FormControl<number | null | undefined>(undefined),
			Shifts: new FormControl<number | null | undefined>(undefined),
			ShootoutGoals: new FormControl<number | null | undefined>(undefined),
			ShortHandedAssists: new FormControl<number | null | undefined>(undefined),
			ShortHandedGoals: new FormControl<number | null | undefined>(undefined),
			ShotsOnGoal: new FormControl<number | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Takeaways: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DfsSlate {
		DfsSlateGames?: Array<DfsSlateGame>;
		DfsSlatePlayers?: Array<DfsSlatePlayer>;
		IsMultiDaySlate?: boolean | null;
		NumberOfGames?: number | null;
		Operator?: string | null;
		OperatorDay?: string | null;
		OperatorGameType?: string | null;
		OperatorName?: string | null;
		OperatorSlateID?: number | null;
		OperatorStartTime?: string | null;
		RemovedByOperator?: boolean | null;
		SalaryCap?: number | null;
		SlateID?: number | null;
		SlateRosterSlots?: Array<string>;
	}
	export interface DfsSlateFormProperties {
		IsMultiDaySlate: FormControl<boolean | null | undefined>,
		NumberOfGames: FormControl<number | null | undefined>,
		Operator: FormControl<string | null | undefined>,
		OperatorDay: FormControl<string | null | undefined>,
		OperatorGameType: FormControl<string | null | undefined>,
		OperatorName: FormControl<string | null | undefined>,
		OperatorSlateID: FormControl<number | null | undefined>,
		OperatorStartTime: FormControl<string | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,
		SalaryCap: FormControl<number | null | undefined>,
		SlateID: FormControl<number | null | undefined>,
	}
	export function CreateDfsSlateFormGroup() {
		return new FormGroup<DfsSlateFormProperties>({
			IsMultiDaySlate: new FormControl<boolean | null | undefined>(undefined),
			NumberOfGames: new FormControl<number | null | undefined>(undefined),
			Operator: new FormControl<string | null | undefined>(undefined),
			OperatorDay: new FormControl<string | null | undefined>(undefined),
			OperatorGameType: new FormControl<string | null | undefined>(undefined),
			OperatorName: new FormControl<string | null | undefined>(undefined),
			OperatorSlateID: new FormControl<number | null | undefined>(undefined),
			OperatorStartTime: new FormControl<string | null | undefined>(undefined),
			RemovedByOperator: new FormControl<boolean | null | undefined>(undefined),
			SalaryCap: new FormControl<number | null | undefined>(undefined),
			SlateID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DfsSlateGame {
		Game?: Game;
		GameID?: number | null;
		OperatorGameID?: number | null;
		RemovedByOperator?: boolean | null;
		SlateGameID?: number | null;
		SlateID?: number | null;
	}
	export interface DfsSlateGameFormProperties {
		GameID: FormControl<number | null | undefined>,
		OperatorGameID: FormControl<number | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,
		SlateGameID: FormControl<number | null | undefined>,
		SlateID: FormControl<number | null | undefined>,
	}
	export function CreateDfsSlateGameFormGroup() {
		return new FormGroup<DfsSlateGameFormProperties>({
			GameID: new FormControl<number | null | undefined>(undefined),
			OperatorGameID: new FormControl<number | null | undefined>(undefined),
			RemovedByOperator: new FormControl<boolean | null | undefined>(undefined),
			SlateGameID: new FormControl<number | null | undefined>(undefined),
			SlateID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DfsSlatePlayer {
		OperatorPlayerID?: string | null;
		OperatorPlayerName?: string | null;
		OperatorPosition?: string | null;
		OperatorRosterSlots?: Array<string>;
		OperatorSalary?: number | null;
		OperatorSlatePlayerID?: string | null;
		PlayerGameProjectionStatID?: number | null;
		PlayerID?: number | null;
		RemovedByOperator?: boolean | null;
		SlateGameID?: number | null;
		SlateID?: number | null;
		SlatePlayerID?: number | null;
		Team?: string | null;
		TeamID?: number | null;
	}
	export interface DfsSlatePlayerFormProperties {
		OperatorPlayerID: FormControl<string | null | undefined>,
		OperatorPlayerName: FormControl<string | null | undefined>,
		OperatorPosition: FormControl<string | null | undefined>,
		OperatorSalary: FormControl<number | null | undefined>,
		OperatorSlatePlayerID: FormControl<string | null | undefined>,
		PlayerGameProjectionStatID: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		RemovedByOperator: FormControl<boolean | null | undefined>,
		SlateGameID: FormControl<number | null | undefined>,
		SlateID: FormControl<number | null | undefined>,
		SlatePlayerID: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
	}
	export function CreateDfsSlatePlayerFormGroup() {
		return new FormGroup<DfsSlatePlayerFormProperties>({
			OperatorPlayerID: new FormControl<string | null | undefined>(undefined),
			OperatorPlayerName: new FormControl<string | null | undefined>(undefined),
			OperatorPosition: new FormControl<string | null | undefined>(undefined),
			OperatorSalary: new FormControl<number | null | undefined>(undefined),
			OperatorSlatePlayerID: new FormControl<string | null | undefined>(undefined),
			PlayerGameProjectionStatID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			RemovedByOperator: new FormControl<boolean | null | undefined>(undefined),
			SlateGameID: new FormControl<number | null | undefined>(undefined),
			SlateID: new FormControl<number | null | undefined>(undefined),
			SlatePlayerID: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Game {
		Attendance?: number | null;
		AwayRotationNumber?: number | null;
		AwayTeam?: string | null;
		AwayTeamID?: number | null;
		AwayTeamMoneyLine?: number | null;
		AwayTeamScore?: number | null;
		Channel?: string | null;
		DateTime?: string | null;
		DateTimeUTC?: string | null;
		Day?: string | null;
		GameEndDateTime?: string | null;
		GameID?: number | null;
		GlobalAwayTeamID?: number | null;
		GlobalGameID?: number | null;
		GlobalHomeTeamID?: number | null;
		HomeRotationNumber?: number | null;
		HomeTeam?: string | null;
		HomeTeamID?: number | null;
		HomeTeamMoneyLine?: number | null;
		HomeTeamScore?: number | null;
		IsClosed?: boolean | null;
		LastPlay?: string | null;
		NeutralVenue?: boolean | null;
		OverPayout?: number | null;
		OverUnder?: number | null;
		Period?: string | null;
		Periods?: Array<Period>;
		PointSpread?: number | null;
		PointSpreadAwayTeamMoneyLine?: number | null;
		PointSpreadHomeTeamMoneyLine?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		SeriesInfo?: Series;
		StadiumID?: number | null;
		Status?: string | null;
		TimeRemainingMinutes?: number | null;
		TimeRemainingSeconds?: number | null;
		UnderPayout?: number | null;
		Updated?: string | null;
	}
	export interface GameFormProperties {
		Attendance: FormControl<number | null | undefined>,
		AwayRotationNumber: FormControl<number | null | undefined>,
		AwayTeam: FormControl<string | null | undefined>,
		AwayTeamID: FormControl<number | null | undefined>,
		AwayTeamMoneyLine: FormControl<number | null | undefined>,
		AwayTeamScore: FormControl<number | null | undefined>,
		Channel: FormControl<string | null | undefined>,
		DateTime: FormControl<string | null | undefined>,
		DateTimeUTC: FormControl<string | null | undefined>,
		Day: FormControl<string | null | undefined>,
		GameEndDateTime: FormControl<string | null | undefined>,
		GameID: FormControl<number | null | undefined>,
		GlobalAwayTeamID: FormControl<number | null | undefined>,
		GlobalGameID: FormControl<number | null | undefined>,
		GlobalHomeTeamID: FormControl<number | null | undefined>,
		HomeRotationNumber: FormControl<number | null | undefined>,
		HomeTeam: FormControl<string | null | undefined>,
		HomeTeamID: FormControl<number | null | undefined>,
		HomeTeamMoneyLine: FormControl<number | null | undefined>,
		HomeTeamScore: FormControl<number | null | undefined>,
		IsClosed: FormControl<boolean | null | undefined>,
		LastPlay: FormControl<string | null | undefined>,
		NeutralVenue: FormControl<boolean | null | undefined>,
		OverPayout: FormControl<number | null | undefined>,
		OverUnder: FormControl<number | null | undefined>,
		Period: FormControl<string | null | undefined>,
		PointSpread: FormControl<number | null | undefined>,
		PointSpreadAwayTeamMoneyLine: FormControl<number | null | undefined>,
		PointSpreadHomeTeamMoneyLine: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		TimeRemainingMinutes: FormControl<number | null | undefined>,
		TimeRemainingSeconds: FormControl<number | null | undefined>,
		UnderPayout: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreateGameFormGroup() {
		return new FormGroup<GameFormProperties>({
			Attendance: new FormControl<number | null | undefined>(undefined),
			AwayRotationNumber: new FormControl<number | null | undefined>(undefined),
			AwayTeam: new FormControl<string | null | undefined>(undefined),
			AwayTeamID: new FormControl<number | null | undefined>(undefined),
			AwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			AwayTeamScore: new FormControl<number | null | undefined>(undefined),
			Channel: new FormControl<string | null | undefined>(undefined),
			DateTime: new FormControl<string | null | undefined>(undefined),
			DateTimeUTC: new FormControl<string | null | undefined>(undefined),
			Day: new FormControl<string | null | undefined>(undefined),
			GameEndDateTime: new FormControl<string | null | undefined>(undefined),
			GameID: new FormControl<number | null | undefined>(undefined),
			GlobalAwayTeamID: new FormControl<number | null | undefined>(undefined),
			GlobalGameID: new FormControl<number | null | undefined>(undefined),
			GlobalHomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeRotationNumber: new FormControl<number | null | undefined>(undefined),
			HomeTeam: new FormControl<string | null | undefined>(undefined),
			HomeTeamID: new FormControl<number | null | undefined>(undefined),
			HomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			HomeTeamScore: new FormControl<number | null | undefined>(undefined),
			IsClosed: new FormControl<boolean | null | undefined>(undefined),
			LastPlay: new FormControl<string | null | undefined>(undefined),
			NeutralVenue: new FormControl<boolean | null | undefined>(undefined),
			OverPayout: new FormControl<number | null | undefined>(undefined),
			OverUnder: new FormControl<number | null | undefined>(undefined),
			Period: new FormControl<string | null | undefined>(undefined),
			PointSpread: new FormControl<number | null | undefined>(undefined),
			PointSpreadAwayTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			PointSpreadHomeTeamMoneyLine: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			TimeRemainingMinutes: new FormControl<number | null | undefined>(undefined),
			TimeRemainingSeconds: new FormControl<number | null | undefined>(undefined),
			UnderPayout: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface News {
		Content?: string | null;
		NewsID?: number | null;
		PlayerID?: number | null;
		Source?: string | null;
		Team?: string | null;
		TeamID?: number | null;
		TermsOfUse?: string | null;
		Title?: string | null;
		Updated?: string | null;
		Url?: string | null;
	}
	export interface NewsFormProperties {
		Content: FormControl<string | null | undefined>,
		NewsID: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		Source: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		TermsOfUse: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateNewsFormGroup() {
		return new FormGroup<NewsFormProperties>({
			Content: new FormControl<string | null | undefined>(undefined),
			NewsID: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TermsOfUse: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OpponentSeason {
		Assists?: number | null;
		BenchPenaltyMinutes?: number | null;
		Blocks?: number | null;
		EmptyNetGoals?: number | null;
		FaceoffsLost?: number | null;
		FaceoffsWon?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsYahoo?: number | null;
		Games?: number | null;
		Giveaways?: number | null;
		GlobalTeamID?: number | null;
		Goals?: number | null;
		GoaltendingGoalsAgainst?: number | null;
		GoaltendingLosses?: number | null;
		GoaltendingMinutes?: number | null;
		GoaltendingOvertimeLosses?: number | null;
		GoaltendingSaves?: number | null;
		GoaltendingSeconds?: number | null;
		GoaltendingShotsAgainst?: number | null;
		GoaltendingShutouts?: number | null;
		GoaltendingWins?: number | null;
		HatTricks?: number | null;
		Hits?: number | null;
		Losses?: number | null;
		Minutes?: number | null;
		Name?: string | null;
		OpponentPosition?: string | null;
		OvertimeLosses?: number | null;
		PenaltyMinutes?: number | null;
		PlusMinus?: number | null;
		PowerPlayAssists?: number | null;
		PowerPlayGoals?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Seconds?: number | null;
		Shifts?: number | null;
		ShootoutGoals?: number | null;
		ShortHandedAssists?: number | null;
		ShortHandedGoals?: number | null;
		ShotsOnGoal?: number | null;
		Started?: number | null;
		StatID?: number | null;
		Takeaways?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		Updated?: string | null;
		Wins?: number | null;
	}
	export interface OpponentSeasonFormProperties {
		Assists: FormControl<number | null | undefined>,
		BenchPenaltyMinutes: FormControl<number | null | undefined>,
		Blocks: FormControl<number | null | undefined>,
		EmptyNetGoals: FormControl<number | null | undefined>,
		FaceoffsLost: FormControl<number | null | undefined>,
		FaceoffsWon: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		Giveaways: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Goals: FormControl<number | null | undefined>,
		GoaltendingGoalsAgainst: FormControl<number | null | undefined>,
		GoaltendingLosses: FormControl<number | null | undefined>,
		GoaltendingMinutes: FormControl<number | null | undefined>,
		GoaltendingOvertimeLosses: FormControl<number | null | undefined>,
		GoaltendingSaves: FormControl<number | null | undefined>,
		GoaltendingSeconds: FormControl<number | null | undefined>,
		GoaltendingShotsAgainst: FormControl<number | null | undefined>,
		GoaltendingShutouts: FormControl<number | null | undefined>,
		GoaltendingWins: FormControl<number | null | undefined>,
		HatTricks: FormControl<number | null | undefined>,
		Hits: FormControl<number | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OpponentPosition: FormControl<string | null | undefined>,
		OvertimeLosses: FormControl<number | null | undefined>,
		PenaltyMinutes: FormControl<number | null | undefined>,
		PlusMinus: FormControl<number | null | undefined>,
		PowerPlayAssists: FormControl<number | null | undefined>,
		PowerPlayGoals: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Seconds: FormControl<number | null | undefined>,
		Shifts: FormControl<number | null | undefined>,
		ShootoutGoals: FormControl<number | null | undefined>,
		ShortHandedAssists: FormControl<number | null | undefined>,
		ShortHandedGoals: FormControl<number | null | undefined>,
		ShotsOnGoal: FormControl<number | null | undefined>,
		Started: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Takeaways: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateOpponentSeasonFormGroup() {
		return new FormGroup<OpponentSeasonFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			BenchPenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			Blocks: new FormControl<number | null | undefined>(undefined),
			EmptyNetGoals: new FormControl<number | null | undefined>(undefined),
			FaceoffsLost: new FormControl<number | null | undefined>(undefined),
			FaceoffsWon: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			Giveaways: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Goals: new FormControl<number | null | undefined>(undefined),
			GoaltendingGoalsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingMinutes: new FormControl<number | null | undefined>(undefined),
			GoaltendingOvertimeLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingSaves: new FormControl<number | null | undefined>(undefined),
			GoaltendingSeconds: new FormControl<number | null | undefined>(undefined),
			GoaltendingShotsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingShutouts: new FormControl<number | null | undefined>(undefined),
			GoaltendingWins: new FormControl<number | null | undefined>(undefined),
			HatTricks: new FormControl<number | null | undefined>(undefined),
			Hits: new FormControl<number | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OpponentPosition: new FormControl<string | null | undefined>(undefined),
			OvertimeLosses: new FormControl<number | null | undefined>(undefined),
			PenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			PlusMinus: new FormControl<number | null | undefined>(undefined),
			PowerPlayAssists: new FormControl<number | null | undefined>(undefined),
			PowerPlayGoals: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Seconds: new FormControl<number | null | undefined>(undefined),
			Shifts: new FormControl<number | null | undefined>(undefined),
			ShootoutGoals: new FormControl<number | null | undefined>(undefined),
			ShortHandedAssists: new FormControl<number | null | undefined>(undefined),
			ShortHandedGoals: new FormControl<number | null | undefined>(undefined),
			ShotsOnGoal: new FormControl<number | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Takeaways: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Player {
		BirthCity?: string | null;
		BirthDate?: string | null;
		BirthState?: string | null;
		Catches?: string | null;
		DepthChartOrder?: number | null;
		DepthChartPosition?: string | null;
		DraftKingsName?: string | null;
		DraftKingsPlayerID?: number | null;
		FanDuelName?: string | null;
		FanDuelPlayerID?: number | null;
		FantasyAlarmPlayerID?: number | null;
		FantasyDraftName?: string | null;
		FantasyDraftPlayerID?: number | null;
		FirstName?: string | null;
		GlobalTeamID?: number | null;
		Height?: number | null;
		InjuryBodyPart?: string | null;
		InjuryNotes?: string | null;
		InjuryStartDate?: string | null;
		InjuryStatus?: string | null;
		Jersey?: number | null;
		LastName?: string | null;
		PhotoUrl?: string | null;
		PlayerID?: number | null;
		Position?: string | null;
		RotoWirePlayerID?: number | null;
		RotoworldPlayerID?: number | null;
		Shoots?: string | null;
		SportRadarPlayerID?: string | null;
		SportsDirectPlayerID?: number | null;
		StatsPlayerID?: number | null;
		Status?: string | null;
		Team?: string | null;
		TeamID?: number | null;
		UsaTodayHeadshotNoBackgroundUpdated?: string | null;
		UsaTodayHeadshotNoBackgroundUrl?: string | null;
		UsaTodayHeadshotUpdated?: string | null;
		UsaTodayHeadshotUrl?: string | null;
		UsaTodayPlayerID?: number | null;
		Weight?: number | null;
		XmlTeamPlayerID?: number | null;
		YahooName?: string | null;
		YahooPlayerID?: number | null;
	}
	export interface PlayerFormProperties {
		BirthCity: FormControl<string | null | undefined>,
		BirthDate: FormControl<string | null | undefined>,
		BirthState: FormControl<string | null | undefined>,
		Catches: FormControl<string | null | undefined>,
		DepthChartOrder: FormControl<number | null | undefined>,
		DepthChartPosition: FormControl<string | null | undefined>,
		DraftKingsName: FormControl<string | null | undefined>,
		DraftKingsPlayerID: FormControl<number | null | undefined>,
		FanDuelName: FormControl<string | null | undefined>,
		FanDuelPlayerID: FormControl<number | null | undefined>,
		FantasyAlarmPlayerID: FormControl<number | null | undefined>,
		FantasyDraftName: FormControl<string | null | undefined>,
		FantasyDraftPlayerID: FormControl<number | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Height: FormControl<number | null | undefined>,
		InjuryBodyPart: FormControl<string | null | undefined>,
		InjuryNotes: FormControl<string | null | undefined>,
		InjuryStartDate: FormControl<string | null | undefined>,
		InjuryStatus: FormControl<string | null | undefined>,
		Jersey: FormControl<number | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		RotoWirePlayerID: FormControl<number | null | undefined>,
		RotoworldPlayerID: FormControl<number | null | undefined>,
		Shoots: FormControl<string | null | undefined>,
		SportRadarPlayerID: FormControl<string | null | undefined>,
		SportsDirectPlayerID: FormControl<number | null | undefined>,
		StatsPlayerID: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		UsaTodayHeadshotNoBackgroundUpdated: FormControl<string | null | undefined>,
		UsaTodayHeadshotNoBackgroundUrl: FormControl<string | null | undefined>,
		UsaTodayHeadshotUpdated: FormControl<string | null | undefined>,
		UsaTodayHeadshotUrl: FormControl<string | null | undefined>,
		UsaTodayPlayerID: FormControl<number | null | undefined>,
		Weight: FormControl<number | null | undefined>,
		XmlTeamPlayerID: FormControl<number | null | undefined>,
		YahooName: FormControl<string | null | undefined>,
		YahooPlayerID: FormControl<number | null | undefined>,
	}
	export function CreatePlayerFormGroup() {
		return new FormGroup<PlayerFormProperties>({
			BirthCity: new FormControl<string | null | undefined>(undefined),
			BirthDate: new FormControl<string | null | undefined>(undefined),
			BirthState: new FormControl<string | null | undefined>(undefined),
			Catches: new FormControl<string | null | undefined>(undefined),
			DepthChartOrder: new FormControl<number | null | undefined>(undefined),
			DepthChartPosition: new FormControl<string | null | undefined>(undefined),
			DraftKingsName: new FormControl<string | null | undefined>(undefined),
			DraftKingsPlayerID: new FormControl<number | null | undefined>(undefined),
			FanDuelName: new FormControl<string | null | undefined>(undefined),
			FanDuelPlayerID: new FormControl<number | null | undefined>(undefined),
			FantasyAlarmPlayerID: new FormControl<number | null | undefined>(undefined),
			FantasyDraftName: new FormControl<string | null | undefined>(undefined),
			FantasyDraftPlayerID: new FormControl<number | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Height: new FormControl<number | null | undefined>(undefined),
			InjuryBodyPart: new FormControl<string | null | undefined>(undefined),
			InjuryNotes: new FormControl<string | null | undefined>(undefined),
			InjuryStartDate: new FormControl<string | null | undefined>(undefined),
			InjuryStatus: new FormControl<string | null | undefined>(undefined),
			Jersey: new FormControl<number | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			RotoWirePlayerID: new FormControl<number | null | undefined>(undefined),
			RotoworldPlayerID: new FormControl<number | null | undefined>(undefined),
			Shoots: new FormControl<string | null | undefined>(undefined),
			SportRadarPlayerID: new FormControl<string | null | undefined>(undefined),
			SportsDirectPlayerID: new FormControl<number | null | undefined>(undefined),
			StatsPlayerID: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			UsaTodayHeadshotNoBackgroundUpdated: new FormControl<string | null | undefined>(undefined),
			UsaTodayHeadshotNoBackgroundUrl: new FormControl<string | null | undefined>(undefined),
			UsaTodayHeadshotUpdated: new FormControl<string | null | undefined>(undefined),
			UsaTodayHeadshotUrl: new FormControl<string | null | undefined>(undefined),
			UsaTodayPlayerID: new FormControl<number | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
			XmlTeamPlayerID: new FormControl<number | null | undefined>(undefined),
			YahooName: new FormControl<string | null | undefined>(undefined),
			YahooPlayerID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlayerLine {
		LineNumber?: number | null;
		LineType?: string | null;
		Name?: string | null;
		PlayerID?: number | null;
		Position?: string | null;
		Shoots?: string | null;
	}
	export interface PlayerLineFormProperties {
		LineNumber: FormControl<number | null | undefined>,
		LineType: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		Shoots: FormControl<string | null | undefined>,
	}
	export function CreatePlayerLineFormGroup() {
		return new FormGroup<PlayerLineFormProperties>({
			LineNumber: new FormControl<number | null | undefined>(undefined),
			LineType: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			Shoots: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayerSeason {
		Assists?: number | null;
		BenchPenaltyMinutes?: number | null;
		Blocks?: number | null;
		EmptyNetGoals?: number | null;
		FaceoffsLost?: number | null;
		FaceoffsWon?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsYahoo?: number | null;
		Games?: number | null;
		Giveaways?: number | null;
		GlobalTeamID?: number | null;
		Goals?: number | null;
		GoaltendingGoalsAgainst?: number | null;
		GoaltendingLosses?: number | null;
		GoaltendingMinutes?: number | null;
		GoaltendingOvertimeLosses?: number | null;
		GoaltendingSaves?: number | null;
		GoaltendingSeconds?: number | null;
		GoaltendingShotsAgainst?: number | null;
		GoaltendingShutouts?: number | null;
		GoaltendingWins?: number | null;
		HatTricks?: number | null;
		Hits?: number | null;
		Minutes?: number | null;
		Name?: string | null;
		PenaltyMinutes?: number | null;
		PlayerID?: number | null;
		PlusMinus?: number | null;
		Position?: string | null;
		PowerPlayAssists?: number | null;
		PowerPlayGoals?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Seconds?: number | null;
		Shifts?: number | null;
		ShootoutGoals?: number | null;
		ShortHandedAssists?: number | null;
		ShortHandedGoals?: number | null;
		ShotsOnGoal?: number | null;
		Started?: number | null;
		StatID?: number | null;
		Takeaways?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		Updated?: string | null;
	}
	export interface PlayerSeasonFormProperties {
		Assists: FormControl<number | null | undefined>,
		BenchPenaltyMinutes: FormControl<number | null | undefined>,
		Blocks: FormControl<number | null | undefined>,
		EmptyNetGoals: FormControl<number | null | undefined>,
		FaceoffsLost: FormControl<number | null | undefined>,
		FaceoffsWon: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		Giveaways: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Goals: FormControl<number | null | undefined>,
		GoaltendingGoalsAgainst: FormControl<number | null | undefined>,
		GoaltendingLosses: FormControl<number | null | undefined>,
		GoaltendingMinutes: FormControl<number | null | undefined>,
		GoaltendingOvertimeLosses: FormControl<number | null | undefined>,
		GoaltendingSaves: FormControl<number | null | undefined>,
		GoaltendingSeconds: FormControl<number | null | undefined>,
		GoaltendingShotsAgainst: FormControl<number | null | undefined>,
		GoaltendingShutouts: FormControl<number | null | undefined>,
		GoaltendingWins: FormControl<number | null | undefined>,
		HatTricks: FormControl<number | null | undefined>,
		Hits: FormControl<number | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PenaltyMinutes: FormControl<number | null | undefined>,
		PlayerID: FormControl<number | null | undefined>,
		PlusMinus: FormControl<number | null | undefined>,
		Position: FormControl<string | null | undefined>,
		PowerPlayAssists: FormControl<number | null | undefined>,
		PowerPlayGoals: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Seconds: FormControl<number | null | undefined>,
		Shifts: FormControl<number | null | undefined>,
		ShootoutGoals: FormControl<number | null | undefined>,
		ShortHandedAssists: FormControl<number | null | undefined>,
		ShortHandedGoals: FormControl<number | null | undefined>,
		ShotsOnGoal: FormControl<number | null | undefined>,
		Started: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Takeaways: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
	}
	export function CreatePlayerSeasonFormGroup() {
		return new FormGroup<PlayerSeasonFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			BenchPenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			Blocks: new FormControl<number | null | undefined>(undefined),
			EmptyNetGoals: new FormControl<number | null | undefined>(undefined),
			FaceoffsLost: new FormControl<number | null | undefined>(undefined),
			FaceoffsWon: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			Giveaways: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Goals: new FormControl<number | null | undefined>(undefined),
			GoaltendingGoalsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingMinutes: new FormControl<number | null | undefined>(undefined),
			GoaltendingOvertimeLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingSaves: new FormControl<number | null | undefined>(undefined),
			GoaltendingSeconds: new FormControl<number | null | undefined>(undefined),
			GoaltendingShotsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingShutouts: new FormControl<number | null | undefined>(undefined),
			GoaltendingWins: new FormControl<number | null | undefined>(undefined),
			HatTricks: new FormControl<number | null | undefined>(undefined),
			Hits: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			PlayerID: new FormControl<number | null | undefined>(undefined),
			PlusMinus: new FormControl<number | null | undefined>(undefined),
			Position: new FormControl<string | null | undefined>(undefined),
			PowerPlayAssists: new FormControl<number | null | undefined>(undefined),
			PowerPlayGoals: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Seconds: new FormControl<number | null | undefined>(undefined),
			Shifts: new FormControl<number | null | undefined>(undefined),
			ShootoutGoals: new FormControl<number | null | undefined>(undefined),
			ShortHandedAssists: new FormControl<number | null | undefined>(undefined),
			ShortHandedGoals: new FormControl<number | null | undefined>(undefined),
			ShotsOnGoal: new FormControl<number | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Takeaways: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Season {
		ApiSeason?: string | null;
		Description?: string | null;
		EndYear?: number | null;
		PostSeasonStartDate?: string | null;
		RegularSeasonStartDate?: string | null;
		Season1?: number | null;
		SeasonType?: string | null;
		StartYear?: number | null;
	}
	export interface SeasonFormProperties {
		ApiSeason: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EndYear: FormControl<number | null | undefined>,
		PostSeasonStartDate: FormControl<string | null | undefined>,
		RegularSeasonStartDate: FormControl<string | null | undefined>,
		Season1: FormControl<number | null | undefined>,
		SeasonType: FormControl<string | null | undefined>,
		StartYear: FormControl<number | null | undefined>,
	}
	export function CreateSeasonFormGroup() {
		return new FormGroup<SeasonFormProperties>({
			ApiSeason: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EndYear: new FormControl<number | null | undefined>(undefined),
			PostSeasonStartDate: new FormControl<string | null | undefined>(undefined),
			RegularSeasonStartDate: new FormControl<string | null | undefined>(undefined),
			Season1: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<string | null | undefined>(undefined),
			StartYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Series {
		AwayTeamWins?: number | null;
		GameNumber?: number | null;
		HomeTeamWins?: number | null;
		MaxLength?: number | null;
	}
	export interface SeriesFormProperties {
		AwayTeamWins: FormControl<number | null | undefined>,
		GameNumber: FormControl<number | null | undefined>,
		HomeTeamWins: FormControl<number | null | undefined>,
		MaxLength: FormControl<number | null | undefined>,
	}
	export function CreateSeriesFormGroup() {
		return new FormGroup<SeriesFormProperties>({
			AwayTeamWins: new FormControl<number | null | undefined>(undefined),
			GameNumber: new FormControl<number | null | undefined>(undefined),
			HomeTeamWins: new FormControl<number | null | undefined>(undefined),
			MaxLength: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Stadium {
		Active?: boolean | null;
		Address?: string | null;
		Capacity?: number | null;
		City?: string | null;
		Country?: string | null;
		GeoLat?: number | null;
		GeoLong?: number | null;
		Name?: string | null;
		StadiumID?: number | null;
		State?: string | null;
		Zip?: string | null;
	}
	export interface StadiumFormProperties {
		Active: FormControl<boolean | null | undefined>,
		Address: FormControl<string | null | undefined>,
		Capacity: FormControl<number | null | undefined>,
		City: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		GeoLat: FormControl<number | null | undefined>,
		GeoLong: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		State: FormControl<string | null | undefined>,
		Zip: FormControl<string | null | undefined>,
	}
	export function CreateStadiumFormGroup() {
		return new FormGroup<StadiumFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			Address: new FormControl<string | null | undefined>(undefined),
			Capacity: new FormControl<number | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			GeoLat: new FormControl<number | null | undefined>(undefined),
			GeoLong: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			Zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Standing {
		City?: string | null;
		Conference?: string | null;
		ConferenceLosses?: number | null;
		ConferenceRank?: number | null;
		ConferenceWins?: number | null;
		Division?: string | null;
		DivisionLosses?: number | null;
		DivisionRank?: number | null;
		DivisionWins?: number | null;
		GlobalTeamID?: number | null;
		Key?: string | null;
		Losses?: number | null;
		Name?: string | null;
		OvertimeLosses?: number | null;
		Percentage?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		ShutoutWins?: number | null;
		TeamID?: number | null;
		Wins?: number | null;
	}
	export interface StandingFormProperties {
		City: FormControl<string | null | undefined>,
		Conference: FormControl<string | null | undefined>,
		ConferenceLosses: FormControl<number | null | undefined>,
		ConferenceRank: FormControl<number | null | undefined>,
		ConferenceWins: FormControl<number | null | undefined>,
		Division: FormControl<string | null | undefined>,
		DivisionLosses: FormControl<number | null | undefined>,
		DivisionRank: FormControl<number | null | undefined>,
		DivisionWins: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Key: FormControl<string | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OvertimeLosses: FormControl<number | null | undefined>,
		Percentage: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		ShutoutWins: FormControl<number | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateStandingFormGroup() {
		return new FormGroup<StandingFormProperties>({
			City: new FormControl<string | null | undefined>(undefined),
			Conference: new FormControl<string | null | undefined>(undefined),
			ConferenceLosses: new FormControl<number | null | undefined>(undefined),
			ConferenceRank: new FormControl<number | null | undefined>(undefined),
			ConferenceWins: new FormControl<number | null | undefined>(undefined),
			Division: new FormControl<string | null | undefined>(undefined),
			DivisionLosses: new FormControl<number | null | undefined>(undefined),
			DivisionRank: new FormControl<number | null | undefined>(undefined),
			DivisionWins: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OvertimeLosses: new FormControl<number | null | undefined>(undefined),
			Percentage: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			ShutoutWins: new FormControl<number | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Team {
		Active?: boolean | null;
		City?: string | null;
		Conference?: string | null;
		Division?: string | null;
		GlobalTeamID?: number | null;
		Key?: string | null;
		Name?: string | null;
		PrimaryColor?: string | null;
		QuaternaryColor?: string | null;
		SecondaryColor?: string | null;
		StadiumID?: number | null;
		TeamID?: number | null;
		TertiaryColor?: string | null;
		WikipediaLogoUrl?: string | null;
		WikipediaWordMarkUrl?: string | null;
	}
	export interface TeamFormProperties {
		Active: FormControl<boolean | null | undefined>,
		City: FormControl<string | null | undefined>,
		Conference: FormControl<string | null | undefined>,
		Division: FormControl<string | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Key: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PrimaryColor: FormControl<string | null | undefined>,
		QuaternaryColor: FormControl<string | null | undefined>,
		SecondaryColor: FormControl<string | null | undefined>,
		StadiumID: FormControl<number | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		TertiaryColor: FormControl<string | null | undefined>,
		WikipediaLogoUrl: FormControl<string | null | undefined>,
		WikipediaWordMarkUrl: FormControl<string | null | undefined>,
	}
	export function CreateTeamFormGroup() {
		return new FormGroup<TeamFormProperties>({
			Active: new FormControl<boolean | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			Conference: new FormControl<string | null | undefined>(undefined),
			Division: new FormControl<string | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PrimaryColor: new FormControl<string | null | undefined>(undefined),
			QuaternaryColor: new FormControl<string | null | undefined>(undefined),
			SecondaryColor: new FormControl<string | null | undefined>(undefined),
			StadiumID: new FormControl<number | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			TertiaryColor: new FormControl<string | null | undefined>(undefined),
			WikipediaLogoUrl: new FormControl<string | null | undefined>(undefined),
			WikipediaWordMarkUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamLine {
		EvenStrengthLines?: Array<PlayerLine>;
		FullName?: string | null;
		Key?: string | null;
		PowerPlayLines?: Array<PlayerLine>;
		TeamID?: number | null;
	}
	export interface TeamLineFormProperties {
		FullName: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
	}
	export function CreateTeamLineFormGroup() {
		return new FormGroup<TeamLineFormProperties>({
			FullName: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamSeason {
		Assists?: number | null;
		BenchPenaltyMinutes?: number | null;
		Blocks?: number | null;
		EmptyNetGoals?: number | null;
		FaceoffsLost?: number | null;
		FaceoffsWon?: number | null;
		FantasyPoints?: number | null;
		FantasyPointsDraftKings?: number | null;
		FantasyPointsFanDuel?: number | null;
		FantasyPointsFantasyDraft?: number | null;
		FantasyPointsYahoo?: number | null;
		Games?: number | null;
		Giveaways?: number | null;
		GlobalTeamID?: number | null;
		Goals?: number | null;
		GoaltendingGoalsAgainst?: number | null;
		GoaltendingLosses?: number | null;
		GoaltendingMinutes?: number | null;
		GoaltendingOvertimeLosses?: number | null;
		GoaltendingSaves?: number | null;
		GoaltendingSeconds?: number | null;
		GoaltendingShotsAgainst?: number | null;
		GoaltendingShutouts?: number | null;
		GoaltendingWins?: number | null;
		HatTricks?: number | null;
		Hits?: number | null;
		Losses?: number | null;
		Minutes?: number | null;
		Name?: string | null;
		OpponentPosition?: string | null;
		OpponentStat?: OpponentSeason;
		OvertimeLosses?: number | null;
		PenaltyMinutes?: number | null;
		PlusMinus?: number | null;
		PowerPlayAssists?: number | null;
		PowerPlayGoals?: number | null;
		Season?: number | null;
		SeasonType?: number | null;
		Seconds?: number | null;
		Shifts?: number | null;
		ShootoutGoals?: number | null;
		ShortHandedAssists?: number | null;
		ShortHandedGoals?: number | null;
		ShotsOnGoal?: number | null;
		Started?: number | null;
		StatID?: number | null;
		Takeaways?: number | null;
		Team?: string | null;
		TeamID?: number | null;
		Updated?: string | null;
		Wins?: number | null;
	}
	export interface TeamSeasonFormProperties {
		Assists: FormControl<number | null | undefined>,
		BenchPenaltyMinutes: FormControl<number | null | undefined>,
		Blocks: FormControl<number | null | undefined>,
		EmptyNetGoals: FormControl<number | null | undefined>,
		FaceoffsLost: FormControl<number | null | undefined>,
		FaceoffsWon: FormControl<number | null | undefined>,
		FantasyPoints: FormControl<number | null | undefined>,
		FantasyPointsDraftKings: FormControl<number | null | undefined>,
		FantasyPointsFanDuel: FormControl<number | null | undefined>,
		FantasyPointsFantasyDraft: FormControl<number | null | undefined>,
		FantasyPointsYahoo: FormControl<number | null | undefined>,
		Games: FormControl<number | null | undefined>,
		Giveaways: FormControl<number | null | undefined>,
		GlobalTeamID: FormControl<number | null | undefined>,
		Goals: FormControl<number | null | undefined>,
		GoaltendingGoalsAgainst: FormControl<number | null | undefined>,
		GoaltendingLosses: FormControl<number | null | undefined>,
		GoaltendingMinutes: FormControl<number | null | undefined>,
		GoaltendingOvertimeLosses: FormControl<number | null | undefined>,
		GoaltendingSaves: FormControl<number | null | undefined>,
		GoaltendingSeconds: FormControl<number | null | undefined>,
		GoaltendingShotsAgainst: FormControl<number | null | undefined>,
		GoaltendingShutouts: FormControl<number | null | undefined>,
		GoaltendingWins: FormControl<number | null | undefined>,
		HatTricks: FormControl<number | null | undefined>,
		Hits: FormControl<number | null | undefined>,
		Losses: FormControl<number | null | undefined>,
		Minutes: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OpponentPosition: FormControl<string | null | undefined>,
		OvertimeLosses: FormControl<number | null | undefined>,
		PenaltyMinutes: FormControl<number | null | undefined>,
		PlusMinus: FormControl<number | null | undefined>,
		PowerPlayAssists: FormControl<number | null | undefined>,
		PowerPlayGoals: FormControl<number | null | undefined>,
		Season: FormControl<number | null | undefined>,
		SeasonType: FormControl<number | null | undefined>,
		Seconds: FormControl<number | null | undefined>,
		Shifts: FormControl<number | null | undefined>,
		ShootoutGoals: FormControl<number | null | undefined>,
		ShortHandedAssists: FormControl<number | null | undefined>,
		ShortHandedGoals: FormControl<number | null | undefined>,
		ShotsOnGoal: FormControl<number | null | undefined>,
		Started: FormControl<number | null | undefined>,
		StatID: FormControl<number | null | undefined>,
		Takeaways: FormControl<number | null | undefined>,
		Team: FormControl<string | null | undefined>,
		TeamID: FormControl<number | null | undefined>,
		Updated: FormControl<string | null | undefined>,
		Wins: FormControl<number | null | undefined>,
	}
	export function CreateTeamSeasonFormGroup() {
		return new FormGroup<TeamSeasonFormProperties>({
			Assists: new FormControl<number | null | undefined>(undefined),
			BenchPenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			Blocks: new FormControl<number | null | undefined>(undefined),
			EmptyNetGoals: new FormControl<number | null | undefined>(undefined),
			FaceoffsLost: new FormControl<number | null | undefined>(undefined),
			FaceoffsWon: new FormControl<number | null | undefined>(undefined),
			FantasyPoints: new FormControl<number | null | undefined>(undefined),
			FantasyPointsDraftKings: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFanDuel: new FormControl<number | null | undefined>(undefined),
			FantasyPointsFantasyDraft: new FormControl<number | null | undefined>(undefined),
			FantasyPointsYahoo: new FormControl<number | null | undefined>(undefined),
			Games: new FormControl<number | null | undefined>(undefined),
			Giveaways: new FormControl<number | null | undefined>(undefined),
			GlobalTeamID: new FormControl<number | null | undefined>(undefined),
			Goals: new FormControl<number | null | undefined>(undefined),
			GoaltendingGoalsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingMinutes: new FormControl<number | null | undefined>(undefined),
			GoaltendingOvertimeLosses: new FormControl<number | null | undefined>(undefined),
			GoaltendingSaves: new FormControl<number | null | undefined>(undefined),
			GoaltendingSeconds: new FormControl<number | null | undefined>(undefined),
			GoaltendingShotsAgainst: new FormControl<number | null | undefined>(undefined),
			GoaltendingShutouts: new FormControl<number | null | undefined>(undefined),
			GoaltendingWins: new FormControl<number | null | undefined>(undefined),
			HatTricks: new FormControl<number | null | undefined>(undefined),
			Hits: new FormControl<number | null | undefined>(undefined),
			Losses: new FormControl<number | null | undefined>(undefined),
			Minutes: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OpponentPosition: new FormControl<string | null | undefined>(undefined),
			OvertimeLosses: new FormControl<number | null | undefined>(undefined),
			PenaltyMinutes: new FormControl<number | null | undefined>(undefined),
			PlusMinus: new FormControl<number | null | undefined>(undefined),
			PowerPlayAssists: new FormControl<number | null | undefined>(undefined),
			PowerPlayGoals: new FormControl<number | null | undefined>(undefined),
			Season: new FormControl<number | null | undefined>(undefined),
			SeasonType: new FormControl<number | null | undefined>(undefined),
			Seconds: new FormControl<number | null | undefined>(undefined),
			Shifts: new FormControl<number | null | undefined>(undefined),
			ShootoutGoals: new FormControl<number | null | undefined>(undefined),
			ShortHandedAssists: new FormControl<number | null | undefined>(undefined),
			ShortHandedGoals: new FormControl<number | null | undefined>(undefined),
			ShotsOnGoal: new FormControl<number | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			StatID: new FormControl<number | null | undefined>(undefined),
			Takeaways: new FormControl<number | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
			TeamID: new FormControl<number | null | undefined>(undefined),
			Updated: new FormControl<string | null | undefined>(undefined),
			Wins: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Teams (All)
		 * Get {format}/AllTeams
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Team>} 
		 */
		TeamsAll(format: TeamsAllFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/AllTeams', {});
		}

		/**
		 * Are Games In Progress
		 * Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.
		 * Get {format}/AreAnyGamesInProgress
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {boolean} 
		 */
		AreGamesInProgress(format: TeamsAllFormat): Observable<boolean> {
			return this.http.get<boolean>(this.baseUri + format + '/AreAnyGamesInProgress', {});
		}

		/**
		 * Box Score
		 * Get {format}/BoxScore/{gameid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} gameid The GameID of an NHL game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code> or <code>16905</code>
		 * @return {BoxScore} 
		 */
		BoxScore(format: TeamsAllFormat, gameid: string): Observable<BoxScore> {
			return this.http.get<BoxScore>(this.baseUri + format + '/BoxScore/' + (gameid == null ? '' : encodeURIComponent(gameid)) + '', {});
		}

		/**
		 * Box Scores by Date
		 * Get {format}/BoxScores/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 *  <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.
		 *  
		 * @return {Array<BoxScore>} 
		 */
		BoxScoresByDate(format: TeamsAllFormat, date: string): Observable<Array<BoxScore>> {
			return this.http.get<Array<BoxScore>>(this.baseUri + format + '/BoxScores/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Box Scores by Date Delta
		 * Get {format}/BoxScoresDelta/{date}/{minutes}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 *  <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.
		 *  
		 * @param {string} minutes Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:
		 *  <code>1</code> or <code>2</code>.
		 *  
		 * @return {Array<BoxScore>} 
		 */
		BoxScoresByDateDelta(format: TeamsAllFormat, date: string, minutes: string): Observable<Array<BoxScore>> {
			return this.http.get<Array<BoxScore>>(this.baseUri + format + '/BoxScoresDelta/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (minutes == null ? '' : encodeURIComponent(minutes)) + '', {});
		}

		/**
		 * Current Season
		 * Get {format}/CurrentSeason
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Season} 
		 */
		CurrentSeason(format: TeamsAllFormat): Observable<Season> {
			return this.http.get<Season>(this.baseUri + format + '/CurrentSeason', {});
		}

		/**
		 * DFS Slates by Date
		 * Get {format}/DfsSlatesByDate/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2017-DEC-01</code>, <code>2018-FEB-15</code>.
		 * @return {Array<DfsSlate>} 
		 */
		DfsSlatesByDate(format: TeamsAllFormat, date: string): Observable<Array<DfsSlate>> {
			return this.http.get<Array<DfsSlate>>(this.baseUri + format + '/DfsSlatesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Player Details by Free Agent
		 * Get {format}/FreeAgents
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Player>} 
		 */
		PlayerDetailsByFreeAgent(format: TeamsAllFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/FreeAgents', {});
		}

		/**
		 * Schedules
		 * Get {format}/Games/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
		 * @return {Array<Game>} 
		 */
		Schedules(format: TeamsAllFormat, season: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/Games/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Games by Date
		 * Get {format}/GamesByDate/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 *  <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.
		 *  
		 * @return {Array<Game>} 
		 */
		GamesByDate(format: TeamsAllFormat, date: string): Observable<Array<Game>> {
			return this.http.get<Array<Game>>(this.baseUri + format + '/GamesByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Line Combinations by Season
		 * Get {format}/LinesBySeason/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 *  <br>Examples: <code>2016</code>, <code>2017</code>.
		 *  
		 * @return {Array<TeamLine>} 
		 */
		LineCombinationsBySeason(format: TeamsAllFormat, season: string): Observable<Array<TeamLine>> {
			return this.http.get<Array<TeamLine>>(this.baseUri + format + '/LinesBySeason/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * News
		 * Get {format}/News
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<News>} 
		 */
		News(format: TeamsAllFormat): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/News', {});
		}

		/**
		 * News by Date
		 * Get {format}/NewsByDate/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the news.
		 *  <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.
		 *  
		 * @return {Array<News>} 
		 */
		NewsByDate(format: TeamsAllFormat, date: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/NewsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * News by Player
		 * Get {format}/NewsByPlayerID/{playerid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 *  Example:<code>10000507</code>.
		 *  
		 * @return {Array<News>} 
		 */
		NewsByPlayer(format: TeamsAllFormat, playerid: string): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + format + '/NewsByPlayerID/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Details by Player
		 * Get {format}/Player/{playerid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>30000007</code>.
		 * @return {Player} 
		 */
		PlayerDetailsByPlayer(format: TeamsAllFormat, playerid: string): Observable<Player> {
			return this.http.get<Player>(this.baseUri + format + '/Player/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Game Stats by Date
		 * Get {format}/PlayerGameStatsByDate/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 *  <br>Examples: <code>2017-OCT-31</code>, <code>2018-FEB-15</code>.
		 *  
		 * @return {Array<PlayerGame>} 
		 */
		PlayerGameStatsByDate(format: TeamsAllFormat, date: string): Observable<Array<PlayerGame>> {
			return this.http.get<Array<PlayerGame>>(this.baseUri + format + '/PlayerGameStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Player Game Stats by Player
		 * Get {format}/PlayerGameStatsByPlayer/{date}/{playerid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 * <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.
		 *  
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>30000378</code>.
		 * @return {PlayerGame} 
		 */
		PlayerGameStatsByPlayer(format: TeamsAllFormat, date: string, playerid: string): Observable<PlayerGame> {
			return this.http.get<PlayerGame>(this.baseUri + format + '/PlayerGameStatsByPlayer/' + (date == null ? '' : encodeURIComponent(date)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Game Logs By Season
		 * Get {format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Season to get games from. Example <code>2019POST</code>, <code>2020</code>
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>30000651</code>.
		 * @param {string} numberofgames How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>
		 * @return {Array<PlayerGame>} 
		 */
		PlayerGameLogsBySeason(format: TeamsAllFormat, season: string, playerid: string, numberofgames: string): Observable<Array<PlayerGame>> {
			return this.http.get<Array<PlayerGame>>(this.baseUri + format + '/PlayerGameStatsBySeason/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '/' + (numberofgames == null ? '' : encodeURIComponent(numberofgames)) + '', {});
		}

		/**
		 * Player Season Stats
		 * Get {format}/PlayerSeasonStats/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 *  <br>Examples: <code>2016</code>, <code>2017</code>.
		 *  
		 * @return {Array<PlayerSeason>} 
		 */
		PlayerSeasonStats(format: TeamsAllFormat, season: string): Observable<Array<PlayerSeason>> {
			return this.http.get<Array<PlayerSeason>>(this.baseUri + format + '/PlayerSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Player Season Stats By Player
		 * Get {format}/PlayerSeasonStatsByPlayer/{season}/{playerid}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 *  <br>Examples: <code>2016</code>, <code>2017</code>.
		 *  
		 * @param {string} playerid Unique FantasyData Player ID.
		 * Example:<code>30000378</code>.
		 * @return {PlayerSeason} 
		 */
		PlayerSeasonStatsByPlayer(format: TeamsAllFormat, season: string, playerid: string): Observable<PlayerSeason> {
			return this.http.get<PlayerSeason>(this.baseUri + format + '/PlayerSeasonStatsByPlayer/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (playerid == null ? '' : encodeURIComponent(playerid)) + '', {});
		}

		/**
		 * Player Season Stats by Team
		 * Get {format}/PlayerSeasonStatsByTeam/{season}/{team}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 *  <br>Examples: <code>2016</code>, <code>2017</code>.
		 *  
		 * @param {string} team The abbreviation of the requested team.
		 *  <br>Examples: <code>SF</code>, <code>NYY</code>.
		 *  
		 * @return {Array<PlayerSeason>} 
		 */
		PlayerSeasonStatsByTeam(format: TeamsAllFormat, season: string, team: string): Observable<Array<PlayerSeason>> {
			return this.http.get<Array<PlayerSeason>>(this.baseUri + format + '/PlayerSeasonStatsByTeam/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Player Details by Active
		 * Get {format}/Players
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Player>} 
		 */
		PlayerDetailsByActive(format: TeamsAllFormat): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players', {});
		}

		/**
		 * Players by Team
		 * Get {format}/Players/{team}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} team The abbreviation of the requested team.
		 *  <br>Examples: <code>SF</code>, <code>NYY</code>.
		 *  
		 * @return {Array<Player>} 
		 */
		PlayersByTeam(format: TeamsAllFormat, team: string): Observable<Array<Player>> {
			return this.http.get<Array<Player>>(this.baseUri + format + '/Players/' + (team == null ? '' : encodeURIComponent(team)) + '', {});
		}

		/**
		 * Stadiums
		 * Get {format}/Stadiums
		 * @param {StadiumsFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Stadium>} 
		 */
		Stadiums(format: StadiumsFormat): Observable<Array<Stadium>> {
			return this.http.get<Array<Stadium>>(this.baseUri + format + '/Stadiums', {});
		}

		/**
		 * Standings
		 * Get {format}/Standings/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 *  <br>Examples: <code>2016</code>, <code>2017</code>.
		 *  
		 * @return {Array<Standing>} 
		 */
		Standings(format: TeamsAllFormat, season: string): Observable<Array<Standing>> {
			return this.http.get<Array<Standing>>(this.baseUri + format + '/Standings/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Team Game Stats by Date
		 * Get {format}/TeamGameStatsByDate/{date}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} date The date of the game(s).
		 *  <br>Examples: <code>2018-JAN-31</code>, <code>2017-OCT-01</code>.
		 *  
		 * @return {Array<TeamGame>} 
		 */
		TeamGameStatsByDate(format: TeamsAllFormat, date: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsByDate/' + (date == null ? '' : encodeURIComponent(date)) + '', {});
		}

		/**
		 * Team Game Logs By Season
		 * Game by game log of total team statistics.
		 * Get {format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Season to get games from. Example <code>2019POST</code>, <code>2020</code>
		 * @param {string} teamid Unique ID of team.  Example <code> 8 </code>
		 * @param {string} numberofgames How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>
		 * @return {Array<TeamGame>} 
		 */
		TeamGameLogsBySeason(format: TeamsAllFormat, season: string, teamid: string, numberofgames: string): Observable<Array<TeamGame>> {
			return this.http.get<Array<TeamGame>>(this.baseUri + format + '/TeamGameStatsBySeason/' + (season == null ? '' : encodeURIComponent(season)) + '/' + (teamid == null ? '' : encodeURIComponent(teamid)) + '/' + (numberofgames == null ? '' : encodeURIComponent(numberofgames)) + '', {});
		}

		/**
		 * Team Season Stats
		 * Get {format}/TeamSeasonStats/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 *  <br>Examples: <code>2016</code>, <code>2017</code>.
		 *  
		 * @return {Array<TeamSeason>} 
		 */
		TeamSeasonStats(format: TeamsAllFormat, season: string): Observable<Array<TeamSeason>> {
			return this.http.get<Array<TeamSeason>>(this.baseUri + format + '/TeamSeasonStats/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Team Stats Allowed by Position
		 * Get {format}/TeamStatsAllowedByPosition/{season}
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @param {string} season Year of the season.
		 *  <br>Examples: <code>2016</code>, <code>2017</code>.
		 *  
		 * @return {Array<TeamSeason>} 
		 */
		TeamStatsAllowedByPosition(format: TeamsAllFormat, season: string): Observable<Array<TeamSeason>> {
			return this.http.get<Array<TeamSeason>>(this.baseUri + format + '/TeamStatsAllowedByPosition/' + (season == null ? '' : encodeURIComponent(season)) + '', {});
		}

		/**
		 * Teams (Active)
		 * Get {format}/teams
		 * @param {TeamsAllFormat} format Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
		 * @return {Array<Team>} 
		 */
		TeamsActive(format: TeamsAllFormat): Observable<Array<Team>> {
			return this.http.get<Array<Team>>(this.baseUri + format + '/teams', {});
		}
	}

	export enum TeamsAllFormat { XML = 0, JSON = 1 }

	export enum StadiumsFormat { xml = 0, json = 1 }

}

