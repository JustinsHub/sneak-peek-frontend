import { ChangeEvent, useState } from 'react' 

const useFormData = (data: any) => { //change type to correct type on input
    const [formData, setFormData] = useState(data)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.target
        //grabs all of the existing state and add on the key: (name of input) value: (user input)
        setFormData((state: {}) => ({...state, [name]: value}))
    }
    return [formData, handleChange]
}

export default useFormData