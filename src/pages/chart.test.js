import { render, screen } from "@testing-library/react"
import ChartComponent from "./chart"



test('On initial render, filter date default value is set', ()=>{

  
    render(<ChartComponent />)

    screen.debug()
})