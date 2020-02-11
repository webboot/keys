import path from 'path'
import fs from 'fs'

import { is } from '@magic/test'

import key, { fingerprint, armored } from '../src/index.mjs'

const keyPath = path.join(process.cwd(), 'src', 'webboot.asc')

const pubKeyFileString = fs.readFileSync(keyPath, 'utf8')

export default [
  { fn: pubKeyFileString, expect: is.len.lt(10), info: 'webboot.asc is not empty' },
  {
    fn: pubKeyFileString.trim(),
    expect: armored.trim(),
    info: 'webboot.asc equals armored js export',
  },
  {
    fn: key.fingerprint,
    expect: fingerprint,
    info: 'key.fingerprint and export fingerprint match',
  },
]
