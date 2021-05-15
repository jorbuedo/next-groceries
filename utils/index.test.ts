import { parseUriTemplate, parseUriTemplateWithQuery } from '.'

describe('parseUriTemplate', () => {
  it('replaces :params with params object', () => {
    const templates = ['/:resource/:id', '/test/:foo/:bar', '/param/not/:there']
    const params = {
      resource: 'grocery',
      id: '1',
      foo: 'oof',
      bar: 'rab',
    }
    const expected = ['/grocery/1', '/test/oof/rab', '/param/not/:there']

    expect(expected).toEqual(
      templates.map((template) => parseUriTemplate(template, params)),
    )
  })
})

describe('parseUriTemplateWithQuery', () => {
  it('replaces :params with params object and adds search query', () => {
    const templates = ['/:resource/:id', '/test/:foo/:bar', '/param/not/:there']
    const params = {
      resource: 'grocery',
      id: '1',
      foo: 'oof',
      bar: 'rab',
    }
    const query = {
      foo: 'bar',
      bar: 'foo',
    }
    const expected = [
      '/grocery/1?foo=bar&bar=foo',
      '/test/oof/rab?foo=bar&bar=foo',
      '/param/not/:there?foo=bar&bar=foo',
    ]

    expect(expected).toEqual(
      templates.map((template) =>
        parseUriTemplateWithQuery(template, { params, query }),
      ),
    )
  })
})
