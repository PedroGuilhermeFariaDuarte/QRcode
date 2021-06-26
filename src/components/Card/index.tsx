import React, { createRef, useRef } from 'react'
import QRcode from 'qrcode.react'
import { useReactToPrint } from 'react-to-print'

// Icons
import { ImQrcode } from 'react-icons/im'

// Types
import { ICard } from './types'

// Styles
import { Container, CardContent, CardFooter } from './styles'

const Card: React.FC<ICard> = () => {
  const componentRef = createRef()
  const handlerToPrintComponent = useReactToPrint({
    // @ts-ignore
    content: () => componentRef?.current,
    onPrintError: (error) => console.log('HandlerToPrintComponentError', error),
    pageStyle: `
      @media print {

        body {          
          background: black !important;
          -webkit-background-clip: black !important;
          -webkit-text-fill-color: black !important;
          color: black !important;
        }

        div {
          backdrop-filter: none !important;
          border: 2px solid rgba(122, 76, 229);
        }
        
        
    `
  })

  return (
    // @ts-ignore
    <Container ref={componentRef} id='card'>
      <CardContent>
        <hgroup>
          <h1>ONEDEV</h1>
          <h4>your QR Code was generated with success</h4>
        </hgroup>
        <QRcode value='https://www.youtube.com/channel/UCKFtKeO2FN5QMwAPlseoABQ' renderAs='svg' size={90} />
      </CardContent>
      <CardFooter>
        <button
          onClick={handlerToPrintComponent}
        >
          <ImQrcode />
          Print QR Code
        </button>
      </CardFooter>
    </Container>
  )
}

export default Card
