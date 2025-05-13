// import React from 'react';
// import usePagination from '../hooks/usePagination';

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// // 模拟数据
// const mockUsers: User[] = Array.from({ length: 100 }, (_, index) => ({
//   id: index + 1,
//   name: `User ${index + 1}`,
//   email: `user${index + 1}@example.com`
// }));

// const PaginationDemo: React.FC = () => {
//   const {
//     pagination,
//     paginationState,
//     setPageSize,
//     nextPage,
//     prevPage,
//     hasNextPage,
//     hasPrevPage
//   } = usePagination({
//     initialPage: 1,
//     initialPageSize: 10,
//     total: mockUsers.length,
//     onChange: (pagination) => {
//       console.log('Pagination changed:', pagination);
//     }
//   });

  

//   // 获取当前页的数据
//   const currentPageData = mockUsers.slice(
//     (pagination.pageIndex - 1) * pagination.pageSize,
//     pagination.pageIndex * pagination.pageSize
//   );

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">用户列表</h2>
      
//       {/* 数据表格 */}
//       <div className="mb-4">
//         <table className="min-w-full border">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border p-2">ID</th>
//               <th className="border p-2">姓名</th>
//               <th className="border p-2">邮箱</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentPageData.map((user) => (
//               <tr key={user.id}>
//                 <td className="border p-2">{user.id}</td>
//                 <td className="border p-2">{user.name}</td>
//                 <td className="border p-2">{user.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* 分页控制 */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <span>每页显示：</span>
//           <select
//             value={pagination.pageSize}
//             onChange={(e) => setPageSize(Number(e.target.value))}
//             className="border p-1"
//           >
//             <option value={5}>5</option>
//             <option value={10}>10</option>
//             <option value={20}>20</option>
//             <option value={50}>50</option>
//           </select>
//         </div>

//         <div className="flex items-center gap-2">
//           <button
//             onClick={prevPage}
//             disabled={!hasPrevPage}
//             className="px-3 py-1 border rounded disabled:opacity-50"
//           >
//             上一页
//           </button>
//           <span>
//             第 {pagination.pageIndex} 页 / 共 {paginationState.pages} 页
//           </span>
//           <button
//             onClick={nextPage}
//             disabled={!hasNextPage}
//             className="px-3 py-1 border rounded disabled:opacity-50"
//           >
//             下一页
//           </button>
//         </div>

//         <div>
//           总记录数：{paginationState.total}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaginationDemo; 