import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('array ts ', () => {
    const names: string[] = ['eko', 'alex', 'joko']
    const values: number[] = [1, 2, 3]
    console.info(names)
    console.info(values)

    const hobbies: ReadonlyArray<string> = ['reading', 'listening']
    console.info(hobbies)

    const person: readonly [string, string, number] = ['eko', 'alex', 30]
    console.info(person)
  })
})
