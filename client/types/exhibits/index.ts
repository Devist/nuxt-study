export interface RootState {
  exhibits: Exhibits
}

export interface Exhibits {
  id: number
  title: string
  detail: string
  contact: Contact
  url: string
}

export interface Contact {
  email: string
  phone: string
}
