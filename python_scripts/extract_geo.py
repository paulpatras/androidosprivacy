import json


def parse_single_vendor(lines):
    geo_list = []
    for line in lines:
        items = line.split(",")
        ip = items[0]
        domain = items[1]
        lat = items[-2]
        lon = items[-1]
        geo_conn = [ip, domain, float(lat), float(lon)]
        geo_list.append(geo_conn)
    return geo_list


def parse_vendor_conns(filename):
    vendor_names = ["Xiaomi", "Huawei", "Realme", "Samsung"]
    geo_info = {
        "Huawei": None,
        "Xiaomi": None,
        "Realme": None,
        "Samsung": None
    }

    with open(filename, 'r') as f:
        vendor_lines = []
        vendor_name = None
        for l in f.readlines():
            if len(l) > 1:
                l = l.strip()
            if l[:-1] in vendor_names:
                print(l[:-1])
                vendor_name = l[:-1]
            elif l == "\n" or l == "done":
                print(len(vendor_lines))
                geo_info[vendor_name] = parse_single_vendor(vendor_lines)
                vendor_lines = []
            else:
                vendor_lines.append(l)

    with open("geo_conns.json", 'w') as f:
        json.dump(geo_info, f)


def add_conn_in_combined_list(l, conn):
    if len(l) == 0:
        l.append(conn)
    else:
        same_loc = False
        index = 0
        for i, item in enumerate(l):
            if item[2] == conn[2] and item[3] == conn[3]:
                same_loc = True
                index = i
                break
        if same_loc:
            l[index][1] = l[index][1] + "," + conn[1]
        else:
            l.append(conn)

def conbime_domain_by_geo(json_filename):
    with open(json_filename, 'r') as f:
        vendor_dict = json.load(f)
    combined_vendor_dict = {}
    for vendor, conn_list in vendor_dict.items():
        combined_list = []
        for conn in conn_list:
            add_conn_in_combined_list(combined_list, conn)

        combined_vendor_dict[vendor] = combined_list
    with open("combined_geo_conns.json", 'w') as f:
        json.dump(combined_vendor_dict, f)




if __name__ == "__main__":
    # parse_vendor_conns("./conns")
    conbime_domain_by_geo("./geo_conns.json")



