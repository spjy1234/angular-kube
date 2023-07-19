export interface Users {
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: null
  ID: string
  username: string
  email: string
  password: string
}

export interface AllService {
  message: string
  status: string
  data: Users[]
}

export interface TestAllService {
  message: string
  status: string
  data: Users
}
