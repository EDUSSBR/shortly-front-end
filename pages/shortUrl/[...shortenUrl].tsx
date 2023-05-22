import { services } from "../../src/services"

export default function Page({ }) {
  return
}
export async function getServerSideProps(ctx) {
  try {
    const response = await services.redirect(ctx.params.shortenUrl[0])
    if (response.status !== 301) {
      throw ""
    }
    const { url } = await response.json()
    return {
      redirect: {
        destination: url,
        permanent: false,
      }
    };
  } catch (e) {
    return {
      redirect: {
        destination: '/ranking',
        permanent: false
      }
    }
  }
}
