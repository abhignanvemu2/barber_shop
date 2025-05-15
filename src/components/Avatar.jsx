import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarDemo(props) {
    const { className, img } = props
  return (
    <Avatar className={className}>
      <AvatarImage src={img ? img :"https://github.com/shadcn.png"} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
