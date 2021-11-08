-- 1
select users.id, users.name, tickets.seat_number 
from tickets 
inner join users on tickets.user = users.id 
WHERE tickets.train = 11 
ORDER BY tickets.seat_number;

-- 2
select users.id, users.name, count(*) as trains_count, sum(trains.distance)/10 as total_distance 
from tickets 
inner join users on tickets.user = users.id 
inner join trains on tickets.train = trains.id 
group by users.id order by total_distance desc limit 6;

-- 3
select trains.id, types.name as type, sour_station.name as src_stn, dest_station.name as dst_stn, Timediff(trains.arrival, trains.departure) as travel_time 
from trains 
inner join types on trains.type = types.id 
inner join stations as sour_station on trains.source = sour_station.id 
inner join stations as dest_station on trains.destination = dest_station.id 
order by travel_time desc limit 6;

-- 4
select types.name as type, sour_station.name as src_stn, dest_station.name as dst_stn, trains.departure, trains.arrival, round((distance/10)*(types.fare_rate/100),-2) as fare 
from trains 
inner join types on trains.type = types.id 
inner join stations as sour_station on trains.source = sour_station.id 
inner join stations as dest_station on trains.destination = dest_station.id 
order by departure asc;

-- 5
select trains.id, types.name as type, sour_station.name as src_stn, dest_station.name as dst_stn, count(*) as occupied, types.max_seats as maximum 
from tickets 
inner join trains on tickets.train = trains.id 
inner join types on trains.type = types.id 
inner join stations as sour_station on trains.source = sour_station.id 
inner join stations as dest_station on trains.destination = dest_station.id 
group by trains.id order by trains.id asc;