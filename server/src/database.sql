CREATE DATABASE weather_data

CREATE TABLE data_log(
    data_log_id SERIAL PRIMARY KEY,
    data_log_session_id INTEGER,
    data_log_ts TIMESTAMPTZ DEFAULT NOW(),
    data_info JSON
);