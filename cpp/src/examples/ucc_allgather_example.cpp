/*
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/**
 * run the example as follows:
 *  mpirun -n 4 bin/ucc_example
 */

#include <mpi.h>
#include <ucc/api/ucc.h>

#include <cstdio>
#include <cstdlib>
#include <cylon/ctx/cylon_context.hpp>
#include <cylon/net/ucx/ucx_communicator.hpp>
#include <cylon/table.hpp>
#include <iostream>

int main(int argc, char **argv) {
  auto ucx_config = std::make_shared<cylon::net::UCXConfig>();
  auto ctx = cylon::CylonContext::InitDistributed(ucx_config);
  // std::cout<< ctx->GetRank()<<std::endl;
  std::shared_ptr<cylon::Table> table; 
  std::vector<std::shared_ptr<cylon::Table>> out;
  auto read_options = cylon::io::config::CSVReadOptions()
                          .UseThreads(false)
                          .BlockSize(1 << 30)
                          .WithDelimiter('\t');

  auto status = cylon::FromCSV(ctx,
                               "/home/ky/cylon/data/input/csv1_" +
                                   std::to_string(ctx->GetRank()) + ".csv",
                               table, read_options);

  // table->Print();

  ctx->GetCommunicator()->AllGather(table, &out);

  if(ctx->GetRank() == 0) {
    for(auto out_table : out) {
      std::cout<<"??"<<std::endl;
      out_table->Print();
      // std::cout<<out_table->get_table()->num_rows()<<std::endl;
    }
  }
}
