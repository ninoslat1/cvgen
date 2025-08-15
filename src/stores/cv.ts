import { atom } from 'nanostores'
import type { data } from './sidebar'

export const cvTitle = atom('Curriculum Vitae')
export const activeSection = atom<(typeof data)[number]["label"]>("Personal Info")