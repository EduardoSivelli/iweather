import { render, screen, fireEvent, waitFor } from "@testing-library/react-native"
import { Search } from "@screens/Search"
import { api } from "@services/api"
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse"

describe("Screen: Search", () => {
  it("should be show city option.", async() => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockCityAPIResponse})
    render(<Search />)

    const searchInput = screen.getByTestId("search-input")
    fireEvent.changeText(searchInput, "São Paulo");

    const option = await waitFor(() => screen.findByText(/são paulo/i))
    expect(option).toBeTruthy()
  })
})