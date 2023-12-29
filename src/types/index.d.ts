export type AuthType = {
    email?: string
    password?: string
}

export type ProductType = {
    name: string
    price: number
}

export type GenderType = {
    title: string
    value: string
}

export type InputType = {
    handleChange: (e: any) => void;
    name: string;
    type: string;
    title: string;
    required?: boolean
  }

  export type JobRequestParamType = {
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  }

  export type JobRequestType = {
    arg?: JobRequestParamType
  }