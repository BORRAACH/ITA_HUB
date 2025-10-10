interface link {
  name: string,
  path: string
}

type links = Array<link>

const Links: links = [
  { name: 'time', path: '/' },
  { name: 'dashboard', path: '/dashboard' },
  { name: 'example', path: '#' },
  { name: 'example', path: '#' }
]

export default Links 
