import { DiaryEntry, NonSensitiveInfoDairyEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDairyEntry[] => diaries

export const addEntry = (): undefined => undefined
