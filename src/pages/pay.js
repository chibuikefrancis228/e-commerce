
import StripeCheckout from 'react-stripe-checkout'
const KEY =
 "pk_test_51OM94aGxlsELPhuXX4xE2tmFmGTiU0Xt9JAghycaHLafKch8LJUBJB9Uqr6f4AJ6K8LUDtDSP0gfpzguJHEsIawj00PETJZSo2"

const pay = () => {
    const onToken = (token) =>{
        console.log(token)
    }
  return (
    <div
    style={{
        height: "100v",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }}
    >
    <StripeCheckout>
        name = "Ok sales"
        image = ""
        billingAddress
        ShippingAddress
        description = "your total is $20"
        Amount={20}
        token = {onToken}
        stripeKey={KEY}
      <button 
      style={{
        border:"none",
        width:"120",
        borderRadius: 5,
        padding: "20px",
        backgroundColor: "black",
        color: "white",
        fontWeight: "600",
        cursor: "pointer"
      }}
      >
        pay now
      </button>
    </StripeCheckout>
    </div>
  )
}

export default pay
