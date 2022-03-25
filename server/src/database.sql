CREATE DATABASE weather_data

CREATE TABLE data_log(
    data_log_id SERIAL PRIMARY KEY,
    data_log_ts TIMESTAMP,
    data_ambient_temp DOUBLE PRECISION,
    data_track_temp DOUBLE PRECISION,
    data_humidity DOUBLE PRECISION,
    data_precipitation DOUBLE PRECISION,
    data_wind_speed DOUBLE PRECISION,
    data_wind_direction DOUBLE PRECISION,
);