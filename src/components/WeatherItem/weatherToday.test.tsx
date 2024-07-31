import { render, screen } from "@testing-library/react-native"
import { WeatherItem } from "@components/WeatherItem"
import dropIcon from "@assets/drop.svg"


describe("Component: Weather Item", () => {
  it("should be show title and value", () => {
    render(
      <WeatherItem
        icon={dropIcon}
        title= "Umidade do ar"
        value= "81%"
      />
    );
    const title = screen.getByText('Umidade do ar')
    const value = screen.getByText('81%')

    expect(title).toBeTruthy(); //Se uma validação falhar o teste irá falhar por inteiro
    expect(value).toBeTruthy(); // As duas verificações tem que passar
  })
})