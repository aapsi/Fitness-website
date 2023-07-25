import React from 'react'

type Props = {
    name: string;
    description?: string;
    image: string;
}

const Class = ({ name, description, image }: Props) => {
    const overlayStyles = `ml-[3px] mt-4 mr-6 alsolute z-30 flex h-[338px] w-[400px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90 rounded-md`;

    return (
    <div className='relative inline-block h-[350px] w-[420px]'>
        <div className={overlayStyles}>
            <h2 className="text-xl font-bold mb-5">{name}</h2>
            <p className="text-sm">{description}</p>
        </div>

    </div>
  )
}

export default Class