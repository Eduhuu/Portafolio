import { Container } from "@mui/system";
export default function MainContainer({ children, ...props }: Props) {
  return (
    <Container className="min-h-full">
      {children}
    </Container>
  )
}
