"""rpi stats"""

import psutil
import platform


def bytes_to_gb(bytes):
    return round(bytes / 1024 / 1024 / 1024, 2)


def get_stats():
    # Get disk usage statistics
    disk_usage = psutil.disk_usage("/")
    # Get virtual memory statistics
    memory_info = psutil.virtual_memory()


    output = {
        "Disk Usage": {
            "total": bytes_to_gb(disk_usage.total),
            "free": bytes_to_gb(disk_usage.free),
            "percent": round(disk_usage.percent),
        },
        "Memory Usage": {
            "total": bytes_to_gb(memory_info.total),
            "available": bytes_to_gb(memory_info.available),
            "percent": round(memory_info.percent),
            "used": bytes_to_gb(memory_info.used),
            "free": bytes_to_gb(memory_info.free),
        },
    }

    # if platform.system() == "Linux":
    #     # Get cpu temperature, availabe on Linux only
    #     temperature = psutil.sensors_temperatures()
    #     fans = psutil.sensors_fans()
    #     output["Temperature"] = temperature
    #     output["Fans"] = fans

    return output
