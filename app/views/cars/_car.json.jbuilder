json.extract! car, :id, :make, :model, :year, :vin_number, :mileage, :created_at, :updated_at
json.url car_url(car, format: :json)
