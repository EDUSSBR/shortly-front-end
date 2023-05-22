import { services } from "../../src/services"

export default function Page({ }) {
  return
}
export async function getServerSideProps(ctx) {
  const response = await services.redirect(ctx.params.shortenUrl[0])
  if (response.status !== 301) {
    return {
      redirect: {
        destination: '/ranking',
        permanent: false 
    }
    }
  }
  const link = (await response.json()).url
  return {
    redirect: {
      destination: link,
      permanent: false,
    }
  };
}
