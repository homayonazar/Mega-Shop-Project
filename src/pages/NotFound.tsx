import Container from "../components/Container"


export default function NotFound() {
  return (
    <div className="bg-[var(--bg)]">
    <Container>
        <div className="py-20  w-full h-auto rounded-2xl flex flex-col justify-center">
        <p className="text-8xl text-center">404 NOT FOUND</p>
        <span className="mt-5 text-lg text-center ">Unfortonatly we cant find anything , please enter valid url</span>
    </div>
    </Container>
    </div>
  )
}