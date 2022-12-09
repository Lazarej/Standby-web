

export default function GlobalInput (props){

    return[
        <div className="mb-5">
            <p className="font-robotoCB uppercase">{props.label}</p>
            <div className="border  border-lightGrey border-w h-11 w-64 rounded-md input">
            <input
            className=" h-full w-full pl-3 outline-none" 
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            />
            </div>
        </div>
    ]

}