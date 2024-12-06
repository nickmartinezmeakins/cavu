export interface Departure {
  flightDirection: string
  scheduledDepartureDateTime: string
  scheduledArrivalDateTime: string
  estimatedDepartureDateTime: string
  actualDepartureDateTime: string | null
  arrivalAirport: {
    name: string
    cityName: string
    countryName: string
    code: string
  }
  departureAirport: {
    name: string
    cityName: string
    countryName: string
    code: string
  }
  flightNumber: string
  airline: {
    name: string
    code: string
  }
  departureGate: {
    name: string
    number: string
    action: string
  }
  arrivalTerminal: string | null
  departureTerminal: string | null
  status: string
}

export interface Flights {
  allDepartures: Departure[]
}
