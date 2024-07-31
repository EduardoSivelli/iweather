import { fireEvent, render, screen } from "@testing-library/react-native"
import { SelectList} from "@components/SelectList"

describe("Component: SelectList", () => {
  it("should be return city details selected", () =>{
    const data = [
      {id: '1', name: 'Rio de Janeiro', latitude: 123, longitude: 456},
      {id: '2', name: 'Porto Alegre', latitude: 789, longitude: 987}
    ]

    const onPress = jest.fn(); //Mock
    render(
      <SelectList 
        data={data}
        onChange={() => {}}
        onPress={onPress}
      />
    );

    const selectedCity = screen.getByText(/rio/i) // As barras permitem que ele ache a palavra Rio antes e depois, com continuação, e o "i" ignora o case sensitive
    fireEvent.press(selectedCity) //Linha onde ocorre o toque/ a seleção da cidade./ Foi chamada 1x

    expect(onPress).toBeCalledTimes(1);
    expect(onPress).toBeCalledWith(data[1]) //1 de index, sendo assim, Porto Alegre
  })

  it("not should be show options when data props is empty", () => {
    render(
      <SelectList 
      data={[]}
      onChange={() => {}}
      onPress={() => {}}
      />
    );

    const options = screen.getByTestId('options')
    expect(options.children).toHaveLength(0)
  })
})