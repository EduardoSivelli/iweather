import { api } from "./api"
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse"
import { getCityByNameService } from "./getCityByNameService"

describe("API: getCityByNameService", () => {
it("should return city info", async () =>{

  jest.spyOn(api, 'get').mockRejectedValue({ data: mockCityAPIResponse })
  const response = await getCityByNameService("São Paulo")

  expect(response.length).toBeGreaterThan(0);
})
})