import fs from 'fs'
import {parse} from 'css'
import path from 'path'
import stylus from 'stylus'
import test from 'tape'
import gridus from '../index'

const testPath = path.join(__dirname, './fixtures')

function getActualOutput(file) {
  let actualOutput = ''

  stylus(fs.readFileSync(path.join(testPath, file), 'utf8'))
    .use(gridus())
    .render((err, css) => {
      if (err) {
        actualOutput = err
      }
      actualOutput = css
    })

  return JSON.stringify(parse(actualOutput))
}

function getExpectedOutput(file) {
  const expectedOutput =
    fs.readFileSync(path.join(testPath, 'expected', file), 'utf8')

  return JSON.stringify(parse(expectedOutput))
}

test('align', t => {
  const actual = getActualOutput('align.styl')
  const expected = getExpectedOutput('align.css')

  t.equal(actual, expected)
  t.end()
})

test('cell', t => {
  const actual = getActualOutput('cell.styl')
  const expected = getExpectedOutput('cell.css')

  t.equal(actual, expected)
  t.end()
})

test('column', t => {
  const actual = getActualOutput('cell.styl')
  const expected = getExpectedOutput('cell.css')

  t.equal(actual, expected)
  t.end()
})

test('gutter', t => {
  const actual = getActualOutput('gutter.styl')
  const expected = getExpectedOutput('gutter.css')

  t.equal(actual, expected)
  t.end()
})

test('justify', t => {
  const actual = getActualOutput('justify.styl')
  const expected = getExpectedOutput('justify.css')

  t.equal(actual, expected)
  t.end()
})

test('offset', t => {
  const actual = getActualOutput('offset.styl')
  const expected = getExpectedOutput('offset.css')

  t.equal(actual, expected)
  t.end()
})

test('row', t => {
  const actual = getActualOutput('row.styl')
  const expected = getExpectedOutput('row.css')

  t.equal(actual, expected)
  t.end()
})
