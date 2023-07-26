import {Input} from "../../components/ui/Input"
import { Button } from "../../components/ui/Button"
function Form() {
  return (
    <>
        <form className="bg-white h-[60%] sm:w-[45%] w-[90%] max-w-[700px] self-center rounded-2xl flex flex-col justify-center gap-5 p-8">
            <h2 className="self-center">اطلاعات طراحی صفحه</h2>
           <div>
           <Input className={"flex flex-col items-start gap-1"} height={"10"} width={"full"} label={"عنوان صفحه خود را ورد کنید"} placeholder={"عنوان صفحه"}
           paragraph={"عنوان صفحه ، تگ عنوان Html است"}
           ></Input>
           </div>
           <div>
           <div className="sm:grid-cols-2 grid grid-row-2 gap-3">
            <Input className={"flex flex-col items-start gap-1"} height={"10"} width={"full"} label={"نام صفحه خود را وارد کنید (فارسی)"} placeholder={"نام صفحه"}></Input>
            <Input className={"flex flex-col items-start gap-1"} height={"10"} width={"full"} label={"نام صفحه خود را وارد کنید (انگلیسی)"} placeholder={"Page Name"}></Input>
           </div>
           
            <Input className={"flex flex-row-reverse justify-end items-center"} height={"2"} width={"2"} label={"در طراحی نمایش داده شود"} type={"checkbox"}></Input>
          
           </div>

           <Button className={"bg-blue-600 rounded-xl text-white p-4 w-full text-center"} content={"ذخیره و شروع طراحی"}></Button>
        </form>
    </>
  )
}
 
export  {Form}