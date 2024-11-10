import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 style={{ fontSize: '100px', fontWeight: 'bold', textDecoration: 'underline' }}>{children}</h1>,
    ...components,
  }
}